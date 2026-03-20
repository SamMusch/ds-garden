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
_kMDItemDisplayNameWithExtensions: Power.md
ai_abstract: null
ai_key_terms: []
aliases: null
children: 0
created: '2026-03-20'
cssclasses: null
grandchildren: 0
kMDItemContentCreationDate: 2024-09-21 17:29:15 +0000
kMDItemContentCreationDate_Ranking: 2025-05-19 00:00:00 +0000
kMDItemContentModificationDate: 2026-03-20 21:56:12 +0000
kMDItemContentType: net.daringfireball.markdown
kMDItemContentTypeTree: (
kMDItemDateAdded: 2025-05-19 18:39:49 +0000
kMDItemDocumentIdentifier: '627692'
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
reading_time: 1.5
source_file: Power.md
tags: null
title: Power
word_count: 295
---

[DataCamp Vid: Power and sample size](https://campus.datacamp.com/courses/ab-testing-in-r/introduction-to-ab-tests?ex=8)

**Why do we need power?** Makes sure that, when we do reject the null, it was done correctly instead of just due to small data.

| Parameter                     | Meaning                                                                                                                                                                                              |
| ----------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **d**                         | **Effect size** (Cohen's _d_ for means, or *h* for proportions). <br>Measures standardized difference between 2 groups.<br>Cohen’s effect size conventions (small = 0.2, medium = 0.5, large = 0.8). |
| **power**                     | Probability of correctly rejecting the null. <br>80% --> "If there is an effect, I want an 80% of detecting it."                                                                                     |
| **sig.level**                 |                                                                                                                                                                                                      |
| **type = "one.sample"**       |                                                                                                                                                                                                      |
| **alternative = "two.sided"** |                                                                                                                                                                                                      |

### How many subjects do we need?

```r
# Means
library(pwr)
pwr.t.test(d = 0.81,       # Cohen
		   #n = ,          # what we're looking for
		   power = 0.8,
		   sig.level = 0.05,
		   type = "one.sample",
		   alternative = "two.sided")

# n = 14.3 people per test/control, round up to 15. (Since we testing against some known average, it'll just be 15 people total.)
```


```r
# Proportions
library(pwr)
pwr.p.test(h = 0.5,        # Cohen
		   #n = ,          # what we're looking for
           power = 0.8,
           sig.level = 0.05, 
           alternative = "two.sided")

```


### If we already ran the test, how much power is there?

```r
# Means
library(pwr)
pwr.t.test(d = 0.81, 
		   n = 20,
		   # power = 0.8,          # what we're looking for
		   sig.level = 0.045,
		   type = "one.sample",
		   alternative = "two.sided")

# power = 0.92. This is larger than 80%, so we're good to go.
```


```r
# Proportions
library(pwr)
pwr.p.test(h = 0.81,  # Cohen's h for proportions effect size
           n = 20,    # Sample size
           # power = NA,          # Power is what we're calculating
           sig.level = 0.045,    # Significance level
           alternative = "two.sided")   # Two-sided test

```