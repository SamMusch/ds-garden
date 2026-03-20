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
_kMDItemDisplayNameWithExtensions: Analytics-OpenSearch.md
ai_abstract: null
ai_key_terms: []
aliases: null
children: 0
created: '2026-03-20'
cssclasses: null
grandchildren: 0
kMDItemContentCreationDate: 2026-01-12 16:14:29 +0000
kMDItemContentCreationDate_Ranking: 2026-01-12 00:00:00 +0000
kMDItemContentModificationDate: 2026-03-20 21:56:12 +0000
kMDItemContentType: net.daringfireball.markdown
kMDItemContentTypeTree: (
kMDItemDateAdded: 2026-01-12 16:14:55 +0000
kMDItemDocumentIdentifier: '0'
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
kMDItemInterestingDate_Ranking: 2026-03-20 00:00:00 +0000
modified: '2026-03-20'
published: true
reading_time: 0.4
source_file: Analytics-OpenSearch.md
tags: null
title: Analytics OpenSearch
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