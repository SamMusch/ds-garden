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
kMDItemContentCreationDate: 2025-01-01 19:41:53 +0000
kMDItemContentModificationDate: 2026-04-04 18:16:25 +0000
kMDItemDateAdded: 2025-05-19 18:39:49 +0000
kMDItemFSFinderFlags: '0'
kMDItemUserModifiedDate: (
kMDItemUserModifiedUserHandle: (
published: true
reading_time: 0.6
source_file: R-functions-p-q-d-r.md
tags: null
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