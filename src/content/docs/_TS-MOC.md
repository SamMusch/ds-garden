---
CoverImage: null
Covers: null
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
_kMDItemDisplayNameWithExtensions: _TS MOC.md
ai_abstract: null
ai_key_terms: []
aliases: null
children: 0
created: '2025-07-18'
cssclasses: null
grandchildren: 0
kMDItemContentCreationDate: 2024-12-30 02:28:57 +0000
kMDItemContentCreationDate_Ranking: 2025-02-01 00:00:00 +0000
kMDItemContentModificationDate: 2025-03-12 17:33:28 +0000
kMDItemContentType: net.daringfireball.markdown
kMDItemContentTypeTree: (
kMDItemDateAdded: 2025-02-01 17:16:38 +0000
kMDItemDocumentIdentifier: '97049'
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
kMDItemInterestingDate_Ranking: 2025-03-12 00:00:00 +0000
modified: '2025-03-12'
published: true
reading_time: 5.8
source_file: _TS MOC.md
tags: null
title: ' TS MOC'
word_count: 1167
---

Deeper
- theory-univariate.md - Univariate
- video-series.md - Multivariate

DL Resources
- [Book: Deep Learning for Time Series Forecasting](file:///Users/Sam/Desktop/2%20DS/01%20Predictive/Book-Deep-TS/deep_learning_time_series_forecasting.pdf) by Jason Brownlee
- [Ch 6: Deep learning for text and sequences](file:///Users/Sam/Library/Mobile%20Documents/iCloud~com~apple~iBooks/Documents/Deep%20Learning%20TS/Ch%206%20Deep%20Learning%20with%20Python.pdf)

### TS | Ebook

#### 02. Taxonomy

```ad-sam

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

```

#### 04. Windows

Sliding window: Take all columns in the dataset (including target variable) and take the **lag**.

Parameters for the **lag**:

- **Input Width**: Number of time steps
- **Offset**: "1" if just using the values from previous time step
- Total width: Input Width + Offset
- **Label width**: How many timesteps in the future

#### 06. Data Transform

Input shape:

- **Samples:** One sequence is one sample. A batch is comprised of one or more samples.  
- **Time Steps:** One time step is one point of observation in the sample. One sample is comprised of multiple time steps.  
- **Features:** One feature is one observation at a time step. One time step is comprised of one or more features.

Put Simply:

- Normal Shape: Rows, Columns
- TS Shape: Rows, **TimeSteps**, Columns

## Ch 20:  LSTMs

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

```ad-sam
LSTM shape: [**samples**, **timesteps**, **features**]. 


One sample will be comprised of seven time steps with one feature for the seven days of total daily power consumed.
[1, 7, 1]


The training dataset has 159 weeks of data, so the shape of the univariate training dataset would be: 
[159, 7, 1].
```

---

```ad-sam
**Create more training data** 

- Test problem: Predict daily consumption for the **next standard week** given the **prior standard week**
- For training data only: Change the problem to predict the next 7 days given the prior 7 days, regardless of the standard week. 

**Flatten**
- The training data is provided in standard weeks with 8 variables: [159, 7, 8]. 
- Need to flatten the data so we have 8 sequences.

```

```python
# flatten data 
data = data.reshape((data.shape[0]*data.shape[1], data.shape[2]))
```

---

```ad-sam
**Windowing**
- For each feature, divide data into overlapping windows.
- This means that instead of segmenting data into distinct weeks, each training instance slides by one day. (day 1 predicts day 8, day 2 predicts day 9, etc)


Need to keep track of start & end indexes for the inputs & outputs as we iterate across the length of the flattened data in terms of time steps.
```

```python
# convert history into inputs and outputs 

# "When we run this function on the entire training dataset, we transform 159 samples into 1,100"
# Since the last 6 days in this dataset don’t have a complete output window, we can only use: 
# 1113−7+1 = 1100

def to_supervised(train, n_input, n_out=7):
```

---

```ad-sam
Small data, so small model

- single **hidden** LSTM layer with 200 units.
- fully **connected** layer with 200 nodes that will interpret the features learned by the LSTM layer. 
- **output** layer will directly predict a vector with seven elements, one for each day in the output sequence.

Specs
- Loss : MSE
- Optimizer = Adam
- Epochs: 70
- Batch size: 16
```

```python

# The function below 
  # prepares the training data, 
  # defines the model, and 
  # fits the model on the training data, returning the fit model ready for making predictions.

def build_model(train, n_input):
```

```ad-sam

**walk-forward validation**

**What is it?**
- Ccommon evaluation method
- Instead of training once and making all predictions at once, the model is **retrained over time**, updating with new observations and making one forecast at a time.

**How does it work here?** 
- The model uses the **past week’s observations** (7 days) to predict the **next week** (7 days).
- After making a prediction, the model gets the **actual observed values** from that week and adds them to the dataset before predicting the following week.

```

### Encoder-Decoder LSTM With Univariate Input

```ad-sam

| Feature    | **Vanilla LSTM**                                              | **Encoder-Decoder LSTM**                                             |
| ---------- | ------------------------------------------------------------- | -------------------------------------------------------------------- |
| Output     | A full sequence is predicted **in one step**                  | The sequence is predicted **one step at a time**                     |
| Processing | LSTM reads the entire input and outputs a **vector** directly | LSTM first encodes the input, then **iteratively** generates outputs |
| State      | No feedback from previous outputs                             | **Decoder uses prior predictions** to influence the next step        |

```

```ad-sam

**Key Idea of Encoder-Decoder**
- The **encoder** reads the input sequence and compresses it into a **fixed-length vector representation**.
- The **decoder** takes this representation and generates **one time step at a time**, using its internal state to remember prior predictions.

**Why Does This Matter?**

- **Vanilla LSTM** treats **each time step in the output as independent**, meaning it doesn’t explicitly use previous outputs when generating future ones.
- **Encoder-Decoder LSTM** allows the model to **remember what was predicted in previous time steps** and adjust the next predictions accordingly. This is useful in **multi-step forecasting**, where the prediction for one day can influence the prediction for the next.




```

### Encoder-Decoder LSTM With Multivariate Input