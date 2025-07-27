---
title: AB Testing
created: '2025-07-25'
modified: '2025-07-25'
source_file: AB Testing.md
word_count: 63
reading_time: 0.3
children: 0
grandchildren: 0
ai_abstract: null
ai_key_terms: []
_kMDItemDisplayNameWithExtensions: AB Testing.md
kMDItemContentCreationDate: 2025-07-09 15:43:11 +0000
kMDItemContentCreationDate_Ranking: 2025-07-09 00:00:00 +0000
kMDItemContentModificationDate: 2025-07-26 04:17:47 +0000
kMDItemContentType: net.daringfireball.markdown
kMDItemContentTypeTree: (
kMDItemDateAdded: 2025-07-09 15:43:11 +0000
kMDItemDocumentIdentifier: '169411'
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
kMDItemInterestingDate_Ranking: 2025-07-26 00:00:00 +0000
kMDItemLastUsedDate: 2025-07-26 04:17:47 +0000
kMDItemLastUsedDate_Ranking: 2025-07-26 00:00:00 +0000
kMDItemUseCount: '6'
kMDItemUsedDates: (
kMDItemUserModifiedDate: (
kMDItemUserModifiedUserHandle: (
Due: null
Function: null
Objective: null
Quality: null
QualityComment: null
ReviewFreq: null
CoverImage: null
HoursDone: null
HoursRemain: null
tags: null
TimeSpent: null
TimeSpent2: null
Covers: null
cssclasses: null
aliases: null
---

## Terms
Assume A is control, B is test. 

```ad-sam
Dependent Variable
- Continuous
- Proportions
```

```ad-sam
Are A & B 2 separate, independent groups?
- Yes --> **Unpaired**
- No --> **Paired** (same group, multiple periods)
```

```ad-sam
Are we simply comparing B to a known benchmark?
- Yes --> **One-Sample**
- No --> **Two-Sample**
```

```ad-sam
Does B need to out-perform control?
- Yes --> **One-Sided**
- No --> **Two-Sided**
```

