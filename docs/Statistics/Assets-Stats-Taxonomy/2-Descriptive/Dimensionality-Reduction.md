---
published: true
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