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
_kMDItemDisplayNameWithExtensions: XMAS-Orchestration.md
ai_abstract: null
ai_key_terms: []
aliases: null
children: 0
created: '2026-01-14'
cssclasses: null
grandchildren: 0
kMDItemContentCreationDate: 2026-01-12 00:06:23 +0000
kMDItemContentCreationDate_Ranking: 2026-01-12 00:00:00 +0000
kMDItemContentModificationDate: 2026-01-14 15:05:58 +0000
kMDItemContentType: net.daringfireball.markdown
kMDItemContentTypeTree: (
kMDItemDateAdded: 2026-01-12 00:06:23 +0000
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
reading_time: 0.5
source_file: XMAS-Orchestration.md
tags: null
title: XMAS Orchestration
word_count: 91
---

***Orchestration***
This is the “wiring + serving” layer.

2 modes:
<div class="hb-row" markdown="block">
  <div class="hb-col" markdown="block">
**Ochestration**: LangGraph's *runtime/CLI*.
This is implicit, agent-driven.

- **Priority**: shipping a UI + basic RAG
  </div>
  <div class="hb-col" markdown="block">
**Ochestration**: LangGraph's *StateGraph* (nodes/edges).
This is explicity, graph-driven.

- **Priority**: controlling unpredictable behavior (eg wrong tools, inconsistent)
  </div>
</div>


LangGraph's *runtime/CLI* relevant pieces:

- **`langgraph.json`** (graph registry / wiring)

- **`rag/agent.py` ⟶ `create_agent()`** (entrypoint)

- **`rag/agent.py` ⟶ `get_agent()`** (control logic)

> `get_agent()` builds a LangChain agent runnable → LangGraph exposes it _as if_ it were a graph, but the internal control-flow is implicit & agent-driven.


---


Think of it as:

- RAG stages = _what happens_

- `CompiledStateGraph` = _how and in what order it happens at runtime_

    1. Define `StateGraph` ⟶ 

    2. LangGraph compiles into a runnable program ⟶ 

    3. Outputs **`CompiledStateGraph`** (executable object)

“Executable object” means **the thing you can actually run**.
Chronologically:

1. You **define** a graph (nodes, edges, tools, prompts).  
    → This is a _blueprint_ (`StateGraph`).

2. You **compile** it.  
    → LangGraph turns the blueprint into a runnable program.

3. The result is a **`CompiledStateGraph`**.  
    → This is the object that can execute logic.

`CompiledStateGraph` sits **outside** the Kimothi RAG pipeline.
Where it fits:

- It is **runtime orchestration**, not a data or reasoning stage.

- It **executes and coordinates** multiple stages (Retrieve → Augment → Generate → Respond).

- It does **not** load, chunk, embed, retrieve, or generate by itself.

Mapping to your table:

- **Pipeline:** G (Generation-time control)

- **Role:** Control plane / execution engine

- **Closest conceptual neighbor:** _Generate_, but only as a **conductor**, not the generator.