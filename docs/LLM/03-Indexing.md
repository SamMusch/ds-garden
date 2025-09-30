---
published: true
---

```
Note Topics: Indexing Pipeline MOC.
```


Recall:

- **Indexing pipeline** Creates the KB / non-parametric memory

    - More technically, convert messy source info into a clean KB with single format.

- **Indexing pipeline** is built before the real-time user interaction

Steps

1. [[3.1-Loading]]: Use LangChain to connect to source ⟶ extract docs ⟶ parse text

2. [[3.2-Splitting-Chunking]]: Take parsed data ⟶ chunk. Choose between fixed-size, specialized, or semantic

3. [[3.3-Converting-Embedding]]: Take chunks ⟶ embed into vectors to enable similarity search

4. [[3.4-Storage-Vector-DBs]]: Index & store vector embeddings for semantic search & retrieval

[[03-Indexing-Code]]

[Figure 2.3 | PIPELINES](https://learning.oreilly.com/api/v2/epubs/urn:orm:book:9781633435858/files/OEBPS/Images/CH02_F03_Kimothi.png)
[Figure 2.4 | PIPELINES & COMPONENTS](https://learning.oreilly.com/api/v2/epubs/urn:orm:book:9781633435858/files/OEBPS/Images/CH02_F04_Kimothi.png)