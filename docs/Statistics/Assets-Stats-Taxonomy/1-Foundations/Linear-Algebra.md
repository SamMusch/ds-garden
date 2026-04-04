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
kMDItemContentCreationDate: 2024-09-08 15:29:37 +0000
kMDItemContentModificationDate: 2026-04-04 18:16:25 +0000
kMDItemDateAdded: 2025-05-19 18:46:56 +0000
kMDItemFSFinderFlags: '0'
published: true
reading_time: 0.9
source_file: Linear-Algebra.md
tags: null
word_count: 186
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