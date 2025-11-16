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
_kMDItemDisplayNameWithExtensions: ML-04-Regression.md
ai_abstract: null
ai_key_terms: []
aliases: null
children: 0
created: '2025-11-16'
cssclasses: null
grandchildren: 0
kMDItemContentCreationDate: 2025-10-07 22:23:24 +0000
kMDItemContentCreationDate_Ranking: 2025-10-07 00:00:00 +0000
kMDItemContentModificationDate: 2025-11-13 21:47:44 +0000
kMDItemContentType: net.daringfireball.markdown
kMDItemContentTypeTree: (
kMDItemDateAdded: 2025-10-07 22:23:24 +0000
kMDItemDocumentIdentifier: '222819'
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
kMDItemInterestingDate_Ranking: 2025-11-13 00:00:00 +0000
kMDItemLastUsedDate: 2025-08-02 16:52:50 +0000
kMDItemLastUsedDate_Ranking: 2025-08-02 00:00:00 +0000
kMDItemUseCount: '71'
kMDItemUsedDates: (
modified: '2025-11-13'
published: true
reading_time: 1.2
source_file: ML-04-Regression.md
tags: null
title: ML 04 Regression
word_count: 239
---

!!! sam
    Fit Linear Regression via either:

    1. **a closed-form solution** (Normal Equation): a mathematical equation that gives the result directly

    2. **iterative optimization** (GD: batch, stochastic, mini-batch): initialize model parameters randomly ---> tweak to min cost function

    Iterative optimization (gradient descent)

    - **Batch**: full dataset per step; converges on convex MSE “bowl.” [Image](https://i.imgur.com/eLm5jYL.png)

    - **Stochastic**: computes the gradients 1 instance at a time

    - **Mini-batch**: computes the gradients on small random sets of instances


### Model complexity / Regularization

Diagnose under/overfit using a **learning curve**. [Image](https://i.imgur.com/ncGLcfT.png)

- **Overfitting**: use *early stopping* or *regularization*.


!!! sam
    **Regularization**

    - **Ridge ($\ell_2$)**: shrinks weights smoothly; good default; sensitive to scaling.

        - Corresponds to *RMSE* and the *Euclidean* norm

    - **Lasso ($\ell_1$)**: drives some weights to zero (feature selection); can “bounce” near optimum—reduce LR over time.

        - Corresponds to *MAE* and the *Manhattan* norm

    - **Elastic Net**: mix of L1/L2; often preferred over pure Lasso when p>m or features are correlated.

    Start with Ridge, consider Lasso/Elastic Net if you expect sparsity.


### Evaluation

!!! sam

    - **MAE** = Mean absolute error

    - **MAPE** = Mean absolute pct error

    - **RMSE** = Root mean squared error

    - **SMAPE** = Symmetric mean absolute percentage error.

        - Goes from 0 to 200%. Apply when comparing average error of different models. Does not apply when we are looking at each observation.

    **Lift**: Ranked by their predicted number, comparing to the average. [Image](https://i.imgur.com/np7zERs.png)