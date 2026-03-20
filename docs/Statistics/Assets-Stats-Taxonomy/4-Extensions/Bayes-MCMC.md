---
CoverImage: null
Due: null
Function: Hierarchy
HoursDone: 0
HoursRemain: 0
Objective: Reference
Quality: ★
QualityComment: Why isn't this a 10?
ReviewFreq: Weekly, 1-Month, 2-Month, 3-Month
TimeSpent: null
TimeSpent2: null
published: true
tags: null
---

## MMM

Markov chains

- Introduced: 1906 by Andrey Markov

- Goal: Show that the law of large numbers can apply to RVs that are NOT independent.

Markov chains

- A sequence of r.v.s that exhibits **one-step** dependence

- Therefore, a happy medium between complete *independence* & complete *dependence*.

- Widely used for simulations of complex distributions using MCMC

MCMC vs OLS 

- **Markov Chain Monte Carlo**: is a *stochastic simulation technique* used to estimate parameters (especially when closed-form solutions are not feasible.)

- MCMC generates samples from the posterior distribution of the parameters, allowing for uncertainty estimation and Bayesian inference.



### Specifics

Issue: Isolate impact of each channel.

- **Stationarity** & **OLS** (conceptually)

Issue: Each day is not independent.

- **MCMC**: Markov chains

Issue: High-dimensional space.

- **MCMC**: Generates samples. Converge to the stationary distribution.

Issue: Advertising today could impact future periods.

- **Carryover Effect**: This allocates 1 week's dollars over future periods.

Issue: Overspending could annoy our audience.

- **Saturation Effect**: This models how much revenue changes.



### Equation

$kpi = \alpha + trend + seasonality + media \: channels + noise$

- $\alpha$ | intercept

- $trend$ | flexible, non-linear

- $seasonality$ | fourier transform

- $media \: channels$ | carryover + saturation

- $noise$

**Carryover effect** | effect of adverising that occurs in time periods following the pulse of advertising. 

- Adstock

  - $L$ = maximum duration of carryover effect assumed for a medium

**Shape effect** | high levels of spend leads to ad saturation and diminishing returns

- Hill

  - $S$ = shape effect `slope`

  - K = saturation `half_max_effective_concentration`



## Book

