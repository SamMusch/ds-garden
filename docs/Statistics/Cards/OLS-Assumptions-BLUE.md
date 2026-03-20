---
published: true
---

!!! sam
    **Basics**: OLS is the method that minimizes $R^2$


## Summary

- **Estimator vs. Estimate**: Estimators are *functions of the random sample*; estimates are *realized values* from a specific sample.  

- **Good Estimator Properties**: Unbiasedness, consistency, efficiency.  

- **Gauss-Markov Theorem**: Under classical linear regression assumptions, OLS is the “Best Linear Unbiased Estimator,” achieving minimum variance among linear unbiased estimators.  

- **OLS Steps**:

  1. **Specify** the linear model.

  2. **Minimize** the SSR.

  3. **Solve** for $\hat{\beta}$.

  4. **Interpret** coefficients, residuals, fitted values.

  5. **Check** assumptions.

  6. **Conclude** or **adjust** if assumptions are violated.

- **Assumptions**: Linearity, exogeneity, i.i.d. sampling, no perfect collinearity, homoskedastic errors.


## 1. Estimators and Estimates

### Key Concept 3.1

1. **Estimator**: a *function* of the sample data used to infer an unknown population parameter. (eg, sample mean)

2. **Estimate**: the *realized numerical value*

- **Are they RVs?**  

  - **Estimator**: Yes. Its value changes with the randomness of the sample.  

  - **Estimate**: No. It is fixed once the sample is observed.

---

## 2. Choosing the “Best” Estimator

### Key Concept 3.2

| **Estimator Property** | **Definition / Criterion**                                                             | **Formal Statement**                                    | **Why It Matters**                                                            |
| ---------------------- | -------------------------------------------------------------------------------------- | ------------------------------------------------------- | ----------------------------------------------------------------------------- |
| **Unbiasedness**       | The estimator’s expected value equals the true parameter.                              | $E[\hat{\mu}] = \mu$                                    | Avoids *systematic* error.                                                    |
| **Consistency**        | The estimator converges to the true parameter as the sample size $n$ goes to infinity. | $\hat{\mu}_n \xrightarrow{p} \mu$                       | Guarantees that with enough data, the estimator is “close” to the true value. |
| **Efficiency**         | Among all unbiased estimators, it has the smallest variance.                           | $\mathrm{Var}(\hat{\mu}) \le \mathrm{Var}(\tilde{\mu})$ | Minimizes *uncertainty* (variance) among unbiased estimators.                 |

Under *classical linear regression* assumptions, the **OLS estimator** is the **Best Linear Unbiased Estimator (BLUE)**. Specifically:

> **Gauss-Markov Theorem**: *Under certain assumptions, the OLS estimators of the coefficients in a linear regression model are the best (minimum-variance) linear unbiased estimators.*

---

## 3. Gauss-Markov Theorem in Context

### Understanding OLS and Gauss-Markov

1. **Set Up the Linear Regression Model**  

   - Typically: $Y_i = \beta_0 + \beta_1 X_{i1} + \dots + \beta_k X_{ik} + u_i$, where $u_i$ is the error term.

2. **Objective of OLS**  

   - **Ordinary Least Squares** chooses $\hat{\beta}$ to minimize the sum of squared residuals (SSR):  
     $\text{SSR} = \sum_{i=1}^n \bigl(Y_i - \hat{Y}_i\bigr)^2$

     where $\hat{Y}_i = \hat{\beta}_0 + \hat{\beta}_1 X_{i1} + \dots + \hat{\beta}_k X_{ik}.$

3. **Derive the OLS Estimator**  

   - Take partial derivatives of SSR with respect to each $\beta_j$, set them to zero, and solve for $\hat{\beta}_j$.  

4. **Interpret the OLS Estimator**  

   - Once estimated, you have:

     - Fitted values: $\hat{Y}_i$

     - Residuals: $\hat{u}_i = Y_i - \hat{Y}_i$  

   - Each $\hat{\beta}_j$ measures the estimated effect of $X_j$ on $Y$.

5. **Use the Gauss-Markov Theorem Assumptions**  

   - Check whether all required assumptions (listed in the next section) hold.

   - If they hold, OLS is the **BLUE**; if not, OLS may still be unbiased but no longer guaranteed to be the minimum-variance linear estimator.

6. **Make Inferences / Predictions**  

   - Use the estimated model for hypothesis tests, confidence intervals, or predictions.

   - If assumptions fail (e.g., heteroskedasticity, autocorrelation, endogeneity), adopt corrective methods (e.g., robust standard errors, instrumental variables, etc.).

---

## 4. Gauss-Markov (Classical Linear Model) Assumptions

For OLS to be the **Best Linear Unbiased Estimator**, these assumptions are typically required:

1. **Linearity of the Model in Parameters**  

   - $Y_i = \beta_0 + \beta_1 X_{i1} + \dots + \beta_k X_{ik} + u_i$.

2. **Exogeneity**  

   - $\mathbb{E}[u_i \mid X_i] = 0$ (or equivalently $\operatorname{Cov}(u_i, X_i) = 0$).

   - The regressors $X_i$ must be uncorrelated (or independent) of the error term $u_i$.

3. **i.i.d. Sampling**  

   - Observations $\{(X_i, Y_i)\}_{i=1}^n$ are independently & identically distributed.

4. **No Perfect Multicollinearity**  

   - Regressors are not perfectly collinear; in matrix form, $X'X$ is invertible (full column rank).

5. **Homoskedastic Errors**  

   - $\mathrm{Var}(u_i \mid X_i) = \sigma^2$, a constant.

   - No heteroskedasticity (errors do not depend on $X$).

**If these assumptions hold**:

- The OLS estimator is unbiased ($\mathbb{E}[\hat{\beta}_j] = \beta_j$).

- Within the class of linear estimators, OLS has the smallest variance (the “Gauss-Markov” result).

**If any assumptions fail**:

- OLS might lose its efficiency or even its unbiasedness (e.g., with endogeneity).

- Corrective measures (robust standard errors, additional regressors, transformations, instrumental variables, etc.) may be needed.