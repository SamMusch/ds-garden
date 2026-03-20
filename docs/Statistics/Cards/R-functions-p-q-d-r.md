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
_kMDItemDisplayNameWithExtensions: R-functions-p-q-d-r.md
ai_abstract: null
ai_key_terms: []
aliases: null
children: 0
created: '2026-03-20'
cssclasses: null
grandchildren: 0
kMDItemContentCreationDate: 2025-01-01 19:41:53 +0000
kMDItemContentCreationDate_Ranking: 2025-01-01 00:00:00 +0000
kMDItemContentModificationDate: 2026-03-20 22:09:14 +0000
kMDItemContentType: net.daringfireball.markdown
kMDItemContentTypeTree: (
kMDItemDateAdded: 2025-05-19 18:39:49 +0000
kMDItemDocumentIdentifier: '627690'
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
kMDItemLastUsedDate: 2026-03-20 22:08:58 +0000
kMDItemLastUsedDate_Ranking: 2026-03-20 00:00:00 +0000
kMDItemUseCount: '5'
kMDItemUsedDates: (
kMDItemUserModifiedDate: (
kMDItemUserModifiedUserHandle: (
modified: '2026-03-20'
published: true
reading_time: 0.6
source_file: R-functions-p-q-d-r.md
tags: null
title: R functions p q d r
word_count: 112
---

## R Functions
[Source](http://portal.survey.ntua.gr/main/labs/hgeod/ddeli/analmgeo/Notes/R%20Language%20Basic%20Statistics%20Cheatsheet.pdf)
Every distribution in R has **4 functions**. (Basically, 4 prefixes + name of the distribution.)

| Use Case   | `Function` | Name        | Description                                             | Layman Explanation                                                         |
| ---------- | ---------- | ----------- | ------------------------------------------------------- | -------------------------------------------------------------------------- |
| Continuous | `p`        | Probability | Cumulative Distribution Function (CDF)                  | "What is the probability above or below a cutoff?"                         |
| Continuous | `q`        | Quantile    | Inverse CDF                                             | "What value corresponds to, say, 80% of the way to the maximal value?"     |
| Both       | `d`        | Density     | Density function (PMF for discrete, PDF for continuous) | "What is the 'height' or y-value of the distribution at a specific point?" |
| Both       | `r`        | Random      | Random Variable Generator                               | "Generate random values following this distribution."                      |