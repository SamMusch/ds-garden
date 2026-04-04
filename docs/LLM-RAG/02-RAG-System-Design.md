---
Function: null
Objective: null
Quality: null
QualityComment: null
ReviewFreq: null
ai_abstract: null
ai_key_terms: []
children: 0
grandchildren: 0
kMDItemContentCreationDate: 2025-10-07 22:23:24 +0000
kMDItemContentModificationDate: 2026-04-04 18:16:23 +0000
kMDItemDateAdded: 2025-10-07 22:23:24 +0000
kMDItemFSFinderFlags: '0'
published: true
reading_time: 0.8
source_file: 02-RAG-System-Design.md
tags: null
word_count: 150
---

!!! sam
    **RAG system analogy**

    - **Pipelines** (*assembly line*)

    - [[#2. System-level components]] (*quality inspector*)

    - [[#3. RAGOps / Layers]] (*electricity in factory*)


### 2. System-level components
!!! sam

    - *Caching*: Query asked ⟶ LLM responds ⟶ LLM stores in semantic cache. In the future, a similar query ⟶ cached response.

    - *Guardrails*: Compliance with policies and regulations

    - *Security*: protect against prompt injection, data poisoning, etc


### 3. RAGOps / Layers
See [[LLM-RAG/07-RAG-Ops|07-RAG-Ops]]
!!! sam
    **Foundation layers**

    - *Data* ⟶ Process & store data as embeddings

    - *Model* ⟶ Provider LLMs (base, hosted, fine-tuned)

    **Intelligence layers**

    - *Prompt* ⟶ Improve prompts (templates, context injection)

    - *App orchestration* ⟶ Connect components together (retrievers, agents, routing)

    **Runtime layers**

    - *Deployment* ⟶ Cloud providers for deploying apps (CI/CD, infra-as-code)

    - *Application* ⟶ Hosting services for apps (APIs, edge/CDN, web hosting)

    - *Evaluation* ⟶ Provide evaluation metrics (offline tests, retrieval quality)

    - *Monitoring* ⟶ Monitor RAG apps (latency, drift, costs, alerts)


    **Other layers**: logging and tracing, model versioning, feedback