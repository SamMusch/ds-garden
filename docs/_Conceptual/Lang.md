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
_kMDItemDisplayNameWithExtensions: Lang.md
ai_abstract: null
ai_key_terms: []
aliases: null
children: 0
created: '2025-12-30'
cssclasses: null
grandchildren: 0
kMDItemContentCreationDate: 2025-11-26 18:28:26 +0000
kMDItemContentCreationDate_Ranking: 2025-11-26 00:00:00 +0000
kMDItemContentModificationDate: 2025-12-30 21:14:32 +0000
kMDItemContentType: net.daringfireball.markdown
kMDItemContentTypeTree: (
kMDItemDateAdded: 2025-11-26 18:28:48 +0000
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
reading_time: 1.6
source_file: Lang.md
tags: null
title: Lang
word_count: 323
---

[LangChain Academy](https://academy.langchain.com/collections/quickstart) - ==courses==

Overviews

- [LangChain](https://docs.langchain.com/oss/python/langchain/overview)

- [LangGraph](https://docs.langchain.com/oss/python/langgraph/overview)

- [LangSmith](https://docs.langchain.com/langsmith/home)
*LangChain* is built upon *LangGraph*. Debug with *LangSmith*.


[Integrations](https://docs.langchain.com/oss/python/integrations/providers/overview) - by component

- Models - chat

- Models - embedding

- Tools & toolkits

- Text splitters

- Vector stores

- Doc loaders

- Key-value stores

[semantic search tutorial](https://docs.langchain.com/oss/python/langchain/knowledge-base)

[tool decorator](https://reference.langchain.com/python/langchain/tools/#langchain.tools.tool)

- **does**: configure tool to attach raw docs as [artifacts](https://docs.langchain.com/oss/python/langchain/messages#param-artifact) to each [ToolMessage](https://docs.langchain.com/oss/python/langchain/messages#tool-message). 

- **purpose**: lets us access document metadata


---
## LangChain

#### LangChain | Core components

<[image](https://i.imgur.com/SKTW6Tw.png)>

1. *Agents*: a **framework** to **orchestrate** tool-use via LLM's reasoning. They run tools in a loop to achieve a goal.

2. *Models*: **reasoning engines** that take input ⟶ gen output

3. *Messages* and *tools*

    1. *Messages* (**memory**): units of context that carry context & conversation state

    2. *Tools*: callable functions/APIs that retrieve external data

4. *Short-term memory*, *Streaming*, *Structured output*

    1. *Short-term memory*: in-session context stores that retain recent interaction history

    2. *Streaming*: for displaying output progressively (even before a complete response is ready)

    3. *Structured output*: format for model output (eg JSON) for the LLM


#### LangChain | Quickstart | Build a real-world agent

[Quickstart](https://docs.langchain.com/oss/python/langchain/quickstart)
Create these to build an agent:

1. ***write prompts***

2. ***tools***: integrate w external data

    1. depends on [runtime context](https://docs.langchain.com/oss/python/langchain/runtime) 

    2. interacts with [agent memory](https://docs.langchain.com/oss/python/langchain/short-term-memory)

3. ***model config***: for consistent responses

4. ***response format*** for predictable results

5. ***memory*** for context across chats

6. ***invoke agent***