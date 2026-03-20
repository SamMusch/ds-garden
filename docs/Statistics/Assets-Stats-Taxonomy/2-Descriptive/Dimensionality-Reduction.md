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
_kMDItemDisplayNameWithExtensions: Dimensionality-Reduction.md
ai_abstract: null
ai_key_terms: []
aliases: null
children: 0
created: '2026-03-20'
cssclasses: null
grandchildren: 0
kMDItemContentCreationDate: 2025-01-20 18:29:33 +0000
kMDItemContentCreationDate_Ranking: 2025-05-19 00:00:00 +0000
kMDItemContentModificationDate: 2026-03-20 21:56:13 +0000
kMDItemContentType: net.daringfireball.markdown
kMDItemContentTypeTree: (
kMDItemDateAdded: 2025-05-19 18:46:56 +0000
kMDItemDocumentIdentifier: '627729'
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
reading_time: 1.2
source_file: Dimensionality-Reduction.md
tags: null
title: Dimensionality Reduction
word_count: 231
---

### Dimensionality Reduction

Curse of dimensionality

- More dimensions = sparse data (you'll have tons of variation if we have a ton of features)

- Additional features can throw in extra noise

- Distance metrics don't work as well in high dimensions

- Probability distributions don't work well in high dimensions

PCA

- Remove overlap among variables while retaining variation

- Max variance, min reconstruction error

- Transform correlated features into uncorrelated features (ie principal components)

Procedure  

1. Normalize input data (z score recommended)

2. PCA computes a smaller basis from our features (ie principal components). Each principal component is an eigenvector, their corresponding value (importance) is the eigenvalue.

3. Sort these principal components with the most important on top. 1st axis shows most variance among the data, 2nd shows next, etc.

4. Eliminate the least important components. Need to do some kind of "elbow plot" to see how many principal components we need.

 Break matrix into eigen decomp

- Eigen vect = principal components

- Eigen values = value from the original features



### Reduction Techniques
(PCA, Factor Analysis, t-SNE, UMAP)

**Dimensionality reduction**: reduce number of variables

-  **PCA** combines columns, removes old ones

- **Attribute subset selection** removes unneeded columns, uses some stats test to determine which

**Numerosity reduction**: replace data with smaller form

- Parametric (regression)

- Nonparametric (clustering, sampling)

**Data compression**: reconstruct dataset

- Discrete wavelet transformation transforms a column into wavelet coefficients, and then drops the rows that are not significant