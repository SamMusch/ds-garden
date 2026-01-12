---
published: true
---

**Indexing Pipeline**: Load ⟶ chunk ⟶ embed ⟶ *store*

*Service* = capacity/cluster MGMT

- ***Serverless*** = automatic scaling/maintenance. (==this one==)

    - [vector engine](https://aws.amazon.com/opensearch-service/serverless-vector-database/) provides **vector storage** and **search capability**


***Amazon OpenSearch Serverless***

- **is a**: managed *engine*

- **Primary purpose**: search & vector retrieval

- **Stores**: docs + vectors + metadata

- **Query model**: semantic/keyword/vector searches

- **Scaling & ops**: autoscaling for search workloads.

- **Data strength**: text + metadata + similarity

**Compare to Aurora/pgvector**: OpenSearch simplifies scaling & improves retrieval performance.