---
published: true
---

## Architecture
### Local

- **Core app code**

    - *codebase*: `llm_code`

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

    - *chat model*: Bedrock

    - *embedding model*: Bedrock or self-hosted model on EC2/SageMaker

- **Vector + metadata store**

    - *doc embeddings + metadata*: Aurora PostgreSQL with `pgvector`

- **Storage**

    - *raw docs*: S3 bucket, referenced by Aurora metadata

- **Infra / observability (optional)**

    - *tracking AWS infrastructure behavior*: CloudWatch

    - *permissions*: IAM for secure access from your local app to Bedrock, Aurora, and S3


# llm_code - 12-13

### init

1. Run **Ollama server** as a container

2. Persist model files in a **Docker volume**

3. Bind the API to **localhost-only**

```bash
# step 1 — Create a persistent volume (stores weights)
	# Docker image stores data under `/root/.ollama`
docker volume create ollama

# Step 2 — Run Ollama server in Docker (localhost-only)
	# matches the official image usage 
	# keeps API from being exposed on your LAN
docker run -d \
  --name ollama \
  -p 127.0.0.1:11434:11434 \
  -v ollama:/root/.ollama \
  ollama/ollama

# Step 3 — Confirm the server responds
curl http://localhost:11434/api/version


# Step 4 — Pull a model into the volume
docker exec -it ollama ollama pull llama3.2:1b

# list models
docker exec -it ollama ollama list

# Step 5 — Quick inference test over HTTP
curl http://localhost:11434/api/generate -d '{
  "model": "llama3.2:1b",
  "prompt": "Say hello in one sentence."
}'
```


### Current state
In Docker, 2 containers:

- **model server**: `Ollama`

- **RAG app**: `llm_code`

    - **models**: on a Docker volume, model lives at `http://ollama:11434`
These 2 containers talk over a local network defined by `docker-compose.yml`.

Not in Docker

- **Retrieval**: local docs

- **Generation**: local model via Ollama

- **Embeddings**: still OpenAI

`docker-compose.yml`, a **map** that says:

- which containers exist / how they start / which containers can talk

- which ports are visible to your Mac

- which data persists

you now have:

- everything reproducible on any machine

- a structure that maps 1-to-1 to AWS later

- a UI (LangGraph Studio)

from here:

- switch models ≠ changing app code

- switch machines ≠ reinstalling Python

- move to AWS ≠ rewriting architecture, just point `llm_code` to a different base URL

### Details

`localhost`

- on personal machine ⟶ `http://localhost:2024`

- inside a container ⟶ `http://ollama:11434`

By default, containers can talk to each other BUT your Mac cannot talk to containers.
`Ports` are just **doors**. To get the browser to connect, we opened ports:

- `11434` ⟶ model API

- `2024` ⟶ LangGraph dev server
Then bound the server to `0.0.0.0`