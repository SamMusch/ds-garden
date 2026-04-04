---
Function: null
Objective: null
Quality: null
QualityComment: null
ReviewFreq: null
ai_abstract: null
ai_key_terms: []
children: 0
grandchildren: 0
kMDItemContentCreationDate: 2025-10-07 22:23:24 +0000
kMDItemContentModificationDate: 2026-04-04 18:16:23 +0000
kMDItemDateAdded: 2025-10-07 22:23:24 +0000
kMDItemFSFinderFlags: '0'
published: true
reading_time: 2.8
source_file: 03-INDEXING.md
tags: null
word_count: 562
---

## TL;DR

!!! sam
    LLM x RAG systems have 2 sources of **memory**:

    - *Parametric*: learned during initial LLM training.

    - *Non-parametric*: info stored in our KB

        - *==Indexing==* pipeline: creates KB (**THIS DOC**)

        - *Generation* pipeline: retrieves from KB


**Indexing Pipeline steps to create the KB**:

1. [[#1-Load]] information from source systems

2. [[#2-Chunk]] into smaller pieces

3. [[#3-Embed]] into vectors to enable similarity search

4. [[#4-Store]] in a vector DB

<img src="https://i.imgur.com/clHMu8p.png" alt="Indexing Pipeline" width="50%">

---

## 1-Load
!!! sam
    **steps**:

    1. *Connect* to source

    2. *Extract* & parse

    3. *Metadata* review

    4. *Transform* and clean


    Source data could be in many formats: md / data lakes / data warehouses / internet



## 2-Chunk
!!! sam
    **steps**:

    1. *Divide* long text ⟶ compact units

    2. *Merge* units ⟶ larger chunks

    3. *Overlap* chunks to maintain context continuity


!!! sam
    **advantages | why *chunking* helps LLMs**:

    - *Context window*: LLMs ignore content beyond token limit.

    - *Lost-in-the-middle problem*: LLMs struggle with relevant info in middle of prompts.

    - *Search*: LLMs struggle when searching over large text.


!!! sam
    **methods**:

    - *Fixed-size*: based on special characters (eg characters / tokens / sentences / paragraphs)

    - *Specialized*: based on file structure (eg h tags / key-value pairs)

    - *Semantic*: sentence groups are based on semantic similarity

    **method considerations**: Nature of source content / use case / embedding model



## 3-Embed
(See [[00-Building-Blocks#Embedding]] for context.)

!!! sam
    **steps**:

    1. *Convert* chunks ⟶ numerical vectors

    2. *Normalize*

    3. *Validate* vector quality


!!! sam
    **advantages | why *embeddings* helps LLMs**:

    - _Semantics_: better than just keywords

    - _Vector similarity_: rank docs by context relevance, send best to LLM (via `cosine similarity` or `dot-product distance`)

    - _Scalability_: turns text into numeric vectors, making search and comparison fast.

    - _Cross-modal alignment_: compare text / images / etc under a shared representation space.


!!! sam
    [HF MTEB Leaderboard](https://huggingface.co/spaces/mteb/leaderboard)

    | Embedding algos                                                                              | Team            | Note                                           |
    | -------------------------------------------------------------------------------------------- | --------------- | ---------------------------------------------- |
    | *Word2Vec*                                                                                   | Google          | shallow NN                                     |
    | *<abbr title="Global Vectors for Word Representations">GloVe</abbr>*                         | Stanford        | unsupervised learning                          |
    | *FastText*                                                                                   | Meta            | shallow NN, extends Word2Vec                   |
    | *<abbr title="Embeddings from Language Models">ELMo</abbr>*                                  | Allen Institute | for Q&A and sentiment                          |
    | *<abbr title="Bidirectional Encoder Representations from Transformers">BERT</abbr>* (Transf) | Google          | provides contextualized word embeddings via bi |



## 4-Store
!!! sam
    **Non-vector DB types**: *Relational*, *NoSQL*, *Graph*

    ***Vector DBs***:

    - store & retrieve vector data

    - index & store vector embeddings for semantic search & retrieval


!!! sam
    **vector DB categories & providers**:

    | category                 | core focus                                  | <abbr title="scalability, security, multi-tenancy, versioning, data management, query processing, interfaces">traditional features</abbr> | providers                                                                                                                                                                                                                                 |
    | ------------------------ | ------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
    | *Vector indexes*         | Index & search                              | N                                                                                                                                         | <abbr title="Facebook AI Similarity Search">`FAISS`</abbr>, <abbr title="Non-Metric Space Library">NMSLIB</abbr>, <abbr title="Approximate Nearest Neighbors Oh Yeah">ANNOY</abbr>, <abbr title="Scalable Nearest Neighbors">ScaNN</abbr> |
    | *Specialized vector DBs* | Index & search                              | Y                                                                                                                                         | `Pinecone`, `ChromaDB`, Milvus, Qdrant, Weaviate, Vald                                                                                                                                                                                    |
    | *Search platforms*       | full text search & vector similarity search |                                                                                                                                           | Solr, Elastic Search, Open Search, Apache Lucene                                                                                                                                                                                          |
    | *SQL databases*          | add-on vector capability                    |                                                                                                                                           | Azure SQL, Postgres, SingleStore, CloudSQL                                                                                                                                                                                                |
    | *NoSQL databases*        | add-on vector capability                    |                                                                                                                                           | MongoDB                                                                                                                                                                                                                                   |
    | *Graph databases*        | add-on vector capability                    |                                                                                                                                           | Neo4j                                                                                                                                                                                                                                     |


!!! sam
    **vector DB choice considerations**:

    - *Accuracy vs. speed*

    - *Flexibility vs. performance*: customizations add overhead

    - *Local vs. cloud storage*: local (storage speed, access) **vs** cloud (security, redundancy, scalability)

    - *Direct access vs. API*: need tight control via direct libraries? or are ease-of-use abstractions like APIs better?

    - *Advanced features*: how advanced do we need to be?

    - *Cost*