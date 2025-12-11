---
published: true
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



**more details**
`agent.py` is the "driver" that calls other scripts.

- tools

    - rebuild_index()

    - search_docs()

- middleware

    - trim_history()

    - max_context_chars()

- CLI

    - index()

    - ask()

---

**next steps**

- **middleware**: more to add

- **evaluation**: LangSmith Datasets and Evaluation, subgraphs, guardrails

- **graph**: add router/branching logic (currently graph is linear)

- **tools**: add semantic routing

- **loading**: chunk / splitter module (currently default loader)

- **async pipeline**: currently 1 step at a time

- **output**: want json, currently plain text

- [chat UI](https://docs.langchain.com/oss/javascript/langgraph/ui)

- **`py` files**: simplify, continue refactoring to match langchain