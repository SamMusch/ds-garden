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
_kMDItemDisplayNameWithExtensions: Association-Rules.md
ai_abstract: null
ai_key_terms: []
aliases: null
children: 0
created: '2026-03-20'
cssclasses: null
grandchildren: 0
kMDItemContentCreationDate: 2025-01-20 18:24:14 +0000
kMDItemContentCreationDate_Ranking: 2025-05-19 00:00:00 +0000
kMDItemContentModificationDate: 2026-03-20 21:56:12 +0000
kMDItemContentType: net.daringfireball.markdown
kMDItemContentTypeTree: (
kMDItemDateAdded: 2025-05-19 18:46:54 +0000
kMDItemDocumentIdentifier: '627697'
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
reading_time: 1.1
source_file: Association-Rules.md
tags: null
title: Association Rules
word_count: 218
---

### Association Rules

If you bought x, you prob also bought y
(Not necessarily the other way around)

`Total set` - all products in store
`Subset` - a transaction
`Co-occurences` (or `frequent itemset`) - looking across these subsets, what tend to be purchased together?
&nbsp; `Frequent sequential pattern` - first buy a laptop, then a cover, then a mouse  

**Applications**
Product placement (pop to pop)
Product bundling (pop to indy)
User profiling (indy to indy)

**Notes**
Association rules are not causal
Anticipate ripple effects

---

**Rule:** left -> right
**Evaluate**
&nbsp; **Suport:** how often do they appear together? (this **does not** change if we swap left and right)
&nbsp; **Confidence:** given left, how often do we see right? (this **does** change if we swap left and right)
&nbsp; **Lift:** how does the **confidence** compare to random chance?
&nbsp;&nbsp; Lift = 1 means random

**Apriori method** (Parameters we set when finding rules)
Phase 1 - Min support (need to have enough in common)
Phase 2 - Min confidence (one leading to the other)

---

In this example, the combo of `c + d + e` was frequent. By definition, all **subsets** (less detail) above must all be frequent with each other.
[Image](https://i.imgur.com/u5I0RsF.png)


---

The combo `a + b` was infrequent. All resulting **supersets** (greater detail) must also be infrequent
[Image](https://i.imgur.com/uLs4Juv.png)