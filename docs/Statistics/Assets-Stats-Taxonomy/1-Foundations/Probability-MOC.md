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
kMDItemAlternateNames: (
kMDItemContentCreationDate: 2025-01-19 20:21:49 +0000
kMDItemContentModificationDate: 2026-04-04 18:16:25 +0000
kMDItemDateAdded: 2025-05-19 18:46:56 +0000
kMDItemFSFinderFlags: '16'
published: true
reading_time: 2.9
source_file: Probability-MOC.md
tags: null
word_count: 586
---

This outline aims to build 

- from fundamental principles of probability 

- to more advanced topics relevant to data science, such as Bayesian methods and sampling theory.

Links

- [[Pr-Notation]]

- [[Pr-Glossary]]

## Week 1: Introduction & Foundations

- [[Pr-Basic Definitions]]

  - Sample space, events, outcomes.

  - Axioms of probability (Kolmogorov axioms).

- [[Pr-Basic Set Operations]]

  - Union, intersection, complement, etc.

  - Venn diagrams and their use in probability.

## Combinatorics & Basic Probability Tools

- [[Pr-Counting Techniques]]

  - Permutations vs. combinations.

  - Applications in probability (e.g., drawing cards, selecting subsets).

- [[Pr-Classical Probability]]

  - Equally likely outcomes.

  - Examples: dice rolls, coin tosses, card draws.

- [[Pr-Conditional Probability]]

  - Definition and examples (e.g., medical test scenarios).

  - The “conditional” approach to solving multi-step probability problems.

- [[Pr-Law of Total Probability]]

## Bayes’ Theorem & Bayesian Thinking

- [[Pr-Bayes Theorem]]

  - Statement of the theorem.

  - Classic examples (e.g., medical diagnostics, spam filtering).

- Prior, Likelihood, Posterior

## RVs and Distributions
[[Pr-Distributions and RVs]] - Theory
[[Pr-Distributions - Example Problems]] - Applications

- Random Variables

  - Conceptual understanding: “mapping outcomes to numbers.”

  - Support sets (finite, countably infinite).

#### Discrete

- Key Discrete Distributions

  - Bernoulli, Binomial, Geometric, Negative Binomial.

  - Poisson distribution and its relationship to Binomial.

  - Examples and data science use cases (e.g., modeling counts/events).

- Expectation & Variance of Discrete Random Variables

  - How to compute mean and variance for discrete distributions.

  - Moment generating functions (brief introduction).
#### Continuous

- Continuous Random Variables

  - Probability density functions (pdf) vs. cumulative distribution functions (cdf).

- Key Continuous Distributions

  - Uniform, Normal (Gaussian), Exponential.

  - Gamma, Beta (brief introduction for Bayesian applications).

- Expectation & Variance of Continuous Random Variables

  - Computing integrals; examples for Normal, Exponential, etc.

  - Applications in analytics (e.g., wait times, measurement errors).

## Joint Distributions & Independence
[[Pr-2.3 Joint Two RVs]]

- Joint, Marginal, and Conditional Distributions

  - Definitions, relationships, and computing marginals from joints.

- Independence & Conditional Independence

  - Criteria for independence.

  - Examples illustrating dependence vs. independence (e.g., correlation vs. independence).

- Covariance & Correlation

  - Definitions, properties.

  - Relationship to independence.

## Transformations & Multiple Random Variables

- Functions of Random Variables

  - Methods to find distributions of transformed variables (e.g., sum of variables).

- Jacobians, Change of Variables

  - Practical approach for continuous transformations.

- Convolutions

  - Sum of independent random variables (e.g., sum of Poisson, sum of Exponential).

- Multivariate Distributions

  - Brief introduction to multivariate normal distribution and its role in data science.

## Sampling Distributions & Limit Theorems
[[Pr-2.5 2.6 Sampling]]

- Law of Large Numbers (LLN)

  - Intuition and formal statement (weak/strong versions in brief).

  - Relevance in data-driven estimations (e.g., sample means).

- Central Limit Theorem (CLT)

  - Statement, intuition, and how it underpins hypothesis testing in data science.

  - Applications: confidence intervals, error estimation, etc.

- Sampling Distributions

  - Basic concept of sampling distribution of a statistic (mean, proportion, etc.).

  - Connection to bootstrap methods.

## Intro to Bayesian Inference & Conjugate Priors

- Bayesian Inference Cycle

  - Prior, likelihood, posterior, predictive distribution.

- Conjugate Priors

  - Examples for common distributions (Beta-Binomial, Gamma-Poisson, etc.).

  - Analytical tractability and why conjugacy is helpful.

- Posterior Predictive Checks

  - Using posterior distributions for predictions and model validation.

## Markov Chains & Stochastic Processes

- Markov Chains

  - Definition and basic properties (memoryless property).

  - Transition matrices, steady-state distributions.

- Applications in Data Science

  - Markov Chain Monte Carlo (MCMC) concept overview (e.g., Metropolis-Hastings, Gibbs sampling).

  - Random walks (e.g., PageRank-style algorithms in SEO/data science).

- Other Stochastic Processes

  - Poisson processes in event modeling (brief).

## Applications

- Probability in Machine Learning & Statistical Modeling

  - Logistic regression as a Bernoulli-Binomial model.

  - Naive Bayes classifier as an illustrative example.

- Uncertainty & Variability in Data Science Pipelines

  - Prediction intervals, confidence intervals.

  - Propagation of errors.

- Simulation & Monte Carlo Methods

  - Generating random variables (Inverse transform, Box–Muller method, etc.).

  - Simulation-based approaches to solve complex probability problems.