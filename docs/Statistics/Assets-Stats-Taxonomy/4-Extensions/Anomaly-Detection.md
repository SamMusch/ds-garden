---
published: true
---

Anomaly vs Outlier

- **Anomaly**: new generating process

- **Outlier**: same generating process (get rid of for modeling)

## ChatGPT's Taxonomy

[ChatGPT Taxonomy](https://chatgpt.com/share/678e9cde-b66c-8000-971e-12698e0ff116) - 2025-01-20
[ChatGPT Integrating my old notes](https://chatgpt.com/share/678eaf64-2e20-8000-bd48-9bfaf6eb75b3) - 2025-01-20

!!! sam
    Anomaly Detection can be categorized using various criteria based on data characteristics, methods used, or application domains. 

    Here is a taxonomy of anomaly detection, based on..



### Background
#### **1. Data Type**

- **Univariate vs. Multivariate**

- **Static vs. Dynamic** (times series, sequential)

- **Structured vs. Unstructured** (database vs data like images/text)
#### **2. Nature of Anomalies**

- **Point:** Individual point differs from norm.

- **Contextual:** Data points that are anomalous only in a specific context (e.g., a low temperature in summer).

- **Collective:** Groups of related data points differ from norm
#### **3. Learning Paradigm**

- **Supervised**: Using labeled data

- **Semi-supervised**: Train on normal data, find new points that differ (eg, Autoencoders trained on normal data)

- **Unsupervised**: Use clustering, density estimation, or outlier scoring.
### **4. Detection Methods**

- **Statistical**: Assumes data follows a known statistical distribution; anomalies are deviations from this distribution.

    - Z-score, Gaussian Mixture Models (GMM).

- **Machine Learning**: Uses algorithms to learn patterns and identify anomalies.

    - **Clustering**: DBSCAN, k-means.

    - **Classification**: SVM, Random Forest.

    - **Deep Learning**: Autoencoders, Variational Autoencoders (VAEs), RNNs

- **Proximity-Based**: Use distance or similarity.

    - k-Nearest Neighbors (k-NN)

    - Local Outlier Factor (LOF)

---


## Background
### 1. Data Type

**Univariate vs. Multivariate**
!!! sam
    | **Category**     | **Description** | **Example**            | **Common Methods**                                                           |
    | ---------------- | --------------- | ---------------------- | ---------------------------------------------------------------------------- |
    | **Univariate**   | 1 variable      | Daily temperature      | - Z-score (Grubbs’ test)<br>- GESD<br>- simple parametric or histogram-based |
    | **Multivariate** | 2+ variables    | Temperature + humidity | - Mahalanobis distance,<br>- multivariate Gaussians,<br>- clustering         |


**Static vs. Dynamic**
!!! sam
    | **Category**              | **Description**                                                 | **Example**                 | **Common Methods**                                                 |
    | ------------------------- | --------------------------------------------------------------- | --------------------------- | ------------------------------------------------------------------ |
    | **Static**                |                                                                 | Random samples in a dataset | - k-NN <br>- clustering <br>- one-class SVM <br>- isolation forest |
    | **Dynamic / Time Series** | Sequentially-ordered data | Sensor readings over time   | - Moving average  <br>-STL decomposition  <br>-RNN/LSTM-based                  |


**Structured vs. Unstructured**
!!! sam
    | **Category**     | **Description**                                             | **Example**                                | **Common Methods**                                        |
    | ---------------- | ----------------------------------------------------------- | ------------------------------------------ | --------------------------------------------------------- |
    | **Structured**   | Data in well-defined schemas (relational database, tabular) | Relational tables in a database            | - SQL-based queries <br>- Bayesian networks <br>- standard ML |
    | **Unstructured** | Data without a strict schema (text, images, audio)          | Image anomaly detection, log-text analysis | - CNNs for images <br>- transformer-based text models            |



### 2. Nature of Anomalies

| **Type**                 | **Definition**                                                                                                         | **Example**                                             | **Notes**                                                                                               |
| ------------------------ | ---------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| **Point / Global**       | A single data point that is far from the rest of the distribution                                                      | A single extremely high transaction value               | Often flagged via simple statistical methods (e.g., Z-score)                                            |
| **Contextual**           | A data point that is only anomalous in a given context (time, location, etc.)                                          | 75°F in Canadian winter                                 | Must model both **context attributes** (e.g., location/time) and **behavioral attributes** (e.g., temp) |
| **Collective**           | A set of related data points that jointly deviate from normal patterns                                                 | A group of transactions that spike at once              | Individual points might appear normal, but their _group behavior_ is anomalous                          |
| **Distributional Shift** | The overall distribution changes (concept drift, new patterns emerging)                                                | A sudden change in average temperature or user behavior | May require updating the model or using methods that adapt over time                                    |

### 3. Learning Paradigm

|**Paradigm**|**Key Idea**|**Typical Methods**|**Pros / Cons**|
|---|---|---|---|
|**Supervised**|Train a model with both normal and anomalous labeled data|SVM, Random Forest, Logistic Regression|**Pros**: Accurate if labeled data is representative;  <br>**Cons**: Requires labeled anomalies, which can be expensive or rare|
|**Semi-Supervised**|Train primarily on normal data; anomalies deviate significantly from learned “normal”|Autoencoders (reconstruction error), One-Class SVM|**Pros**: Easier to obtain normal data;  <br>**Cons**: Might miss anomalies that look somewhat “normal”|
|**Unsupervised**|No labels; rely on inherent data structure to find outliers|Clustering (DBSCAN, k-means), LOF, isolation forest|**Pros**: No labels needed;  <br>**Cons**: Often requires careful parameter tuning; might flag too many or too few points|

---


## 4. Detection Methods

### 4.1 Statistical Methods

| **Approach**       | **Assumption**                                     | **Pros / Cons**                                                                                           |
| ------------------ | -------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| **Parametric**     | Data follows a known distribution (e.g., Gaussian) | **Pros**: Straightforward if correct distribution known  <br>**Cons**: Sensitive to distribution mismatch |
| **Non-Parametric** | No assumptions on data distribution                | **Pros**: Flexible  <br>**Cons**: Can be more computationally intensive                                   |

|                    | **Univariate**                                                                                                                                                                                                                                                                                                                                                                                                                                                             | **Multivariate**                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| ------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **Parametric**     | **Maximum Likelihood Estimation (MLE):**<br>  $\rightarrow$ Fit a chosen distribution (often normal) by estimating parameters (e.g., mean and std. dev.)<br>  $\rightarrow$  Points far in the tails may be flagged as outliers<br><br>**Grubbs’ Test (Z-score):**<br> $\rightarrow$ Identifies a single outlier by comparing Z-scores to a threshold<br><br>**GESD (Generalized Extreme Studentized Deviate):**<br>   $\rightarrow$ Iteratively detects multiple outliers | **Mahalanobis Distance:**<br>   $\rightarrow$ Assumes data follows a multivariate normal distribution; uses mean & covariance to measure distance<br><br>**Chi-squared Test:**<br>   $\rightarrow$ Often used if variables are assumed jointly normal; large values indicate a potential outlier<br><br>**Expectation-Maximization (EM):**<br>   $\rightarrow$ Fits a **Gaussian Mixture Model** (or other distributions); points with low likelihood are flagged as anomalies |
| **Non-Parametric** | - **Histogram-Based:**<br>   $\rightarrow$ Estimate density via binning; points in sparse bins have high outlier scores<br><br>- **Rank-Based Tests:**<br>   $\rightarrow$ Compare point ranks to expected distributions (e.g., Wilcoxon-type tests)                                                                                                                                                                                                                       | **Kernel Density Estimation (KDE):**<br>   $\rightarrow$ Estimates the multivariate density; points in low-density regions may be anomalies<br><br>**Non-Parametric Distance Methods:**<br>   $\rightarrow$ Similar to proximity-based methods, but viewed from a statistical density perspective                                                                                                                                                                              |

Notes

- **Parametric (Univariate)**  

  - *Maximum Likelihood Estimation (MLE)* is used to find parameters (e.g., mean \mu, std. dev. \sigma) for a hypothesized distribution.  

  - **Grubbs’ Test** and **GESD** rely on these parameters to flag outliers.

- **Parametric (Multivariate)**  

  - **Mahalanobis Distance** and **Chi-squared** tests assume a multivariate Gaussian distribution.  

  - **Expectation-Maximization (EM)** can model more complex or mixed distributions (e.g., Gaussian Mixture Models).

- **Non-Parametric (Univariate / Multivariate)**  

  - Do not assume a specific distribution.  

  - Rely on data-driven density estimation (e.g., histograms, kernel density) or rank-based methodologies.


### 4.2 Machine Learning Methods

| **Method**         | **Key Idea**                                               | **Examples**             | **Notes**                                                           |
| ------------------ | ---------------------------------------------------------- | ------------------------ | ------------------------------------------------------------------- |
| **Clustering**     | Normal data form clusters; outliers do not fit well        | k-means, DBSCAN          | Points far from cluster centroids or in sparse clusters are flagged |
| **Classification** | Labeled normal/anomalous classes                           | SVM, Random Forest       | Requires sufficient labeled anomalies, which may be rare            |
| **Deep Learning**  | Learn representations or patterns in high-dimensional data | Autoencoders, VAEs, RNNs | Autoencoder reconstruction error is a common anomaly signal         |

- Clusters

    - Does it belong to a cluster? If **no** --> outlier

    - Is it far away from its cluster? If **yes** --> outlier

    - Is the cluster small or sparse? if **yes** --> outlier



### 4.3 Proximity-Based Methods

| **Method**                     | **Definition**                                                   | **Examples**           | **Calculation / Notes**                                                                                    |
| ------------------------------ | ---------------------------------------------------------------- | ---------------------- | ---------------------------------------------------------------------------------------------------------- |
| **Distance-Based**             | Outliers are “far” from neighbors                                | k-NN outlier detection | Threshold-based or top-N distance rankings                                                                 |
| **Density-Based**              | Outliers appear in low-density regions                           | DBSCAN, LOF            | Compare local density with that of neighbors                                                               |
| **Local Outlier Factor** (LOF) | Ratio of the density of a point vs. the density of its neighbors | LOF algorithm          | 1. Find kkk-nearest neighbors  <br>2. Compute local reachability density  <br>3. LOF > 1 indicates anomaly |

LOF: larger value = more anomalous
Steps using 3 nn as an example

- Step 1: Find distance from me to 3 nn

- Step 2: Take the avg

- Step 3: Local reach density = 1 / that avg

- Step 4: LOF = Avg local reach density of neighbors / my local reach density


### 4.4 Subset Scanning

|**Approach**|**Key Idea**|**Examples**|**Notes**|
|---|---|---|---|
|**WSARE + Chi-squared**|Identify a rule or subset that is not independent of time|Binning data by features, seeing if some combination spikes|Commonly used for disease outbreak detection; uses stats to see if patterns deviate in time|
|**Bayesian Networks**|Check if a row/subset fits a “normal” category|Causal or hierarchical relationships|Learns the joint probability of features; flags subsets that break expected dependencies|
|**Predictive Models**|Build a forecast or expected behavior, compare to actual|Regressions, ARIMA, machine learning|Subsets that deviate significantly from predictions are flagged|

---


## Time-Dependent Anomaly Detection

$\text{Temporal data = seasonal patterns + overall trend + irregular (ie noise})$.
We need to take these into consideration to make our data stationary.

| **Aspect**                                             | **Description**                                                       | **Techniques**                                                  | **Notes**                                                                                                                                 |
| ------------------------------------------------------ | --------------------------------------------------------------------- | --------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- |
| **Seasonality & Trends**                               | Data may exhibit daily/weekly/annual cycles and overall trends        | - STL decomposition  <br>- Moving average/residual analysis     | Helps isolate the “irregular” component where anomalies may be found                                                                      |
| **Moving Average**                                     | Uses recent history to estimate today’s expected value                | - Compare actual vs. expected  <br>- Residuals flagged if large | Assumes short-term stationarity, can apply statistical tests (e.g., GESD) on residuals                                                    |
| **STL (Seasonal and Trend decomposition using Loess)** | Decomposes time series into seasonal, trend, and remainder components | - Loess-based smoothing                                         | The remainder (irregular) component can highlight anomalies after accounting for seasonality and trend. Good for nonlinear relationships. |
| **Sequential / RNN-based**                             | Models temporal dependencies (e.g., LSTM)                             | - Recurrent Neural Networks                                     | Learns normal temporal patterns; flags unusual sequences or hidden state transitions                                                      |
| **Concept Drift / Distribution Shift**                 | Distribution may change over time, invalidating older models          | - Online learning  <br>- Adaptive algorithms                    | Requires continuous updating of model parameters to adapt to new normal patterns                                                          |

**Moving Average**: assuming recent data is indicative of today
Steps

1. Take difference from what we expect - what we got

    1. Residuals expected to be normally distributed (CLT)

2.   Flag the values that are different than what we would expect from the most recent with GESD