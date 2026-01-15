---
published: true
---

## OVERVIEW
### Summary
!!! sam
    This RAG implementation comprises a self-contained FastAPI-based pipeline (`llm_code`) that is deployable in 2 modes: 

    - entirely local (for personal use with local models) 

    - cloud-based (for company use with AWS services)

    **System flow**: 

    - **Indexing Pipeline**: Source ⟶ Load ⟶ Chunk ⟶ Embed ⟶ Store

    - **Generation (RAG) Pipeline**: Retrieve ⟶ Augment ⟶ Generate ⟶ Respond

    **Next steps**: focus on scaling & hardening

    - moving to persistent storage

    - improving the orchestrator

    - tightening security (IAM and data access)

    - generally evolving towards a production-grade reference architecture (adding features like auto-scaling, API Gateway, etc)



### Core Project Components

2 Docker contains (& corresponding ECS services)

- **`llm_code`**: back-end, core codebase

- **`llm_code_ui`**: front-end web app

<div class="hb-row" markdown="block">
  <div class="hb-col" markdown="block">
**`llm_code`** (back-end)

- packaged as a Docker container 

    - can run locally

    - can run on ECS

- contains

    - FastAPI application

    - RAG pipeline logic (ingestion embedding, vector store, LangChain/LangGraph integration, etc.)

- roles

    - hosts API endpoints (eg `/chat/stream`)

    - orchestrates calls to models

    - implements RAG flow
  </div>
  <div class="hb-col" markdown="block">
**`llm_code_ui`** (front-end)

- Next.js application (React-based)

- Interactions with backend

    - `/chat/stream` API

    - `/history` API (past conversations)

- AWS

    - Same ALB, different path (`/app`)

    - Cognito protection
  </div>
</div>


---

