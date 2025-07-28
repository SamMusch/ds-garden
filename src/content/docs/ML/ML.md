---
CoverImage: null
Covers: ML Foundations
Due: null
Function: Network
HoursDone: 50
HoursRemain: 0
Objective: Reference
Quality: ★★★★
QualityComment: Basics
ReviewFreq: 1-Month
TimeSpent: null
TimeSpent2: null
_kMDItemDisplayNameWithExtensions: ML.md
ai_abstract: null
ai_key_terms: []
aliases: null
children: 0
created: '2025-07-18'
cssclasses: null
grandchildren: 0
kMDItemAlternateNames: (
kMDItemContentCreationDate: 2024-09-06 16:49:35 +0000
kMDItemContentCreationDate_Ranking: 2024-09-06 00:00:00 +0000
kMDItemContentModificationDate: 2025-05-18 14:52:44 +0000
kMDItemContentType: net.daringfireball.markdown
kMDItemContentTypeTree: (
kMDItemDateAdded: 2025-02-01 17:16:38 +0000
kMDItemDocumentIdentifier: '97063'
kMDItemFSCreatorCode: ''
kMDItemFSFinderFlags: '16'
kMDItemFSHasCustomIcon: (null)
kMDItemFSInvisible: '0'
kMDItemFSIsExtensionHidden: '1'
kMDItemFSIsStationery: (null)
kMDItemFSLabel: '0'
kMDItemFSNodeCount: (null)
kMDItemFSOwnerGroupID: '20'
kMDItemFSOwnerUserID: '502'
kMDItemFSTypeCode: ''
kMDItemInterestingDate_Ranking: 2024-12-29 00:00:00 +0000
kMDItemLastUsedDate: 2024-12-29 20:07:59 +0000
kMDItemLastUsedDate_Ranking: 2024-12-29 00:00:00 +0000
kMDItemUseCount: '12'
kMDItemUsedDates: (
kMDItemUserCreatedDate: (
kMDItemUserCreatedUserHandle: (
modified: '2025-05-18'
published: true
reading_time: 7.8
source_file: ML.md
tags:
- ml_
title: ML
word_count: 1570
---

> [!summary] Summary
> Consolidates ML foundations.
>
> [Textbook online PDF](https://powerunit-ju.com/wp-content/uploads/2021/04/Aurelien-Geron-Hands-On-Machine-Learning-with-Scikit-Learn-Keras-and-Tensorflow_-Concepts-Tools-and-Techniques-to-Build-Intelligent-Systems-OReilly-Media-2019.pdf)

## Deeper Links

| Notes                            | Contains                          |
| -------------------------------- | --------------------------------- |
| supervised-2-classification.md  | Models, evaluation, and some code |
| supervised-4-regression-eval.md | Evaluation                        |
| supervised-6-ensemble.md        | Models                            |

## Overview #cards

>[!quote]
>**AI** is rooted in mathematics and statistics. When creating an ANN, we're conducting mathematical operations on *data* represented in linear space; it is, by nature, applied mathematics and statistics. ML  *algorithms* are nothing but function approximations; they try and find a mapping between an input and a correct corresponding output. We use algebraic *methods* to create algorithms that learn these mappings.
>
>Almost all ML can be expressed in a fairly straight-forward formula; bringing together a dataset and model, along with a loss function and optimization technique that are applicable to the dataset and model. [Source](https://learning.oreilly.com/library/view/hands-on-artificial-intelligence/9781788991063/c72aa49d-41f1-4a15-bee5-9efc9190f282.xhtml)

| Term                       | Cake Analogy Explanation                                                  | ML Examples                                                                                                 | ML Definition                                                                                       |
| -------------------------- | ------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| **Data**                   | Ingredients.                                                              | Raw dataset                                                                                                 |                                                                                                     |
| **Method**                 | Deciding to bake a specific type of cake (e.g., birthday cake).           | Supervised learning, classification                                                                         | The broader framework. Combines algorithms, techniques, and strategies to solve a problem.          |
| **Algorithm**              | The recipe you follow to bake the cake. Defines the step-by-step process. | **For XGBoost**: Gradient Boosting<br><br>**For NNs**: Backpropagation                                      | The *procedure* or set of rules used to train the model. It defines how the model learns from data. |
| **Model**                  | The finished cake, ready to serve. Represents what has been learned.      | **For XGBoost**: Collection of DTs<br><br>**For NNs**: Network of neurons with learnable weights and biases | The *output* or *representation* of what has been learned.                                          |
| **Loss Function**          | The taste test. Measures how close the cake is to the desired flavor.     | MSE, cross-entropy                                                                                          |                                                                                                     |
| **Optimization Technique** | Adjusting the recipe to improve the cake’s flavor (minimize error).       | **For XGBoost**: second-order gradient boosting<br><br>**For NNs**: Adam, etc                               | How you iteratively modify parameters (weights, biases) to minimize error                           |

---

## Introduction
### Data Mining Tasks
1) **Classification**: which set of class does this person belong to?
2) **Regression**: How many hours will this person use our service?
3) **Similarity matching**: These firms bought from us. Who else is likely to?
4) **Clustering**: Which segments do our customers fall into?
5) **Co-occurence** (market basket analysis): For each segment, what are commonly purchased together?
6) **Profiling**: What is the typical behavior of this segment?
7) **Link prediction**: You and x share 10 friends. She likes this person, so you prob will too.
8) **Data reduction**: Dropping unnecessary info thats clouding our insights
9) **Causal modeling**: What influences our DV?

