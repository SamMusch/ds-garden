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
_kMDItemDisplayNameWithExtensions: ML-TS.md
ai_abstract: null
ai_key_terms: []
aliases: null
children: 0
created: '2025-10-23'
cssclasses: null
grandchildren: 0
kMDItemContentCreationDate: 2025-10-07 22:23:24 +0000
kMDItemContentCreationDate_Ranking: 2025-10-07 00:00:00 +0000
kMDItemContentModificationDate: 2025-10-12 18:14:40 +0000
kMDItemContentType: net.daringfireball.markdown
kMDItemContentTypeTree: (
kMDItemDateAdded: 2025-10-07 22:23:24 +0000
kMDItemDocumentIdentifier: '222823'
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
kMDItemInterestingDate_Ranking: 2025-10-12 00:00:00 +0000
modified: '2025-10-12'
published: true
reading_time: 15.7
source_file: ML-TS.md
tags: null
title: ML TS
word_count: 3143
---

DL Resources

- [Book: Deep Learning for Time Series Forecasting](file:///Users/Sam/Desktop/2%20DS/01%20Predictive/Book-Deep-TS/deep_learning_time_series_forecasting.pdf) by Jason Brownlee

- [Book: Time Series Analysis With Applications in R](https://mybiostats.wordpress.com/wp-content/uploads/2015/03/time-series-analysis-with-applications-in-r-cryer-and-chan.pdf)



# Univariate

- [ChatGPT for cleaning this note doc](https://chatgpt.com/share/67cdcb8b-2818-8000-978e-1ad36398337a)
 
### 1. Intro

| Ch  | Topic  | Topic                                                                                  |
| --- | ------ | -------------------------------------------------------------------------------------- |
| 2   | Basics | Mean, covariance, correlation, stationarity                                            |
| 3   | Trend  | How to estimate & check common deterministic trend models                              |
| 4   | ARMA   | Stationary, aka Box-Jenkins models                                                     |
| 5   | ARIMA  | Nonstationary                                                                          |
| 6   | Heart  | Techniques for tentatively specifying models                                           |
| 7   | Heart  | Efficiently estimating the model parameters using least squares and maximum likelihood |
| 8   | Heart  | Determining how well the models fit the data                                           |
| 9   | MSE    | Theory & methods of MSE for ARIMA                                                      |
| -   | -      | The remaining chapters cover specific topics.                                          |

!!! sam
    **Process**:

    1. **Check stationarity**.

    2. **If nonstationary**, use differencing or other transformations.

    3. Identify the number of days to use for ARMA using ACF, PACF, EACF.

    4. **Estimate model parameters**.

    5. **Validate model** (fit, residual checks, etc.).


### 2. Cheatsheet

!!! sam
    **Basics**

    - **Mean**: Average value over time.

    - **Covariance & Correlation**: Measure how two time points move together.

    - **Stationarity**: Means, variances, and autocovariances do not change over time.

    **Forecasting**: when consecutive observations are **not** independent. 

    - *autocorrelation*: correlation between time points

    - *white noise*: no correlation



!!! sam

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


## 3. **Stationary vs. Nonstationary**

!!! sam
    **Stochastic Process**: A sequence of RVs indexed by time.

    - **Sample Path**: One particular realization of that stochastic process.

    - **Stationarity**:

        - Constant mean over time.

        - Constant variance.

        - Constant autocovariance (depends only on the lag).

        - No inherent seasonality.

    **Why Stationarity?**  
    With only one observed path, stationarity lets us make reliable inferences about the underlying process from that single path.


### Random Walk (Nonstationary)
!!! sam

    - Values evolve via accumulating errors over time.

    - Variance grows with time.

    - Apparent “trend” might be random fluctuation.


### Converting to Stationary
!!! sam

    1. **1st differencing**:  

        - A random walk $Y_t$ becomes stationary if you take $Y_t - Y_{t-1}$.  

        - Use the **ADF test** to decide if differencing is needed.

    1. **2nd differencing** if one differencing step is not enough.  

    2. **Log transform** if variance grows with the level of the series (common for financial data).


---

## 4. **Model Classes**

### 4.1 White Noise

!!! sam

    - **Definition**: Sequence of i.i.d. RVs with mean 0 and constant variance.

    - **Autocorrelation**: Zero at all lags.


### 4.2 Moving Average (MA)

!!! sam

    - **MA(q)**: Current value depends on past $q$ errors (white-noise terms).

    - Example: **MA(2)**

      $X_{t} = \varepsilon_{t} + \theta_{1}\varepsilon_{t-1} + \theta_{2}\varepsilon_{t-2}$

        - **Expected value** of $X_t$ is 0 (if no constant term).

        - **Variance** of $X_t$ is $1 + \theta_{1}^2 + \theta_{2}^2$ (assuming $\varepsilon_t \sim \text{iid}(0,1)$).

        - **Covariance** terms depend on $\theta_{i}$ values and the lag.


### 4.3 Autoregressive (AR)

!!! sam

    - **AR(p)**: Current value depends on its own past $p$ values.

    - Example: **AR(1)**

      $X_{t} = \phi X_{t-1} + \varepsilon_{t}$

        - Stationary if $|\phi| < 1$.

        - **Variance** of $X_t$ for AR(1):  
        $\text{Var}(X_t) = \frac{1}{1 - \phi^2}$

        - **Covariance** at lag 1:  
        $\text{Cov}(X_t, X_{t-1}) = \frac{\phi}{1 - \phi^2}$


#### Backshift Notation

!!! sam

    - **Backshift operator** $B$: $B(X_{t}) = X_{t-1}$.

    - **AR(1) in backshift form**:

      $(1 - \phi B)X_t = \varepsilon_t$


### 4.4 ARMA

!!! sam

    - **ARMA(p, q)** = Autoregressive part (p) + Moving Average part (q).

    - **Stationarity**: Required for ARMA to work properly.


### 4.5 ARIMA

!!! sam

    - **ARIMA(p, d, q)**: Same as ARMA but the series is differenced $d$ times to achieve stationarity.

    - In backshift form:

      $(1 - B)^d X_t \quad \text{follows an ARMA}(p,q)$


### 4.6 SARIMA

!!! sam

    - Adds **seasonal** terms for both autoregressive and moving-average, as well as seasonal differencing.

    - Notation: **SARIMA$(p,d,q)(P,D,Q)_m$** where $m$ is the seasonal period (e.g., 12 for monthly data with yearly seasonality).


---

## 6. **Forecasting Methods**

!!! sam

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


---

## 7. **Trends & Seasonality**

!!! sam

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







# Ebook

#### 02. Taxonomy

!!! sam

    1. **Inputs vs. Outputs** (X vs Y)

        - **Inputs**: Historical data provided to the model in order to make a single forecast.

        - **Outputs**: Forecast for a future time step beyond the data provided as input.
    <br>

    1. **Endogenous vs. Exogenous** (Influencing each other?)

        - **Endogenous**: Input variables that *are* influenced by other variables in the system and on which the output variable depends.  

        - **Exogenous**: Input variables that *are not* influenced by other variables in the system and on which the output variable depends.
    <br>

    1. **Unstructured vs. Structured** (Time-dep patterns?)

        - **Unstructured**: No obvious systematic time-dependent pattern in a time series variable.  

        - **Structured**: Systematic time-dependent patterns in a time series variable (e.g. trend and/or seasonality).
    <br>

    1. **Univariate vs. Multivariate**

        - Uni and Multi **Inputs**: 1+ input variables measured over time.

        - Uni and Multi **Outputs**: 1+ output variables to be predicted.
    <br>

    1. **Single-step vs. Multi-step**

        - **One-step**: Forecast the next time step.

        - **Multi-step**: Forecast more than one future time steps.
    <br>

    1. **Static vs. Dynamic** (Streaming?)

        - **Static**: Model is fit once and used to make predictions.

        - **Dynamic**: Model is fit on newly available data prior to each prediction.
    <br>

    1. **Contiguous vs. Discontiguous** (Time uniform?)

        - **Contiguous**: Observations are uniform over time.  (eg 1 per hour)

        - **Discontiguous**: Observations are not uniform over time.


#### 04. Windows

!!! sam
    Sliding window: Take all columns in the dataset (including target variable) and take the **lag**.

    Parameters for the **lag**:

    - **Input Width**: Number of time steps

    - **Offset**: "1" if just using the values from previous time step

    - Total width: Input Width + Offset

    - **Label width**: How many timesteps in the future



#### 06. Data Transform

!!! sam
    Input shape:

    - **Samples:** One sequence is one sample. A batch is comprised of one or more samples.  

    - **Time Steps:** One time step is one point of observation in the sample. One sample is comprised of multiple time steps.  

    - **Features:** One feature is one observation at a time step. One time step is comprised of one or more features.

    Put Simply:

    - Normal Shape: Rows, Columns

    - TS Shape: Rows, **TimeSteps**, Columns


## Ch 20:  LSTMs

!!! sam
    Unlike other algorithms, LSTM RNNs are

    - capable of automatically learning features from sequence data,

    - support multiple-variate data, and

    - can output a variable length sequences that can be used for multi-step forecasting.

    References

    - Load dataset - ch 17

    - Framework for evaluating models - ch 17

        - Details of walk-forward validation - ch 19

    In this tutorial, we will explore a suite of LSTM architectures for multi-step time series forecasting. Specifically, we will look at how to develop the following models:

    - Vanilla LSTM model with vector output for multi-step forecasting with univariate input data.

    - Encoder-Decoder LSTM model for multi-step forecasting with univariate input data.

    - **Encoder-Decoder LSTM** model for multi-step forecasting with **multivariate** input data.

    - CNN-LSTM Encoder-Decoder model for multi-step forecasting with univariate input data.

    - ConvLSTM Encoder-Decoder model for multi-step forecasting with univariate input data.


### Prep / vanilla

!!! sam
    LSTM shape: [**samples**, **timesteps**, **features**]. 

    One sample will be comprised of seven time steps with one feature for the seven days of total daily power consumed.
    [1, 7, 1]

    The training dataset has 159 weeks of data, so the shape of the univariate training dataset would be: 
    [159, 7, 1].


---

!!! sam
    **Create more training data** 

    - Test problem: Predict daily consumption for the **next standard week** given the **prior standard week**

    - For training data only: Change the problem to predict the next 7 days given the prior 7 days, regardless of the standard week. 

    **Flatten**

    - The training data is provided in standard weeks with 8 variables: [159, 7, 8]. 

    - Need to flatten the data so we have 8 sequences.


```python
# flatten data 
data = data.reshape((data.shape[0]*data.shape[1], data.shape[2]))
```

---

!!! sam
    **Windowing**

    - For each feature, divide data into overlapping windows.

    - This means that instead of segmenting data into distinct weeks, each training instance slides by one day. (day 1 predicts day 8, day 2 predicts day 9, etc)

    Need to keep track of start & end indexes for the inputs & outputs as we iterate across the length of the flattened data in terms of time steps.


```python
# convert history into inputs and outputs 

# "When we run this function on the entire training dataset, we transform 159 samples into 1,100"
# Since the last 6 days in this dataset don’t have a complete output window, we can only use: 
# 1113−7+1 = 1100

def to_supervised(train, n_input, n_out=7):
```

---

!!! sam
    Small data, so small model

    - single **hidden** LSTM layer with 200 units.

    - fully **connected** layer with 200 nodes that will interpret the features learned by the LSTM layer. 

    - **output** layer will directly predict a vector with seven elements, one for each day in the output sequence.

    Specs

    - Loss : MSE

    - Optimizer = Adam

    - Epochs: 70

    - Batch size: 16


```python

# The function below 
  # prepares the training data, 
  # defines the model, and 
  # fits the model on the training data, returning the fit model ready for making predictions.

def build_model(train, n_input):
```

!!! sam
    **walk-forward validation**

    **What is it?**

    - Ccommon evaluation method

    - Instead of training once and making all predictions at once, the model is **retrained over time**, updating with new observations and making one forecast at a time.

    **How does it work here?** 

    - The model uses the **past week’s observations** (7 days) to predict the **next week** (7 days).

    - After making a prediction, the model gets the **actual observed values** from that week and adds them to the dataset before predicting the following week.


### Encoder-Decoder LSTM With Univariate Input

!!! sam
    | Feature    | **Vanilla LSTM**                                              | **Encoder-Decoder LSTM**                                             |
    | ---------- | ------------------------------------------------------------- | -------------------------------------------------------------------- |
    | Output     | A full sequence is predicted **in one step**                  | The sequence is predicted **one step at a time**                     |
    | Processing | LSTM reads the entire input and outputs a **vector** directly | LSTM first encodes the input, then **iteratively** generates outputs |
    | State      | No feedback from previous outputs                             | **Decoder uses prior predictions** to influence the next step        |


!!! sam
    **Key Idea of Encoder-Decoder**

    - The **encoder** reads the input sequence and compresses it into a **fixed-length vector representation**.

    - The **decoder** takes this representation and generates **one time step at a time**, using its internal state to remember prior predictions.

    **Why Does This Matter?**

    - **Vanilla LSTM** treats **each time step in the output as independent**, meaning it doesn’t explicitly use previous outputs when generating future ones.

    - **Encoder-Decoder LSTM** allows the model to **remember what was predicted in previous time steps** and adjust the next predictions accordingly. This is useful in **multi-step forecasting**, where the prediction for one day can influence the prediction for the next.


### Encoder-Decoder LSTM With Multivariate Input






# Geron Video-Series

- [Udacity: Time Series Forecasting w TensorFlow (Free)](https://learn.udacity.com/courses/ud187)

#### RNN

[TensorFlow Guide](https://colah.github.io/posts/2015-08-Understanding-LSTMs/)

RNN's are networks of **repeating modules**, each passing a message to a successor and allowing information to persist.

**Cell state**: Horizontal top line. Updated by gates.

4 layers (yellow)

- Forget gate: Remove from the cell state

- Input gate: Values to update from previous module

- Tanh: Apply to step 2, add to the cell state

- Sigmoid: Output to next module

<img src="https://i.imgur.com/dscDU4d.png" style="zoom:80%;" />

[14. Video](https://classroom.udacity.com/courses/ud187/lessons/6d543d5c-6b18-4ecf-9f0f-3fd034acd2cc/concepts/cb52c9ee-1abd-48d0-818a-3f7342a7b079)

Process of RNN (RNN: Contains recurrent layers) ([Image](https://i.imgur.com/CVLyo94.png))

1. Take in the 3D **input windows**

   2. Batch size

   3. \## of time steps

   4. \## of features in the model

5. Send to a Recurrent Layer, composed of a single memory cell

   6. Take value from previous time step

   7. Output value for current time step **AND** the state/context so the model runs sequentially

   8. Repeat

9. Repeat \#2

10. Output forecast (ie Sequence to Vector)

#### Lectures

###### 0. Basics Overview

- [4. Common patterns](https://learn.udacity.com/courses/ud187/lessons/6d543d5c-6b18-4ecf-9f0f-3fd034acd2cc/concepts/6630bdbc-2063-4010-83a4-6b61d1baebbc): White noise, trend, seasonality

- [6. Forecasting](https://learn.udacity.com/courses/ud187/lessons/6d543d5c-6b18-4ecf-9f0f-3fd034acd2cc/concepts/23defc4f-9b23-4335-84e4-6779d3cdd0b0): Naive forecast, fixed vs roll forward partitioning

- [8. Metrics](https://learn.udacity.com/courses/ud187/lessons/6d543d5c-6b18-4ecf-9f0f-3fd034acd2cc/concepts/1c065978-54ce-48cc-afb4-99113a9acf16): Differencing, MA, smoothing

- [10. Time Windows](https://learn.udacity.com/courses/ud187/lessons/6d543d5c-6b18-4ecf-9f0f-3fd034acd2cc/concepts/d4f22578-ee8f-4c2c-ad4f-c7421f5406e4)

Steps:

1. **Tuning**: Train on training data, test on validation data

2. **Estimating production**: Train on training & validation data, test on test data

3. **Production**: Train on all 3, predict out

###### 01. Pre-Steps

We want to make the time series as simple as possible before sending it to the model.

Need to get rid of the following:

- Trend

- Seasonality (months, weekdays, etc)

  - Make sure train-val-test captures this seasonality

Use **roll-forward** partitioning instead of **fixed** partitioning  ([Video](https://learn.udacity.com/courses/ud187/lessons/6d543d5c-6b18-4ecf-9f0f-3fd034acd2cc/concepts/23defc4f-9b23-4335-84e4-6779d3cdd0b0))

- Fixed: Normal

- Roll forward: Start with a short training period and then predict out. (Essentially mimicking real-life).
  Note: Takes much longer

**Metrics video**

- **Differencing**: This helps get rid of the trend & seasonality

- **MA**: Eliminates some noise but does not anticipate trend & seasonality (apply differencing first)

- **Forecast for both** = trailing MA of differencing TS + centered MA of past series (t-365)

```python
import pandas as pd
series = pd.Series(series)

split_time = 1000    ### Train vs test
ts_diff = 365        ### Number of time periods to use for differencing
ts_ma = 50           ### Number of time periods to use for moving average
ts_smooth_past = 11
ts_smooth_begin = ts_diff + np.floor(ts_smooth_past / 2)
ts_smooth_end = ts_diff - np.ceil(ts_smooth_past / 2)

### Differencing
diff_series = series.diff(ts_diff).dropna()

### MA
diff_moving_avg = diff_series.rolling(ts_ma, closed='left').mean().dropna().iloc[split_time - ts_diff - ts_ma:]
diff_moving_avg_plus_past = (diff_moving_avg + series.shift(ts_diff)).dropna()

### Both
smoothed = series.rolling(ts_smooth_past, closed='left').mean().dropna().iloc[split_time - int(ts_smooth_begin):-int(ts_smooth_end)]
diff_moving_avg_plus_smooth_past = smoothed + diff_moving_avg.values
```

---
###### 04. Windowing

The main features of the input windows are:

- The width (number of time steps) of the input and label windows.

- The time offset between them.

- Which features are used as inputs, labels, or both.

Example: Take 24 hours and give a prediction 24 hours in the future.

- Input width = 24

- Offset = 24

- Total width = 48

- Label width = 1

[Intro to Tensors](https://www.tensorflow.org/guide/tensor)  

- Tensor: Think of them as np.array that can be 1D, 2D, 3D, etc.

  - Can be 1 column or more, need to be the same dtype. Basically an np.array.

- Element: Each value in a tensor. Could be nested which would then contain multiple components

---

###### 05. ML

Video: 12. Forecasting with ML

[Sample, Batch, Epoch](https://keras.io/getting_started/faq/#what-do-sample-batch-and-epoch-mean)

- **Sample**: one element of a dataset. (One row)

- **Batch**: a set of *N* samples. The larger the batch, the better the approximation; pick as large as you can afford without running out of memory

- **Epoch**: an arbitrary cutoff, generally defined as "one pass over the entire dataset", used to separate training into distinct phases, which is useful for logging and periodic evaluation.

SGD with some momentum helps converge quickly. Could try Adam as well.

Huber Loss for training: Good for optimizing MAE

- quadratic for small errors (MSE)

- linear for large errors (MAE)

Early Stopping Callback:

- Patience = 10  ---> Interupts training when validation doesn't improve for 10 consecutive epochs

- This allows us to set epochs = 500 because early stopping will happen way sooner

---

#### Things to be aware of

[Video 1](https://classroom.udacity.com/courses/ud187/lessons/6d543d5c-6b18-4ecf-9f0f-3fd034acd2cc/concepts/29b5712f-4228-4503-a0e2-3a00a0cfd530)

1. Do I have the right number of neurons?

2. Do I have the right number of layers?

3. Learning rate too..

   4. High: Training will be unstable, model won't learn

   5. Low: Training will be slow

6. Do I have early stopping set right? Loss can jump up/down unpredictably during training.

[Video](https://classroom.udacity.com/courses/ud187/lessons/6d543d5c-6b18-4ecf-9f0f-3fd034acd2cc/concepts/0132f4de-dbaf-4d30-b562-f6469c7da3a8)

1. Vanishing gradient: This often occurs when back propagating through many layers / time steps, especially when detecting long term patterns.

2. 1. 1 Approach: Make a prediction at each step time (ie Sequence to Sequence). Function: `seq2seq_window_dataset`

3. RNNs are useful when we have lots of high-frequency data and the signal:noise ratio is high

Gradient update: 
$\text{New weight} = Weight - LR \: * \: Gradient$

During backpropagation, RNNs suffer from vanishing gradient. When going from start to finish, the updates will be too small and the network won't learn.

LSTM uses **gates** to throw away unnecessary info and only keep meaningful.

Within one cell:

1. New vector: Combine hidden state (ie prior info) and current input

2. New hidden state: Apply tan transformation to step 1

   3. Note: tan to keep regularized between -1 and 1