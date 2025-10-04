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
_kMDItemDisplayNameWithExtensions: 03-Indexing.md
ai_abstract: null
ai_key_terms: []
aliases: null
children: 0
created: '2025-10-04'
cssclasses: null
grandchildren: 0
kMDItemContentCreationDate: 2025-08-08 21:02:24 +0000
kMDItemContentCreationDate_Ranking: 2025-08-10 00:00:00 +0000
kMDItemContentModificationDate: 2025-10-04 15:51:54 +0000
kMDItemContentType: net.daringfireball.markdown
kMDItemContentTypeTree: (
kMDItemDateAdded: 2025-08-10 17:15:48 +0000
kMDItemDocumentIdentifier: '176588'
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
kMDItemInterestingDate_Ranking: 2025-08-08 00:00:00 +0000
kMDItemLastUsedDate: 2025-08-08 21:11:56 +0000
kMDItemLastUsedDate_Ranking: 2025-08-08 00:00:00 +0000
kMDItemUseCount: '23'
kMDItemUsedDates: (
modified: '2025-10-04'
published: true
reading_time: 0.7
source_file: 03-Indexing.md
tags: null
title: 03 Indexing
word_count: 140
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