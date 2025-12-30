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
_kMDItemDisplayNameWithExtensions: RAG-agent-LangChain.md
ai_abstract: null
ai_key_terms: []
aliases: null
author:

- '[[Docs by LangChain]]'
children: 0
created: '2025-12-30'
cssclasses: null
description: null
grandchildren: 0
kMDItemContentCreationDate: 2025-12-30 21:11:39 +0000
kMDItemContentCreationDate_Ranking: 2025-12-30 00:00:00 +0000
kMDItemContentModificationDate: 2025-12-30 21:14:31 +0000
kMDItemContentType: net.daringfireball.markdown
kMDItemContentTypeTree: (
kMDItemDateAdded: 2025-12-30 21:11:39 +0000
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
reading_time: 2.3
source: https://docs.langchain.com/oss/python/langchain/rag#expand-for-full-code-snippet
source_file: RAG-agent-LangChain.md
tags: null
title: RAG agent LangChain
word_count: 467
---

This doc

1. *Agent*: Standard RAG + dynamic

2. *Chain*: Standard RAG + fixed

3. *Chain + raw docs*: Standard RAG + fixed + raw docs


Next steps:

- [Stream](https://docs.langchain.com/oss/python/langchain/streaming) tokens and other information for responsive user experiences

- Add [conversational memory](https://docs.langchain.com/oss/python/langchain/short-term-memory) to support multi-turn interactions

- Add [long-term memory](https://docs.langchain.com/oss/python/langchain/long-term-memory) to support memory across conversational threads

- Add [structured responses](https://docs.langchain.com/oss/python/langchain/structured-output)

### RAG agents

```python
# R ⟶ serialized format

from langchain.tools import tool

@tool(response_format="content_and_artifact")
def retrieve_context(query: str):
    retrieved_docs = vector_store.similarity_search(query, k=2)
    serialized = "\n\n".join(
        (f"Source: {doc.metadata}\nContent: {doc.page_content}")
        for doc in retrieved_docs
    )
    return serialized, retrieved_docs
```

```python
# A

from langchain.agents import create_agent
tools = [retrieve_context]
prompt = (
    "You have access to a tool that retrieves context from a blog post. "
    "Use the tool to help answer user queries.")

agent = create_agent(
    model, 
    tools, 
    # middleware = ,
    system_prompt=prompt)
```

```python

# G
# test by asking a Q requiring multiple steps

query = (
    "What is the standard method for Task Decomposition?\n\n"
    "Once you get the answer, look up common extensions of that method."
)

for event in agent.stream(
    {"messages": [{"role": "user", "content": query}]},
    stream_mode="values",
):
    event["messages"][-1].pretty_print()
```


### RAG chain

RAG 2-step chain approach:

1. **always** run a search (potentially using raw Q)

2. use search result as context for a single LLM query

Result: a single inference call per query. Better latency, less flexible.

```python

# R and A

from langchain.agents.middleware import dynamic_prompt, ModelRequest

@dynamic_prompt
def prompt_with_context(request: ModelRequest) -> str:
    """Inject context into state messages."""
    last_query = request.state["messages"][-1].text
    retrieved_docs = vector_store.similarity_search(last_query)
    docs_content = "\n\n".join(doc.page_content for doc in retrieved_docs)
    system_message = (
        "You are a helpful assistant. Use the following context in your response:"
        f"\n\n{docs_content}")
    return system_message

agent = create_agent(
    model, 
    tools=[], 
    middleware=[prompt_with_context])
```

```python
# G

query = "What is task decomposition?"
for step in agent.stream(
    {"messages": [{"role": "user", "content": query}]},
    stream_mode="values",
):
    step["messages"][-1].pretty_print()
```


### RAG chain + raw docs

If we want raw source docs / metadata:

1. Add a *key* to the state to store R docs

2. Populate *key* via a new middleware node

```python
from typing import Any
from langchain_core.documents import Document
from langchain.agents.middleware import AgentMiddleware, AgentState

class State(AgentState):
    context: list[Document]
```

```python

class RetrieveDocumentsMiddleware(AgentMiddleware[State]):
    state_schema = State
    def before_model(self, state: AgentState) -> dict[str, Any] | None:
        last_message = state["messages"][-1]
        retrieved_docs = vector_store.similarity_search(last_message.text)
        docs_content = "\n\n".join(doc.page_content for doc in retrieved_docs)
        augmented_message_content = (
            f"{last_message.text}\n\n"
            "Use the following context to answer the query:\n"
            f"{docs_content}"
        )

        return {
            "messages": [last_message.model_copy(update={"content": augmented_message_content})],
            "context": retrieved_docs,
        }

agent = create_agent(
    model,
    tools=[],
    middleware=[RetrieveDocumentsMiddleware()],
)
```