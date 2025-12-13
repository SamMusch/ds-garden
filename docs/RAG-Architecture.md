---
published: true
---

### Local

- **Core app code**

    - *codebase*: `llm_code`, LangChain / LangGraph / LangSmith

    - *config*: interacts with AWS backends

    - *reasoning*: Agent + RAG pipeline

    - *retriever*: wrapper that talks to the vector DB

- **Data side**    

    - *ingest*: FileClerk

    - *indexing pipeline*

- **UI**

    - *server*: FastAPI exposing `/chat` and `/ingest`

    - *web UI*: simple React

- **Dev/ops**

    - *running app*: Docker Compose

    - *tracking LLM x RAG behavior*: LangSmith


---

### AWS

- **Model / LLM**

    - *chat model*: Amazon Bedrock

    - *embedding model*: Amazon Bedrock or self-hosted model on EC2/SageMaker

- **Vector + metadata store**    

    - *doc embeddings + metadata*: Amazon Aurora PostgreSQL with `pgvector`

- **Storage**

    - *raw docs*: S3 bucket, referenced by Aurora metadata

- **Infra / observability (optional)**

    - *tracking AWS infrastructure behavior*: CloudWatch

    - *permissions*: IAM for secure access from your local app to Bedrock, Aurora, and S3


---


# llm_code - 12-13

!!! sam
    What should go in Docker?

    * **Model server in Docker** (serves an HTTP API)

    * **llm_code** **in Docker** (calls that API)

    * **Models/weights stored on a Docker volume** (not baked into the image)

    This makes “local now → AWS later” a mostly config-only change (you point llm_code at a different base URL).



!!! sam
    Local model: Ollama

    * Easiest “download + run” workflow and a simple local API (http://localhost:11434). ([Ollama Docs](https://docs.ollama.com/api/introduction?utm_source=chatgpt.com))

    * Good for quickly swapping models and iterating.



!!! sam
    Security notes

    * **governance**: confirm the **model license allows commercial use**

    * **model server**: keep private-by-default

        * Bind to 127.0.0.1 locally, or put it on a private Docker network; do not expose ports broadly.

        * Add authentication if there’s any chance it becomes reachable beyond localhost (especially later on AWS).