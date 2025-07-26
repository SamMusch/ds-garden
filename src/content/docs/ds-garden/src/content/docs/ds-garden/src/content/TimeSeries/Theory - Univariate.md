---
title: Theory - Univariate
---

- [Springer Textbook](https://mybiostats.wordpress.com/wp-content/uploads/2015/03/time-series-analysis-with-applications-in-r-cryer-and-chan.pdf)
- [University of South Carolina Lecture Notes (Heavy)](https://people.stat.sc.edu/Tebbs/stat520/f13notes.pdf)
- [ChatGPT for cleaning this note doc](https://chatgpt.com/share/67cdcb8b-2818-8000-978e-1ad36398337a)

### 1. Intro

| Ch  | Topic  | Topic                                                                                    |
| --- | ------ | ---------------------------------------------------------------------------------------- |
| 2   | Basics | Mean, covariance, correlation, stationarity                                              |
| 3   | Trend  | How to estimate & check common deterministic trend models                                |
| 4   | ARMA   | Stationary, aka Box-Jenkins models                                                       |
| 5   | ARIMA  | Nonstationary                                                                            |
| 6   | Heart  | Techniques for tentatively specifying models                                             |
| 7   | Heart  | Efficiently estimating the model parameters using least squares and maximum likelihood   |
| 8   | Heart  | Determining how well the models fit the data                                             |
| 9   | MSE    | Theory & methods of MSE for ARIMA                                                        |
| -   | -      | The remaining chapters cover selected topics and are of a somewhat more advanced nature. |

```ad-sam

**Process**:
1. **Check stationarity**.
2. **If nonstationary**, use differencing or other transformations.
3. Identify the number of days to use for ARMA using ACF, PACF, EACF.
4. **Estimate model parameters**.
5. **Validate model** (fit, residual checks, etc.).

```


### 2. Cheatsheet

```ad-sam

**Basics**
- **Mean**: Average value over time.
- **Covariance & Correlation**: Measure how two time points move together.
- **Stationarity**: Means, variances, and autocovariances do not change over time.


**Forecasting**: when consecutive observations are **not** independent. 
- *autocorrelation*: correlation between time points
- *white noise*: no correlation

```

```ad-sam

1. **Stationarity**
   - **Definition**: Constant mean, constant variance, and autocovariance depends only on lag.  
   - **Check**: Plot data, use ADF test, consider differencing if nonstationary.
<br>
1. **Autocorrelation Functions**  
   - **ACF**: Helps identify MA processes (autocorrelations that cut off abruptly often indicate MA).  
   - **PACF**: Helps identify AR processes (partial autocorrelations that cut off abruptly often indicate AR).
<br>
1. **Model Families**  
   - **AR(p)**: Depends on its own past **values**.  
   - **MA(q)**: Depends on past forecast **errors**.  
   - **ARMA(p, q)**: Combination of AR and MA (stationary).  
   - **ARIMA(p, d, q)**: Adds differencing for nonstationary data.  
   - **SARIMA**: Adds seasonal components.
<br>
1. **Model Selection**  
   - **ACF/PACF/EACF** to guess initial p, q.  
   - **AIC/BIC**: Compare candidate models; lower is better.  
   - Residual checks to ensure white-noise residuals.
<br>
1. **Forecasting**  
   - **Naive**: Use the last observed value.  
   - **Averaging**: Use the mean of recent observations.  
   - **Exponential Smoothing**: Heavier weight on recent observations.  
   - **ARIMA-based**: Incorporates AR/MA terms and differencing.
<br>
1. **Trends & Seasonality**  
   - **Deterministic Trend**: Model explicitly if present (linear, polynomial, etc.).  
   - **Seasonality**: SARIMA or explicit seasonal terms.


```


## 3. **Stationary vs. Nonstationary**

```ad-sam
**Stochastic Process**: A sequence of RVs indexed by time.

- **Sample Path**: One particular realization of that stochastic process.
- **Stationarity**:
  - Constant mean over time.
  - Constant variance.
  - Constant autocovariance (depends only on the lag).
  - No inherent seasonality.

**Why Stationarity?**  
With only one observed path, stationarity lets us make reliable inferences about the underlying process from that single path.

```

### Random Walk (Nonstationary)
```ad-sam
- Values evolve via accumulating errors over time.
- Variance grows with time.
- Apparent “trend” might be random fluctuation.
```

### Converting to Stationary
```ad-sam
1. **1st differencing**:  
   - A random walk $Y_t$ becomes stationary if you take $Y_t - Y_{t-1}$.  
   - Use the **ADF test** to decide if differencing is needed.
1. **2nd differencing** if one differencing step is not enough.  
2. **Log transform** if variance grows with the level of the series (common for financial data).

```

---

## 4. **Model Classes**

### 4.1 White Noise

```ad-sam

- **Definition**: Sequence of i.i.d. RVs with mean 0 and constant variance.
- **Autocorrelation**: Zero at all lags.

```

### 4.2 Moving Average (MA)

```ad-sam
- **MA(q)**: Current value depends on past $q$ errors (white-noise terms).
- Example: **MA(2)**

  $X_{t} = \varepsilon_{t} + \theta_{1}\varepsilon_{t-1} + \theta_{2}\varepsilon_{t-2}$

  - **Expected value** of $X_t$ is 0 (if no constant term).
  - **Variance** of $X_t$ is $1 + \theta_{1}^2 + \theta_{2}^2$ (assuming $\varepsilon_t \sim \text{iid}(0,1)$).
  - **Covariance** terms depend on $\theta_{i}$ values and the lag.

```


### 4.3 Autoregressive (AR)

```ad-sam

- **AR(p)**: Current value depends on its own past $p$ values.
- Example: **AR(1)**

  $X_{t} = \phi X_{t-1} + \varepsilon_{t}$

  - Stationary if $|\phi| < 1$.
  - **Variance** of $X_t$ for AR(1):  
    $\text{Var}(X_t) = \frac{1}{1 - \phi^2}$
  - **Covariance** at lag 1:  
    $\text{Cov}(X_t, X_{t-1}) = \frac{\phi}{1 - \phi^2}$


```

#### Backshift Notation

```ad-sam
- **Backshift operator** $B$: $B(X_{t}) = X_{t-1}$.
- **AR(1) in backshift form**:

  $(1 - \phi B)X_t = \varepsilon_t$

```


### 4.4 ARMA

```ad-sam
- **ARMA(p, q)** = Autoregressive part (p) + Moving Average part (q).
- **Stationarity**: Required for ARMA to work properly.
```

### 4.5 ARIMA

```ad-sam
- **ARIMA(p, d, q)**: Same as ARMA but the series is differenced $d$ times to achieve stationarity.
- In backshift form:

  $(1 - B)^d X_t \quad \text{follows an ARMA}(p,q)$
```


### 4.6 SARIMA

```ad-sam
- Adds **seasonal** terms for both autoregressive and moving-average, as well as seasonal differencing.
- Notation: **SARIMA$(p,d,q)(P,D,Q)_m$** where $m$ is the seasonal period (e.g., 12 for monthly data with yearly seasonality).
```

---


## 6. **Forecasting Methods**

```ad-sam

1. **Naive**  
   - Forecast is simply the last observed value.

2. **Average**  
   - Forecast is the mean of recent or all observed values.

3. **Exponential Smoothing**  
   - Weighted average of past observations where weights decay exponentially.

4. **ARIMA-based Forecasts**  
   - Use the fitted ARIMA model to predict future values, taking into account AR/MA terms and differencing.

**Example**:  
- **Simple Exponential Smoothing** $\approx$ ARIMA$(0,1,1)$ under some parameter relationships.  


```

---

## 7. **Trends & Seasonality**

```ad-sam
- **Deterministic Trend**:  
  - A function of time (linear, polynomial).  
  - $Y_t = f(t) + \text{stationary noise}$.
  - If trend is linear ($f(t) = \beta_0 + \beta_1 t$), differencing can remove the linear component.

- **Seasonality**:  
  - Patterns repeat at fixed intervals.  
  - Handle with seasonal differencing or adding seasonal AR/MA terms (SARIMA).

- **Tests for Trend**:  
  - **ADF**: If p-value is high, the series might need differencing or might have a deterministic trend.  
  - **Residual Analysis**: Check whether residuals are white noise. If not, the trend model might be inadequate.

```


