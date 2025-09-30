---
published: true
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


**Evaluation**

!!! sam
    **Evaluation and monitoring**: covers relevance between the..

    - retrieved info & query

    - final response & retrieved info

    - final response & original query

    **Common metrics**: relevance scores, recall, precision

    **TruEra's framework**: Checks "in-between" each step.

    1. User prompt:
        ***Context relevance***: Is the retrieved info relevant?

    2. Retrieval:
        ***Groundedness***: Is the response faithful to the retrieved context?

    3. Response:
        ***Answer relevance***: Is the answer relevant to the user's query?


[Figure 2.7 Evaluation proposed by TruEra.](https://learning.oreilly.com/api/v2/epubs/urn:orm:book:9781633435858/files/OEBPS/Images/CH02_F07_Kimothi.png)

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