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
_kMDItemDisplayNameWithExtensions: 09-Current.md
ai_abstract: null
ai_key_terms: []
aliases: null
children: 0
created: '2025-12-30'
cssclasses: null
grandchildren: 0
kMDItemContentCreationDate: 2025-12-11 17:44:41 +0000
kMDItemContentCreationDate_Ranking: 2025-12-11 00:00:00 +0000
kMDItemContentModificationDate: 2025-12-30 21:14:31 +0000
kMDItemContentType: net.daringfireball.markdown
kMDItemContentTypeTree: (
kMDItemDateAdded: 2025-12-11 18:50:38 +0000
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
kMDItemInterestingDate_Ranking: 2025-12-30 00:00:00 +0000
modified: '2025-12-30'
published: true
reading_time: 0.8
source_file: 09-Current.md
tags: null
title: 09 Current
word_count: 158
---

Beginning of December.


**Folder**: [llm_code](https://github.com/SamMusch/llm_code/tree/master)

- **now**: most core moving parts of a RAG system

- **remain**: improve [structure](https://docs.langchain.com/langsmith/application-structure) + add components for best practices

<div class="hb-row" markdown="block">
  <div class="hb-col" markdown="block">
**Foundation**

- config system
  </div>
  <div class="hb-col" markdown="block">
**Data side**

- ingestion process

- vector index

- retriever
  </div>
  <div class="hb-col" markdown="block">
**Reasoning side** - *agent*

- LLM

- tools / utils

- middleware

- messages
  </div>
  <div class="hb-col" markdown="block">
**UI & observability**

- CLI

- LangSmith tracing
  </div>
</div>



!!! sam
    **more details**
    `agent.py` is the "driver" that calls other scripts.

    - tools

        - rebuild_index()

        - search_docs()

    - [middleware](https://docs.langchain.com/oss/javascript/langchain/middleware/overview)

        - trim_history()

        - max_context_chars()

    - CLI

        - index()

        - ask()


---

!!! sam
    **next steps**

    - **middleware**: more to add

    - **evaluation**: LangSmith Datasets and Evaluation, subgraphs, guardrails

    - **graph**: add router/branching logic (currently graph is linear)

    - **tools**: add semantic routing

    - **loading**: chunk / splitter module (currently default loader)

    - **async pipeline**: currently 1 step at a time

    - **output**: want json, currently plain text

    - [chat UI](https://docs.langchain.com/oss/javascript/langgraph/ui)

    - **`.py` files**: simplify, continue refactoring to match langchain