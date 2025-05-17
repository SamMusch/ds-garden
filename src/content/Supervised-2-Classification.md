**2025-02-02**: DONE, quality could be improved though.

Resources
- [Stanford Cheatsheet](https://stanford.edu/~shervine/teaching/cs-229/cheatsheet-machine-learning-tips-and-tricks)
- [k-nn - 100 days guide](https://github.com/Avik-Jain/100-Days-Of-ML-Code/blob/master/Code/Day%2011%20K-NN.md)

[Image: Decision Boundaries](https://i.imgur.com/rljQgL9.jpeg)

## Overview
- **Purity Measures**: Gauge how homogeneous or “pure” each segment is after splitting.
- **Information Gain**: Measures the effectiveness of a new split (or segment) compared to the original.
- **Statistical Significance**: Each additional “child” branch in a tree should be validated, often with a chi-squared test, to confirm that the improvement in segmentation is statistically significant.


## Table Summary

https://chatgpt.com/share/679fc159-020c-8000-b16e-e3fd1b93bfc7

- **k-NN** is intuitive and simple but can be slow for large datasets.
- **Naive Bayes** is fast and works well with high-dimensional data but assumes independent features.
- **Logistic Regression** is a well-understood parametric approach, ideal for linearly separable data, and can handle regularization elegantly.
- **Decision Trees** are highly interpretable but can overfit if not carefully regularized (via max depth, minimum samples per leaf, etc.).


```ad-sam

| **CATEGORY**            | **CORE IDEA**                                                                                                                                                          | **MODEL TYPE**     | **KEY HYPERPARAMETERS**                                                                                                                                           | **STRENGTHS**                                                                                                                            | **WEAKNESSES**                                                                                                                                                                                     | **REGULARIZATION**                                                                              |
| ----------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| **k-NN**                | 1. Find _k_ closest neighbors <br><br>2. Majority vote or average.                                                                                                     | **Non-parametric** | **k**: Number of neighbors.<br><br>**Distance metric**                                                                                                            | Simple to implement. <br><br>Minimal statistical assumptions. <br><br>Models complex decision boundaries.                                | Slow for large data. <br><br>Bad in high-d space. <br><br>Domain knowledge for good distance metric.                                                                                               | Not typically applied, could use dimensionality reduction                                       |
| **Naive Bayes**         | Applies Bayes’ Theorem with a **naive** assumption of conditional independence among features                                                                          | **Probabilistic**  | **Distribution** choice (e.g. Multinomial)                                                                                                                        | Fast <br><br>Robust with many features. <br><br>Works well with small datasets.                                                          | Bad if features are highly correlated.                                                                                                                                                             | Smoothing techniques to avoid zero probabilities. (e.g., Laplace smoothing)                     |
| **Logistic Regression** | Estimates the probability of each class via a **linear combination** of features passed through a **sigmoid** (or softmax) function, making it a **parametric** model. | **Parametric**     | **C**: Inverse regularization strength. <br><br>**multi_class**: One-vs-Rest or multinomial. <br><br>**Regularization** type                                      | Interpretable coefficients. <br><br>Can incorporate **regularization** <br><br>Good when data is linearly (or log-linearly) separable.   | May struggle with highly non-linear relationships. <br><br>Sensitive to outliers if **regularization** is not used properly. Assumes linear (or log-linear) deci-bound.                            | **L1 (Lasso)** <br><br>**L2 (Ridge)** <br><br>**Elastic Net**: Combo of L1 and L2.              |
| **Decision Trees**      | Splits data into **hierarchical** branches based on feature values, aiming to maximize “purity” at each split.                                                         | **Non-parametric** | **max_depth**: Maximum tree depth.<br><br>**min_samples_leaf**: Minimum samples required in a leaf node. <br><br>Splitting **criterion** (e.g., Gini or Entropy). | Highly interpretable <br><br>Handles numeric & categorical <br><br>Don't need scaling or dummies. <br><br>Handles multi-output problems. | **Overfitting** if grown without constraints. <br><br>Greedy splitting may not yield a global optimum. <br><br>Sensitive to data imbalance. <br><br>Can struggle with certain complex interactions | Indirectly via **max_depth**, **min_samples_leaf**, etc. <br><br>Pruning can reduce overfitting |

```


## Extra Details
### Naive Bayes

```ad-sam
Intuition
- For each observation, given its characteristics (features), the model computes the probability that it belongs to a particular class. (Often relies on different distributions for numeric columns.)


**Prob of being in group**
= prop of my attribute given that they were in the group 
\* prop of dataset in the group 
/ prop of dataset with my attribute

<img src="https://i.imgur.com/pgtG11S.png" style="zoom:33%;" />


```


### Logistic

```ad-sam
Target
- **Binary (Logit)**: Two classes (0 or 1).
- **Softmax Regression**: Multiple classes (unordered); picks the class with the highest probability.
- **Ordered Logit**: Multiple _ordered_ classes.


$probability(x) \: = \: \frac{1}{e^(-1 \: * \: regression \: model)}$

[Image | Logistic Regression Sigmoid Curve](https://i.imgur.com/nq0l2cu.png)

Steps
1. For each observation in the raw data, we calculate the sum of the coefficients for all variables. This is f(x).
2. The x-axis location on the logit plot is the f(x) we calculated above for each observation.
3. For each observation, we then assign the probability of fitting into the top or bottom group according to the logit curve.
4. We use the probabilities that we found in the logit model as a way to best fit the line that separates our groups apart to minimize the error in our sample. This is how we determine our original slope and intercept.
5. We assign L1 as the maximum f(x) that we are willing to allow. (This is lambda)
   More complex = higher f(x) = larger diamond
6. We 'underfit' the model until it connects with the blue diamond (ie max complexity we allow). This new model will provide us with a new slope and intercept that will generalize better.

```


#### Regularization

```ad-sam
Regularization helps prevent **overfitting** by penalizing large coefficients.

| **Type**                | **Penalty**                                 | **Key Characteristics**                                                                                          |
|-------------------------|---------------------------------------------|-------------------------------------------------------------------------------------------------------------------|
| **L1 (Lasso)**          | Sum of absolute values of weights           | - Encourages sparsity (some coefficients may become zero)<br/>- Can be unstable with highly correlated features<br/>- Avoids using all features if many are redundant |
| **L2 (Ridge)**          | Sum of squared values of weights            | - Tends to shrink coefficients but rarely sets any to zero<br/>- More stable in the presence of correlated features |
| **Elastic Net (L1 + L2)** | Combination of L1 and L2 penalties         | - Useful when multiple correlated features are suspected<br/>- Retains feature selection from L1 while benefiting from L2’s stability |
[Image | Regularization](https://i.imgur.com/kkS2s4S.png)
[Image | Normalization](https://i.imgur.com/sZeYixm.png)

```


### Decision Trees

#### Purity

```ad-sam
When deciding how to split a node, decision tree algorithms use measures like **Gini Impurity** or **Entropy** to assess how "pure" the resulting child nodes are. Below is a quick comparison:

| **Measure**      | **Range (Binary Setting)** | **Calculation**                  | **Characteristics**                                                                                  |
|------------------|----------------------------|----------------------------------|-------------------------------------------------------------------------------------------------------|
| **Gini Impurity**| 0 (pure) to 0.5 (impure)  | Uses squares of class probabilities | - Slightly faster to compute<br>- Tends to isolate the most frequent class                          |
| **Entropy**      | 0 (pure) to 0.5 (impure)  | Uses logs of class probabilities    | - Tends to produce more balanced splits                                                              |

```
