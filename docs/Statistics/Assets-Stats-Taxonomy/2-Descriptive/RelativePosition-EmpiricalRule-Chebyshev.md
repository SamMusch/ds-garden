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
_kMDItemDisplayNameWithExtensions: RelativePosition-EmpiricalRule-Chebyshev.md
ai_abstract: null
ai_key_terms: []
aliases: null
children: 0
created: '2026-03-20'
cssclasses: null
grandchildren: 0
kMDItemContentCreationDate: 2025-01-04 18:58:49 +0000
kMDItemContentCreationDate_Ranking: 2025-05-19 00:00:00 +0000
kMDItemContentModificationDate: 2026-03-20 21:56:13 +0000
kMDItemContentType: net.daringfireball.markdown
kMDItemContentTypeTree: (
kMDItemDateAdded: 2025-05-19 18:46:56 +0000
kMDItemDocumentIdentifier: '627728'
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
reading_time: 1.7
source_file: RelativePosition-EmpiricalRule-Chebyshev.md
tags: null
title: RelativePosition EmpiricalRule Chebyshev
word_count: 341
---

### 2.4 [Relative Position of Data](https://saylordotorg.github.io/text_introductory-statistics/s06-04-relative-position-of-data.html) | Percentile, quartiles, 5-number summary, z-score
!!! sam
    **Objectives**:

    1. Learn concept of *relative position* of an element of a data set.

    2. Learn 2 measures of the *relative position* of a measurement.

        1. percentile rank 

        2. _z_-score

    3. Learn meaning of quartiles

    4. Learn meaning of the five-number summary (box plot)


#### Percentiles
**Percentile**::Percent of data $\leq$ the number.
#### Quartiles
1st Q = 25%
2nd Q = 50% (median)
3rd Q = 75%

**5-number summary**::Includes the 3 quartiles and the 2 extreme values (box plot)
**IQR**::$Q_3 - Q_1$
#### Z-score
**Z-score**::distance from the mean in units of standard deviation.

Z = $\frac{Value - Mean}{St Dev}$


### 2.5 The Empirical Rule and Chebyshev’s Theorem

#### **The Empirical Rule** | 68-95-99.7 Rule 

- **The Empirical Rule**::applies to **normal distributions** (bell-shaped and symmetric). It provides approximate percentages of data within specific standard deviations of the mean.

- **Key Points**:

  - **68%** of the data falls within **1 standard deviation** of the mean.

  - **95%** of the data falls within **2 standard deviations** of the mean.

  - **99.7%** of the data falls within **3 standard deviations** of the mean.

- **Use Case**: This rule is commonly used when dealing with data that is approximately normally distributed.
#### **Chebyshev’s Theorem**

- **Chebyshev’s Theorem**::applies to **any distribution** (not limited to normal distributions). It provides a minimum percentage of data that lies within a specified number of standard deviations from the mean.

- **Key Points**:

  - For **$k$ standard deviations** (where $k > 1$), at least $1 - \frac{1}{k^2}$ of the data lies within $k$ standard deviations of the mean.

    - Example:

      - For $k = 2$, at least $1 - \frac{1}{2^2} = 75\%$ of the data is within 2 standard deviations.

      - For $k = 3$, at least $1 - \frac{1}{3^2} = 88.9\%$ of the data is within 3 standard deviations.

- **Use Case**: This theorem is useful when the distribution shape is unknown or not normal.