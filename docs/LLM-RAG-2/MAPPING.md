---
published: true
---

*A Simple Guide to RAG*

- **conceptual flow** (what must happen, in order)

*NVIDIA's AI Blueprint*

- **deployment blueprint** (how it runs, scales, secures).


### Indexing pipeline → NVIDIA AI Blueprint mapping

|RAG (Kimothi)|What happens|NVIDIA Blueprint equivalent|
|---|---|---|
|**Source systems**|Where data originates|Source systems (Local folder → SharePoint / pgAdmin)|
|**Load**|Connect, extract, parse, metadata|Data ingest + ETL (LangChain loaders, preprocess)|
|**Split (Chunk)**|Divide / merge / overlap|ETL / preprocessing (chunking strategy)|
|**Convert (Embed)**|Text → vectors|Embed model (Bedrock Titan → Ollama/upgrade)|
|**Store (Vector DB)**|Persist embeddings|Vector store (FAISS → OpenSearch)|
|**Knowledge Base**|Non-parametric memory|Persistence layer (FAISS/OpenSearch + storage)|


### Generation pipeline → NVIDIA AI Blueprint mapping

|RAG (Kimothi)|What happens|NVIDIA Blueprint equivalent|
|---|---|---|
|**Retrieve**|Find relevant docs|Retrieval framework (LangChain retrievers → OpenSearch)|
|**Augment**|Combine Q + context|Query processing + routing (LangGraph / StateGraph)|
|**Generate**|Apply LLM|LLM provider + model (Bedrock → Ollama/same)|
|**Respond**|Stream answer, log|FastAPI streaming, tracing (LangSmith/CloudWatch)|