

### Week 2

How do I make informed decisions?

- What is happening in the organization?

Frederick Taylor: Standardize processes, implement throughout the org

1) Replace conventional wisdom
2) Train employees properly
3) Provide detailed info and supervision
4) Mgmt needs to define what the roles are

Convincing management

1) This change won't be hard
2) It will be worth it

Comparing one group to another group

1) **T-test**: checks whether 2 means are different from each other
2) **ANOVA**: compare means of more than 2 groups
   One way
   Repeated measure
   Factorial
   Limits of anova - what if we dont want to compare groups?  eg when we are looking to determine how 2 variables move together
3) **Regression**
   Logit / probit
   Tobit (use with censored data)
   Poisson / negative binomial - count data

---

### Week 4


Fundamental problem with quantifying the firm

- Do I know why the change occurred?

Causality matters when we are actually setting new policy
Endogeneity - from within the system
Omitted variable bias

Solving problems of causality vs reverse causality vs correlation
Intro exogenous variables to our model
Run an experiment

A/B tests: identical in every way but 1

What if we cant randomly assign?
Take a fixed effect (time series data)
Think a Craigslist example where we need to control for city and control for month
Matching - instead of completely random assign, just to find "twins" and treat only one
Don't try to interpret fixed effects, we include them in the model to control for them

---


### Week 6

Problems with enacting policy

- How do we anticipate problems, not just react (assess the probability of known events)

Predict vs cause
Predict = observing relationships -- develop formula to predict dependent variables -- is there accuracy in our prediction?
Cause = does a IV really cause a DV?

Endogeneity (omitted variable bias) is more significant in causal analysis --> we need to know that THIS yields THIS
R-squared is more significant in predictive analysis --> we need to make sure this is not out of sample

Multicollinearity matters more in causal --> we don't want to wrongly attribute significance to the wrong variables
Measurement error matters more in causal --> biases our coefficient in causal. In prediction, as long as we are predicting accurately, we are okay

