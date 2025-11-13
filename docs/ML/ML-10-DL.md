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
_kMDItemDisplayNameWithExtensions: ML-10-DL.md
ai_abstract: null
ai_key_terms: []
aliases: null
children: 0
created: '2025-11-13'
cssclasses: null
grandchildren: 0
kMDItemContentCreationDate: 2025-10-07 22:23:24 +0000
kMDItemContentCreationDate_Ranking: 2025-10-07 00:00:00 +0000
kMDItemContentModificationDate: 2025-11-13 21:26:32 +0000
kMDItemContentType: net.daringfireball.markdown
kMDItemContentTypeTree: (
kMDItemDateAdded: 2025-10-07 22:23:24 +0000
kMDItemDocumentIdentifier: '222822'
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
kMDItemLastUsedDate: 2025-05-04 15:19:41 +0000
kMDItemLastUsedDate_Ranking: 2025-05-04 00:00:00 +0000
kMDItemUseCount: '8'
kMDItemUsedDates: (
modified: '2025-11-13'
published: true
reading_time: 5.7
source_file: ML-10-DL.md
tags: null
title: ML 10 DL
word_count: 1149
---

## GENERAL NEURAL NETWORKS

https://www.tensorflow.org/tutorials

Links

- [Ch 13 Code](https://github.com/ageron/handson-ml/blob/637bc1c298a593e02b439ce54aa5de9f8e7f71b4/13_convolutional_neural_networks.ipynb): CNNs

- [Ch 14 Code](https://github.com/ageron/handson-ml/blob/2adec01b34cbfe05866fca6bc724d093c8352e20/14_recurrent_neural_networks.ipynb): RNNs

- [Andrew Ng Code](https://github.com/dibgerge/ml-coursera-python-assignments/blob/master/Exercise3/exercise3.ipynb): Multi-Class & Neural Nets

- [Andrew Ng Code](https://github.com/dibgerge/ml-coursera-python-assignments/blob/master/Exercise4/exercise4.ipynb): Neural Nets

The activation function is a hyperparameter, the weights and biases are parameters.


### ANNs
> Warren McCulloch and Walter Pitts proposed a very simple model of the biological neuron, which later became known as an artificial neuron: it has one or more binary (on/off) inputs and one binary output. The artificial neuron simply activates its output when more than a certain number of its inputs are active. McCulloch and Pitts showed that even with such a simplified model it is possible to build a network of artificial neurons that computes any logical proposition you want.

!!! sam
    Artificial neuron contains:

    - 1+ binary input neurons (IN)

    - Input **connections** between IN & ON

    - 1 binary output neuron (ON)

    - If a threshold number of **connections** are reached, the ON is activated



### ANNs | Perceptron
> The Perceptron is one of the simplest ANN architectures, invented in 1957 by Frank Rosenblatt.

Pg 293: Typical Regression MLP Architecture

| hyperparameter              | Typical value                                           |
| --------------------------- | ------------------------------------------------------- |
| \# input neurons            | One per input feature                                   |
| \# hidden layers            | Typically 1-5                                           |
| \# neurons per hidden layer | Typically 10-100                                        |
| \# output neurons           | 1 per prediction dim (1 for regress, 2 for binary, etc) |
| Hidden activation           | ReLu or SELU                                            |
| Output activation           | None for regression. ReLu/softplus                      |
| Loss function               | MSE or MAE/Huber (if outliers)                          |
> An MLP is composed of one passthrough input layer, one or more layers of TLUs (threshold logic units), called hidden layers, and one final layer of TLUs called the output layer. The layers close to the input layer are usually called the lower layers, and the ones close to the outputs are usually called the upper layers. Every layer except the output layer includes a bias neuron and is fully connected to the next layer. The architecture that the signal flows only in one direction from the inputs to the outputs is called feedforward neural network (FNN). When an ANN (artificial neural network) contains a deep stack of hidden layers, it is called a deep neural network (DNN). - pg 287



!!! sam
    Pg 284: **Perceptron** (figure on pg 286)

    **Perceptrons** are based on a slightly different type of artificial neuron called a *threshold logical unit* (TLU). Instead of using binary "off/on", the inputs & outputs are **numbers**.

    Steps:

    1. TLU computes **weighted sum** of inputs (IN & input weight).
       $z = w_1 x_1 + w_n x_n = X^T w$

    2. TLU applies a **step function** (sigmoid, tangent, or ReLu) to this sum.
       $h_w(x) = step(z)$,     where     $z=X^T w$

    1 single TLU **layer** is called a **Perceptron**.




#### Equation

!!! sam
    **Outputs of fully connected layer** =
    $h_{W,b} (X) = \Theta(XW + b)$

    **X** = our dataset (matrix of input features)

    - 1 row per instance

    - 1 column per feature

    **W** = weight matrix

    - 1 row per input neuron (IN)

    - 1 column per artifical neuron (AN) in the layer

    **b** = bias vector, contains all connection weights between bias neuron & AN

    - 1 bias term per AN

    $\Theta$ = activation function



#### MLP Backpropagation

> An MLP is composed of one (passthrough) input layer, one or more layers of TLUs, called hidden layers, and one final layer of TLUs called the output layer.

!!! sam
    *Note*: The Perceptron learning algorithm is the same thing as Stochastic Gradient Descent assuming the following parameters:

    - `loss` = 'perceptron'

    - `learning_rate` = 'constant'

    - `eta0` = 1 (the learning rate)

    - `penalty` = None (no regularization)



!!! sam
    Pg 290: Backpropagation is **Gradient Descent** but using an efficient technique for computing the **gradients** automatically.

    - **Forward** | Make prediction, measure total error

    - **Backward** | (in reverse) Go through each layer to measure **each connection's** error contribution

    - **Gradient descent** | Tweak connection weights


!!! sam
    Backpropagation computes the gradients of cost function for every model parameter using reverse-mode autodiff

    1. (Forward) Feed into network  

    2. For each layer, the output is found based on **connection** (weight & bias)
       Note that the connection is not linear so that we can take derivative using the chain rule.

    3. Finds total network error

    4. (Backwards) Uses chain rule to find how much each **connection** contributed to total error working from final layer to initial layer

    5. (Gradient descent) Adjust the connection weights



### Code explanation
Pg 299-316

### Hyperparameters
Pg 323 | [Paper by Leslie Smith](https://arxiv.org/abs/1803.09820)

!!! sam

    - **\# hidden layers**: Start with 1 or 2 hidden layers. Early layers find simple patterns, later layers find complex. Add until we start overfitting.

    - **\# neurons per hidden layer**: Typically use the same for each (100), but could try adding more neurons to early layers if needed.

    - **Learning rate**: Start by training the model with 300 iterations and a low learning rate ($10^{-5}$) and gradually increase it to 10.

    - **Optimizer**: Ch 11

    - **Batch size**: 32

    - **Activation function**: ReLU for hidden layers, output layer depends on task

    - **\# of iterations**: Don't worry about it, use Early Stopping instead


### Tips for training NN

!!! sam
    **Scaling input data**

    - Standardscaler for numeric

    - [Categorial/Ordinal Guide](https://towardsdatascience.com/an-overview-of-categorical-input-handling-for-neural-networks-c172ba552dee)

    **If bad on training**:

    - Use different activation function (try maxout)

    - Use different learning rate optimizer

    **If good on train but bad on test (overfitting)**:

    - Regularization - apply penalty in the loss function if weight and bias is too high from layer to layer

        - L1 subtracts which is why we are able to get rid of irrelevant features

        - L2 discounts, which is why the features don't reach 0

    - Early stop - makes regularization not that important - limits epoch - need to be run on validation set

        - When we increase epoch, we will repeat GD many times. This will decrease error for training data, but we are looking for the min testing error.

    - Drop out

        - Use separate mini batches - remove a certain percent from each training batch for each layer (Need to multiply all weights by `1 - drop %`)

        - Training we drop out some neurons, in testing we bring them back and discount their weights


### Why not just add more layers?

!!! sam

    - **Vanishing gradient**: First layers not nearly as impacted as later stages because much large variance in later stages

        - **ReLU**: A change in the slope from one neuron to the next will have the same impact on each resulting layer

        - Problem of Relu - Change of zero will lead to the resulting neuron dying out though

        - Alternative - Leaky ReLU - very small instead of 0

        - Alternative - Parametric ReLU - can adjust slope for the "below 0" section

        - **Batch normalization**: Makes sure that the changing distribution of prev layer's inputs aren't impacting us

        - **Gradient clipping** (for grad explosion): set a threshold that gradients can't go above/below