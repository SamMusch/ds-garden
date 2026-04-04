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
kMDItemContentCreationDate: 2025-01-04 03:34:37 +0000
kMDItemContentModificationDate: 2026-04-04 18:16:25 +0000
kMDItemDateAdded: 2025-05-19 18:39:49 +0000
kMDItemFSFinderFlags: '0'
published: true
reading_time: 4.0
source_file: Symbols.md
tags: null
word_count: 802
---

[Source](https://mathvault.ca/hub/higher-math/math-symbols/probability-statistics-symbols/)

- [Notation 1](https://i.imgur.com/rBYj5af.png) | [Notation 2](https://i.imgur.com/VuvIuZL.png) - There were in my probability notes from the Stanford course, not sure how useful they are.


**Specific to pop vs sample**

|                  |                    | **Population Parameter (Greek)** | **Sample Statistic (Latin)** |
| ---------------- | ------------------ | -------------------------------- | ---------------------------- |
| Central Tendency | Mean               | $\mu$                            | $\bar{x}$                    |
| Central Tendency | Standard Deviation | $\sigma$   Sigma                 | $s$                          |
| Central Tendency | Variance           | $\sigma^2$                       | $s^2$                        |
| Central Tendency | Proportion         | $p$                              | $\hat{p}$                    |
| Central Tendency | Size               | $n$                              | $N$                          |
| Correlation      | Correlation    | $ρ$    Rho                       | r                            |
| Correlation      | Covariance     | $\sigma_{xy}$                    | $s_{xy}$                     |
| Regression       | Slope          | $\beta$                          | $\hat{\beta}$ or $b$         |
| Regression       | Intercept      | $\beta_0$                        | $\hat{\beta}_0$ or $a$       |



**Not specific to pop vs sample**

| Symbol Name         | Used For                                                 | **Population Parameter (Greek)** | **Sample Statistic (Latin)** |            |
| ------------------- | -------------------------------------------------------- | -------------------------------- | ---------------------------- | ---------- |
| α  (Alpha)          | **Significance level** <br>(probability of type I error) |                                  |                              |            |
| β  (Beta)           | Probability of **type II error**                         |                                  |                              |            |
| ν  (Nu)             | **Degree of freedom** (df)                               |                                  |                              |            |
| Ω  (Capital omega)  | **Sample space**                                         |                                  |                              |            |
| ω  (Omega)          | **Outcome** from sample space                            |                                  |                              |            |
| θ (Theta), β (Beta) | **Population parameters**                                |                                  |                              | Population |
| X, Y, Z, T          | **Random variables**                                     |                                  |                              |            |
| x, y, z, t          | **Values** of random variable                            |                                  |                              |            |


## Combinatorial Operators

| Symbol Name                   | Explanation                                |
| ----------------------------- | ------------------------------------------ |
| $n!$                          | Factorial                                  |
| $n!!$                         | Double factorial                           |
| $!n$                          | Number of derangements of $n$ objects      |
| $n P r$                       | Permutation ($n$ permute $r$)              |
| $n C r, \binom{n}{r}$         | Combination ($n$ choose $r$)               |
| $\binom{n}{r_1, \ldots, r_k}$ | Multinomial coefficient                    |
| $\left(\binom{n}{r}\right)$   | Multiset coefficient ($n$ multichoose $r$) |


## Stats vs Probability


Notational differences arise because the two fields approach similar concepts from different perspectives:

- **Probability** is focused on modeling and reasoning about uncertainty, typically using theoretical distributions.

- **Statistics** is focused on analyzing and summarizing data, often inferring from samples to populations.

Here’s a detailed breakdown of the notational differences:

#### 1. Random Variables vs. Observed Data
###### **Probability**:

- Random variables are denoted with uppercase letters ($X, Y, Z$).

- Values they take are denoted with lowercase letters ($x, y, z$).

- Example: "The random variable $X$ has a value $x$ with probability $P(X = x)$."
###### **Statistics**:

- Observed data points (realizations of random variables) are denoted with lowercase letters ($x, y, z$).

- Example: "The sample data point $x_i$ is a realization of $X$."

---

#### 2. Population vs. Sample Parameters

###### **Probability**:

- Parameters of a distribution are typically denoted by Greek letters:

  - Mean: $\mu$

  - Variance: $\sigma^2$

  - Standard deviation: $\sigma$

  - Correlation: $\rho$

- These are treated as **fixed and known** quantities.
###### **Statistics**:

- Sample-based estimates of these parameters use Latin letters or "hat" notation:

  - Sample mean: $\bar{x}$ or $\hat{\mu}$

  - Sample variance: $s^2$

  - Sample standard deviation: $s$

  - Sample correlation: $r$

- These are treated as **random and estimated** from data.

---

#### 3. Expectation and Moments

###### **Probability**:

- Expected value: $\mathbb{E}[X]$

- Variance: ${Var}(X) = \mathbb{E}[(X - \mathbb{E}[X])^2]$

- Higher-order moments:

  - $\mathbb{E}[X^k]$ (raw moments)

  - $\mathbb{E}[(X - \mu)^k]$ (central moments)

- These are theoretical and depend on the assumed distribution of $X$.

###### **Statistics**:

- Sample mean: $\bar{x} =\frac{1}{n} \sum_{i=1}^n x_i$

- Sample variance: $s^2 =\frac{1}{n-1} \sum_{i=1}^n (x_i - \bar{x})^2$

- Sample moments:

  - Raw moment: $\frac{1}{n} \sum_{i=1}^n x_i^k$

  - Central moment: $\frac{1}{n} \sum_{i=1}^n (x_i - \bar{x})^k$

---

#### 4. Probability Distributions

###### **Probability**:

- Focuses on **population-level distributions**:

  - Probability mass function (PMF): $P(X = x)$

  - Probability density function (PDF): $f_X(x)$

  - Cumulative distribution function (CDF): $F_X(x) = P(X \leq x)$

###### **Statistics**:

- Focuses on **empirical distributions**:

  - Relative frequency of observed data.

  - Empirical CDF: $F_n(x) =\frac{\text{number of } x_i \leq x}{n}$.

---

#### 5. Notation for Inference

###### **Probability**:

- Known distribution parameters are fixed:

  - $X \sim N(\mu, \sigma^2)$ (Normal distribution).

- We derive properties of $X$, like $P(a \leq X \leq b)$.

###### **Statistics**:

- Parameters are unknown and estimated:

  - $\hat{\mu}, \hat{\sigma}^2$ are estimates of $\mu, \sigma^2$.

- Confidence intervals: $\mu \in (\hat{\mu} - c, \hat{\mu} + c)$ with some confidence level $1 - \alpha$.

---

#### 6. Conditional Dependence

###### **Probability**:

- $P(X \mid Y)$: Conditional probability of $X$ given $Y$.

- Conditional expectation: $\mathbb{E}[X \mid Y]$.

###### **Statistics**:

- Regression models estimate conditional relationships:

  - $\hat{y}_i = \beta_0 + \beta_1 x_i$ in simple linear regression.

- The focus is on **estimation and interpretation**.

---

#### 7. Likelihood and Estimation

###### **Probability**:

- Likelihood: $L(\theta) = P(X \theta)$, where $\theta$ are fixed parameters.

- Probability is derived based on assumed $\theta$.

###### **Statistics**:

- Likelihood: $L(\theta) = P(X | \theta)$, but $\theta$ is treated as an unknown to be **estimated**.

- Maximum likelihood estimation (MLE):  $\hat{\theta} = \arg\max_{\theta} L(\theta) = \arg\max_{\theta} P(X \mid \theta)$

---

#### Summary Table

| **Concept**            | **Probability**   | **Statistics**      |
|-------------------------|----------------------------|-------------------------------|
| Random variables        | $X, Y$                    | $X, Y$                       |
| Observed values         | $x, y$                    | $x_i, y_i$                   |
| Population mean         | $\mu_X$                   | $\mu_X$                      |
| Sample mean             | —                         | $\bar{x}$ or $\hat{\mu}$    |
| Expectation             | $\mathbb{E}[X]$           | —                            |
| Variance                | $\text{Var}(X)$    | $s^2$ (sample)               |
| PDF                     | $f_X(x)$                  | —                            |
| Empirical distribution  | —                         | $F_n(x)$                     |
| Parameters              | $\theta$ (fixed)        | $\hat{\theta}$ (estimated) |