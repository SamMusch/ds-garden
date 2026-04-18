---
Function: null
Objective: null
Quality: null
QualityComment: null
ReviewFreq: null
ai_abstract: null
ai_key_terms: []
children: 0
grandchildren: 0
kMDItemContentCreationDate: 2025-10-07 22:23:24 +0000
kMDItemContentModificationDate: 2026-04-04 18:16:24 +0000
kMDItemDateAdded: 2025-10-07 22:23:24 +0000
kMDItemFSFinderFlags: '0'
kMDItemUserModifiedDate: (
kMDItemUserModifiedUserHandle: (
published: true
reading_time: 3.1
source_file: ML-07-Ensemble.md
tags: null
word_count: 614
---

Quick Review

- [Short Review Video](https://www.youtube.com/watch?v=m-S9Hojj1as)

- [XGBoost Pydata Vid](https://www.youtube.com/watch?v=s3VmuVPfu0s)

- [Bias/Variance](https://i.imgur.com/JL8AVsR.png)

### The Bias/Variance Trade-off

!!! sam
    A model’s **generalization error** is the sum of 3 different errors:

    1. **Bias**: Error due to wrong assumptions, eg functional form. High bias ⟶ underfit.

    2. **Variance**: Error due to model’s sensitivity to small variations in the training data. High variance ⟶ overfit.

    3. **Irreducible error** (data noise)

    Increasing model complexity typically reduces *bias*, but increase *variance*.


!!! sam
    Ensembling methods:

    - **Parallel**: Train models in parallel on different subsets of the data. `Min variance.`

        - _Bagging_: with replacement (Bootstrapped aggregating)

        - _Pasting_: w/o replacement

        - _Random Subspaces/Patches_: randomize features and/or instances

        - *Random Forests*: Bagging + random feature selection at each split

    - **Sequential (Boosting)**: Train models sequentially, each correcting predecessor’s errors. `Min bias.`

        - _AdaBoost_: reweights misclassified instances

        - _Gradient Boosting_: fits to residual errors

        - _XGBoost_: optimized gradient boosting algorithm through parallel processing, tree-pruning, handling missing values, and regularization to avoid overfitting/bias.

    - **Stacking**: Train diverse base models in parallel, then combine predictions with a meta-model trained on their outputs.


## Parallel Methods

### Bagging and Pasting

Bagging = row sampling **with replacement**; Pasting = **without replacement**.

- These are *sampling strategies*, not actual algorithms.

```tabs
tab: What it does

- Train multiple copies of the same model on different random subsets of the training data, then aggregate predictions.

- **Goal**: reduce variance

tab: How it works

1. Sample training data multiple times ⟶ create different subsets

2. Train 1 predictor per subset (same algorithm each time)

3. Repeat to build many predictors

4. Aggregate predictions:

   - Classification ⟶ majority vote

   - Regression ⟶ average

5. Feature sampling extensions:

   - **Random Subspaces**: sample *features* only

   - **Random Patches**: sample *features* AND *rows*

tab: Tradeoffs

- Bagging vs Pasting:

  - Bagging ⟶ more diversity (bootstrap), slightly higher bias, lower variance ⟶ usually better

  - Pasting ⟶ less diversity

  - Feature sampling (subspaces/patches) ⟶ even more diversity ⟶ further ↓ variance, slight ↑ bias

- Feature sampling variants:

  - Random Subspaces ⟶ sample features only

  - Random Patches ⟶ sample rows + features (useful for high-dimensional data)

- Extra:

  - When row sampling with replacement ⟶ Out-of-bag (OOB) samples (~37%) can be used for validation without a separate dataset


tab: Hyperparameters

- `n_estimators`: more models ⟶ lower variance

- features

    - `max_features`: controls feature sampling

    - `bootstrap_features`: whether to sample features with replacement

- instances

    - `max_samples`: controls row sampling (normally set to size of training set)

    - `bootstrap`: True (bagging) vs False (pasting)

```

### Random Forest

```tabs
tab: What it does

- Ensemble of DTs trained with **bagging** (sometimes pasting).

- **Goal**: reduce variance vs a single tree while maintaining similar bias.

- Adds feature randomness at each split to increase diversity.

tab: How it works

1. Sample training data (typically with replacement)

2. Train many DTs in parallel

3. At each split, only shown a random subset of features

4. Aggregate predictions:

   - Classification ⟶ majority vote

   - Regression ⟶ average

tab: Tradeoffs

- Diversity:

  - Comes from row sampling (bagging) & feature sampling

- Extra Trees variant:

  - Uses **random thresholds** instead of best split

- Pros:

  - Handles nonlinear patterns well

  - Robust to overfitting vs single trees

- Cons:

  - Less interpretable than a single tree

  - Can still overfit if trees too deep / too many

tab: Hyperparameters

- `n_estimators`: number of trees

- `max_features`: number of features considered at each split (controls randomness)

- `max_leaf_nodes` / `max_depth`: tree size (controls overfitting)

- `bootstrap`: True (bagging) vs False (pasting)

- `n_jobs`: parallelization

- (Extra Trees): `splitter="random"`

```

!!! sam
    **Randomness**: We are able to keep the full tree, not pruned

    - Data: Different random sample

    - Features: For each tree, selects best feature to split on from a random subset of features.

    **Extremely randomized trees** also uses random thresholds for each feature when splitting


## Sequential Methods (Boosting)

!!! sam
    **Boosting Process**

    1. Train model (weak learner)

    2. Get residuals

    3. Train next model\* (see next card)

    4. Repeat

    5. Result: a strong learner is formed  


### AdaBoost
```tabs
tab: What it does

- Sequential ensemble; focuses on hard (misclassified) instances

- **Goal**: reduce bias

tab: How it works
Start with equal weights for all training instances

1. Train model (weak learner)

2. Get residuals

3. Train next model (with increases weight of misclassified *instances*.)

4. Repeat

5. Final prediction = **weighted vote** on models (based on accuracy)

tab: Tradeoffs

- Pros:

  - Strong performance with weak learners

  - Focuses on difficult observations

- Cons:

  - Sensitive to noise/outliers (they get high weight)

  - Cannot parallelize (sequential dependency)

- Behavior:

  - Similar to gradient descent but adds models instead of updating parameters 

tab: Hyperparameters

- `n_estimators`: number of learners

- `learning_rate`: controls influence of each model

- `base_estimator`: typically shallow trees (stumps)

```

### Gradient Boosting
```tabs
tab: What it does

- Sequential ensemble that fits models to **residual errors**

- **Goal**: reduce bias via additive error correction

tab: How it works

1. Train model (weak learner)

2. Get residuals

3. Train next model (on predecessor's *residuals*.)

4. Repeat

5. Final prediction = **sum of all model outputs**

tab: Tradeoffs

- Pros:

  - Very flexible (can optimize different loss functions)

  - Strong predictive performance

- Cons:

  - Prone to overfitting if too many trees

  - Slower (sequential)

- Key ideas:

  - Shrinkage: small learning rate ⟶ better generalization

  - Early stopping prevents overfitting 

  - Subsampling ⟶ stochastic gradient boosting (↓ variance, ↑ bias)

tab: Hyperparameters

- `n_estimators`: number of trees

- `learning_rate`: shrinkage factor

- `max_depth`: tree complexity

- `subsample`: fraction of data per tree

- `loss`: objective function

```

### XGBoost
```tabs
tab: What it does

- Optimized implementation of Gradient Boosting

- **Goal**: faster, scalable, regularized boosting

tab: How it works
Same core idea as Gradient Boosting.

Differences:

- Uses optimized tree-building + system-level improvements

- Supports early stopping using validation set

- Regularization applied to control complexity

tab: Tradeoffs

- Pros:

  - Very fast and scalable

  - Built-in regularization ⟶ reduces overfitting

  - Strong performance in practice (common in competitions)

- Cons:

  - More complex tuning

  - Less interpretable

tab: Hyperparameters

- `n_estimators`

- `learning_rate`

- `max_depth`

- `subsample`

- `colsample_bytree`: feature sampling

- `reg_lambda` / `reg_alpha`: regularization

- `early_stopping_rounds`

```

## Stacking
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

    - Training data ⟶ 1st subset (for training each base predictor)

    - Training data ⟶ 2nd subset (*hold-out* set for training the blender)

    **Process**: [Image](https://i.imgur.com/BrYlLUb.png)

    1. **Split**: Split training set into 1st/2nd subsets

    2. **Train**: Use the 1st subset to train the weak learners. 

    3. **Predict**: Make predictions on the *holdout* set. 

    4. **Assemble new training set**: Take predicted values ⟶ use as input features in new training set (3D).

    5. **Train/Blend**: Train new model based on only these 3 features. (Called a "meta-model" or *blender*.)

    6. **Predict**: Make final predictions