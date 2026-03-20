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
_kMDItemDisplayNameWithExtensions: Linear-Algebra.md
ai_abstract: null
ai_key_terms: []
aliases: null
children: 0
created: '2026-03-20'
cssclasses: null
grandchildren: 0
kMDItemContentCreationDate: 2024-09-08 15:29:37 +0000
kMDItemContentCreationDate_Ranking: 2025-05-19 00:00:00 +0000
kMDItemContentModificationDate: 2026-03-20 21:56:12 +0000
kMDItemContentType: net.daringfireball.markdown
kMDItemContentTypeTree: (
kMDItemDateAdded: 2025-05-19 18:46:56 +0000
kMDItemDocumentIdentifier: '627709'
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
kMDItemInterestingDate_Ranking: 2024-09-08 00:00:00 +0000
kMDItemLastUsedDate: 2024-09-08 15:30:22 +0000
kMDItemLastUsedDate_Ranking: 2024-09-08 00:00:00 +0000
kMDItemUseCount: '10'
kMDItemUsedDates: (
modified: '2026-03-20'
published: true
reading_time: 4.0
source_file: Linear-Algebra.md
tags: null
title: Linear Algebra
word_count: 803
---

Resources:

- [Textbook | Oreilly](https://learning.oreilly.com/library/view/hands-on-artificial-intelligence/9781788991063/ec33ab68-7334-4c45-acb6-31953e0bba40.xhtml) - Notes are below

- [Ageron Github Guide](https://github.com/ageron/handson-ml/blob/ac1310a3cc1567ecfb4b798715c804627076775f//math_linear_algebra.ipynb)


## Oreilly Text

### Overview
Math is often related to AI via linear algebra. 

Linear algebra:

- Branch of **continuous** mathematics

- Involves study of vector space & operations performed in vector space. 

### Types of Objects
The basic building blocks of matrices & tensors are the primary data structures for solving, optimizing, and approximating within an ANN.

4 fundamental types of LA objects used in AI:

- **Scalars**: Singular, **real numbers**. Integer or floating point.

- **Vectors**: 1D arrays of integers. Geometrically, they store the direction & magnitude of change from a point.

- **Matrices**: 2D lists of numbers. Contain rows & columns.

- **Tensors**: These store info throughout NNs that allow them to operate.

    - A tensor is a generalized matrix. They have different sizes (ranks), which measure their dimensions. 

    - Tensors are 3D+ lists. 

    - Tensors have a unique **transitive** property and form; if a tensor transforms another entity, it too must transform.

    - Can represent word embeddings, weights in a neural network, etc