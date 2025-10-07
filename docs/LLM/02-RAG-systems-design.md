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
_kMDItemDisplayNameWithExtensions: 02-RAG-systems-design.md
ai_abstract: null
ai_key_terms: []
aliases: null
children: 0
created: '2025-10-04'
cssclasses: null
grandchildren: 0
kMDItemContentCreationDate: 2025-08-08 20:57:16 +0000
kMDItemContentCreationDate_Ranking: 2025-08-08 00:00:00 +0000
kMDItemContentModificationDate: 2025-10-04 15:51:54 +0000
kMDItemContentType: net.daringfireball.markdown
kMDItemContentTypeTree: (
kMDItemDateAdded: 2025-08-08 21:16:16 +0000
kMDItemDocumentIdentifier: '176546'
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
kMDItemInterestingDate_Ranking: 2025-08-09 00:00:00 +0000
kMDItemLastUsedDate: 2025-08-09 21:06:48 +0000
kMDItemLastUsedDate_Ranking: 2025-08-09 00:00:00 +0000
kMDItemUseCount: '135'
kMDItemUsedDates: (
modified: '2025-10-04'
published: true
reading_time: 1.8
source_file: 02-RAG-systems-design.md
tags: null
title: 02 RAG systems design
word_count: 360
---

NOTE 25-09-30: 

- I moved the indexing pipeline info into ch 3 to rm redundancy.

- Do the same with the rest of the info.


!!! sam
    **RAG System** (*analogy*)

    - **Pipelines** (*assembly line*)

        - **indexing pipeline**: create & maintain KB.

        - **generation pipeline**: enable real-time interaction with LLM. 

    - **System-level components** (*quality inspector*)

    - **RAGOps infrastructure / `layers`** (*electricity in factory*)




### Pipelines

*Analogy*: Pipelines are like the *assembly line*.

#### ***Generation***

!!! sam
    **Purpose**: take user query ⟶ respond with LLM x RAG.

    Process:

    - _Retriever_: Search and fetch info from KB

    - _Prompt mgmt_: Take info ⟶ augment original input

    - _LLM setup_: Generate response

    Notes

    - **Retriever**: Most important part of RAG. Computationally heavy.

    - **Prompt mgmt**: Falls under prompt engineering.

    - **LLM setup**: RAG systems rely on 1+ LLM.


### *System-level components*

*Analogy*: System-level components are like the *quality inspectors*.

!!! sam
    Extra **components** frequently used in RAG systems:

    - *Caching*: Query asked ⟶ LLM responds ⟶ LLM stores in semantic cache. In the future, a similar query ⟶ cached response.

    - *Guardrails*: Compliance with policies and regulations

    - *Security*: protect against prompt injection, data poisoning, etc





### RAGOps / Layers

*Analogy*: Layers are like the *electricity in the factory*.

!!! sam
    **Layers**

    - Foundation layers

        * ***Data*** ⟶ Process & store data as embeddings (vector DBs, chunking, indexing)

        * ***Model*** ⟶ Provider LLMs (base, hosted, fine-tuned)

    - Intelligence layers

        * ***Prompt*** ⟶ Improve prompts (templates, context injection)

        * ***App orchestration*** ⟶ Connect components together (retrievers, agents, routing)

    - Runtime layers

        * ***Deployment*** ⟶ Cloud providers for deploying apps (CI/CD, infra-as-code)

        * ***Application*** ⟶ Hosting services for apps (APIs, edge/CDN, web hosting)

        * ***Evaluation*** ⟶ Provide evaluation metrics (offline tests, retrieval quality)

        * ***Monitoring*** ⟶ Monitor RAG apps (latency, drift, costs, alerts)

    - Other layers: logging and tracing, model versioning, feedback