!!! sam
    **LangChain / LangGraph**

    - ***LangChain***: the framework powering the RAG orchestration

        - **building blocks** (docs, text splitters, embeddings integration, chain/agent abstractions)

        - **integration code** (eg for FAISS vector store, chat history, and agent tooling

    - ***LangGraph***: a specific LangChain feature that allows defining agents/chains and running them in a server.

    Essentially, LangChain provides the building blocks that `llm_code` utilizes to implement RAG.


!!! sam
    **Amazon Bedrock** - a fully managed service for foundation models (in this case, embedding/generation models).

    The ECS task calls Bedrock’s endpoints, which are abstracted through AWS’s SDK. 

    Implications:

    - **AWS** handles the scaling & optimization of the models

    - **RAG system** requests what it needs

        - **`smoke-web-task-role`**: IAM role attached to the ECS task



### Kimothi RAG Stages


| Pipeline | **RAG Stage** | **Personal (Local Docker)**                           | **Company (AWS ECS)**                                                      |
| -------- | ------------- | ----------------------------------------------------- | -------------------------------------------------------------------------- |
| I        | **Source**    | Local files (personal notes in folder)                | Company documents (e.g. SharePoint files, DB data)                         |
| I        | **Load**      | File loader (reads local Markdown, PDFs, etc.)        | Data connectors (planned for SharePoint/pgAdmin; currently manual loading) |
| I        | **Chunk**     | Text splitter (LangChain – e.g. 500 token chunks)     | Same                                                                       |
| I        | **Embed**     | Local embed model (open-source via Ollama or similar) | Bedrock Titan Embeddings (1024-dim via AWS API)                            |
| I        | **Store**     | FAISS in-memory index (on disk in Docker volume)      | FAISS index in container storage (ephemeral on ECS)                        |
| G        | **Retrieve**  | Similarity search (FAISS via LangChain retriever)     | Similarity search (FAISS via LangChain retriever/tool)                     |
| G        | **Augment**   | Prompt assembly (insert top-k chunks into prompt)     | Prompt assembly + session history (includes DynamoDB chat history)         |
| G        | **Generate**  | Local LLM (Ollama-serving model, e.g. Llama2)         | Amazon Bedrock LLM (Nova model via API)                                    |
|          | **Respond**   | FastAPI returns answer (streamed tokens locally)      | FastAPI returns answer via ALB (HTTPS + Cognito auth)                      |
Each stage details

- the general function

- how it’s implemented locally (Docker environment)

- how it’s implemented in AWS (ECS/Bedrock environment)

- mapping to architecture components (using NVIDIA AI blueprint terminology)

- next steps


## INDEXING PIPELINE
### Source

This is the source info / raw content.

- **purpose**: feed the RAG pipeline that the assistant will draw from

<div class="hb-row" markdown="block">
  <div class="hb-col" markdown="block">
***Local/Docker***

- **corpus**: local files

- **network**: offline
  </div>
  <div class="hb-col" markdown="block">
***AWS/ECS***

- **corpus**: company content repositories (e.g. SharePoint, an RDS/pgAdmin database, etc.)

- **network**: live, ECS needs access
  </div>
</div>


**Next Steps or Gaps:** 

- **API** or **scheduled jobs**: formalize & automate

- **incremental updates**: establish a process

- **security**



### Load
Source ⟶ *Load* ⟶ Chunk ⟶ Embed

1. *Connect* to source

2. *Extract* & parse

3. *Metadata* review

4. *Transform* and clean, prep as in-memory `Document` objects

`Document` objects

- a LangChain abstraction

- contain text & metadata

<div class="hb-row" markdown="block">
  <div class="hb-col" markdown="block">
***Local/Docker***

- **Input**: local files in `llm_code`

- **Output**: list of `Document` objects

**How**: LangChain's file loader utilities (eg PDF loader, Markdown loader)

**Trigger**: execute the `rag.cli index` command
  </div>
  <div class="hb-col" markdown="block">
***AWS/ECS***

- **Input**: local OR SharePoint files

- **Output**: list of `Document` objects

**How**: AWS AppFlow

**Trigger**: execute the `rag.cli index` command
  </div>
</div>


**Improvements:** 

- move from manual ⟶ automated or event-driven

- support more doc types

- error handling & logging

- separate the loading/indexing into a distinct process/service (so it doesn’t block the API during large ingests)


### Chunk

==make sure chunks from one doc don't leak into other docs==

<div class="hb-row" markdown="block">
  <div class="hb-col" markdown="block">
***Local/Docker*** 

- **utility**: LangChain's `RecursiveCharacterTextSplitter`

- **process**: each doc ⟶ chunks + overlap ⟶ `Document` objects

- **defined in**: `rag.yaml`
  </div>
  <div class="hb-col" markdown="block">
***AWS/ECS***

- **utility**: same

- **process**: same

- **defined in**: ECS env variables
  </div>
</div>


**Improvements:** 

- fixed size chunks ⟶ semantic, using adaptive chunking

    - document type specific

        - markdown: splitting on h tags

        - ppt: splitting on slides

- tune chunk size (larger = more context)

- tag chunks with metadata (doc title, section headers, etc.)

### Embed

**Concept**: Embed converts each text chunk into a fixed-length vector so similarity search can retrieve relevant chunks later.

2: Shared implementation

- **Chunk-to-vector step**: Each chunk is sent to an embedding model and returns one vector per chunk.

- **Fixed dimension contract**: The vector length must match the vector index/store dimension (mismatch breaks indexing).

- **Bulk embedding during indexing**: Embeddings are generated in batches when you run the indexing pipeline.

- **Model choice drives tradeoffs**: Latency, cost, and quality depend on which embedding model is selected.

***Local/Docker***

- **Local model option**: Can embed via Ollama (e.g., `OllamaEmbeddings`) without calling AWS.

- **Offline-friendly path**: Can run purely local embeddings when AWS credentials are absent.

- **Model variability**: Earlier local flow used 768-d embeddings; later aligned to 1024-d for Titan compatibility.

- **Credentials-dependent fallback**: If AWS credentials exist locally, local mode can still call Bedrock for embeddings.

***AWS/ECS***

- **Managed embedding service**: Uses Amazon Bedrock Titan Text Embeddings (`amazon.titan-embed-text-v2`).

- **1024-d output**: Titan produces 1024-dimensional vectors; index rebuilt to match this.

- **IAM-gated access**: ECS task role must allow invoking the Bedrock embedding model.

- **No local model hosting**: Container offloads embedding compute to Bedrock (no GPU/model runtime needed in-task).

***Improvements***

- **Model abstraction switch**: Standardize a single “EmbeddingProvider” interface with explicit dimension metadata.

- **Dimension guardrails**: Validate model dimension vs index dimension before any embed/store call; fail fast with clear error.

- **Batch + observability**: Add batching controls, retry/backoff, and per-batch logging/metrics for embed throughput/errors.



### Store

Store (**vector store** or index)

- all the embeddings (vectors)

- references back to the original text chunks

**Purpose**: enables similarity search

<div class="hb-row" markdown="block">
  <div class="hb-col" markdown="block">
***Local/Docker*** 

it’s an embedded library (FAISS) storing data on a Docker volume.

*vector DB*

- **lives in**: container

- **powered by**: FAISS

Process

1. index is built

2. chunk embeddings ⟶ FAISS index

3. index saved to disk (files in `faiss_index/`)

    - `index.faiss` can be loaded on startup (persists between runs)
  </div>
  <div class="hb-col" markdown="block">
***AWS/ECS*** 

- will be AWS OpenSearch
  </div>
</div>


**Improvements:** 

- **move to scalable vector store**: Amazon OpenSearch (with the vector DB capability)

    - would allow multiple replicas of the service to share a single index

    - would persist data beyond the life of a single container

    - would enable larger indexes

    - would remove the need for manual re-indexing on each deployment

- add index maintenance tools (eg handling delete/update of docs, re-embedding stale content)

- add automated backups (eg save FAISS index file to S3 as a backup)

## GENERATION PIPELINE
### Retrieve

**Concept**: Retrieve embeds the user query, searches the vector index, and returns the top-k relevant text chunks.

**Shared implementation**

- **Vector search core:** LangChain retriever performs similarity search over an in-memory FAISS index.

- **Query embedding step:** The incoming user query is embedded, then used as the search vector.

- **Top-k outputs:** Returns configurable top-k `Document` chunks (e.g., k=3 or 5) for downstream augment.

- **App-integrated call:** Retrieval runs inside the FastAPI request path; optionally exposed as `search_docs` tool.

<div class="hb-row" markdown="block">
  <div class="hb-col" markdown="block">
***Local/Docker***

- **Embed provider switch:** Query embeddings come from a local embedding model (or Bedrock if configured locally).

- **Tool binding gotcha:** Agent retrieval depends on binding `search_docs` to the Ollama LLM instance.

- **Lowest latency path:** No external network call required when using local embeddings + local FAISS.

- **Dev-mode ergonomics:** Retrieval behavior is easier to iterate on (prompt/tool wiring) without AWS deploy cycles.

- **Local resource ceiling:** Retrieval performance depends on local RAM/CPU; index must fit comfortably.
  </div>
  <div class="hb-col" markdown="block">
***AWS/ECS***

- **Bedrock dependency:** Query embeddings are obtained via Bedrock Titan before FAISS similarity search.

- **Endpoint entrypoint:** Retrieval triggers when `/chat/stream` receives the user message on ECS.

- **Container memory index:** FAISS index must be present and loaded in the running task/container memory.

- **IAM/network requirements:** ECS task needs valid Bedrock access (credentials, networking) to embed queries.

- **Prod-like tool use:** Agent can call the same `search_docs` tool, now backed by Bedrock embeddings.
  </div>
</div>


**Improvements**

- **Externalize vector store:** Move from in-container FAISS to OpenSearch (or similar) for scale and durability.

- **Hybrid retrieval:** Add keyword/BM25 + vector search, then merge results for better recall.

- **Re-ranking layer:** Add a cross-encoder or LLM-based reranker on top-k to improve precision.

- **Adaptive k + filters:** Tune k per query; add metadata filters (source/date) to reduce irrelevant chunks.

- **Retrieval observability:** Log retrieved doc IDs/scores per request; add metrics to monitor relevance drift.




### Augment

[04 GENERATING -](https://sammusch.github.io/ds-garden/LLM-RAG/04-GENERATING/#2-augmentation)
Apply **prompt engineering**. Goal is to best augment the LLM with the **Q** & **retrieved info**.
Augmentation provides grounding for the LLM, reducing hallucinations by giving it real data to work from.

Shared implementation

- _Orchestration Layer:_ Prompt construction is handled by *middleware* (e.g., LangChain or LangGraph).

- _Context Length Control:_ Uses config (e.g., `max_context_chars`) to stay within LLM token limits.

- _Configurable Behaviors:_ Features like `hallucination_guard` can alter prompt logic.


<div class="hb-row" markdown="block">
  <div class="hb-col" markdown="block">
***Local/Docker***

- _Ephemeral Memory:_ Chat history is in-memory only
    
- _Single-User Mode:_ No session IDs or multi-user separation.
    
- _Simple Orchestration:_ Runs via local LangChain or LangGraph; linear flow.
    
- _Direct Prompt Assembly:_ Uses functions like `_format_context` to join chunks with newlines and inject into template.
    
- _Dev-Focused:_ Easy to tweak; best suited for local development or testing.
  </div>
  <div class="hb-col" markdown="block">
***AWS/ECS***

- _Persistent Memory:_ Chat history stored in DynamoDB per `session_id`. (*state persistence*)
    
- _Multi-User Support:_ Session IDs allow simultaneous users and conversation continuity.
    
- _Agent-Based Orchestration:_ Uses LangGraph agent to assemble prompt via `{"messages": ...}`.
    
- _Tool Message Integration:_ Can include tool results as structured messages in the flow.
    
- _Production-Grade:_ Deployed via ECS; optimized for scalability, observability, and reliability.
  </div>
</div>


**Improvements:** 

- **refine prompt construction**: instead of just dumping retrieved text chunks into the prompt, reformat and cite sources.

- **avoid context becoming too large**: implement a strategy for summarizing or windowing the history

- **enable a _hallucination guard_ feature**: use the config flag `hallucination_guard` to trigger the LLM to refuse answering if the context is inadequate

- **rate context relevance**: use a secondary check or the LLM itself

- handle augmentation for multiple types of context (especially PPTs)


### Generate

**Concept**: LLM generates the final answer from the augmented prompt and retrieved context.

Shared implementation

- **Prompt assembly**: User query and retrieved chunks combined before model call.

- **Streaming output**: Tokens streamed incrementally to the client.

- **Orchestrator call**: LangChain/LangGraph triggers model invocation.

- **Stateless execution**: One model call per user request.

<div class="hb-row" markdown="block">
  <div class="hb-col" markdown="block">
***Local/Docker***

- **LLM runtime**: Ollama runs models locally on CPU/GPU.

- **Model selection**: Open-source models pulled and stored on disk.

- **Configuration**: Docker Compose environment variables set provider/model.

- **Inference cost**: No per-call fees; limited by local hardware.

- **Tool invocation**: Optional local agent can call tools mid-generation.
  </div>
  <div class="hb-col" markdown="block">
***AWS/ECS***

- **LLM runtime**: Managed inference via Amazon Bedrock.

- **Model choice**: Nova/Titan-class models without local artifacts.

- **Authorization**: ECS task IAM role allows `InvokeModel`.

- **Scalability**: Parallel requests handled by Bedrock backend.

- **Cost model**: Pay-per-token and request-based pricing.
  </div>
</div>


Improvements

- **Production orchestration**: Remove `langgraph dev`; embed chains in app runtime.

- **Model right-sizing**: Evaluate smaller/cheaper models for common queries.

- **Guardrails**: Validate answers against retrieved context.

- **Observability**: Track latency, errors, and token usage.

- **Future option**: Consider GPU-hosted open-source models for cost control.



## Respond

**Concept** Deliver the LLM’s output to the client as an HTTP response, usually streamed.

Shared implementation

- **FastAPI endpoint:** Same `/chat/stream` handler returns streamed tokens (SSE).

- **Streaming contract:** Same event format consumed by the UI/clients to render progressively.

- **Response shaping:** Same post-processing/formatting before emitting chunks (e.g., text vs JSON events).

- **Run telemetry hooks:** Same code path can emit logs/traces around request/response lifecycle (when enabled).

<div class="hb-row" markdown="block">
  <div class="hb-col" markdown="block">
***Local/Docker***

- **Direct access:** Client hits `http://localhost:8080/chat/stream` without a front-door proxy.

- **No TLS/auth:** Typically no HTTPS termination and no Cognito gate on routes.

- **Dev tooling:** Swagger UI at `/docs` commonly used to trigger and inspect streaming responses.

- **Local logging:** Output primarily to container stdout for rapid debugging.

- **Simpler failure modes:** Fewer network hops; issues are usually app-level, not infra-level.
  </div>
  <div class="hb-col" markdown="block">
***AWS/ECS***

- **ALB front door:** Requests enter via ALB, which forwards to ECS task on port 8080.

- **HTTPS termination:** TLS handled at ALB with ACM cert on the custom domain.

- **Auth enforcement:** Cognito protection on `/chat/*` (and related routes) before the backend runs.

- **Streaming through ALB:** SSE tokens traverse ALB to the browser UI (validated working).

- **Persistence + ops logs:** Conversation/history stored in DynamoDB; runtime logs to CloudWatch.
  </div>
</div>


**Improvements**

- **Horizontal scale:** Add ECS Service Auto Scaling + multiple tasks behind ALB.

- **Per-user authorization:** Add RBAC/ABAC beyond “authenticated” (document-level access control).

- **SSE resilience:** Add reconnect/heartbeat + idempotent resume semantics for dropped streams.

- **Observability:** CloudWatch dashboards/alarms for latency, stream error rate, task health.

- **Environment hygiene:** Separate dev/stage/prod stacks via IaC with pinned configs/domains.