### Data Mining Process
The ML lifecycle includes several steps for transforming data into actionable insights.
1. **Business Understanding**: Define the problem & success criteria.
2. **Data Understanding**: How was it collected? Any implicit biases?
3. **Data Preparation**
4. **Model**
    1. **Data Preparation** (possibly)
    2. **Modeling** (possibly)
5. **Evaluate**
6. **Deploy**

---
## Types of Systems
```ad-sam

There are so many different types of ML systems that it is useful to classify them in broad categories based on:

- Are they trained with human supervision? 
  - **Supervised**: Where data includes labels for learning.
  - **Unsupervised**: Where data lacks explicit labels.
  - **Semisupervised**: 
  - **Reinforcement**: Where an agent learns by interacting with an environment.

- Can they learn incrementally on the fly?
  - **Online**: Yes
  - **Batch**: No

- How do they generalize?
  - **Instance-based**: Can simply comparing new data points to known data points
  - **Model-based learning**: Require training data to detect patterns

```

### Human Supervision
#### Supervised Learning
Dataset contains both inputs & corresponding labels. Tasks include:
- **Classification**: Discrete categories.
- **Regression**: Continuous values.
#### Unsupervised Learning
Identifies patterns without labeled data. Key methods are:
- clustering.md: Group similar data points (k-means, Hierarchical Cluster Analysis (HCA), Expectation Maximization).
- dimensionality-reduction.md: Simplify datasets without losing too much info.
    - PCA | Principal Component Analysis
    - Kernel PCA
    - LLE | Locally-Linear Embedding
    - t-SNE | t-distributed Stochastic Neighbor Embedding
- anomaly-detection.md: Identify deviations from normal behavior.
- association-rules.md (Apriori, Eclat)
#### Semi-Supervised
Some data is labeled, some isn't. (Typically lots of unlabeled data + some labeled data)
- Most of these algorithms are combinations of unsupervised & supervised algorithms.
- Deep belief networks (DBNs), restricted Boltzmann machines (RBMs)
#### Reinforcement Learning
**Process**: The learning system (aka agent)
1. Observes environment
2. Performs actions
3. Gets rewarded
With trial-and-error, it teaches itself the best strategy (ie policy) to max reward.

### Learning Type | Batch & Online
> Another criterion used to classify Machine Learning systems is whether or not the system can learn incrementally from a stream of incoming data. Pg 41

| Learning Type | When      | **Training Process**                                                                                         | **Adaptability** |
| ------------- | --------- | ------------------------------------------------------------------------------------------------------------ | ---------------- |
| `BATCH`       | Static    | Train on the entire dataset at once                                                                          | Slow             |
| `ONLINE`      | Streaming | Model updates iteratively as new data points or mini-batches of data are received. (`Learning rate` is key.) | Fast             |
### Generalization Type | Model & Instance
> One more way to categorize Machine Learning systems is by how they generalize. Pg 44

- **Model-Based Learning**: Use training data to build a model, then extrapolate.
- **Instance-Based Learning**: Use known problems as initial points. Predict new problems based on similarity to old ones.
    - **Examples**: Case-Based Reasoning, Radial Basis Function Networks, Locally Weighted Regression, Memory-Based Collaborative Filtering, Prototype-Based Learning
        All these methods depend heavily on **stored data** or a **local region** of the feature space. Predictions or decisions are derived **directly or indirectly from comparisons** to similar instances.

