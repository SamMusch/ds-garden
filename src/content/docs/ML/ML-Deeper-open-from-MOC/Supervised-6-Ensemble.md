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
_kMDItemDisplayNameWithExtensions: Supervised-6-Ensemble.md
ai_abstract: null
ai_key_terms: []
aliases: null
children: 0
created: '2025-07-18'
cssclasses: null
grandchildren: 0
kMDItemContentCreationDate: 2025-02-02 17:09:33 +0000
kMDItemContentCreationDate_Ranking: 2025-05-18 00:00:00 +0000
kMDItemContentModificationDate: 2025-02-02 17:10:27 +0000
kMDItemContentType: net.daringfireball.markdown
kMDItemContentTypeTree: (
kMDItemDateAdded: 2025-05-18 14:44:14 +0000
kMDItemDocumentIdentifier: '97649'
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
kMDItemInterestingDate_Ranking: 2025-02-02 00:00:00 +0000
modified: '2025-02-02'
published: true
reading_time: 2.7
source_file: Supervised-6-Ensemble.md
tags: null
title: Supervised 6 Ensemble
word_count: 542
---

## Week 6: Ensemble

- [Interactive Playground](http://arogozhnikov.github.io/2016/07/05/gradient_boosting_playground.html)
- [Short Review Video](https://www.youtube.com/watch?v=m-S9Hojj1as)

- [Bias vs Variance Graph](https://i.imgur.com/p6nfbsj.png)
- [Summary of 6 techniques](https://i.imgur.com/PWVMWRG.png)



Data vs Model

- **Data centric**: boosting and bagging (different training data) 
- **Model centric**: stacking (different training algorithms)

---

Why ensemble?

1. Inherent randomness in the world
2. Bias: when no matter how many obs we get, our model will never reach perfection
3. Variance: we are limited to samples, and these samples are never identical

**Bias/Variance Tradeoff**

Ensemble models: when we have high accuracy & high variance, can average them out to bring the variance down while still retaining the high accuracy



### Using different algorithms

- Hard vote: majority vote of multiple models
- Soft vote (preferred): highest avg probability (more weight to more confidence)
- Works best when each initial algo is a weak learner

### Bagging and Pasting 

- Use the same algorithm, but train on different subsets of the training data (at the same time). 
- Usually gives similar bias, but smaller variance
- Works well when each run is making mistakes on **different observations**

Bag vs Paste:

- Bagging: With replacement
  - Bagging is higher bias, lower variance. Usually performs better, but should use cv to check
- Pasting: Without replacement

---

**Random patches** sampling rows and columns
**Random subspaces** sampling columns (`boostrap=False, max_samples=1, bootstrapfeatures=True, max_features<1`)

This reduces variance because its comparing averages, not just one answer. Helps keep accuracy high for both in-sample and out-of-sample

**Hyperparameters**

- feature: max_features 
- feature: bootstrap_features 
- instance: max_samples (normally set to size of training set) 
- instance: bootstrap

---

**Random Forest**

**Randomness**: We are able to keep the full tree, not pruned

- Data: Different random sample
- Features: For each tree, selects best feature to split on from a random subset of features. 

**Extremely randomized trees** also uses random thresholds for each feature when splitting 

---



### Boosting

[Image: Ada vs Gradient Boosting](https://i.imgur.com/8nV0HS8.jpg)

[XGBoost Pydata Vid](https://www.youtube.com/watch?v=s3VmuVPfu0s)

Review pg 205 for hyperparameters

- Run model
- Get residuals
- Train another model on the residuals
- Repeat
- Final prediction: Sum up predictions from each model

**Shrinkage**: small `learning_rate` + more trees

#### AdaBoost 
1. Run model
2. Add weight to observations we got wrong (`learning_rate` to tell how much to learn)
3. Train another model using the updated weights (original data, **not the residuals**)
4. Repeat
5. Final prediction: Each of the models makes a prediction, **weighted vote** based on accuracy on the weighted training set 

We could do `bootstrap=True`, but the final vote is still based on accuracy on training set

---

### Stacking

1. Split the training set into 2 subsets (if we are only doing the blender once)
   $\quad$ 1st to train original classifer runs
   $\quad$ 2nd is the `holdout`: use the runs from above to make predictions on this set 
2. If we had 3 runs of the classifier, we will now have 3 predicted values for each row in the holdout set.
3. Create a new training set using the 3 predicted values (as features) for each obs + the 1 true value (target)
4. Train the `blender` on this new training set and make predictions using this model