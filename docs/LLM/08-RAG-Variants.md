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
_kMDItemDisplayNameWithExtensions: 08-RAG-Variants.md
ai_abstract: null
ai_key_terms: []
aliases: null
children: 0
created: '2025-11-13'
cssclasses: null
grandchildren: 0
kMDItemContentCreationDate: 2025-08-08 21:04:53 +0000
kMDItemContentCreationDate_Ranking: 2025-08-08 00:00:00 +0000
kMDItemContentModificationDate: 2025-11-13 21:26:32 +0000
kMDItemContentType: net.daringfireball.markdown
kMDItemContentTypeTree: (
kMDItemDateAdded: 2025-10-26 17:13:42 +0000
kMDItemDocumentIdentifier: '624860'
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
kMDItemInterestingDate_Ranking: 2025-10-26 00:00:00 +0000
kMDItemLastUsedDate: 2025-10-26 17:16:09 +0000
kMDItemLastUsedDate_Ranking: 2025-10-26 00:00:00 +0000
kMDItemUseCount: '98'
kMDItemUsedDates: (
modified: '2025-11-13'
published: true
reading_time: 38.0
source_file: 08-RAG-Variants.md
tags: null
title: 08 RAG Variants
word_count: 7595
---

Book contents

- **1st part**: intros RAG and core idea

- **2nd part**: building and evaluating basic RAG systems

- **3rd part**: from naïve approach ---> advanced techniques & RAG-Ops

    - Ch 6 techniques: Pre-R | R | Post-R 

- **4th part (here)**: more RAG patterns + best practices + areas for further exploration

    - Ch 8: RAG variants

Chapter 8 looks at some popular RAG variants. These solve challenges from Ch 6.

---

3 most popular RAG variants

- KG

- Multimodal

- Agentic

- **Others**: corrective RAG | self-RAG

Per variant

- idea & motivation

- workflow

- features

- technical details

These *variants* adapt different stages of RAG to specific use case requirements. 


## 8.1 What are RAG variants, and why do we need them?


RAG *variants* capabilities:

- multimodal

- higher accuracy

- better relational understanding
makes the system both flexible and domain aware.


- *Multimodal RAG*: Can handles images, video, audio, etc.

- *KG RAG*: Help improve I by establishing relationships between entities

- *Agentic RAG*: Incorporates LLM agents into the RAG framework. Enables autonomous decisions across RAG. Simultaneously, all components become adaptive to the user query.




## 8.2 Multimodal RAG


8.2.1 Data modality

- *Modality*: data format

- *Multimodal RAG*: RAG + capability to process multiple modalities. 

8.2.3 Changes

- Indexing Pipeline

- Generation Pipeline

#### Multimodal | I Pipeline

Key challenges include:

* **Complexity**: Multimodal embeddings help but still produce errors.

* **Cost**: Requires heavier preprocessing & compute.

* **Latency**: Both in I & G.

Update the *indexing pipeline* in each step (*Load* ⟶ *Chunk* ⟶ *Embed* ⟶ *Store*).

| Indexing component | Text-only RAG                                                         | Multimodal RAG                                                                 |
| ------------------ | --------------------------------------------------------------------- | ------------------------------------------------------------------------------ |
| Loading            | Use standard text data loaders                                        | Use connectors for additional data types.                                      |
| Chunking           | Based on context or structure, then optionally enriched semantically. | Text: Same<br><br>Other data types require advanced chunking.                  |
| Embeddings         | Text embeddings model                                                 | Multimodal embeddings models to unify all data types in a shared vector space. |
| Storage            | Embeddings stored in vector DB.                                       | Same + additional storage for raw multimodal files                             |

<div class="hb-row" markdown="block">
  <div class="hb-col" markdown="block">
*Load*

- `Pillow` (`PIL`): images

- `Pydub`: audio

- `Unstructured`: many formats, LangChain integrations

    - `UnstructuredImageLoader`: images. 

    - `OpenAIWhisperParser`, `AssemblyAIAudioTranscriptLoader`, and `YoutubeLoader`: audio/video
  </div>
  <div class="hb-col" markdown="block">
*Chunking* methods

- **Audio**: Voice activity detection (VAD)

- **Video**: Scene-detection-based

- **Tables**: Sometimes row/column-level chunking

- **Code**: By function/class
 `semantic_chunkers`: library for chunking of text/video/audio
  </div>
  <div class="hb-col" markdown="block">
*Embeddings* methods

- **shared/joint embedding models**: map diverse data types into a unified embeddings space (eg image ---> text description). `Google Vertex AI`.

- **modality-specific embeddings**: instead of a single embeddings space for all modalities, the embeddings space maps only two modalities. `CLIP`

- **conversion of non-text into text**: use multimodal LLM ---> convert nontext data into text ---> follow standard text-only RAG approach
  </div>
  <div class="hb-col" markdown="block">
*Storing*

- vector storage AND document storage (`Redis`)
  </div>
</div>





#### Multimodal | G Pipeline

| Generation component | Text-only RAG                                              | Multimodal RAG                                                                                                                                                                                                                                                                                                                                  |
| -------------------- | ---------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| R                    | *Similarity search*: Retrieves similar text embedding to Q | **shared embeddings model**: a similarity search is employed regardless of modality, converting the query into a multimodal vector. <br><br>**modality-specific embeddings**: multi-vector retrieval is used for modality-specific results<br><br>**text-converted nontext data**: standard text retrieval + raw files mapped to text summaries |
| A                    | Adds R to prompt                                           | Same + includes the raw multimodal files alongside the text in the prompt.                                                                                                                                                                                                                                                                      |
| G                    | LLMs generates responses                                   | Uses multimodal LLMs                                                                                                                                                                                                                                                                                                                            |







## 8.3 KG RAG

Summarization is difficult because there isn't one specific chunk with the summary. Instead, it requires:

- multi-hop reasoning, 

- ID contextual relationships

- address higher-order queries

KG RAG or simply *graph RAG* 

*graph RAG* hybrid retrieval approach (based on *vectors* **AND** *graphs*)


### 8.3.1 KGs

Google popularized the term *KG* by integrating an **entity-relationship structure** into its search engine.

!!! sam
    node-and-edge structure

    - **Nodes** represent *entities* such as people, organizations, products

    - **Edges** represent *relationships* between the nodes (such as *is a part of*, *works at*, *is related to*)
    Structure also have *attributes* such as id, timestamp, etc.


!!! sam
    KGs 

    - rely on *semantics* to create a human-like understanding of data. 

    - prioritize *relationships* & *context*, an advantage over standard structured databases.

    - enhance with *context-aware* R.

    KGs storage and data processing is unique. `Neo4j`, `Amazon Neptune`



**graph DBs** | Building blocks

- *Nodes*: entities

- *edges*: relationships

- *Attributes*: properties of entities & relationships

- *Triplets* (node ---> edge ---> node): “customer A purchased product X” (node–edge–node).

**graph DBs** | key concepts

- *Ontology*: defines the schema/structure of a KG by specifying types of entities / relationships / properties.

- *Graph embeddings*: vector representations of nodes & edges ---> capture graph structure.

- *Graph query language*: allow users to retrieve info from the graph. (Cypher, Gremlin, and SparkQL)

    - *Graph traversal*: The method of navigating through nodes and edges to discover paths / patterns / insights.


---


### 8.3.3 Graph RAG approaches

Knowledge graphs let you add structure to retrieval. 

3 common patterns:

1. Structure-aware retrieval

2. Graph-enhanced vector search

3. Graph communities and community summaries

For all 3, need to modify I and R pipelines to

- incorporate the graph

- create hybrid retrieval system with vector DBs **and** graph DBs


!!! sam
    (1/3) **Structure-aware retrieval**
    A standard vector RAG chunks documents ⟶ embeds each chunk *independently*.

    - Issue: Lost context because adjacent or related chunks may not be retrieved together.

    Instead, index docs *hierarchically* (parent → child). 

    - **parent nodes**: hold summaries or themes

    - **child nodes**: hold detailed chunks

    After Q: retrieve child nodes ⟶ retrieve parents to restore broader context.



!!! sam
    (2/3) **Graph-enhanced vector search**

    (Doesn't use hierarchy)
    **Motivation**: Use KGs to make connections *across chunks*. Use an LLM to extract a set of entities & relationships from the chunks.

    Steps:

    1. R: Take corpus ⟶ chunk ⟶ extract entities/relations with an LLM to build the KG.

    2. Run vector search ⟶ get top-similar chunks ⟶ follow their entities ⟶ traverse KG to find related chunks.

    3. (Optional) Add hierarchical parents ⟶ re-rank results.

    **Output**: similar chunks & KG-connected chunks

    **Retrieval**: related chunks & their parents



!!! sam
    (3/3) **Graph communities and community summaries**

    **Purpose**: Provide improved context to answer broader, theme-level queries.
    **How**: Take many tightly connected entities ⟶ collapse into an enriched unit of meaning.

    **Steps:**

    1. Take KG ⟶ detect communities (Leiden/Louvain).

    2. Take each community ⟶ generate LLM summary of its entities/relations.

    3. Take query ⟶ run vector search for nodes ⟶ fetch linked community summaries; or search directly over the summaries.

    4. Use summaries ⟶ answer broad, thematic questions.





### 8.3.4 Graph RAG pipelines

As we have been discussing, KG is a unique data pattern that requires specific processing and storage. RAG pipelines need to be customized to incorporate KGs. Depending on the approach used, both the indexing and the generation pipelines need tweaking.

#### KG RAG indexing pipeline

The knowledge base in graph RAG requires a different kind of parsing and storage. New components are introduced in the indexing pipeline to create KGs, extract summaries, and store the data for generation. While the loading and chunking components remain similar, the remaining components change significantly:

- *Data loading*—There is no difference in the loading of the documents from the standard vector-based RAG.

- *Data chunking*—To create KGs from the documents, large documents are chunked in the same way as the vector RAG approach. These chunks are then passed to an LLM to extract entities and their relationships.

- *Entity relationship attribute extraction (for graph-enhanced RAG)*—This is a crucial step in graph enhancement because the quality of responses will depend on how well the entities and relationships have been identified. This step can be customized

[Figure 8.9 Communities club entities under a consistent theme and summarize the information at this group level. Since the summaries are created from a high number of thematically related chunks, these summaries can answer broad queries.](https://learning.oreilly.com/api/v2/epubs/urn:orm:book:9781633435858/files/OEBPS/Images/CH08_F09_Kimothi.png)


- according to the need and complexity of the use case. The simplest approach can be to ask an LLM directly to do the extraction. The exact kind of entities and relationships can also be predetermined, say, allowed entities are “people,” “country,” and “organization,” and allowed relationships are “nationality,” “located at,” and “works at.” There can be another approach in which an LLM is used to identify the schema of the KG. Attributes can also be added to the entities and relationships. There can be multiple passes of this step to ensure that an exhaustive list has been created. Another step can be employed to remove redundancies and duplication. In LangChain, `LLMGraphTransformer` class is available in the `langchain_experimental` library that abstracts the entity relationship extraction from documents.

- *Storage*—Once the entities, relationships, and attributes have been extracted, these can be stored in a graph database such as Neo4j. LangChain has integration with the Neo4j graph database, and the `Neo4jGraph` library from the `langchain_community` can be used. Since the entity relationship extraction is done at a chunk level, the storage is also iterative, and the graph database is updated after each pass. In LangChain, the `add_graph_documents()` function of the `Neo4jGraph` library can be used to directly update the KG.

- *Creating community summaries*—As discussed previously, once the KG is created, an algorithm is used to detect communities, and an LLM is used to create a summary of the community. `Graphrag`, a library developed by Microsoft, provides end-to-end KG and community summary creation from documents. Another approach is to just use the community summaries and store the summaries in a vector database and use the standard vector RAG on the community summaries.

This graph database can be used as the complete knowledge base or be treated as an addition to the regular vector database in the knowledge base. Figure 8.10 illustrates the indexing pipeline with each step.

[Figure 8.10 Indexing pipeline for graph RAG. Chunks can directly be stored for simple structure-aware indexing, and community summaries can be created and stored with the graph.](https://learning.oreilly.com/api/v2/epubs/urn:orm:book:9781633435858/files/OEBPS/Images/CH08_F10_Kimothi.png)



#### Generation pipeline

Since the nature of the knowledge base in graph RAG is quite unlike standard RAG, it requires significant changes in the generation pipeline. The retrieval process becomes slightly more nuanced than vector retrieval because of an additional step of graph traversal. Graph databases such as Neo4j have introduced vector indexes, via the Neo4j vector search plugin, which represent nodes and attributes as embeddings and enable similarity search. For effective retrieval, the user query (in natural language) is converted into a graph query that can be used to traverse the KG. Neo4j uses a graph query language called Cypher. For using the Cypher query language, there are a couple of approaches:

- *Template based*—Several pre-defined Cypher templates are created and based on the user query, an LLM selects which template to use. This is an extremely rigid and limiting approach.

- *LLM-generated query*—An LLM generates the Cypher query directly based on the natural language user query. Prompt engineering techniques such as few-shot prompting are employed. This approach is more flexible than a template-based approach, but not 100% reliable.

In LangChain, the `GraphCypherQAChain` class is from the `langchain.chains` library. For better querying, the schema of the KG is also provided to the LLM:

- *Augmentation*—Depending on the graph query, the response received from the graph database is processed to extract the text that can be augmented to the original user query. Apart from this, the augmentation step is the same as in vector RAG.

- *Generation*—The augmented prompt is sent to the LLM like in the standard vector RAG approach.

While the final generation step and initial data loading and chunking do not require any special adjustment, the rest of the process changes significantly. Table 8.3 summarizes the differences between vector and graph RAG.

##### Table 8.3 Differences between vector RAG and graph RAG

| Step                               | Vector RAG                                                   | Graph RAG                                                    |
| ---------------------------------- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| Data loading                       | Loads documents without specialized preprocessing for relationships | Similar to vector RAG; documents are loaded without special graph handling. |
| Data chunking                      | Divides large documents into smaller chunks for embedding and vector storage | Documents are chunked similarly; each chunk is then processed to extract entities and relationships, building a relational structure. |
| Entity and relationship extraction | Not applicable; focuses on creating embeddings from chunks   | Entities, relationships, and attributes are extracted from each chunk using an LLM, potentially in multiple passes to refine and de-duplicate entities and relationships. |
| Storage                            | Stores embeddings in a vector database                       | Entities and relationships are stored in a graph database (e.g., Neo4j), with the option to update the graph iteratively. Tools such as LangChain’s Neo4jGraph can automate this process. |
| Community summaries                | Not applicable; primarily relies on similarity search on individual embeddings | Detects communities within the KG and uses an LLM to create summaries for each community. These summaries can be stored as vectors for a hybrid graph–vector RAG approach. |
| Retrieval                          | Performs direct similarity searches on embeddings            | Involves graph traversal using Cypher queries, generated either from pre-defined templates or dynamically by an LLM. Neo4j’s vector indexes can enhance similarity-based node searches. |
| Augmentation                       | Uses retrieved embeddings to augment the user’s query        | Retrieved nodes, relationships, or summaries augment the user’s query. Additional LLM processing might be used to refine responses based on the retrieved graph content. |
| Generation                         | Sends the augmented prompt to an LLM for response generation | Like vector RAG but relies on augmented data with graph-derived insights, relationships, and context from the KG to enrich the response. |

### 8.3.5 Challenges and best practices

Despite all the benefits of graph RAG, there are certain challenges that must be considered carefully:

- Merging diverse data sources into a cohesive KG can be intricate and time-consuming. Start with a focused domain and gradually expand the KG to manage complexity.

- Due to the iterative LLM processing at different stages, large-scale KG generation and community summarization from documents are computationally expensive. Therefore, the data for graph RAG must be selected carefully.

- Current similarity measurement techniques may not fully capture the nuanced relationships or structural dependencies in graphs, leading to potential mismatches in retrieved information. Careful use of case-specific evaluation is warranted for acceptable accuracy.

- Each deployment may need custom graph data construction, indexing, and retrieval adaptations, which makes generalization difficult. Keeping the KG updated with accurate and current information requires continuous effort. Consequently, graph RAG may not be the default RAG strategy.

So far, we have looked at two RAG *variants* that extend standard RAG capabilities by including multimodal data and graph structures. Next, we discuss one of the most significant concepts in the field of generative AI: agents.

## 8.4 Agentic RAG

By now, you understand that challenges exist with standard RAG systems. They may struggle with reasoning, answering complex questions, and multistep processes. One of the key aspects of comprehensive RAG systems is the ability to search through multiple sources of data. This can be internal company documents, the open internet, third-party applications, and even structured data sources like an SQL database. So far in this book, we have built systems that can search through a single knowledge base, and for any query, the entire knowledge base is searched through.

Two challenges arise with this approach. First, all information must be indexed and stored in a single vector store, which leads to storage problems at scale. Second, for any query, the entire knowledge base needs to be searched, which is highly inefficient for large knowledge bases. To overcome this challenge, a module that can understand the user’s query and route the query to a relevant source is needed. This is one of the limitations addressed by agentic RAG that uses one or more LLM agents for decision-making. Let’s first understand what is meant by the term *agent*.

### 8.4.1 LLM agents

The use of agents in AI predates the popularity of LLMs. The overarching meaning of an AI agent is a software system that can autonomously perceive the environment it is in, make decisions, and perform actions to achieve a goal. Traditionally, AI agents have been developed to execute specific tasks and rely on predefined rules or learned behaviors, like in the fields of autonomous vehicles or robotics. Due to the ability to process and understand language (and now even multimodal data), LLMs are now being seen as a general-purpose technology that can help build autonomous decision-making without explicitly defining rules or environment data. While there is no common definition of an LLM-based AI agent, there are four key components of the system that enable autonomous decision-making and task execution.

The *core LLM brain* is an LLM that assigned a certain role and a task. This component is responsible for understanding the user request and interacting with other components to respond to the user. For example, an AI agent built for travel assistance may have to deal with different types of tasks such as searching for information, creating itineraries, booking tickets, or managing previous bookings.

The *memory* component manages the agent’s past experiences. It can be short-term like the chat history of the current conversation or long-term where important pieces of information from previous interactions are stored. For a travel assistant AI agent, short-term memory will hold the current context of the user query, while the ticket booking history or previous travel searches can be fetched from long-term memory.

The *planning* component creates a step-by-step sequence of tasks that will be followed to respond to the user’s request. Task decomposition or breaking down complex tasks into smaller, manageable subtasks. ReAct, which stands for reasoning and acting, or reflection, where the agent does a self-assessment of the outcomes, can be part of the planning component.

*Tools* assist the agent in performing actions on resources external to it. This can be conducting a web search on the internet, querying an external database such as an SQL database, invoking a third-party API such as a weather API, and similar. The core LLM brain is responsible for sending the payload request to the tools in the accepted format. These four components and their interactions are shown in figure 8.11.

![A diagram of a process  AI-generated content may be incorrect.](https://learning.oreilly.com/api/v2/epubs/urn:orm:book:9781633435858/files/OEBPS/Images/CH08_F11_Kimothi.png)

Figure 8.11 An LLM agent’s four components break down the user’s query, recall the history of interaction with the user, and employ external tools to accomplish tasks and respond to the user.

Since the definition of AI agents continues evolving, these components are not set in stone but are generally agreed upon. To help understand how these components interact, let’s take an example of an AI agent built for travel assistance, like the customer service agent of an online travel agency.

Suppose a customer asks a question like, “Is my flight on schedule?” The core LLM brain receives this input and understands that the user intent is to check a specific flight status. At this stage, the core LLM brain can invoke the planning module to decide the course of action required to answer queries of this intent. The planning module may respond with steps such as retrieving booking information from previous interactions (memory), querying the latest flight information from a database, comparing it with previous details from memory, and conveying the result to the user. Here, retrieving the information from the database will require a tool such as an API, which is a prebuilt module that the core LLM brain has access to. The planning module can also bring in conditional steps—for example, if the previous booking information cannot be retrieved from memory, the core LLM brain must prompt the user to provide this information. When the core LLM brain gets the plan from the planning module, it retrieves previous booking information, invokes the tool to retrieve flight information, compares the new information with the old information in memory, and crafts a response based on this analysis. This simple workflow of the agent is illustrated in figure 8.12.

![A diagram of a flight process  AI-generated content may be incorrect.](https://learning.oreilly.com/api/v2/epubs/urn:orm:book:9781633435858/files/OEBPS/Images/CH08_F12_Kimothi.png)

Figure 8.12 A simple task of responding to a user query on flight schedule responded to by an LLM agent by using the planning, memory, and tools modules

This is an example of a simple task. Multiple agents can come together to solve tasks of a higher level of complexity, such as “Plan and book a holiday for me.” The field of LLM-based AI agents is quite promising, and readers are encouraged to read more about this evolving domain. For our discussion on agentic RAG in this section, we focus on a few aspects, specifically on tool usage and a little bit of planning. The use cases for agentic RAG span across industries, so it makes more sense to look at the capabilities of agentic RAG.

### 8.4.2 Agentic RAG capabilities

In our introduction to agentic RAG, we highlighted the challenge in standard RAG using a single knowledge base. Agentic RAG infuses abilities in the RAG system that make the system more efficient and accurate.

#### Query understanding and routing

Based on the user query, an LLM agent can be tasked with deciding which knowledge base to search through. For example, assume a programming assistant that can not only search the codebase but also the product documentation, along with searching the web. Depending on the question that the developer asks, the agent can decide which database to query. For generic messages such as greetings, the agent can also decide not to invoke the retriever and send the message directly to the LLM for a response.

#### Tools usage

In the previous example, the system was also required to search the web. The internet cannot be stored in a knowledge base and is usually accessed through an API that returns search results. This search API is an example of a tool the agent can use. Similarly, other APIs, such as Notion or Google Drive, can be used to access information sources. One of the features of tools like APIs is that they have fixed query and response formats. The job of the agent is to process natural language information into the format structure and parse the response to use it for generation.

#### Adaptive retrieval

Recall adaptive retrieval discussed in chapter 6. An LLM is enabled to determine the most appropriate moment and content for retrieval. This is an extension of query routing, where after deciding the most appropriate source to query, an agent can also determine whether the retrieved information is good enough to generate responses or whether another iteration of retrieval is required. For the next iteration, the agent can also form fresh queries based on the retrieved context. This enables the RAG system to solve complex queries.

These capabilities enable agentic RAG systems to be comprehensive and work on a scale. While the indexing and generation pipelines do not change in structure, agents can be invoked throughout the two pipelines.

### 8.4.3 Agentic RAG pipelines

The capability of LLM-based agents to understand the context and invoke tools can be used to elevate each stage of the RAG pipeline.

#### Indexing pipeline

The idea of the knowledge base in agentic RAG is no different from standard RAG. Agents can be used across components to enhance the indexing pipeline:

- *Data loading*—Loading data and extracting information is the first and incredibly crucial step of RAG system development. Accurate parsing of information is critical in building an accurate RAG system. Parsing complex documents such as PDF reports can be tough. While there are libraries and tools present for these tasks, LLM agents can be used for high-precision parsing. The importance of metadata in RAG cannot be overstated. It is useful for filtering, more contextual mapping, and source citation. In most scenarios, it is difficult to source rich metadata. LLM agents can be used to build metadata architecture and extract contextual metadata.

- *Chunking*—In agentic chunking, chunks from the text are created based on a goal or a task. Consider an e-commerce platform wanting to analyze customer reviews. The best way for the reviews to be chunked is if the reviews about a particular topic are put in the same chunk. Similarly, the critical and positive reviews may be put in different chunks. To achieve this kind of chunking, we will need to do sentiment analysis, entity extraction, and some kind of clustering. This can be achieved by a multiagent system. Agentic chunking is still an active area of research and improvement.

- *Embeddings*—The role of agents in embeddings can be the selection of the right embeddings model, depending on the context of the chunks. For example, if there is information from multiple domains in the loaded data, there may be a case for using domain-specific embeddings for different chunks. Apart from this, quality control agents can validate embeddings by measuring similarity or alignment with predefined standards or use case requirements. You may also recall from the discussion on graph RAG that agents can also decide to use graph structures for certain chunks.

- *Storage*—There is also a possibility to store chunk embeddings from the same document in different collections owing to the nature of the information. For example, the information related to the installation and troubleshooting of a product can be stored in one collection of a vector database, and product features and advantages can be stored in another. This helps in setting the retrieval up for higher precision. You may notice that the use of agents in chunking, embeddings, and storage are closely related.

Figure 8.13 summarizes how the use of agents can embellish the indexing pipeline. The nature of the knowledge base itself doesn’t change, but the process of creation is embellished with agents.

#### Generation Pipeline

The true advantage of an agentic system lies in how it transforms the entire generation pipeline across all three stages:

- *Retrieval*—Perhaps the most significant use of agents is in the retrieval stage. Query routing to the most appropriate source and the integration of tools to query external sources of information is a crucial feature of agentic RAG.

![img](https://learning.oreilly.com/api/v2/epubs/urn:orm:book:9781633435858/files/OEBPS/Images/CH08_F13_Kimothi.png)

Figure 8.13 Agentic embellishment to the indexing pipeline enhances the quality of the knowledge base.

- Adaptive retrieval strategies also bring significant improvement in the retrieval stage.

- *Augmentation*—Agents can choose the correct prompting technique for augmentation, depending on the nature of the query and the retrieved context. Prompts can also be generated dynamically by an agent.

- *Generation*—One of the uses of agentic RAG is also in multistep generation such as IterRetGen or iterative-retrieval generation. In this approach, an agent is used to review the response generated by the LLM in the first pass, and it decides if any further iteration of retrieval and generation is required to completely respond to the user query. This is particularly useful in multi-hop reasoning and fact verification.

Another way to think about agentic RAG is that wherever dynamic decision-making can improve the RAG system, an agent can be used to autonomously make those decisions. From the previous discussion, you may conclude that agentic RAG is a superior version of standard RAG. Table 8.4 summarizes the advantages of agentic over standard RAG.

##### Table 8.4 Advantages of agentic RAG

| Aspect                   | Standard RAG                                                 | Agentic RAG                                                  |
| ------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| Retrieval process        | Passive retrieval based on initial query                     | Adaptive retrieval with intelligent agents routing and reformulating queries as needed |
| Handling complex queries | Struggles with multistep reasoning and complex queries       | Can be used to break down and address complex, multifaceted queries |
| Tool integration         | Limited integration with external tools and APIs             | Seamless integration with various external tools and APIs for enhanced information gathering |
| Scalability              | Challenges in scaling due to static processes                | Scalable through modular agent-based architecture, allowing for easy expansion |
| Accuracy and relevance   | Dependent on initial query quality; may retrieve less relevant information | Higher accuracy and relevance due to agents’ ability to refine queries and validate information |

### 8.4.4 Challenges and pest practices

LLM based agents are still evolving and are not foolproof. There are also concerns around the planning and reasoning abilities of LLMs. For implementing agentic abilities into the RAG pipelines, a few aspects should be evaluated carefully:

- The accuracy of tool selection diminishes when a single agent is responsible for invoking a high number of tools. Therefore, the number of decision choices for the agent needs to be controlled.

- No agent can be expected to be accurate all the time. Error rates in multiagent systems can also increase. It is important to establish a failsafe at every stage. The choice of the use case should also be guided by the expected accuracy levels.

- Increased autonomy in decision-making can lead to unintended actions if not properly controlled. In other words, agents can misfire, and establishing explicit boundaries and guidelines for agent behavior is critical.

Multimodal, graph, and agentic RAG patterns have demonstrated significant improvements over the standard RAG pipelines. Multimodal RAG opens the RAG systems to different modalities, graph RAG introduces relational understanding, and agentic RAG infuses RAG systems with intelligence and autonomous decision making. Apart from these three, ongoing research on RAG has resulted in several other frameworks and variations to the standard RAG systems. The next section discusses *variants* that show significant promise.

## 8.5 Other RAG variants

We have talked about the three major RAG *variants* in this chapter. Research in the field is bustling, and every week, several papers are released by researchers about their experiments and key findings. Out of these papers, quite a few demonstrate RAG *variants* that find relevance in practical applications. We close this chapter by briefly discussing four such RAG variants.

### 8.5.1 Corrective RAG

The effectiveness of a RAG system depends on the quality of retrieval. Inaccuracies in retrieval negate all RAG benefits. To address this, the corrective RAG (CRAG) approach evaluates the quality of retrieved documents. It uses a lightweight evaluator and triggers corrective action if the retrieved information is found to be inaccurate. The key CRAG components are

- *Retrieval evaluator*—A model that evaluates the relevance of the retrieved documents and assigns a relevance score to each retrieved document. In the original CRAG paper (https://arxiv.org/abs/2401.15884), the evaluator is a fine-tuned T5 model that assigns a score of being correct, incorrect, or ambiguous.

- *Web search supplementation*—If a retrieved document is classified as incorrect, the system conducts a web search to supplement the knowledge base, ensuring more accurate, up-to-date information.

- *Knowledge refinement*—Retrieved documents classified as correct by the evaluator and the content retrieved from web search are broken down further into smaller knowledge strips, and each strip undergoes evaluation.

Figure 8.14 illustrates the CRAG workflow with the evaluator, knowledge refinement, and web search added to the standard RAG flow.

As for its advantages and limitations, CRAG secures accurate, context-relevant knowledge for generation, particularly in cases where initial retrieval may be flawed. The corrective actions enhance the factual accuracy of the generated content. CRAG is a solution that can be integrated with all RAG pipelines and other RAG *variants* without causing any disruptions. There are also a couple of factors that need to be considered:

- The additional corrective actions and web search integration may increase response time.

- The performance of the system is closely tied to the accuracy of the evaluator model.

CRAG is an improvement over standard RAG, which uses the retrieved documents as is. The corrective approach makes it effective for accuracy-sensitive applications that demand data verification.

![img](https://learning.oreilly.com/api/v2/epubs/urn:orm:book:9781633435858/files/OEBPS/Images/CH08_F14_Kimothi.png)

Figure 8.14 CRAG corrects the knowledge at the most granular level, hence the name corrective RAG. Source: https://arxiv.org/abs/2401.15884.

### 8.5.2 Speculative RAG

Latency and redundancy are ubiquitous concerns in RAG systems. Speculative RAG addresses these in a two-step approach. First, small language models parallelly generate multiple answer drafts, each based on diverse subsets of documents. Then, a larger LLM verifies and selects the most accurate draft. The key components of speculative RAG are

- *Document clustering*—Retrieved documents are clustered into topic-related groups, each offering a unique perspective.

- *RAG drafter*—A smaller LLM produces initial answer drafts based on each cluster subset, generating responses and rationales in parallel for efficiency.

- *RAG verifier*—A larger LLM evaluates each draft’s accuracy and coherence, assigning confidence scores based on self-consistency and rationale support.

The key advantage of speculative RAG is faster response generation by reducing the workload on the generator LLM and performing parallel draft generation. However, some of the following limitations require careful consideration:

- Involves managing a two-model setup and document clustering, which may increase initial setup complexity.

- Document clustering directly affects draft diversity, and poor clustering can lead to redundant drafts by grouping highly similar or repetitive documents into multiple clusters.

- The smaller LLM may require training for effective draft and rationale generation.

Unlike standard RAG, which incorporates all retrieved data into a single prompt, speculative RAG uses parallel draft generation for efficiency and a dedicated verification step for accuracy, which leads to a reduction in latency, while improving the factual efficiency of the responses.

### 8.5.3 Self-reflective (self RAG)

Self-reflection in an LLM is the ability of the LLM to analyze its actions, identify potential errors or flaws in its reasoning process, and then use that feedback to improve its responses and decision-making. Self RAG incorporates reflection to dynamically decide whether to retrieve relevant information, evaluate retrieved content, and to critique its output. The key components of self RAG are

- *Reflection tokens*—Self RAG trains an LLM to use “reflection tokens,” which help it assess the relevance, support, and usefulness of retrieved passages. These tokens are designed to guide the model in judging the quality of both the retrieved content and its generated response, adding layers of control and adaptability. A *retrieve token* indicates whether retrieval is needed. Similarly, the *relevance token* determines whether a passage is relevant, the *support token* verifies whether the generated response is fully supported by retrieved content, and the *utility token* scores the usefulness of the response.

- *Dynamic retrieval decision*—The model uses reflection tokens to determine if retrieval is necessary based on each segment of the response and skips retrieval if it is unnecessary at any step.

- *Self-critique*—The model critiques its output at each generation step, applying reflection tokens to guide retrieval and refine the response in real time.

Adaptive retrieval in self RAG reduces unnecessary retrievals, and self-reflection results in better accuracy, factual consistency, and relevance. However, some limitations need to be considered:

- Processing multiple passages in parallel and self-reflection may increase computational demands.

- The additional training and use of reflection tokens require fine-tuning of thresholds.

Self RAG is one of the most cited techniques in research on RAG. Its dynamic adjustment of retrieval based on task needs evaluates output quality, achieving superior accuracy.

### 8.5.4 RAPTOR

Recursive abstractive processing for tree-organized retrieval, or RAPTOR, is a RAG variant designed to handle hierarchical relationships in data. It creates a multilevel, tree-based structure of recursive summaries, capturing both granular details and overarching themes in long documents. Like graph RAG, RAPTOR uses a tree structure to achieve similar objectives. Here are the key RAPTOR components:

- *Chunk clustering and summarization*—Chunk embeddings are clustered based on similarity, and an LLM is used to summarize the clusters. Soft clustering with Gaussian mixture models allows text segments to belong to multiple clusters.

- *Recursive tree construction*—RAPTOR builds a multilayered tree by using chunks, clusters, and summaries in a bottom-up process.

- *Dual querying mechanisms*—A top-down approach starts traversing down to select the most relevant nodes at each level based on cosine similarity to the query. Another single-layer search retrieves context across all tree nodes irrespective of the levels.

Like graph RAG, RAPTOR enables better multi-hop reasoning and thematic question answering by incorporating both granular and high-level summaries. However, tree structures are complex to manage and RAPTOR comes with its set of challenges:

- The recursive clustering and summarization steps can be computationally intensive, especially for very large documents.

- Effective retrieval hinges on the quality of the clustering; errors in initial clustering can propagate up the tree.

Unlike standard RAG, which may struggle with multilayered content, RAPTOR’s hierarchical model allows targeted retrieval, optimizing for both specificity and contextual relevance.

This chapter explored RAG *variants* that use advanced techniques to improve RAG systems for specific use cases. Multimodal pipelines give RAG systems access to previously unusable data, graph RAG provides the ability of relational analysis, and agentic RAG introduces autonomous decision-making for complex tasks. Each RAG variant addresses a certain aspect of improvement in standard RAG systems. Corrective RAG focuses on factual relevance, RAPTOR builds relational intelligence for hierarchical data, speculative RAG is built for efficiency, and self RAG makes the system adaptive.

With this chapter, we are almost at the end of our discussion on RAG. The last chapter discusses some of the independent considerations and best practices across different stages of RAG system lifecycle.

## Summary

### Introducing RAG variants

- RAG *variants* are adaptations of the naïve RAG framework that extend its functionality to specific use cases.

- These *variants* address challenges, such as processing nontextual data, improving relational understanding, enhancing accuracy, and enabling autonomous decision-making.

- Three major RAG *variants* were discussed in depth: multimodal, graph, and agentic RAG.

- Other promising RAG *variants* are corrective RAG, speculative RAG, self RAG, and RAPTOR.

### Multimodal rag

- It extends RAG capabilities to handle multiple data modalities such as text, images, audio, and video. It can be used for

  - *Medical diagnosis*—Analyzing text, images (X-rays), and tabular data (lab results)

  - *Investment analysis*—Processing financial documents, charts, and balance sheets

  - *Equipment maintenance*—Combining text reports, visual inspections, and sensor data

- As for the pipeline enhancements, multimodal RAG introduces multimodal embeddings (shared or modality specific), transcription tools, and specialized chunking methods to indexing pipeline. In the generation pipeline, it employs multimodal LLMs (e.g., GPT-4o, Google Gemini).

- Multimodal RAG has high computational requirements and increased latency. Information loss is possible during text conversion of nontext modalities.

### KG RAG

- It enhances retrieval and reasoning through relationships represented in a graph structure. It can be used for

  - *Personalized treatment plans*—Linking drugs, conditions, and symptoms for customized recommendations

  - *Contract analysis*—Identifying dependencies and compliance risks across interconnected legal documents

- As for the pipeline enhancements, the KG RAG extracts entities, relationships, and attributes from chunks to create a graph in the indexing pipeline. As for the generation pipeline, it incorporates graph traversal using graph query languages such as Cypher.

- Building and maintaining KGs is complex and computationally expensive. It also requires custom adaptations for each deployment.

### Agentic RAG

- It introduces LLM-based agents for autonomous decision-making and dynamic query routing. Agentic RAG can be used for

  - Query understanding and routing to relevant data sources

  - Adaptive retrieval and multistep generation

  - Integration with tools such as web search APIs and external databases

- With regard to pipeline enhancements, agentic RAG enhances chunking, metadata extraction, and embeddings selection with agentic decision-making in the indexing pipeline. In the generation pipeline, it dynamically augments prompts and employs iterative retrieval-generation workflows.

- Agentic RAG requires robust controls to prevent unintended actions by agents. High computational overhead and multiplied error rates in multiagent systems.

### Other RAG variants

- Corrective RAG (CRAG) Focuses on factual accuracy by evaluating retrieved content. It also adds corrective steps such as web search supplementation and knowledge refinement.

  - *Advantages*—Enhances accuracy and can integrate seamlessly with other RAG pipelines

  - *Challenges*—Increased response time and dependency on the evaluator model

- Speculative RAG reduces latency by generating multiple drafts in parallel using smaller LLMs. A larger LLM verifies and selects the most accurate draft.

  - *Advantages*—Faster response generation

  - *Challenges*—Requires careful document clustering and draft diversity

- Self RAG incorporates reflection tokens for adaptive retrieval and self-assessment of generated content.

  - *Advantages*—Superior accuracy and factual consistency

  - *Challenges*—Computationally demanding and requires fine-tuned thresholds

- RAPTOR builds hierarchical relationships through tree-structured summaries.

  - *Advantages*—Optimized for multi-hop reasoning and thematic queries

  - *Challenges*—Computationally intensive and relies on effective clustering