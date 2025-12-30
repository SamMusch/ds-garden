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
_kMDItemDisplayNameWithExtensions: ML-07-Ensemble.md
ai_abstract: null
ai_key_terms: []
aliases: null
children: 0
created: '2025-12-30'
cssclasses: null
grandchildren: 0
kMDItemContentCreationDate: 2025-10-07 22:23:24 +0000
kMDItemContentCreationDate_Ranking: 2025-10-07 00:00:00 +0000
kMDItemContentModificationDate: 2025-12-30 21:14:32 +0000
kMDItemContentType: net.daringfireball.markdown
kMDItemContentTypeTree: (
kMDItemDateAdded: 2025-10-07 22:23:24 +0000
kMDItemDocumentIdentifier: '222820'
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
kMDItemLastUsedDate: 2025-09-29 14:53:00 +0000
kMDItemLastUsedDate_Ranking: 2025-09-29 00:00:00 +0000
kMDItemUseCount: '218'
kMDItemUsedDates: (
kMDItemUserModifiedDate: (
kMDItemUserModifiedUserHandle: (
modified: '2025-12-30'
published: true
reading_time: 3.1
source_file: ML-07-Ensemble.md
tags: null
title: ML 07 Ensemble
word_count: 614
---

Quick Review

- [Short Review Video](https://www.youtube.com/watch?v=m-S9Hojj1as)

- [XGBoost Pydata Vid](https://www.youtube.com/watch?v=s3VmuVPfu0s)

- [Bias/Variance](https://i.imgur.com/JL8AVsR.png)

### The Bias/Variance Trade-off

!!! sam
    A model’s **generalization error** is the sum of 3 different errors:

    1. **Bias**: Error due to wrong assumptions, eg functional form. High bias ---> underfit.

    2. **Variance**: Error due to model’s sensitivity to small variations in the training data. High variance ---> overfit.

    3. **Irreducible error**: Error due to data noise.

    **Trade-off**: Increasing a model’s complexity will typically reduce *bias*, but increase *variance*.


!!! sam
    Ensembling methods:

    - **Parallel**: Train models in parallel on different subsets of the data. `Min variance.`

        - _Bagging_: with replacement (Bootstrapped aggregating)

        - _Pasting_: without replacement

        - _Random Subspaces/Patches_: randomize features and/or instances

        - *Random Forests*: Bagging + random feature selection at each split

    - **Sequential (Boosting)**: Train models sequentially, each correcting predecessor’s errors. `Min bias.`

        - _AdaBoost_: reweights misclassified instances

        - _Gradient Boosting_: fits to residual errors

        - _XGBoost_: optimized gradient boosting algorithm through parallel processing, tree-pruning, handling missing values, and regularization to avoid overfitting/bias.

    - **Stacking**: Train diverse base models in parallel, then combine predictions with a meta-model trained on their outputs.


### Bagging and Pasting

!!! sam

    - Use the same algorithm, but train on different subsets of the training data (at the same time).

    - Typically helps reduce variance without adding much bias

    - Works well when each run is making mistakes on **different observations**


!!! sam
    **Bagging vs Pasting**:

    - **Bagging**: With replacement

        - Bagging is higher bias, lower variance. Usually performs better, but should use cv to check

    - **Pasting**: Without replacement


### Random Patches

!!! sam

    - Samples rows & columns.

    - Reduces variance because its comparing averages, not just one answer. Helps keep accuracy high for both in-sample and out-of-sample.

    **Hyperparameters**

    - **feature**: `max_features<1`

    - **feature**: `bootstrapfeatures=True`

    - **instance**: `max_samples=1` (normally set to size of training set)

    - **instance**: `boostrap=False`


### Random Forest

!!! sam
    **Randomness**: We are able to keep the full tree, not pruned

    - Data: Different random sample

    - Features: For each tree, selects best feature to split on from a random subset of features.

    **Extremely randomized trees** also uses random thresholds for each feature when splitting


### Boosting

Pg 205 for hyperparameters

!!! sam
    **Boosting Process**

    1. Train model (weak learner)

    2. Get residuals

    3. Train next model\* (see next card)

    4. Repeat

    5. Result: a strong learner is formed  


!!! sam
    **AdaBoost**: Increases weight of misclassified *instances*.

    - Final prediction: Each of the models makes a prediction, **weighted vote** based on accuracy on the weighted training set.

    **Gradient Boosting**: Train on predecessor's *residuals*.

    - Final prediction: Sum of each model's prediction.


### Stacking

!!! sam
    Instead of using trivial functions (such as hard voting) to aggregate the predictions of all predictors in an ensemble, why don’t we train a model to perform this aggregation?

    **Components**

    - **Instance**: Row of data.

    - **Predictors**: Each base model.

    - **Predictions**: *Instance* x *Predictors*

    - **Blender**: Takes *Predictions* as input, outputs final prediction.

    Process: [Image](https://i.imgur.com/Q1FdkBG.png)


!!! sam
    **Common Approach**: `hold-out set` (assume we're using 3 predictors.)

    **Components**:

    - Training data ---> 1st subset (for training each base predictor)

    - Training data ---> 2nd subset (*hold-out* set for training the blender)

    **Process**: [Image](https://i.imgur.com/BrYlLUb.png)

    1. **Split**: Split training set into 1st/2nd subsets

    2. **Train**: Use the 1st subset to train the weak learners. 

    3. **Predict**: Make predictions on the *holdout* set. 

    4. **Assemble new training set**: Take predicted values ---> use as input features in new training set (3D).

    5. **Train/Blend**: Train new model based on only these 3 features. (Called a "meta-model" or *blender*.)

    6. **Predict**: Make final predictions