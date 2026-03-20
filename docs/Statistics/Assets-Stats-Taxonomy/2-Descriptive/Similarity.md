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
_kMDItemDisplayNameWithExtensions: Similarity.md
ai_abstract: null
ai_key_terms: []
aliases: null
children: 0
created: '2026-03-20'
cssclasses: null
grandchildren: 0
kMDItemContentCreationDate: 2025-01-20 18:37:38 +0000
kMDItemContentCreationDate_Ranking: 2025-05-19 00:00:00 +0000
kMDItemContentModificationDate: 2026-03-20 21:56:13 +0000
kMDItemContentType: net.daringfireball.markdown
kMDItemContentTypeTree: (
kMDItemDateAdded: 2025-05-19 18:46:56 +0000
kMDItemDocumentIdentifier: '627726'
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
reading_time: 1.4
source_file: Similarity.md
tags: null
title: Similarity
word_count: 282
---

>[!sam]
>- Data Visualization Techniques
> - Summary Statistics and Insights
> - Identifying Patterns and Anomalies
> - Correlation Analysis


### Similarity

[Image: Types of Similarity](https://i.imgur.com/vVFUNGz.png)

- **Direct** | Literally, how far away are the points

- **Contextual** | Think clusters. Points within a cluster are similar.

- **Conceptual** | Think philosophy.


### Computing | Continuous Data

| **Distance Metric**            | **Summary**                                                            | **When to use**                                                                                      | **When NOT to use**                 | **LaTeX Formula**                                     |
| ------------------------------ | ---------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ----------------------------------- | ----------------------------------------------------- |
| **Euclidean**                  | As the crow flies                                                      | When you want shortest direct distance between points, and all variables are equally important.      | High dimensionality, outliers       | $d = \sqrt{\sum_{i=1}^n (a_i - b_i)^2}$               |
| **Manhattan**                  | Adds up distances along each axis, like walking city blocks in a grid. | When movement happens in straight lines or when variables are on different units/scales.             |                                     | $d = \sum_{i=1}^n \|a_i - b_i\|$                      |
| **Minkowski**                  | Can act like Euclidean, Manhattan, or something in between             | When you want a general approach that can adjust to the problem’s needs, especially for varied data. | When simpler methods work too       | $d = \left(\sum_{i=1}^n \|a_i - b_i\|^p\right)^{1/p}$ |
| **Max-Coordinate (Chebyshev)** | Looks at **biggest difference** between points.                        | When you care about largest / most extreme impact                                                    | When overall distance is important. | $d = \max_i \|a_i - b_i\|$                            |

---

### Computing | Mixed Data (Gower)

**Gower Distance**
For each variable type: 

1. Select distance metric

2. Scale from 0 to 1
Then, apply linear combo to calculate final distance matrix

**Variable types:**

* **Interval**: Manhattan

* **Ordinal**: Variable is first ranked, then Manhattan distance is used with a special adjustment for ties

* **Nominal**: Variables of k categories are first converted into `k` binary columns and then the [Dice coefficient](http://stats.stackexchange.com/a/55802/21654) is used



### Computing | Nominal

**Cosine Similarity** (for text or high-dimensional data)