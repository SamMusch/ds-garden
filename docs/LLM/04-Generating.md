---
published: true
---

- **Ch 3** (INDEX): create KB | non-parametric memory | convert and store data in numerical form for later retrieval.

- **Ch 4** (GENERATE): create a generation pipeline to use ^

Process:

1. **R** | Retrieve relevant information from the KB based on a user query.

2. **A** | Augment user query with fetched information to create a prompt for the LLM.

3. **G** | Generated response via LLM.

## Retrieval

R ⟶ A ⟶ G

- **R: Retrieve info**

- A: Augment user query

- G: Generate response

**Information retrieval** (IR): the science of searching.
**KB**: Several volumes of *documents*, where *documents* refers to stored embeddings in the vector db.

!!! sam
    **Retrieval**: for an input query, the process of finding & extracting most relevant info from KB.
    **Retriever**: component doing this ^.

    - **process**: accept query as input ⟶ return a list of matching documents as output

    - see [Figure 4.1 Generation pipeline](https://learning.oreilly.com/api/v2/epubs/urn:orm:book:9781633435858/files/OEBPS/Images/CH04_F01_Kimothi.png)


!!! sam
    **Popular retrieval methods**

    **TF-IDF** | [Example](https://learning.oreilly.com/api/v2/epubs/urn:orm:book:9781633435858/files/OEBPS/Images/CH04_F03_Kimothi.png)

    * **keyword-based**, uses term frequency (TF) and inverse document frequency (IDF) to score words.

    * Retrieval is based on exact word overlap between query and documents.

    **BM25** | [Example](https://learning.oreilly.com/api/v2/epubs/urn:orm:book:9781633435858/files/OEBPS/Images/CH04_F04_Kimothi.png)

    * **keyword-based**, probabilistic variant of TF-IDF.

    * Adds length normalization & saturation effects so longer documents aren’t unfairly favored.

    **Static Word Embeddings** 

    * **vector-based semantics** (fixed meaning per word)

    * Represents words as dense vectors (e.g., `Word2Vec`, `GloVe`).

    * Captures semantic similarity beyond exact keywords.

    * Limitation: each word has a single vector, so polysemy isn’t handled well.

    **Contextual Embeddings** (==most popular==)

    * **context-aware semantics** (meanings shift with usage)

    * Embeddings from models like `BERT` or `GPT` (based on transformers)

    * Word/document representations depend on surrounding context.

    * Handles polysemy and nuanced meanings, enabling semantically rich retrieval.


    LangChain provides integrations where the algorithms have been abstracted as retrievers to use.


!!! sam
    Besides methods above, some other popular retrievers:

    1. **Vector stores and DBs**:

        1. `FAISS` & contextual embedding model

        2. `PineCone` / `Milvus` / `Weaviate` provide hybrid search functionality by combining dense retrieval methods.

    2. **Cloud providers**: Integration provides developers with infrastructure, APIs, and tools for info retrieval

    3. **Web information resources**: Can connect to Wikipedia, Arxiv, AskNews, etc. [Langchain retrievers documentation](https://python.langchain.com/v0.2/docs/integrations/retrievers/) .


## Augmentation

R ⟶ A ⟶ G

- R: Retrieve info

- **A: Augment user query**

- G: Generate response

!!! sam
    **Prompt engineering techniques** to augment the user query with the retrieved information.

    - *Contextual prompting*: “Answer only based on the context provided below.”

    - *Controlled generation prompting*: “If the question cannot be answered based on the provided context, say I don’t know.”

    - *Few-shot prompting*: Providing a few examples

    - *CoT prompting*: Provide intermediate reasoning steps


| Technique                        | Description                                                                                 | Key advantage                                    | Best use case                                   | Complexity |
| -------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------ | ----------------------------------------------- | ---------- |
| Contextual prompting             | Adds retrieved information to the prompt with instructions to focus on the provided context | Ensures focus on relevant information            | General RAG queries                             | Low        |
| Controlled generation prompting  | Instructs the model to say “I don’t know” when information is not available                 | Reduces hallucination risk                       | When accuracy is critical                       | Low        |
| Few-shot prompting               | Provides examples in the prompt to guide response format and style                          | Improves output consistency and format adherence | When a specific output format is required       | Medium     |
| Chain-of-thought (CoT) prompting | Introduces intermediate reasoning steps                                                     | Improves performance on complex reasoning tasks  | Complex queries requiring step-by-step analysis | Medium     |

## Generation

**R ⟶ A ⟶ G

- R: Retrieve info

- A: Augment user query

- **G: Generate response**

Choosing an LLM | 3 themes to help categorize:

- Original vs. fine-tuned models

- Open source vs. proprietary

- Model size

#### Foundation v fine-tuned

!!! sam
    **Foundation models**: massive pre-trained LLMs.

    - **are**: autoregressive next-token prediction models

    - **how**: trained via unsupervised learning

    - **benefits**: Deployment speed, resource efficiency

    **SFT** (supervised fine-tuning): 

    - **is**: a process to adjust foundation model's weights for specific tasks

    - **how**: start with a pre-trained model ⟶ prepare labelled dataset ⟶ train model. This adjusts the model parameters to perform better on the given task.

    - **benefits**: Domain specialization, retrieval integration w KB, response customization, output control


#### Open source v proprietary

!!! sam
    **Open source**: more flexible, but need infrastructure and maintenance.

    Criteria

    - *Customization*: Open source allows (1) deep integration with custom retrievers (2) control over fine-tuning

    - *Ease of use*:  Open source is more difficult. Proprietary can offer prebuilt RAG solutions.

    - *Deployment flexibility*: Open source are customizable(private cloud, on-premises)

    - *Cost*: Open source has higher up-front fixed costs, lower variable costs over time.


#### Model sizes

!!! sam
    Criteria

    - *Resource constraints*: Small models have lower resource usage.

    - *Reasoning capability*: Small models rely on the quality of retrieved information / KB.

    - *Deployment options*: Small models easier to deploy to a wide range of devices and environments.

    - *Context handling*: Small models could struggle with context windows and diverse queries.