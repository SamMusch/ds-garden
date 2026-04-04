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
kMDItemContentCreationDate: 2026-01-12 16:14:29 +0000
kMDItemContentModificationDate: 2026-04-04 18:16:25 +0000
kMDItemDateAdded: 2026-01-12 16:14:55 +0000
kMDItemFSFinderFlags: '0'
published: true
reading_time: 0.4
source_file: Analytics-OpenSearch.md
tags: null
word_count: 76
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