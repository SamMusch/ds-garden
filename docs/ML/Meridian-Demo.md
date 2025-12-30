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
_kMDItemDisplayNameWithExtensions: Meridian-Demo.md
ai_abstract: null
ai_key_terms: []
aliases: null
author:

- '[[Google for Developers]]'
children: 0
created: '2025-12-30'
cssclasses: null
description: null
grandchildren: 0
kMDItemContentCreationDate: 2025-12-30 21:11:39 +0000
kMDItemContentCreationDate_Ranking: 2025-12-30 00:00:00 +0000
kMDItemContentModificationDate: 2025-12-30 21:14:32 +0000
kMDItemContentType: net.daringfireball.markdown
kMDItemContentTypeTree: (
kMDItemDateAdded: 2025-12-30 21:11:39 +0000
kMDItemDocumentIdentifier: '0'
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
kMDItemInterestingDate_Ranking: 2025-12-30 00:00:00 +0000
modified: '2025-12-30'
published: true
reading_time: 1.4
source: https://developers.google.com/meridian/notebook/meridian-getting-started#step_2_configure_the_model
source_file: Meridian-Demo.md
tags: null
title: Meridian Demo
word_count: 290
---

[GitHub - google/meridian](https://github.com/google/meridian/tree/main?tab=readme-ov-file)

simplified demo

- basic functions & usage

- skips EDA

## Step 0: Install

## Step 1: Load the data

Read data ⟶ `DataFrameInputDataBuilder` instance ⟶ `InputData` object

`DataFrameInputDataBuilder`:

- **is**: a class

- **purpose**: input df ⟶ output `InputData`

[Collect and organize your data](https://developers.google.com/meridian/docs/pre-modeling/collect-data)

- **DV**

- **IV**

    - Media (impressions, clicks, spend)

    - Organic media

    - Non-media treatments

    - Control

    - Seasonality (automatic)


## Step 2: Configure the model

`How should Meridian interpret our data?`

apply priors ⟶ initialize `Meridian` class ⟶ obtain samples

Initialize the `Meridian` class:

- **input data** from step 1

- **model specs** with priors

Get samples of model parameters

- prior distributions

- posterior distributions


```python
prior = prior_distribution.PriorDistribution(
    roi_m=tfp.distributions.LogNormal(roi_mu, roi_sigma, name=constants.ROI_M)
)
```


```python
model_spec = spec.ModelSpec(
    prior=prior_distribution.PriorDistribution(),
    media_effects_dist='log_normal',
    hill_before_adstock=False,
    max_lag=8,
    unique_sigma_for_each_geo=False,
    media_prior_type='roi',
    roi_calibration_period=None,
    rf_prior_type='roi',
    rf_roi_calibration_period=None,
    organic_media_prior_type='contribution',
    organic_rf_prior_type='contribution',
    non_media_treatments_prior_type='contribution',
    knots=None,
    baseline_geo=None,
    holdout_id=None,
    control_population_scaling_id=None,
    adstock_decay_spec='geometric',
    enable_aks=False,
)

mmm = model.Meridian(input_data=data, model_spec=model_spec)
```


## Step 3: Run post-modeling quality checks

diagnose issues related to model..

- *convergence*

- *specification*

- *plausibility*


## Step 4: Run model diagnostics

[Run model diagnostics](https://developers.google.com/meridian/docs/user-guide/model-diagnostics)

continues from step 3, using the methods from the `visualizer` module.

1. *convergence*: r-hat statistics.

    1. R-hat close to 1.0 ⟶ convergence

    2. R-hat < 1.2 ⟶ approximate convergence

2. *model's fit*: compare expected v actual


## Step 5: Generate model results & two-page output

## Step 6: Run budget optimization & generate an optimization report

[Budget optimization scenarios](https://developers.google.com/meridian/docs/user-guide/budget-optimization-scenarios)

provide budget ⟶ finds optimal channel allocation

- instantiate `BudgetOptimizer` class ⟶ run the `optimize()` method