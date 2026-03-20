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
_kMDItemDisplayNameWithExtensions: Statistics-Taxonomy.md
ai_abstract: null
ai_key_terms: []
aliases: null
children: 0
created: '2026-03-20'
cssclasses: null
grandchildren: 0
kMDItemContentCreationDate: 2025-01-03 03:17:54 +0000
kMDItemContentCreationDate_Ranking: 2025-01-03 00:00:00 +0000
kMDItemContentModificationDate: 2026-03-20 22:08:45 +0000
kMDItemContentType: net.daringfireball.markdown
kMDItemContentTypeTree: (
kMDItemDateAdded: 2026-03-20 21:42:07 +0000
kMDItemDocumentIdentifier: '627686'
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
kMDItemLastUsedDate: 2026-03-20 22:08:39 +0000
kMDItemLastUsedDate_Ranking: 2026-03-20 00:00:00 +0000
kMDItemUseCount: '17'
kMDItemUsedDates: (
kMDItemUserModifiedDate: (
kMDItemUserModifiedUserHandle: (
modified: '2026-03-20'
published: true
reading_time: 4.1
source_file: Statistics-Taxonomy.md
tags: null
title: Statistics Taxonomy
word_count: 820
---

```
After breaking out SW vault, could integrate back into here.
```


[[Stats-Glossary]]

# Taxonomy

## Putting It All Together

| Core 4                                                        | Topic/Doc                               | Contains                                                                                                                                                              |
| ------------------------------------------------------------- | --------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1. **`Foundations`**                                          | **Terms and Symbols**                   |                                                                                                                                                                       |
|                                                               | [[Probability-MOC]]                     | Basic rules, RVs, Distributions                                                                                                                                       |
|                                                               | [[Linear-Algebra]]                      | Vectors, norms, eigenvalues, eigenvectors, linear transformation                                                                                                      |
|                                                               | **Optimization**                        | Unconstrained eg gradient descent, constrained like Lagrange multipliers                                                                                              |
|                                                               | **Numerical Methods**                   | Approximation techniques, simulations                                                                                                                                 |
| 2. **`Descriptive Statistics`**                               | **Univariate**                          | Measures of central tendency, dispersion - [[RelativePosition-EmpiricalRule-Chebyshev]]                                                                               |
|                                                               | [[EDA]]                                 | Outliers, data transformations, insights                                                                                                                              |
|                                                               | Multivariate                            | **[[Dimensionality-Reduction]]** (PCA, Factor Analysis, t-SNE, UMAP, [[AutoEncoding]])                                                                                |
|                                                               |                                         | **[[Similarity]]**                                                                                                                                                    |
|                                                               |                                         | **[[Clustering]]**                                                                                                                                                    |
|                                                               |                                         | **[[Topic-Modeling]]**                                                                                                                                                |
| 3. **`Inferential Statistics`**                               | **Foundation of Statistical Inference** | Sampling distributions, estimation (point and CIs), hypothesis testing)                                                                                               |
|                                                               | **Regression & Correlation**            | Linear regression, Pearson, goodness of fit ($R^2$, likelihood), residuals, model selection (AIC, BIC)                                                                |
|                                                               | **GLMs**                                | Core concepts (link functions), applications (logistic regression, Poisson regression)                                                                                |
|                                                               | **Special Topics**                      | Causal inference, survival analysis, multilevel (hierarchical) modeling, robust methods (medians), advanced testing (Bonferroni, adaptive methods, family-wise error) |
| 4. **`Further Extensions`**: Bridge descriptive & inferential | **Bayesian Methods**                    | Core concepts, MCMC, Bayesian Hierarchical Models - [[Bayes-MCMC]], [[Bayesian-Networks]]                                                                           |
|                                                               | **Experimental Design**                 | Core topics (ANOVA, Factorial Designs, Randomized Block Designs), [[AB-Testing]]                                                                                      |
|                                                               | **Time Series**                         | Models (ARIMA, SARIMA, Exponential Smoothing), applications (Forecasting, trend/seasonality analysis)                                                                 |
|                                                               | **ML/DM**                               | Predictive modeling                                                                                                                                                   |
|                                                               |                                         | **Unsupervised**: [[Anomaly-Detection]], [[Association-Rules]]                                                                                                        |



# Taxonomy - Detailed
## 1. Foundations

### 1.0 Terms and Symbols
2025-01-04: In-progress, spread out as cards.

### 1.1 Probability
[[Probability-MOC]]
*Why*: Probability is the foundation of uncertainty modeling, key to all aspects of statistics.

- **Basic Probability Rules**  

    - Conditional probability

        - Example

  - Independence  

  - Bayes’ theorem  

- **Discrete RVs & Distributions**  

  - Binomial, Poisson  

- **Continuous RVs & Distributions**  

  - Normal, Exponential, etc.  

### 1.2 Mathematical Tools

#### 1.2.1 Linear Algebra
[[Linear-Algebra]]
*Why*: Many statistical methods involve vector/matrix notation and transformations.

- **Vectors and Norms**  

  - Representing data sets as vectors, distance measures  

- **Eigenvalues and Eigenvectors**  

  - Key to PCA and other dimensionality reduction techniques  

- **Linear Transformations**  

  - Underpin multivariate stats methods  

#### 1.2.2 Optimization
*Why*: Fitting many statistical models involves optimizing parameters.

- **Unconstrained Optimization**  

  - Gradient Descent, Stochastic Gradient Descent  

  - Loss functions in regression, classification, etc.  

- **Constrained Optimization**  

  - Lagrange multipliers, regularization methods (Lasso, Ridge)  

#### 1.2.3 Applied Numerical Methods
*Why*: Real-world statistical problems often require computational approaches.

- **Numerical Approximation**  

  - Root-finding (Newton-Raphson)  

- **Simulation**  

  - Monte Carlo methods for inference, integrals, hypothesis testing  

---

## 2. Descriptive Statistics
Descriptive statistics summarize and describe the features of a data set, whether it’s univariate or multivariate.  
### 2.1 Univariate Descriptive Statistics
[[Univariate-Descriptive-Statistics]]

- **Measures of Central Tendency**  

  - Mean, Median, Mode  

- **Measures of Dispersion**  

  - Variance, Standard Deviation, Range, Interquartile Range  

- **Distribution Visualization**  

  - Histograms, Density Plots, Boxplots  
  [[Relative Position-Empirical Rule-Chebyshev]]


### 2.2 Exploratory Data Analysis (EDA)
[[EDA]]

- **Outlier Detection**  

  - Visual checks (boxplots, scatterplots), Z-scores  

- **Data Transformations**  

  - Log transforms, power transforms (Box-Cox)  

- **Initial Insights**  

  - Identifying patterns, relationships, or anomalies  

### 2.3 Multivariate Descriptive Methods

- **Scatterplot Matrices**  

  - Visualizing pairwise relationships  

- **[[Dimensionality-Reduction]]**

  - PCA for exploratory purposes (though it can also be inferential)  

  - [[AutoEncoding]]

- **[[Similarity]]**

- **[[Clustering]]** **(Descriptive Focus)**  

  - K-means, hierarchical clustering to explore structure in data  

- **[[Topic-Modeling]]**

---

## 3. Inferential Statistics
Inferential methods go beyond describing observed data; they aim to draw conclusions about populations or processes based on samples.
### 3.1 Foundations of Statistical Inference

- **Sampling Distributions**  

  - Law of Large Numbers (LLN)  

  - Central Limit Theorem (CLT)  

- **Estimation**  

  - Point Estimation (MLE, Method of Moments)  

  - Confidence Intervals  

- **Hypothesis Testing**  

  - Null vs. Alternative Hypotheses  

  - p-values, Type I & II Errors, Power  


### 3.2 Regression and Correlation
*Why*: Core tool for modeling relationships between variables.

- **Linear Regression**  

  - Simple vs. Multiple, Ordinary Least Squares  

- **Correlation**  

  - Pearson, Spearman, partial correlation  

- **Model Evaluation and Diagnostics**  

  - Goodness of Fit: \( R^2 \), adjusted \( R^2 \), likelihood-based metrics  

  - Residual Analysis, checking assumptions  

  - Model Selection: AIC, BIC, cross-validation  

### 3.3 Generalized Linear Models (GLMs)
*Why*: Extend linear regression to accommodate different types of response data.

- **Core Concept**  

  - Link functions (logit, log, etc.)  

- **Applications**  

  - Logistic Regression (binary outcomes)  

  - Poisson Regression (count data)  

  - Negative Binomial, Gamma, etc.  

### 3.4 Specialized Inferential Topics

- **Causal Inference**  

  - RCTs, Matching, Instrumental Variables, Diff-in-Diff  

- **Advanced Sampling Methods**  

  - Stratified, Cluster, Systematic sampling  

- **Survival Analysis**  

  - Kaplan-Meier, Cox Proportional Hazards, handling censoring  

- **Multilevel (Hierarchical) Modeling**  

  - Random effects, fixed effects, nested data structures  

- **Robust Statistics**  

  - Median-based measures, robust regression methods  

- **Advanced Hypothesis Testing**  

  - Multiple Testing Corrections (Bonferroni, BH/FDR, family-wise error rate)  

  - Sequential/Adaptive methods (common in clinical trials, A/B tests)  

---

## 4. Further Extensions (Optional)
These areas build on both **descriptive** and **inferential** frameworks, often adding specialized techniques or paradigms.
### 4.1 Bayesian Statistics

- **Core Concepts**  

  - Priors, Likelihood, Posterior  

  - MCMC (e.g., Metropolis-Hastings, Gibbs Sampling)  

- **Applications**  

  - Bayesian Hierarchical Models, small-sample inference

  - **[[Bayesian-Networks]]**

[[Bayes-MCMC]]

### 4.2 Experimental Design (DOE)

- **Core Topics**  

  - ANOVA, Factorial Designs, Randomized Block Designs  

  - Response Surface Methods  

- **Applications**  

  - Industrial experiments, product optimization  

[[AB-Testing]]

### 4.3 Time Series Analysis

- **Models**  

  - ARIMA, SARIMA, Exponential Smoothing  

- **Applications**  

  - Forecasting (economic, sales), trend/seasonality analysis  

### 4.4 Machine Learning & Data Mining

- **Predictive Modeling**  

  - Tree-based methods (Random Forests, Gradient Boosted Trees)  

  - SVMs, Neural Networks  

- **Unsupervised Methods**  

  - **[[Anomaly-Detection]]**, **[[Association-Rules]]**