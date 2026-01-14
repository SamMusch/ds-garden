---
CoverImage: null
Covers: null
Due: null
Function: null
HoursDone: null
HoursRemain: null
Objective: null
Quality: null
QualityComment: null
ReviewFreq: null
TimeSpent: null
TimeSpent2: null
_kMDItemDisplayNameWithExtensions: TEMP.md
ai_abstract: null
ai_key_terms: []
aliases: null
children: 0
created: '2026-01-14'
cssclasses: null
grandchildren: 0
kMDItemContentCreationDate: 2026-01-13 20:25:58 +0000
kMDItemContentCreationDate_Ranking: 2026-01-13 00:00:00 +0000
kMDItemContentModificationDate: 2026-01-14 15:05:57 +0000
kMDItemContentType: net.daringfireball.markdown
kMDItemContentTypeTree: (
kMDItemDateAdded: 2026-01-13 20:25:58 +0000
kMDItemDocumentIdentifier: '0'
kMDItemFSCreatorCode: ''
kMDItemFSFinderFlags: '0'
kMDItemFSHasCustomIcon: (null)
kMDItemFSInvisible: '0'
kMDItemFSIsExtensionHidden: '0'
kMDItemFSIsStationery: (null)
kMDItemFSLabel: '0'
kMDItemFSNodeCount: (null)
kMDItemFSOwnerGroupID: '20'
kMDItemFSOwnerUserID: '502'
kMDItemFSTypeCode: ''
kMDItemInterestingDate_Ranking: 2026-01-14 00:00:00 +0000
modified: '2026-01-14'
published: true
reading_time: 20.6
source_file: TEMP.md
tags: null
title: TEMP
word_count: 4117
---

## Summary
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


## Load
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

## Chunk

**steps**:

1. *Divide* long text ⟶ compact units

2. *Merge* units ⟶ larger chunks

3. *Overlap* chunks to maintain context continuity

**advantages | why *chunking* helps LLMs**:

- *Context window*: LLMs ignore content beyond token limit.

- *Lost-in-the-middle problem*: LLMs struggle with relevant info in middle of prompts.

- *Search*: LLMs struggle when searching over large text.

**methods**:

- *Fixed-size*: based on special characters (eg characters / tokens / sentences / paragraphs)

- *Specialized*: based on file structure (eg h tags / key-value pairs)

- *Semantic*: sentence groups are based on semantic similarity

---

==make sure chunks don't leak into other docs==

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

## Embed

**Process**: Container ⟶ calls Ollama/Bedrock API

- **input**: doc chunks

- **output**: embeddings (bulk-generated)

**Purpose**: Capture semantic meaning, system matches Q with relevant chunks

**architecture**: transformer NN

- embedding model

<div class="hb-row" markdown="block">
  <div class="hb-col" markdown="block">
***Local/Docker*** 

- **Provider**: Ollama (adjustable)

- **Model**: ==Ollama ...==

- **Output Vectors**: 1024 dimensions (adjustable)
  </div>
  <div class="hb-col" markdown="block">
***AWS/ECS***

- **Provider**: Bedrock

- **Model**: Titan Text (`amazon.titan-embed-text-v2`)

- **Output Vectors**: 1024 dimensions (adjustable)
  </div>
</div>


**Error handling**: embedding dimension match for **model** & **index**.

**Improvements:** 

- support others beyond Titan

- could use open-source embedding model hosted on an EC2 or SageMaker

- add monitoring

- if docs grow ⟶ use batch processing (AWS Batch)

- manual trigger ⟶ automate with a CI/CD-like pipeline

## Store

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

## Retrieve

**Process**: User asks Q ⟶ system generates an embedding for the query ⟶ search vector store

Function `search_docs`: any agent/chain can call to get relevant text.

The agent’s tool is invoked by binding the `search_docs` tool to the Ollama/Bedrock LLM instance.

If the assistant is running..

- **in RetrievalQA mode**: auto-retrieves context before each Q

- **in agent mode**: LLM can call the retrieval tool when needed

**Process** (after index built)

1. new user Q

2. FAISS/OpenSearch embeds Q

3. FAISS/OpenSearch performs similarity search

4. Return top _k_ results

***Local/Docker***

**Implementation**
FastAPI app

- LangChain’s retrieval API

    - FAISS

***AWS/ECS***
primary difference is that the embedding for the query is obtained via Bedrock

When a user query comes into the `/chat/stream` endpoint on ECS, the backend will take the user’s message, call the Bedrock Titan embedding model (through the same interface used during indexing) to get a query vector, and then search the FAISS index in-memory. The top _k_ relevant chunks are returned.

Retrieval can be invoked either automatically in the chain or via an agent tool.

The system defines a tool for doc search. Gives LLM agent ability to choose whether or not to **invoke a knowledge search**.

ECS-hosted service

1. ensures **Bedrock** is accessible (for the query embedding)

2. ensures **FAISS index** is present & loaded

3. performs ***semantic searches***

!!! sam
    **Orchestrator**: the FastAPI app

    - uses vector store (FAISS) to bridge the gap between the **vector DB** and the **LLM orchestrator**

    If we *were* to modularize:

    - OpenSearch handle the vector search


**Improvements:** 

- **scalability**: migrate from FAISS  to OpenSearch

- add a **hybrid retrieval** approach:

    - **to improve accuracy**: combine keyword search with vector search

    - **to improve result relevance**: use re-ranking algos

    - **to improve quality**: Tune _k_, add filtering by doc source & date

- add monitoring (eg log which docs were retrieved for each query)

- ensure agent reliably calls the `search_docs` tool when appropriate

## Augment

**Conceptual Function:** In the **Augment** stage, the system takes the retrieved information and the user’s question and **augments** the LLM’s input with this context. In other words, it constructs a prompt (or message history) that includes the relevant doc snippets so that the LLM can use them to generate an informed answer. This often involves a template where the retrieved texts are inserted (e.g., as a system message saying “Here are some relevant docs: …”) or appended to the user’s question. The augmentation provides grounding for the LLM, reducing hallucinations by giving it real data to work from.

***Local/Docker*** Locally, augmentation is handled by the `llm_code` orchestrator (which may be using LangChain or LangGraph to format prompts). The typical approach is: the retrieved chunks (their text content) are concatenated into a single string (with separators between chunks), and then combined with the user’s query to form the final prompt. For example, the system might use a prompt template like:

`System: "You are a precise assistant. Answer using only the provided context. If unsure, say you don't know." Context: <retrieved chunk 1>\n<retrieved chunk 2>\n... User: <user’s question> Assistant:`

The code indeed has a `_format_context` that joins doc texts with double newlines, and a `_build_prompt` that likely injects this formatted context into a system or user message. In local mode (especially if running via LangGraph’s dev server), the conversation might be handled as a sequence of messages including the context. **Conversation history:** In the purely local setup without external services, the chat history (previous Q&A pairs) would reside in memory (for example, LangChain’s memory object). It may not be persisted locally since no DB is used in offline mode. However, the system still augments each new query with relevant docs from the knowledge base as described. Essentially, the augment stage ensures that by the time we call the LLM, the prompt it sees contains both the user query and the helpful snippets from docs.

***AWS/ECS*** In AWS, the augmentation stage similarly builds the prompt with context, but there is an additional element: persistent **chat history**. The backend uses a DynamoDB-based chat message history to store conversation context (each message user or assistant is saved with a session ID). When a new query comes in, the system will retrieve the past few messages of that session from DynamoDB and reconstruct the conversation (this is done via a LangChain `DynamoDBChatMessageHistory` module in the code, which fetches messages by session ID). These past messages serve as context so the assistant has continuity across turns. Then, the system performs the vector retrieval for the new user query (as described in Retrieve stage) to get relevant doc chunks. Both the conversation history and the new retrieved chunks are combined in the prompt structure. In practice, the LangGraph/agent setup on AWS takes `{"messages": ...}` as input – those messages would include prior dialog plus an insertion of the retrieved content (often as system messages or as additional context in the latest user message). The augmented prompt is then sent to the LLM. The AWS augment stage must also deal with multi-user or multi-session scenarios (hence the use of session IDs and DynamoDB to segregate conversations). The presence of an orchestration framework (LangGraph’s agent) means the prompt assembly might be a bit abstracted – the agent could maintain a state that includes retrieved knowledge as separate “tool result” messages in the chain. Nonetheless, the end result is the same: the Bedrock model is prompted with the question plus relevant context snippets.

**Deployment Mapping:** Augmentation lies in the realm of the **“orchestration framework”** – essentially the brain that constructs the final query for the LLM. In NVIDIA’s blueprint terms, this is part of the **Application/Orchestrator** logic (often handled by the LangChain or similar middleware). It intersects with **Query Processing** and partially with the **LLM invocation**. In our implementation, augmentation is not a standalone service but a function of the FastAPI application (or LangGraph agent) that prepares the input for the LLM. One can think of it as the last step before handing off to the **LLM provider**. The use of DynamoDB for chat history introduces an **observability/ state persistence** aspect here – that is part of the “state management” in the orchestration layer (tracking user context across calls).

**Improvements:** A potential improvement in augmentation is refining how the prompt is constructed. For example, the current system likely just dumps the retrieved text chunks into the prompt. In the future, one might want to **cite sources or reformat** the context (e.g., “doc A says: ...; doc B says: ...”). Additionally, as the conversation history grows, the system should decide how much of it to include – implementing a strategy for summarizing or windowing the history would be useful (to avoid the context becoming too large for the model). The config already has a `max_context_chars` parameter, suggesting a guard to not overflow the context length. The team could also enable a _hallucination guard_ feature (the config flag `hallucination_guard` presumably could trigger the LLM to refuse answering if the context is inadequate – this could be more fully utilized). Another next step is ensuring that augmentation cannot introduce malicious or irrelevant info – i.e., if irrelevant chunks are retrieved, the system might consider filtering them (perhaps by a secondary check or using the LLM itself to rate context relevance). Finally, as more data sources are added, the augmentation might include multiple types of context (text from docs, possibly data retrieved from tools or APIs). Managing and merging these in the prompt will become a design consideration.

## Generate

**Conceptual Function:** The **Generate** stage is where the language model (LLM) takes the augmented prompt (which includes the user question and retrieved context) and produces an answer. Essentially, this is the core of the “Generation” in Retrieval-Augmented Generation – the model generates a response, presumably grounded in the provided docs. This stage is all about the **LLM provider and model** doing its work to create the assistant’s reply.

***Local/Docker*** In the local setup, the generation is handled by a local LLM running via **Ollama**. Ollama acts as a local model server – the `ChatOllama` integration in the code sends the prompt to an Ollama-hosted model (for example, a Llama-2 7B or similar model that has been downloaded). The model then generates a completion (the answer) and streams it back token by token. The local LLM is configured through environment variables (`LLM_PROVIDER=ollama` and a model name) in the Docker Compose. This means no internet or cloud service is needed for generation – it leverages the user’s machine resources. The local model might not be as powerful as cloud models, but is sufficient for personal use. During development, the system was tested with models like `llama2.1b` etc., and even integrated with LangChain’s LangGraph for local execution. The generation pipeline locally can be either a simple chain or an agent; initially, a LangChain/LangGraph agent was used with the Ollama model. After assembling the prompt, the local code calls the model and streams the result back through FastAPI. (The code shows usage of `ChatOllama(...).bind_tools(tools)` in an agent setup, which implies the local LLM could also invoke tools mid-generation – but if the context was already provided, typically it just answers.) The key is that the heavy lifting of NLP inference is done on the local CPU/GPU via Ollama.

***AWS/ECS*** In AWS, generation is performed by an **Amazon Bedrock-hosted model**. The chosen model is Amazon’s _Nova_ (a variant of the Titan LLM, analogous to a GPT-3.5-tier model). When the prompt (with context and history) is ready, the ECS container makes an API call to Bedrock to generate the completion. This call is likely done through the AWS SDK or LangChain’s Bedrock integration. The response is streamed back to our FastAPI server, which in turn streams it to the client. Streaming is confirmed to work: the system was able to output token-by-token responses through the API without issues. The ECS task’s IAM role authorizes it to invoke the Bedrock model endpoint. Because Bedrock handles the actual model inference, the ECS container doesn’t require special hardware – a standard CPU instance suffices, as Bedrock’s managed service (behind the scenes using GPU) generates the text. The result is that the company RAG system can leverage a powerful model (Nova) securely – the data and prompts are sent to Bedrock, which returns the generated answer. It’s worth noting that Bedrock usage means the model is always up-to-date (no need to manage model files or updates in the container), but it does introduce dependency on AWS and incurs per-request costs. Currently, the generation step on AWS is synchronous per request (one model call per query). The architecture is such that if multiple requests come in, multiple Bedrock calls will be made in parallel (within the limits of Bedrock’s throughput and the ECS container’s capacity to handle concurrent requests).

**Deployment Mapping:** Generation corresponds to the **LLM service** in a typical architecture. In the local case, the LLM service is an on-premise (on-device) component – essentially part of the orchestrator runtime (Ollama + model file). In the AWS case, the LLM service is external (Bedrock acts as the **managed LLM provider**). In blueprint terminology, this stage is part of the **“AI Model Inference”** layer. The orchestrator (our application) delegates this part to the model provider. We can also categorize this under **“Generation & Decoding”** in the pipeline. It’s tightly integrated with the orchestrator: e.g., the LangChain agent or chain triggers the model call. Notably, the team ensured that generation uses streaming, which improves UX and is handled via the FastAPI streaming response (this involves both the model service streaming and the API server streaming to the client).

**Improvements:** One important gap identified is that in the current deployment the team was using `langgraph dev` mode – a development server for LangChain – to run the chain/agent in memory. This is not ideal for production because it doesn’t persist state or scale well. A next step is to **move off “dev” mode to a persistent orchestrator**. That might mean running the chain purely in FastAPI code (without the dev server) or using LangChain’s production endpoints. Essentially, the generation orchestration should be made more robust by treating the chain/agent as part of the app logic rather than an in-memory ephemeral dev process. Another consideration is model choice: currently Nova (a 175B model) is used; the team might evaluate if a smaller or larger model is more appropriate, or if fine-tuning is needed for better accuracy on company data. They even mentioned possibly using an open-source model in AWS in future (the planning table shows “Same or Ollama model” as an option for LLM provider in Phase 2). That could reduce costs by hosting a model on an EC2 with GPU – but it introduces complexity. For now, Nova is a reasonable default. Further, the team might explore **multi-turn improvements** – e.g., ensuring the model’s tone and style are appropriate (which can be adjusted via the system prompt). Also, implementing guardrails at generation (like content filtering or checking the answer against the context to detect hallucinations) could be valuable for a production system. Finally, monitoring of the generation step (latency, errors, token usage) should be improved – currently they can see CloudWatch logs and possibly LangSmith traces if enabled, but a more comprehensive monitoring of model performance will help in optimizing this stage.

## Respond

**Conceptual Function:** The **Respond** stage delivers the generated answer back to the user or consuming application. This is where the system takes the output from the LLM and any additional formatting, then streams or sends it as an HTTP response (since this is an API). Essentially, it’s the interface between the back-end brain and the end-user client. In a chat system, this often involves streaming the answer in real-time so the user sees the answer appear gradually, much like ChatGPT.

***Local/Docker*** In the local environment, the response is handled by the FastAPI server running in the `llm_code` container. When a user (likely the developer, in this case) makes a request to the local API (e.g., `http://localhost:8080/chat/stream`), the backend goes through all previous stages (retrieve, augment, generate) and then uses **Server-Sent Events (SSE)** to stream the answer tokens back. The local setup doesn’t enforce authentication or HTTPS – it’s typically accessed via `localhost` or within a closed network. The response format is likely a streaming JSON or text event stream that the front-end (or CLI client) can consume to show the answer progressively. Since this is a developer environment, one might use the interactive docs (Swagger UI at `/docs`) or a simple web UI. In fact, earlier in development, a simple FastAPI+Jinja2 web UI was part of the project (called `ds-garden-live`) to test the chat in a browser. That has since been superseded by a dedicated front-end, but in local mode one could still hit the API directly. The local response stage also logs output to the console or logs, and if LangSmith tracing is enabled, it might send traces of the run for debugging (though this is more of an internal detail).

***AWS/ECS*** In production, the response stage is more elaborate to ensure security and accessibility. The FastAPI backend is running on ECS behind an **Application Load Balancer (ALB)**. The ALB is configured to terminate SSL (HTTPS) and is attached to a custom domain (e.g., `chat.company-domain.com`) with an ACM certificate. Furthermore, the ALB is set up with Amazon Cognito for authentication on the protected routes – specifically, the `/chat/*` (and also `/api/*` and the front-end `/app` routes) require an authenticated user session via Cognito. This means that when a user (employee) accesses the chat UI or API, they are first redirected to Cognito login (if not already logged in), and only then allowed to invoke the API. Once the FastAPI service receives the request (now over HTTPS and with a valid JSON web token from Cognito), it processes the query and streams the response back through the ALB. The ALB supports stream forwarding, so the client (for example the Next.js front-end) receives a streamed response. This was tested and found to work correctly – the ALB was observed forwarding the token-by-token events without issues. The ECS service is configured to listen on port 8080, and the ALB’s target group directs traffic to that port. For each response, the system also records the interaction: the question and answer get logged (the question/answer pairs are stored in DynamoDB for history, and logs are sent to CloudWatch). The front-end `llm_code_ui` (if in use) calls the `/chat/stream` API and renders the streaming answer to the user in the browser. In summary, in AWS the respond stage is production-grade: secure, authenticated, and integrated with a web client.

**Deployment Mapping:** This corresponds to the **API Layer / User Interface** in the blueprint. The FastAPI application itself is the **API backend service**. The ALB+HTTPS+Cognito setup represents the **Networking and Security** front door (similar to an API Gateway role in a larger architecture, albeit here using ALB). In NVIDIA’s terms, the respond stage encompasses **Networking (ALB)**, **Security (Cognito IAM roles, OIDC)**, and part of **UX (the interface through which the answer is delivered)**. Observability wise, this stage ties into **Monitoring**: CloudWatch is capturing logs of requests and responses (and any errors). Right now, the API backend is a single ECS service (monolith containing all logic). In a more modular architecture, one could separate the UI, the API gateway, etc., but currently they are logically grouped: the ALB routes both the UI and API traffic appropriately.

**Improvements:** For the response stage in production, **scalability** is a primary consideration. Currently, there is one ECS task serving all requests (as noted, the system was verified with 1 running task). To handle more load or provide high availability, enabling ECS Service Auto Scaling is on the to-do list. This would allow multiple tasks behind the ALB, requiring the vector store to be shared (hence the need for a centralized vector DB as discussed). Another gap might be the lack of user-specific authorization logic – while Cognito ensures only authenticated users access the system, there might be a need to restrict data by user or role in the future (for example, if the assistant should only expose certain docs to certain departments). Currently, all authenticated users presumably have the same access. Additionally, setting up more comprehensive **monitoring and logging** is a next step: integrating CloudWatch Dashboards or using a tool like LangSmith (if network egress is allowed) to track conversation lengths, failures, latency, etc. On the UX side, building out the front-end with features like chat history view (persisting via the history API already built), file upload (the `/api/files` endpoint exists for uploading docs to index), and perhaps feedback buttons would improve the user experience. They have a basic Next.js UI now, but it could be extended. Also, the team mentioned possibly integrating with Slack/Teams or creating a ChatGPT plugin – those would be new “response channels” utilizing the same backend. Doing so would involve developing new front-end integrations but reusing the respond stage’s output formatting. Lastly, **dev/prod environment separation** should be improved: right now, they have one environment; introducing separate stacks (with maybe a staging deployment) and using infrastructure-as-code to manage configurations (like domain, ALB, Cognito) would be wise as the project moves from pilot to production.

---

## Core Project Components

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