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

- [Ageron Github Guide](https://github.com/ageron/handson-ml/blob/ac1310a3cc1567ecfb4b798715c804627076775f//math_linear_algebra.ipynb) - Kind of complex, might want to find something simpler.


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


### Matrix Math

#### Scalar Operations
Scalar operations involve a vector (or matrix) and a scalar. To perform an operation with a scalar on a matrix, simply apply to the scalar to every item in the matrix:

![[Pasted image 20241231122725.png]]

In Python, we would simply do the following:
```python
vector = np.array([[1,2], [1,2]])  
new_vector = vector + 2
```


#### Element-Wise Operations
In element-wise operations, position matters. Values that correspond positionally are combined to create a new value. 

To add to and/or subtract matrices or vectors:
![[Pasted image 20241231122814.png]]

And in Python:
```python
a = np.array([[1,2],[3,4]])   # vector_one
b = np.array([[5,6],[7,8]])   # vector_two


a + b  ## You should see:  # array([[ 6, 8],[10, 12]])  
a - b  ## You should see:  # array([[-4, -4], [-4, -4]])
```


There are two forms of multiplication that we may perform with vectors: the **Dot product**, and the **Hadamard product**.

The dot product is a special case of multiplication, and is rooted in larger theories of geometry that are used across the physical and computational sciences. It is a special case of a more general mathematical principle known as an **inner product**. When utilizing the dot product of two vectors, the output is a scalar:
![[Pasted image 20241231123314.png]]

Dot products are a workhorse in machine learning. Think about a basic operation: let's say we're doing a simple classification problem where we want to know if an image contains a cat or a dog. If we did this with a neural network, it would look as follows:
![[Pasted image 20241231123338.png]]

Here, y is our classification cat or dog. We determine y by utilizing a network represented by f, where the input is $x$, while w and b represent a weight and bias factor (don't worry, we'll explain this in more detail in the coming chapter!). Our $x$ and w are both matrices, and we need to output a scalar , which represents either cat or dog. We can only do this by taking the dot product of w and $x$.


 Relating back to our example, if this function were presented with an unknown image, taking the dot product will tell us how similar in direction the new vector is to the cat vector (a) or dog vector (b) by the measure of the angle ($\theta$) between them:
![[Pasted image 20241231123452.png]]


If the vector is closer to the direction of the cat vector (a), we'll classify the image as containing a cat. If it's closer to the dog vector (b), we'll classify it as containing a dog. In deep learning, a more complex version of this scenario is performed over and over; it's the core of how ANNs work.

In Python, we can take the dot product of two vectors by using a built-in function from numpy.

```python
## Dot Product  
vector_one = np.array([1,2,3])  
vector_two = np.array([2,3,4])  
np.dot(vector_one,vector_two) ## This should give us 20
```

The Hadamard product, on the other hand, outputs a vector:
![[Pasted image 20241231123605.png]]

The Hadamard product is element-wise, meaning that the individual numbers in the new matrix are the scalar multiples of the numbers from the previous matrices. Looking back to Python, we can easily perform this operation in Python with a simple * operator:

```python
# Hadamard product
vector_one = np.array([1,2,3])  
vector_two = np.array([2,3,4])  
vector_one * vector_two  
## You should see:  array([ 2,  6, 12])
```

Now that we've scratched the surface of basic matrix operations, let's take a look at how probability theory can aid us in the artificial intelligence field.