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
_kMDItemDisplayNameWithExtensions: 02-RAG-System-Design.md
ai_abstract: null
ai_key_terms: []
aliases: null
children: 0
created: '2025-11-28'
cssclasses: null
grandchildren: 0
kMDItemContentCreationDate: 2025-10-07 22:23:24 +0000
kMDItemContentCreationDate_Ranking: 2025-10-07 00:00:00 +0000
kMDItemContentModificationDate: 2025-11-28 22:41:06 +0000
kMDItemContentType: net.daringfireball.markdown
kMDItemContentTypeTree: (
kMDItemDateAdded: 2025-10-07 22:23:24 +0000
kMDItemDocumentIdentifier: '222796'
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
kMDItemInterestingDate_Ranking: 2025-11-28 00:00:00 +0000
kMDItemLastUsedDate: 2025-08-09 21:06:48 +0000
kMDItemLastUsedDate_Ranking: 2025-08-09 00:00:00 +0000
kMDItemUseCount: '135'
kMDItemUsedDates: (
modified: '2025-11-28'
published: true
reading_time: 0.8
source_file: 02-RAG-System-Design.md
tags: null
title: 02 RAG System Design
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