[Bayes Playlist](https://www.youtube.com/playlist?list=PLFDbGp5YzjqXQ4oE4w9GVWdiokWB9gEpm)

[Book](https://civil.colorado.edu/~balajir/CVEN6833/bayes-resources/RM-StatRethink-Bayes.pdf)

### Outline

**Ch 2-3** introduce Bayesian inference and the basic tools for performing Bayesian calculations. They emphasize a purely logical interpretation of probability theory. 

**Ch 4-7** build multiple linear regression as a Bayesian tool. Includes plotting results, interaction effects, overfitting, information theory

**Ch 8-11** presents generalized linear models of several types. Includes Markov chain Monte Carlo (MCMC), non-linear models.

**Ch 9** introduces maximum entropy as an explicit procedure to help us design these models. 

**Ch 10-11** detail the models themselves

**Ch 12-14** gets around to multilevel models, both linear and generalized linear, as well as specialized types that address measurement error, missing data, and spatial correlation modeled through Gaussian processes.

**Ch 15** returns to some of the issues raised in this first one

Pg 26: This book mainly follows the “logical” Cox (or Laplace-Jeffreys-Cox-Jaynes) interpretation. This interpretation is presented beginning in the next chapter, but unfolds fully only in Chapter 9.

---

### 01 Intro

Instead of choosing among various black-box tools for testing null hypotheses, we should learn to build and analyze multiple non-null models of natural phenomena.

3 tools

- **Bayesian analysis**

- **Multilevel models** ([ChatGTP](https://chatgpt.com/share/6738e360-bb3c-8000-97ee-e1ab7603dbcf): aka hierarchical linear models, mixed-effects models, nested models)

- **Information criteria**


#### Bayesian
!!! sam
    **Bayesian**: Parameter values are assigned prior probabilities; the likelihood of the data updates those probabilities to a posterior.
    **Frequentist**: Data are used to estimate fixed parameter values.


!!! sam
    **Bayes vs Frequentist**

    - **Bayes**: Things that can happen more ways are more plausible. 

        - Use probability theory as a general way to represent *plausibility* (in reference to countable events, or theoretical constructs like parameters).

        - Probability theory = calculus for counting

    - **Frequentist**: Define probabilities by connection to countable events & frequencies in large samples.

        - Relies on imaginary resampling where the patterns still hold.

        - Measurements have probability distribution (ie sampling distribution), parameters & models do not


| Question                          | Frequentist                                                  | Bayesian                                       |
| --------------------------------- | ------------------------------------------------------------ | ---------------------------------------------- |
| Are parameters random?            | No - the parameter is fixed; our estimator is random.        | Yes - reflects uncertainty we have about them. |
| Where does probability come from? | Long-run frequency in repeated sampling.                     | Degree of belief; updated by Bayes’ rule.      |
| Typical output                    | A point estimate + standard error or confidence interval.    | A _posterior distribution_ for the parameter.  |
| How to make decisions?            | Use rules with guaranteed error rates (e.g., 5 % test size). | Minimize expected loss under the posterior.    |

| Step                          | Frequentist OLS                                          | Bayesian Regression                                                    |
| ----------------------------- | -------------------------------------------------------- | ---------------------------------------------------------------------- |
| **Before seeing data**        | No distribution on β; just a model form.                 | Explicit prior distribution on β and σ.                                |
| **After data**                | Single point estimate + CIs that have long-run coverage. | Full distribution of β; direct probability about any interval or sign. |
| **Typical business question** | “Is the ad-spend effect significantly ≠ 0 at α = 0.05?”  | “What’s the probability the ad-spend ROI exceeds 1.2 ×?”               |
| **How uncertainty enters**    | Via repeated-sampling logic.                             | Via prior ⊕ likelihood producing posterior.                            |



#### Multilevel

**Multilevel models**—also known as hierarchical, random effects, varying effects, or mixed effects models—are becoming 'de rigueur' in the biological and social sciences.

Why?

- To adjust estimates for **repeat sampling**.  (>1 observation comes from same individual, location, or time.)

- To adjust estimates for **imbalance in sampling**. (When some individuals, locations, or times are sampled more than others.)

- To study **variation**. When there is variation among individuals / groups **within** the data. 

- To **avoid averaging**. Frequently, scholars pre-average some data to construct variables for a regression analysis. This can be dangerous, because averaging removes variation. It therefore manufactures false confidence. Multilevel models allow us to preserve the uncertainty in the original, pre-averaged values, while still using the average to make predictions.

These benefits don’t come for free, however. Fitting and interpreting multilevel models can be considerably harder than fitting and interpreting a traditional regression model. In practice, many researchers simply trust their black-box software and interpret multilevel regression exactly like single-level regression.

---

> **Rethinking**: Multilevel election forecasting. One of the older applications of multilevel modeling is to forecast the outcomes of democratic elections. In the early 1960s, John **Tukey** (1915–2000) began working for the National Broadcasting Company (NBC) in the United States, developing real-time election prediction models that could exploit diverse types of data: polls, past elections, partial results, and complete results from related districts. The models used a multilevel framework similar to the models presented in Chapters 12 and 13. Tukey developed and used such models for NBC through 1978. Contemporary election prediction and poll aggregation remains an active topic for multilevel modeling.

---

#### Information criteria

- Family of metrics for comparing structurally different models

- Aim to let us compare models based upon future predictive accuracy.

Examples of criterion: AIC, DIC, WAIC

1. Explicitly build a model of the prediction task 

2. Use that model to estimate performance of each model

Why use these?

- Overfitting

- Allow us to compare multiple models to the same data

Many statisticians have never used information criteria in an applied problem, and there is no consensus about which metrics are best and how best to use them. Still, information criteria are already in frequent use in the sciences—appearing in prominent publications and featuring in prominent debates—and a great deal is known about them, both from analysis and experience.

---


### 02 Overview

"If you want to know something, condition on it." 

1. You don't know $p$. 

2. Assume you did, then tell me what would happen as a result.

3. Adopt these different conjectures.

The target of inference in Bayesian inference is a posterior probability distribution. Posterior probabilities state the relative numbers of ways each conjectured cause of the data could have produced the data. These relative numbers indicate plausibilities of the different conjectures. These plausibilities are updated in light of observations, a process known as Bayesian updating.

More mechanically, a Bayesian model is a composite of a likelihood, a choice of parameters, and a prior. 

- The **likelihood** provides the plausibility of an *observation* (data), given a fixed value for the parameters. 

- The **prior** provides the plausibility of each possible value of the *parameters*, before accounting for the observation (data). 

- The rules of probability tell us that the logical way to compute the plausibilities, after accounting for the data, is to use Bayes’ theorem. This results in the **posterior distribution**.



**2.1.3. From counts to probability.** 

[Example pg 41](https://i.imgur.com/TxLMV0f.png)

When we don’t know what caused the data, potential causes that may produce the data in **more** ways are **more** plausible. (We standardize these values to make it easier on ourselves)

```r
ways <- c( 0 , 3 , 8 , 9 , 0 ) # 5 Conjectures
ways/sum(ways)


# Plausibilities, probabilities, p
# 0.00 0.15 0.40 0.45 0.00
```

- **Parameter (p)** | A conjectured proportion. It’s just a way of indexing possible explanations of the data.

- **Likelihood** | Relative \# of ways that a *p* can produce the data. 
  How to derive?
  (1) Enumerate all possible sequences
  (2) Eliminate ones inconsistent with the data

- **Prior probability** | The prior plausibility of any specific *p*

- **Posterior probability** | New, updated plausibility of any specific *p*

---

#### **2.2 Building a Model**

Bayesian design loop

1. **Data story**: Motivate the model by narrating how the data might arise.

2. **Update**: Educate your model by feeding it the data.

3. **Evaluate**: All statistical models require supervision, leading possibly to model revision.


Suppose you have a globe representing Earth. You are curious how much of the surface is covered in water. You adopt the following strategy: 

1. Toss globe in air & catch it. 

2. Record surface under right finger (water or land). 

3. Repeat.



#### 2.3. Components of the model
3 kinds of things we counted

1. \# of ways each conjecture could produce an observation

2. Accumulated \# of ways each conjecture could produce the entire data

3. The initial plausibility of each conjectured cause of the data

---

Equation on Pg 47

**Likelihood**: Mathematical formula that tells us the relative \# of ways to see the data $water$, given values for $p$ and $n$.

[Example](https://i.imgur.com/c16ZJRD.png) | For the globe tossing model, the likelihood can be derived from the data story. We end up with Binomial distribution. 

- Two possible: *water* (W) and *land* (L)

- Sample of length *N* (nine in the actual sample)

- How likely to get __ *waters*?

```r
# Likelihood
# Binomial distribution

water <- 6   # Land on water 6 times
n <- 9       # Globe spins
p <- 0.5     # Equal

dbinom( water , size=tosses , prob=prop )
# 0.1640625

# "binom" prefixes
# "d" --> density
# “r” --> random samples and that begin with “p” for cumulative probabilities
```

---

**Parameters**: Quantities representing conjectures that we wish to estimate from data.

In the binomial likelihood, our adjustable inputs are 

- $p$ (the probability of seeing a Water)

- $n$ (the sample size)

- $w$ (the number of Waters’s)

In our globe tossing example, both $n$ and $w$ are data. The model's job is to describe what the data tell us about our unknown parameter $p$.

Its not always $p$ that we need to solve for - just depends on the question we are trying to answer.

---

Pg 49

**Prior**: An initial plausibility assignment for each possible value of the parameter.

In farmers v librarians example, the Pr(librarian) = 1/21.

More generally, priors are useful for constraining parameters to reasonable ranges, as well as for expressing any knowledge we have about the parameter, before any data are observed.

> **Overthinking**: The prior is a probability distribution for the parameter. In general, for a uniform prior from a to b, the probability of any point in the interval is 1/(b − a). If you’re bothered by the fact that the probability of every value of p is 1, remember that every probability distribution must sum (integrate) to 1.

> **Rethinking**: Prior, prior pants on fire. Historically, some opponents of Bayesian inference objected to the arbitrariness of priors. It’s true that priors are very flexible, being able to encode many different states of information. If the prior can be anything, isn’t it possible to get any answer you want? Indeed it is. Regardless, after a couple hundred years of Bayesian calculation, it hasn’t turned out that people use priors to lie. If your goal is to lie with statistics, you’d be a fool to do it with priors, because such a lie would be easily uncovered. Better to use the more opaque machinery of the likelihood. Or better yet—don’t actually take this advice!—massage the data, drop some “outliers,” and otherwise engage in motivated data transformation.

---

Pg 50

**Posterior distribution**: Resulting estimates for each unique combo of 

- Data (waters we get)

- Likelihood (math formula)

- Parameters

- Prior for each parameter

The posterior distribution takes the form of the probability of the parameters, conditional on the data: $Pr(p|n,w)$.

The **mathematical procedure** that defines the logic of the posterior distribution is **Bayes’ theorem**. The theorem itself is a trivial implication of probability theory.

---

**Derivation** (Omit $n$ for simplicity.)

1. Joint probability of data (w) **&** any particular value of (p):

   $Pr(w, p) = Likeliood * Prior$

   $Pr(w, p) = Pr(w|p) \:\: * \:\: Pr(p)$

   $Pr(rain \: \& \: cold) = Pr(rain \: when \: cold) * Pr(cold)$

   

2. Same as \#1, just flip the right-hand

   $Pr(w, p) = Pr(p|w) \:\: * \:\: Pr(w)$

3. Both right-hand sides equal the same thing, so set them equal to one another and solve for the **posterior probability**

   $Posterior = \frac{Likelihood \:\: * \:\: Prior}{Avg \: Likelihood \: (To \: standardize \: results)}$

   $Pr(p|w) = \frac{P(w|p) \:\: * \:\: Pr(p)}{Pr(w)}$

   - $Pr(w) = E(Pr(w|p)) = \int Pr(w|p) \:\: * \:\: Pr(p) \:\: dp$

   - $Pr(w)$ is merely the *average likelihood* of the data. It’s job is to standardize the posterior, to ensure it sums (integrates) to 1.

   - The integral above just defines the proper way to compute the average over a continuous distribution of values, like the infinite possible values of $p$.

---

#### 2.4. Making the model go

Pg 52

At the heart of the Bayesian model lies a **motor** that processes data, producing a posterior distribution.

While some broadly useful models like linear regression can be conditioned formally, this is only possible if you constrain your choice of prior to special forms that are easy to do mathematics with. We’d like to avoid forced modeling choices of this kind, instead favoring conditioning engines that can accommodate whichever prior is most useful for inference.

3 different conditioning "engines" for computing posterior distributions: (*There are others*)

- Grid approximation

- Quadratic approximation

- Markov chain Monte Carlo (MCMC)

---

**Grid approximation** (pg 53)

One of the simplest conditioning techniques is grid approximation. While most parameters are continuous, capable of taking on an infinite number of values, it turns out that we can achieve an excellent approximation of the continuous posterior distribution by considering only a finite grid of parameter values. At any particular value of a parameter, p′, it’s a simple matter to compute the posterior probability: just multiply the prior probability of p ′ by the likelihood at p′. Repeating this procedure for each value in the grid generates an approximate picture of the exact posterior distribution. This procedure is called grid approximation.

1. Define the grid. This means you decide how many points to use in estimating the posterior, and then you make a list of the parameter values on the grid.

2. Compute the value of the prior at each parameter value on the grid.

3. Compute the likelihood at each parameter value.

4. Compute the unstandardized posterior at each parameter value, by multiplying the prior by the likelihood.

5. Finally, standardize the posterior, by dividing each value by the sum of all values.

---

**Quadratic (Gaussian) approximation** (pg 55)

The grid approximation strategy scales very poorly with model complexity, so it won’t get us very far. 

A useful approach is quadratic approximation. Under quite general conditions, the region near the peak of the posterior distribution will be nearly Gaussian—or “normal”—in shape. This means the posterior distribution can be usefully approximated by a Gaussian distribution. A Gaussian distribution is convenient, because it can be completely described by only two numbers: the location of its center (mean) and its spread (variance).

A Gaussian approximation is called “quadratic approximation” because the **logarithm of a Gaussian distribution forms a parabola**. And a parabola is a quadratic function. So this approximation essentially represents any log-posterior with a parabola. We’ll use quadratic approximation for much of the first half of this book. For many of the most common procedures in applied statistics—linear regression, for example—the approximation works very well. Often, it is even exactly correct, not actually an approximation at all. 

1. Find the posterior mode. This is usually accomplished by some optimization algorithm, a procedure that virtually “climbs” the posterior distribution, as if it were a mountain. The golem doesn’t know where the peak is, but it does know the slope under its feet. There are many well-developed optimization procedures, most of them more clever than simple hill climbing. But all of them try to find peaks. 

2. Once you find the peak of the posterior, you must estimate the curvature near the peak. This curvature is sufficient to compute a quadratic approximation of the entire posterior distribution. In some cases, these calculations can be done analytically, but usually your computer uses some numerical technique instead.

---

**Markov chain Monte Carlo** (pg 58)

There are lots of important model types, like multilevel (mixed-effects) models, for which neither grid approximation nor quadratic approximation is always satisfactory. 

As a result, various counterintuitive model fitting techniques have arisen. The most popular of these is Markov chain Monte Carlo (MCMC), which is a family of conditioning engines capable of handling highly complex models.

**Instead of attempting to compute or approximate the posterior distribution directly, MCMC techniques merely draw samples from the posterior.** You end up with a collection of parameter values, and the frequencies of these values correspond to the posterior plausibilities. You can then build a picture of the posterior from the histogram of these samples. 

We nearly always work directly with these samples, rather than first constructing some mathematical estimate from them. And the samples are in many ways more convenient than having the posterior, because they are easier to think with. And so that’s where we turn in the next chapter, to thinking with samples.



### 03 Samples

In this chapter we exploit it by taking the probability distributions from the previous chapter and sampling from them to produce counts.

```r
PrPV <- 0.95 # Test is correct 95% of time
PrPM <- 0.01 # False-positive 1% of time
PrV <- 0.001 # Vampires 0.1% of population
PrP <- PrPV*PrV + PrPM*(1-PrV)
( PrVP <- PrPV*PrV / PrP )

# 0.087   # Only 8.7% chance suspect is vampire 
```

Integral calculus is the way you add up an infinitely large number of things in infinitely small boxes (limits). In **probability theory**, integrals are almost always used as a way to do **averaging**. Integrals take sum / count.