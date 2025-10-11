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
kMDItemContentModificationDate: 2025-10-11 18:34:47 +0000
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
kMDItemInterestingDate_Ranking: 2025-10-11 00:00:00 +0000
kMDItemLastUsedDate: 2025-08-08 21:11:56 +0000
kMDItemLastUsedDate_Ranking: 2025-08-08 00:00:00 +0000
kMDItemUseCount: '23'
kMDItemUsedDates: (
modified: '2025-10-11'
published: true
reading_time: 6.7
source_file: 03-INDEXING.md
tags: null
title: 03 INDEXING
word_count: 1340
---

```
Note Topics: Indexing Pipeline MOC.
```

Recall:

- **Indexing pipeline** Creates the KB / non-parametric memory

    - More technically, convert messy source info into a clean KB with single format.

- **Indexing pipeline** is built before the real-time user interaction

Steps

1. [[#3.1-Loading]]: Use LangChain to connect to source ⟶ extract docs ⟶ parse text

2. [[#3.2 Data splitting (chunking)]]: Take parsed data ⟶ chunk. Choose between fixed-size, specialized, or semantic

3. [[#3.3 Data conversion (embeddings)]]: Take chunks ⟶ embed into vectors to enable similarity search

4. [[#3.4 Storage (vector DBs)]]: Index & store vector embeddings for semantic search & retrieval

[[#Indexing-Code]]

[Figure 2.3 | PIPELINES](https://learning.oreilly.com/api/v2/epubs/urn:orm:book:9781633435858/files/OEBPS/Images/CH02_F03_Kimothi.png)
[Figure 2.4 | PIPELINES & COMPONENTS](https://learning.oreilly.com/api/v2/epubs/urn:orm:book:9781633435858/files/OEBPS/Images/CH02_F04_Kimothi.png)


## 3.1-Loading
*load* ⟶ split ⟶ embed ⟶ store

*data loading*: process of sourcing data from its original location

data-loading components:

1. *Connect* to source

2. *Extract* & *parse*

3. *Metadata* review

4. *Transform* and clean

LangChain

- **is**: an open source framework developed by Harrison Chase

- **purpose**: helps build LLM apps

- **languages**: Python and JavaScript

- **other uses**: chatbots, document summarizers, synthetic data generation

- **integrates with**:

    - **LLM providers**: eg OpenAI, Anthropic, Hugging Face

    - **vector store providers**

    - **cloud storage systems**: eg AWS, Google, Azure, SQL & NoSQL databases

    - **APIs**: eg news, weather

## 3.2 Data splitting (chunking)
load ⟶ *split* ⟶ embed ⟶ store

Tokens

- **are**: the fundamental semantic units used in NLP

- OpenAI suggests one token to be made of four characters or 0.75 words

 **chunking advantages**:

- *Context window of LLMs*

- *Lost-in-the-middle problem*

- *Ease of search*

**chunking process**: “small to big”:

1. **Divide**: Long text ⟶ compact units (eg sentences)

2. **Merge**: Units ⟶ larger chunks

3. **Overlap**: Maintain overlap for context continuity

**chunking methods**

1. **Fixed-size**: use a special character or list of characters

2. **Specialized**: use h tags, key-value pairs, etc

3. **Semantic**: group sentences together based on semantic similarity

| Method      | how it works                      | use when             | weakness          |
| ----------- | --------------------------------- | -------------------- | ----------------- |
| Fixed-size  | predetermined (uniform + overlap) | uniform data         | ignores semantics |
| Specialized | based on source structure         | html, md, json, code | ignores semantics |
| Semantic    | based on semantic similarity      | need semantics       | experimental      |

**chunking methods** | considerations:

1. **Nature of the content** (use different method per sources if need)

2. **Expected length & complexity of queries**

3. **Use case reqs** (short chunks for Q&A, long chunks for summarization)

4. **Embeddings model**

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

load ⟶ split ⟶ embed ⟶ ***store***

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

## Indexing-Code

### 3.1 Loading

```python
url = "https://en.wikipedia.org/wiki/2023_Cricket_World_Cup"
loader = AsyncHtmlLoader (url)
html_data = loader.load()
```

`html_data`: list of docs that include 2 elements

- `page_content`: text from url

- `metadata`: important in RETRIEVAL stage, also helps resolve conflicting info.

*cleaning*

- package: `langchain-community`

- library: `document_transformers`

- function: `Html2Text­Transformer`

*cleaning*

- new line characters, HTML tags, special characters, mask PII & secrets

[doc loaders](https://python.langchain.com/docs/integrations/document_loaders/)
[transformers](https://python.langchain.com/docs/integrations/document_transformers/)

### 3.3 Embeddings

```python
# 3.3

# TASK: find doc chunks near query

# HUGGINGFACE
from langchain_huggingface import HuggingFaceEmbeddings
embeddings = HuggingFaceEmbeddings(model_name="sentence-transformers/all-mpnet-base-v2") # Instantiate embeddings object
hf_embeddings = embeddings.embed_documents([chunk.page_content for chunk in final_chunks]) # Create embeddings for all chunks
len(hf_embeddings [0]) # 768

# OPENAI
from langchain_openai import OpenAIEmbeddings
embeddings = OpenAIEmbeddings(model="text-embedding-3-small") # Instantiate embeddings object
openai_embeddings = embeddings.embed_documents([chunk.page_content for chunk in chunks]) # Create embeddings for all chunks
len(openai_embedding[0]) # 1536
```

`hf_embeddings` and `openai_embeddings`:

- list of lists. each list is an embedding

[Figure 3.8: HuggingFace: the embeddings space of all chunks.](https://learning.oreilly.com/api/v2/epubs/urn:orm:book:9781633435858/files/OEBPS/Images/CH03_F08_Kimothi.png)

### 3.4 Vector DB

```python
# 3.4.2
# vector index: FAISS from Facebook

# TASK: convert the 285 chunks ⟶ vector embeddings ⟶ stored in a FAISS vector index

from langchain_community.vectorstores import FAISS
from langchain_community.docstore.in_memory import InMemoryDocstore
from langchain_openai import OpenAIEmbeddings

Final_chunks=final_chunks                 # Chunks from Section 3.3
embeddings=OpenAIEmbeddings(
model="text-embedding-3-small")           # Instantiate the embeddings object

vector_store = FAISS(                     # Instantiate the FAISS object
    embedding_function=embeddings,
    index=index,
    docstore=InMemoryDocstore(),
    index_to_docstore_id={},)

vector_store.add_documents(documents=final_chunks) # Add the chunks
vector_store.index.ntotal                 # Check the number of chunks that have been indexed
# 285

# Saving to local memory
# vector_store.save_local(folder_path,index_name)
# FAISS.load_local(folder_path,index_name)
```

```python
# Using the vector store

query = "Who won the 2023 Cricket World Cup?"
docs = vector_store.similarity_search(query)   # Rank chunks in desc order of similarity
print(docs[0].page_content)                    # Printing one of the top-ranked chunk
```