| FEATURE    | Explanation                             | **Prediction**                                                              | Adaptability                       | When                                                                               |
| ---------- | --------------------------------------- | --------------------------------------------------------------------------- | ---------------------------------- | ---------------------------------------------------------------------------------- |
| `Instance` | Learn "by heart", think look-alikes     | Using a similarity metric. Predictions are `locally-informed`. See example. | High - changes predictions quickly | Intuitive for business users<br><br>Local relationships more important than global |
| `Model`    | Learns over time with new training data | Using learned parameters                                                    | Low - adding drops to an ocean     | Generalization to unseen data is key                                               |

#### Instanced-Based | Details
**Analogy**: Think spam detection. Ideally, every spam email would be the same. Model learns this "by heart", then flags all identical emails. (In reality, use a *measure of similarity* between 2 emails.)

Steps for **instance-based** regression using k-NN:
1. **Find the k-NN**:
    - For a given query instance, calculate distance from all the training instances.
    - Select $k$. (The number of instances to use.) These are the "neighbors" of the query point.
2. **Predict**: Using these neighbors, compute the average of their target value. Use this as your prediction. (Could use more advanced technique than just average.)

---
## Challenges of ML
> In short, since your main task is to select a learning algorithm and train it on some data, the two things that can go wrong are “bad algorithm” and “bad data.”  Pg 50

### Data Issues
1. **Quantity**: Typically need thousands of examples
2. **Quality**: Might have too much info missing, could be poorly collected
3. **Non-representative**: When old cases no longer reflect new cases. Sources:
    Sampling *noise*: Data is too small
    Sampling *bias*: Sampling method is flawed.
4. **Irrelevant features**. Solutions:
    *Feature selection*: Select only most useful features.
    *Feature extraction*: Combine existing features to produce meaningful ones.
    *New features*: Use external sources to create new features.

### Algorithm Issues
1. **Overfitting** solutions:
    - Select a model with fewer parameters
    - Feature reduction
    - Constrain the model (*regularization*)
    - Gather more data
    - Reduce noise in training data
2. **Underfitting**: Model is too simplistic to capture underlying patterns.
    - Select a more powerful model, with more parameters
    - Feeding better features to the learning algorithm (feature engineering)
    - Reducing the constraints on the model (e.g., reducing the regularization hyper‐parameter)
---
## Tuning & Evaluation

### Process | Testing & Validating
1) **Split**: Split data into train & test. (Usually 80% for training.)
2) **Validation set**: Use nested k-fold CV to split up training set.
3) **Train set**: Run multiple models x hyperparameters
4) **Train set**: Select models x hyperparameter combo with best performance on validation set.
5) **Test set**: Find **generalization error** for an estimate of performance on unseen data.
    1) Training good + validation bad = overfitting ([Image](https://i.imgur.com/EkW054R.png))
    2) Validation good + test bad = overfitting
    3) Validation bad + test bad = learning rate too high.
  
### Hyperparameter Optimization
> [!quote] Hyperparameters are configuration variables that tell the model what methods to use, as opposed to **model parameters** which are learned during training.

Fine-tuning hyperparameters is critical for optimal model performance:
- **Grid Search**: Exhaustive search over parameter combinations.
- **Random Search**: Randomly sample parameters to find optimal settings.
- **Bayesian Optimization**: Use probabilistic models to select parameters.

**Model-type details:**

| Type          | \# of parameters                | Complexity                       | Scalability with Data Size | Hyperparameters                                                                  |
| ------------- | ------------------------------- | -------------------------------- | -------------------------- | -------------------------------------------------------------------------------- |
| PARAMETRIC    | Fixed                           | Lower, less risk of overfitting. | Limited                    | 1. Regularization terms (L1/L2)<br>2. Learning rate<br>3. Small \# of key params |
| NONPARAMETRIC | Unconstrained, grows with size. | High, prone to overfitting.      | High                       | Focus on selecting right complexity (e.g., depth of trees).                      |

#### Code
```python
# Grid search
search = GridSearchCV(estimator = rf_classifier, param_grid = parameters, cv = 3)

# Apply to training
search.fit(x_train, y_train)  
search.best_params_

# Best combo
best = search.best_estimator_  
accuracy = evaluate(best, x_test, y_test)
```

---
### Cross-Validation
Cross-validation splits data to validate models. Methods include:
- **k-Fold**: Divides data into $k$ subsets for training and testing.
- **Nested**: Addresses hyperparameter overfitting by adding an outer validation loop.
#### Nested K-Fold
Removes overfit "leak" from evaluating on train set.
- Use when hyperparameters also need to be optimized
- Estimates generalization error of the underlying model & hyperparameters
Process
- **Inner loop**: Fits model to each training set, then select hypers over validation set
- **Outer loop**: Estimates generalization error by averaging test set scores over several dataset splits