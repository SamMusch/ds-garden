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
_kMDItemDisplayNameWithExtensions: Regression.md
ai_abstract: null
ai_key_terms: []
aliases: null
children: 0
created: '2026-03-20'
cssclasses: null
grandchildren: 0
kMDItemContentCreationDate: 2025-01-05 17:55:28 +0000
kMDItemContentCreationDate_Ranking: 2025-05-19 00:00:00 +0000
kMDItemContentModificationDate: 2026-03-20 21:56:12 +0000
kMDItemContentType: net.daringfireball.markdown
kMDItemContentTypeTree: (
kMDItemDateAdded: 2025-05-19 18:39:49 +0000
kMDItemDocumentIdentifier: '627694'
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
kMDItemInterestingDate_Ranking: 2025-01-05 00:00:00 +0000
kMDItemLastUsedDate: 2025-01-05 23:55:18 +0000
kMDItemLastUsedDate_Ranking: 2025-01-05 00:00:00 +0000
kMDItemUseCount: '10'
kMDItemUsedDates: (
modified: '2026-03-20'
published: true
reading_time: 5.2
source_file: Regression.md
tags: null
title: Regression
word_count: 1048
---

## Outline of Steps in Multiple Regression

1. **Specify the Model**  

2. **Fit the Model**  

3. **Inferences**  

4. **Assumptions**  

5. **Use the Model**  

!!! sam
    **Key Reminder**: You generally need at least one numerical IV for **multiple linear** regression. 

    - If DV is numeric & **all** predictors are categorical, typically use an **ANOVA** framework. 

    - If DV is binary, typically use **logistic regression**, which can handle both numeric and categorical IVs.


---

## 1. Specify the Model

### Selecting the Best Model

1. **Keep it simple** — Avoid overfitting.  

2. **Maximize** $R^2$.  

3. **Minimize SER (Residual Standard Error)** — A smaller SER indicates less error on average.  

4. **Use significant predictors** — Statistical significance suggests they’re meaningful.  

5. **Maintain logical relationships** — The model should make theoretical and practical sense.  

6. **Check residual assumptions** — Residuals should meet normality, homoscedasticity, etc.


**Process Model:**  
$Y = \beta_0 + \beta_1 X_1 + \beta_2 X_2 + \dots + \varepsilon$

- $\beta_0$: Intercept (the expected value of $Y$ when predictors = 0).  

  - Only interpretable if $X=0$ makes sense in your context or is near the observed range.  

- $\beta_1, \beta_2, \dots$: Mean change in $Y$ for one-unit change in each $X$.

Here, $\varepsilon$ represents **random error** in the real-world process. (It's still considered an RV though.)

#### Patterns to Recognize  

- **Log-like patterns** may suggest transformations (e.g., **log**, **exponential**, **power**).  

- **Convex vs. concave** shapes in a plot of $Y$ vs. $X$ might indicate the need for polynomial terms or log transformations.

    - Convex (Exponential)

    - Concave (Manual laborer)

---

## 2. Fit the Model

**Goal**: Minimize the **sum of squared errors (SSE)** to find the **best-fitting** regression line or hyperplane.

| **Model**   | **Definition**                                              | **Coefficients**     | **Formula**                                                       |
| ----------- | ----------------------------------------------------------- | -------------------- | ----------------------------------------------------------------- |
| **Process** | Describes relationships in the real world (conceptual)      | Unknown (Parameters) | $Y = \beta_0 + \beta_1 X_1 + \beta_2 X_2 + \dots + \varepsilon$   |
| **Fitted**  | Describes how the model operates on sample data (empirical) | Known (Statistics)   | $\hat{Y} = \hat{\beta}_0 + \hat{\beta}_1 X_1 + \hat{\beta}_2 X_2$ |

### Mean Point Property
The **least squares regression** line in simple linear regression always passes through $(\bar{X}, \bar{Y})$. In multiple regression, this concept generalizes to the idea that the fitted hyperplane goes through the means of all variables involved.

---

## 3. Inferences (Testing)

### Hypothesis Testing

- **Null Hypothesis** $(H_0)$: No relationship (all $\beta$s = 0).  

- **Alternative Hypothesis** $(H_a)$: At least one $\beta \neq 0$.

**Variation Decomposition**:

- **Explained Variation**: Variation due to the model ($\hat{\beta}$ line/hyperplane).  

- **Unexplained Variation**: Residuals/errors.

In software like R:

- `summary(model)` interprets each $\beta$ **controlling for** all other predictors.  

- `anova(model)` interprets each $\beta$ **in sequence**, depending on the order of predictors.

---
#### ANOVA Components

This table shows how **Analysis of Variance** partitions the variability in $Y$. It also provides metrics to evaluate model quality.

| **Category**             |                         | **Component**        | **Formula**                                           | **Explanation**                                                                          |
| ------------------------ | ----------------------- | -------------------- | ----------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| **Model Structure**      | Degrees of Freedom (DF) | Regression           | Number of predictors                                  | Number of independent variables in the model.                                            |
|                          |                         | Error                | $\text{observations} - \text{predictors} - 1$       | Residual (unexplained) degrees of freedom.                                               |
|                          |                         | Total                | $\text{observations} - 1$                           | Total degrees of freedom in the dataset.                                                 |
|                          | Sum of Squares (SS)     | Regression           | Explained variation                                   | Portion of total variability explained by the model.                                     |
|                          |                         | Error                | Unexplained variation                                 | Portion of total variability **not** explained by the model.                             |
|                          |                         | Total                | $\text{SS Regression} + \text{SS Error}$            | Total variability in the dataset.                                                        |
| **Model Evaluation**     | Mean Squares (MS)       | MS Regression        | $\text{SS Regression} / \text{DF Regression}$       | Average explained variability per degree of freedom.                                     |
|                          |                         | MS Error             | $\text{SS Error} / \text{DF Error}$                 | Average unexplained variability per degree of freedom.                                   |
|                          |                         | F-statistic          | $F = \frac{\text{MS Regression}}{\text{MS Error}}$  | Compares explained vs. unexplained variability; used to test overall model significance. |
| **Model Fit Statistics** |                         | Standard Error (SER) | $s = \sqrt{\text{MS Error}}$                        | Standard deviation of the residuals (errors).                                            |
|                          |                         | $R^2$              | $R^2 = 1 - \frac{\text{SS Error}}{\text{SS Total}}$ | Proportion of the variation in $Y$ explained by the model.                             |
|                          |                         | $R$                | $\sqrt{R^2}$ (or $\pm \sqrt{R^2}$ for direction)  | Strength (and possibly direction) of the linear relationship.                            |

---

## 4. Assumptions

1. **Random/Representative Sampling** — Data should be sampled in a way that is representative of the population.  

2. **Stability Over Time** — No major changes in relationships during the data collection period.  

3. **Errors Normally Distributed** — Error term $\varepsilon$ has mean = 0 and constant variance (homoscedasticity).  

!!! sam
    **Standardized Residuals** are used to check normality and to identify potential outliers. Calculated as:

    1. **Ordinary Residual:** Find the difference between actual value ($y_i$) and prediction ($\hat{y}_i$).

    2. **Standardized Residual:** Divide this by the estimated standard error of ALL residuals. (Converts into standard scale.)



### Multicollinearity

- Doesn’t affect **overall** $F$-stat or $R^2$, but affects the **individual** $\beta$ estimates (they can become unstable or imprecise).  

| `cor()` | Interpretation                                |
| ------- | --------------------------------------------- |
| <0.2    | Low correlation, usually no issue.            |
| 0.2–0.7 | Moderate correlation, interpret with caution. |
| 0.7     | High correlation, potential problem.          |

---

## 5. Using the Model

### 5a. Description

- Summarize relationships between variables (direction, strength).

### 5b. Estimation

- Estimate the **mean** of $Y$ for given $X$-values.

- The tightest (least variance) point estimate is typically around $\bar{X}$.

### 5c. Prediction

- Use a **prediction interval** to predict an **individual** $Y$.

- A simplified form:
  
  $\hat{Y} \;\pm\; t_{\alpha/2, \text{df}} \times \sqrt{\text{Var}(\hat{Y}) + \text{Var}(\epsilon)}$

---

## Beta Interpretation

- **$t$-statistic**: $\displaystyle t = \frac{\text{coefficient}}{\text{std error of coefficient}}$.  

- **Degrees of Freedom**: Typically $n - k - 1$, where $n$ = number of observations, $k$ = number of predictors.

### Nominal Factors

- **Same slopes** across groups; different intercepts.

- Categorical variable levels shift the regression line **vertically**.

### Interactions

- **Different slopes** across groups.  

- An interaction term allows the effect of one predictor to change depending on the value of another.

### Transformations

| Log                    | $\Delta$ X  --> | $\Delta$ Y |
| ---------------------- | --------------- | ---------- |
| Y           ~   X      | U               | U          |
| Y           ~   log(X) | %               | U          |
| log(Y)   ~   X         | U               | % pt       |
| log(Y)   ~   log(X)    | %               | %          |



---

## Multicollinearity Plots in R

Below is an example of checking correlations in an R workflow. Note that the line `good_data <- data[good_mask, 0]` might be a mistake or placeholder; you’d typically use `data[good_mask, ]` or select the relevant columns.

```r
# Example R code for exploring multicollinearity
data <- c()  # Your dataset here

row_sums <- rowSums(data)
good_mask <- row_sums > 0
good_data <- data[good_mask, ]  # Usually select rows and all columns

# Calculate correlation matrix
cormat <- round(cor(good_data), 2)

# Reshape data for ggplot
melted_cormat <- melt(cormat)

# Inspect the long-format correlation data
melted_cormat

# Plot heatmap of correlations
ggplot(data = melted_cormat, aes(x = Var1, y = Var2, fill = value)) + 
  geom_tile(color = 'white') + 
  scale_fill_gradient2(low = 'blue', high = 'red', 
                       mid = 'white', midpoint = 0, 
                       limit = c(-1,1)) +
  coord_fixed()