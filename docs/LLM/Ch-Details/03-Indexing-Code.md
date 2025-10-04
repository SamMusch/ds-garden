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
_kMDItemDisplayNameWithExtensions: 03-Indexing-Code.md
ai_abstract: null
ai_key_terms: []
aliases: null
children: 0
created: '2025-10-04'
cssclasses: null
grandchildren: 0
kMDItemContentCreationDate: 2025-08-11 18:23:21 +0000
kMDItemContentCreationDate_Ranking: 2025-08-11 00:00:00 +0000
kMDItemContentModificationDate: 2025-10-04 15:51:55 +0000
kMDItemContentType: net.daringfireball.markdown
kMDItemContentTypeTree: (
kMDItemDateAdded: 2025-08-11 19:51:02 +0000
kMDItemDocumentIdentifier: '176609'
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
kMDItemInterestingDate_Ranking: 2025-10-04 00:00:00 +0000
modified: '2025-10-04'
published: true
reading_time: 1.7
source_file: 03-Indexing-Code.md
tags: null
title: 03 Indexing Code
word_count: 332
---

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

# TASK: convert the 285 chunks --> vector embeddings --> stored in a FAISS vector index

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