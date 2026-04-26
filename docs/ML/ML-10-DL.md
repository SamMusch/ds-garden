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
published: true
reading_time: 5.7
source_file: ML-10-DL.md
tags: null
word_count: 1149
---

Links

- **Code Ageron**: [Ch 13 CNNs](https://github.com/ageron/handson-ml/blob/637bc1c298a593e02b439ce54aa5de9f8e7f71b4/13_convolutional_neural_networks.ipynb), [Ch 14 RNNs](https://github.com/ageron/handson-ml/blob/2adec01b34cbfe05866fca6bc724d093c8352e20/14_recurrent_neural_networks.ipynb)

- **Code Ng**: [Multi-Class & Neural Nets](https://github.com/dibgerge/ml-coursera-python-assignments/blob/master/Exercise3/exercise3.ipynb), [Neural Nets](https://github.com/dibgerge/ml-coursera-python-assignments/blob/master/Exercise4/exercise4.ipynb)

- [tensorflow.org/tutorials](https://www.tensorflow.org/tutorials)

- [DL Cheatsheet](https://stanford.edu/~shervine/teaching/cs-229/cheatsheet-deep-learning/#nn)

[Forward Pass](https://i.imgur.com/WmSn5ZH.jpeg)

Key concepts:

- The activation function is a hyperparameter, the weights & biases are parameters.

Key terms:

- *TLUs (threshold logic units)*: calculate a weighted sum of inputs ⟶ apply a threshold to produce a binary output

- _FNN (feedforward neural network)_: The architecture that the signal flows only in one direction from the inputs to the outputs

- _DNN (deep neural network)_: when an ANN contains a deep stack of hidden layers

Steps:

1. TLU computes **weighted sum** of inputs (IN & input weight). (Becomes `x-axis` value)  
    $z = w_1 x_1 + w_n x_n = X^T w$
    
2. TLU applies a **step function** to this sum. (Becomes `y-axis` value.)  
    $h_w(x) = step(z), where z=X^T w$

### ANNs
!!! sam
    The ANN is a simple model of the biological neuron.

    An *artificial neuron* contains:

    - 1+ input neurons

    - 1 output neuron

    - Connections between these. If a threshold number of **connections** are reached, the ON is activated.

    We can build a *network* of artificial neurons that computes any logical proposition you want.


### MLP

An MLP is composed of:

- 1 input layer (passthrough)

- 1+ hidden layers of TLUs (threshold logic units)

- 1 output layer of TLUs

Notes

- Every layer except the output layer includes a bias neuron and is fully connected to the next layer. 

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

=== "Overfitting"

    - *Regularization*: apply penalty in the loss function (when weight & bias are too high from layer to layer)

        - L1 (absolute/lasso): takes irrelevant features ⟶ sets weights to 0

        - L2 (squares/ridge): takes irrelevant features ⟶ shrinks weights smoothly

    - *Early stopping*: limit number of epochs when validation error stops improving

    - *Drop out*: 

        - Use separate mini batches ⟶ remove a certain percent from each training batch for each layer (Need to multiply all weights by `1 - drop %`)

        - During training we drop out some neurons; during testing we bring them back but discount their weights

=== "Underfitting"

    - Use different activation function (try maxout)

    - Use different learning rate optimizer

=== "Scaling input data"

    - Standardscaler for numeric

    - [Categorial/Ordinal Guide](https://towardsdatascience.com/an-overview-of-categorical-input-handling-for-neural-networks-c172ba552dee)


### Why not just add more layers?

!!! sam

    - **Vanishing gradient**: First layers not nearly as impacted as later stages because much large variance in later stages

        - **ReLU**: A change in the slope from one neuron to the next will have the same impact on each resulting layer

        - Problem of Relu - Change of zero will lead to the resulting neuron dying out though

        - Alternative - Leaky ReLU - very small instead of 0

        - Alternative - Parametric ReLU - can adjust slope for the "below 0" section

        - **Batch normalization**: Makes sure that the changing distribution of prev layer's inputs aren't impacting us

        - **Gradient clipping** (for grad explosion): set a threshold that gradients can't go above/below