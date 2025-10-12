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
_kMDItemDisplayNameWithExtensions: 03-INDEXING.md
ai_abstract: null
ai_key_terms: []
aliases: null
children: 0
created: '2025-10-11'
cssclasses: null
grandchildren: 0
kMDItemContentCreationDate: 2025-10-07 22:23:24 +0000
kMDItemContentCreationDate_Ranking: 2025-10-07 00:00:00 +0000
kMDItemContentModificationDate: 2025-10-12 01:55:46 +0000
kMDItemContentType: net.daringfireball.markdown
kMDItemContentTypeTree: (
kMDItemDateAdded: 2025-10-07 22:23:24 +0000
kMDItemDocumentIdentifier: '222797'
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
kMDItemInterestingDate_Ranking: 2025-10-12 00:00:00 +0000
kMDItemLastUsedDate: 2025-08-08 21:11:56 +0000
kMDItemLastUsedDate_Ranking: 2025-08-08 00:00:00 +0000
kMDItemUseCount: '23'
kMDItemUsedDates: (
modified: '2025-10-11'
published: true
reading_time: 4.1
source_file: 03-INDEXING.md
tags: null
title: 03 INDEXING
word_count: 823
---

Steps

1. [[#3.1-Loading]]: Use LangChain to connect to source ⟶ extract docs ⟶ parse text

2. [[#3.2 Data splitting (chunking)]]: Take parsed data ⟶ chunk. Choose between fixed-size, specialized, or semantic

3. [[#3.3 Data conversion (embeddings)]]: Take chunks ⟶ embed into vectors to enable similarity search

4. [[#3.4 Storage (vector DBs)]]: Index & store vector embeddings for semantic search & retrieval

[[#Indexing-Code]]

[Figure 2.4 | PIPELINES & COMPONENTS](https://learning.oreilly.com/api/v2/epubs/urn:orm:book:9781633435858/files/OEBPS/Images/CH02_F04_Kimothi.png)


load ⟶ split ⟶ embed ⟶ store


## 3.1-Load
!!! sam
    *data loading*: process of sourcing data from its original location

    data-loading components:

    1. *Connect* to source

    2. *Extract* & *parse*

    3. *Metadata* review

    4. *Transform* and clean




## 3.2 Split-Chunk

!!! sam
    **chunking**

    - **advantages**

        - *Context window of LLMs*

        - *Lost-in-the-middle problem*

        - *Ease of search*

    - **process**: from small ⟶ big

        1. **Divide**: Long text ⟶ compact units (eg sentences)

        2. **Merge**: Units ⟶ larger chunks

        3. **Overlap**: Maintain overlap for context continuity

    - **methods**

        - **Fixed-size** (when uniform data): split using special list of characters

        - **Specialized** (when html, md, json, code): split using h tags, key-value pairs, etc

        - **Semantic** (when need semantics): group sentences based on semantic similarity

    - **method considerations**

        - **Nature of content**: could use different methods per source

        - **Q length/complexity**

        - **Use case**: short ⟶ Q&A, long ⟶ summarization

        - **Embeddings model**




## 3.3 Data conversion (embeddings)

load ⟶ split ⟶ *embed* ⟶ store

- store chunks as **embeddings** ⟶ store in *vector database*

**embeddings | motivating example**: 2 ways to find info

- keywords ⟶ match docs ⟶ show results

- semantics ⟶ match **embeddings** ⟶ show results

**embeddings**

- **are**: vector representations of data (words, sentences, etc)

- **are**: data transformed into *n*-dimensional matrices

- **do**: calc similarity & establish semantic relationships

**embedding models** (for w/s/p)

- **purpose**: Enable similarity search. Position similar w/s/p near each other.

- **how**: convert w/s/p into *n*-dim ***vectors***

**embeddings** use cases:

- *Text search (RAG)*: search KB for optimal chunk

- *Clustering*: categorize similar data together

- *ML*: convert text ⟶ numbers (features)

**embedding algos** | considerations:

- ***Use case***: select based on your task (eg retrieval, semantic text similarity, summarization)

- ***Cost***: more tokens ⟶ more dollars

[HF MTEB Leaderboard](https://huggingface.co/spaces/mteb/leaderboard)

| Embedding algos                                                                              | Team            | Note                                           |
| -------------------------------------------------------------------------------------------- | --------------- | ---------------------------------------------- |
| *Word2Vec*                                                                                   | Google          | shallow NN                                     |
| *<abbr title="Global Vectors for Word Representations">GloVe</abbr>*                         | Stanford        | unsupervised learning                          |
| *FastText*                                                                                   | Meta            | shallow NN, extends Word2Vec                   |
| *<abbr title="Embeddings from Language Models">ELMo</abbr>*                                  | Allen Institute | for Q&A and sentiment                          |
| *<abbr title="Bidirectional Encoder Representations from Transformers">BERT</abbr>* (Transf) | Google          | provides contextualized word embeddings via bi |

OpenAI's:

- *ada-002* (2022-12) 1536 dims

- *3-small* (2024-01) 1536 dims. Users can adjust size based on their needs.

- *3-large* (2024-01) 3072 dims.

#### Extra Notes
*vector*:

- **in physics**: an object with magnitude (length) & direction

- **in ML**: an abstract representation of data (array or list, rep a feature/attribute)

- **in NLP**: can rep a doc, a sentence, a word.

embedding example:

- **words**: dog, bark, fly.

- **similarities** (2D):

    - **contextually**: dog & bark

    - **grammatically**: bark & fly (verbs)

**SIMILARITY**
Similar pieces of text lie close to each other.
similarity calculations | common measures

- *cosine similarity*: use **angles**. (0 deg = similar, 90 deg = unrelated, 180 deg = opposite)

- *euclidean distance*: use **distance**

## 3.4 Storage (vector DBs)


**databases**: organized collections of data

- **Relational**: organize structured data into rows x columns. (MySQL)

- **NoSQL**: handle unstructured & semi-structured (MongoDB)

- **Graph**: query graph data (Neo4j)

- ***Vector*: handle high-d vectors**

    - efficiently store and retrieve vector data such as embeddings

    - index & store vector embeddings for semantic search & retrieval

    - also offer <abbr title="scalability, security, multi-tenancy, versioning, data management, query processing, interfaces">traditional features</abbr> of dbs


```tabs

tab: vector DBs
***vector* databases** | 6 categories:

- *Vector indexes*: focus on **indexing** and **search**. No <abbr title="scalability, security, multi-tenancy, versioning, data management, query processing, interfaces">traditional features</abbr>. (eg <abbr title="Facebook AI Similarity Search">FAISS</abbr>, <abbr title="Non-Metric Space Library">NMSLIB</abbr>, <abbr title="Approximate Nearest Neighbors Oh Yeah">ANNOY</abbr>, <abbr title="Scalable Nearest Neighbors">ScaNN</abbr>)

- *Specialized vector DBs*: same as ^, plus <abbr title="scalability, security, multi-tenancy, versioning, data management, query processing, interfaces">traditional features</abbr>. (eg Pinecone, ChromaDB, Milvus, Qdrant, Weaviate, Vald, LanceDB, Vespa, Marqo.)

- *Search platforms*: built for full text search, have now added vector similarity search capabilities. (eg Solr, Elastic Search, Open Search, and Apache Lucene)

- *SQL databases*: added vector capability. (eg Azure SQL, Postgres SQL(pgvector), SingleStore, and CloudSQL)

- *NoSQL databases*: added vector capability. (eg MongoDB)

- *Graph databases*: have vector capability. (eg Neo4j)

tab: choice considerations

- *Accuracy vs. speed*

- *Flexibility vs. performance*: customizations add overhead

- *Local vs. cloud storage*: local (storage speed, access) **vs** cloud (security, redundancy, scalability)

- *Direct access vs. API*: need tight control via direct libraries? or are ease-of-use abstractions like APIs better?

- *Simplicity vs. advanced features*: how advanced do we need to be?

- *Cost*

```


popular providers:

- **<abbr title="Facebook AI Similarity Search">FAISS</abbr>**: light, works for many applications

- **ChromaDB**: user-friendly vector DB

- **Pinecone**: offers managed services & customization