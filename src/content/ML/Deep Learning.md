---
Quality: ★
QualityComment: Why isn't this a 10?
Objective: Reference
Function: Hierarchy
ReviewFreq: Weekly, 1-Month, 2-Month, 3-Month
Due: 
HoursDone: 1
HoursRemain: 2
CoverImage: 
tags:
  - ml_
TimeSpent: 
TimeSpent2:
---

## Oreilly Outline

[Your First ANN](https://learning.oreilly.com/library/view/hands-on-artificial-intelligence/9781788991063/8c724645-08d4-4a08-af9e-45bf607f8a88.xhtml)
1. [Technical requirements](https://learning.oreilly.com/library/view/hands-on-artificial-intelligence/9781788991063/aa5174d0-e5cf-4dbd-9b64-92b8754c34cb.xhtml)
2. Network building blocks
   1. [Network layers](https://learning.oreilly.com/library/view/hands-on-artificial-intelligence/9781788991063/562cb6bc-c88f-4613-8ff2-fa1e64cc915c.xhtml)
   2. Naming and sizing neural networks
   3. Activation functions
   4. Weights and bias factors
   5. Loss functions
   6. Stochastic gradient descent
   7. [Regularization](https://learning.oreilly.com/library/view/hands-on-artificial-intelligence/9781788991063/a1be58ad-36e0-42d0-a74f-f6444275fce3.xhtml)
3. The training process
   1. [Putting it all together](https://learning.oreilly.com/library/view/hands-on-artificial-intelligence/9781788991063/36c76076-c14e-45b2-ae65-850332e645c4.xhtml)
   2. [Forward propagation](https://learning.oreilly.com/library/view/hands-on-artificial-intelligence/9781788991063/920d17e8-8c14-4524-9dfc-875fe5048ec1.xhtml)
   3. [Backpropagation](https://learning.oreilly.com/library/view/hands-on-artificial-intelligence/9781788991063/9d59ff80-df00-4855-a2fe-7b8e9e4a6564.xhtml)
   4. [Forwardprop and backprop with MNIST](https://learning.oreilly.com/library/view/hands-on-artificial-intelligence/9781788991063/2ba064ba-37d2-414e-b8f5-4acf065e7543.xhtml)
   5. Managing a TensorFlow model


[RNNs](https://learning.oreilly.com/library/view/hands-on-artificial-intelligence/9781788991063/15e91aca-5877-405a-99eb-1d105727be82.xhtml)
1. [Technical requirements](https://learning.oreilly.com/library/view/hands-on-artificial-intelligence/9781788991063/bfa7eb5e-e1e0-4484-ad1d-cead24304749.xhtml)
2. The building blocks of RNNs
   1. [Basic structure](https://learning.oreilly.com/library/view/hands-on-artificial-intelligence/9781788991063/77fc0c65-fd61-4b85-93d3-19b0e0ad03bf.xhtml)
   2. Vanilla recurrent neural networks
   3. [Backpropagation through time](https://learning.oreilly.com/library/view/hands-on-artificial-intelligence/9781788991063/a7f10981-82e6-4194-bc45-35eb23b311a0.xhtml)
3. Memory units; LSTMs and GRUs
   1. [LSTM](https://learning.oreilly.com/library/view/hands-on-artificial-intelligence/9781788991063/30e008a1-d5ce-462c-ae50-265e8c85fa5a.xhtml)
   2. [GRUs](https://learning.oreilly.com/library/view/hands-on-artificial-intelligence/9781788991063/4bf7738c-53a0-4493-a1dc-504b8691d27a.xhtml)
4. Sequence processing with RNNs
   1. Neural machine translation
      1. [Attention mechanisms](https://learning.oreilly.com/library/view/hands-on-artificial-intelligence/9781788991063/8f836ba7-438b-4218-813d-437095b00374.xhtml)
   2. [Generating image captions](https://learning.oreilly.com/library/view/hands-on-artificial-intelligence/9781788991063/beb80ae8-dd40-4d77-badb-046b71a748da.xhtml)
5. Extensions of RNNs
   1. [Bidirectional RNNs](https://learning.oreilly.com/library/view/hands-on-artificial-intelligence/9781788991063/ba9a32b4-a351-4308-baa4-33ab5c870b29.xhtml)
   2. [Neural turing machines](https://learning.oreilly.com/library/view/hands-on-artificial-intelligence/9781788991063/0517c6a9-4b76-4083-b4f1-d2c198dbb5d7.xhtml)




## GENERAL NEURAL NETWORKS

https://www.tensorflow.org/tutorials

*From class notes*

Links
- [Ch 13 Code](https://github.com/ageron/handson-ml/blob/637bc1c298a593e02b439ce54aa5de9f8e7f71b4/13_convolutional_neural_networks.ipynb): CNNs
- [Ch 14 Code](https://github.com/ageron/handson-ml/blob/2adec01b34cbfe05866fca6bc724d093c8352e20/14_recurrent_neural_networks.ipynb): RNNs
- [Andrew Ng Code](https://github.com/dibgerge/ml-coursera-python-assignments/blob/master/Exercise3/exercise3.ipynb): Multi-Class & Neural Nets
- [Andrew Ng Code](https://github.com/dibgerge/ml-coursera-python-assignments/blob/master/Exercise4/exercise4.ipynb): Neural Nets

The activation function is a hyperparameter, the weights and biases are parameters.

### Ch 10
> In the first part of this chapter, we will introduce artificial neural networks, starting with a quick tour of the very first ANN architectures, leading up to Multi-Layer Per‐ ceptrons (MLPs) which are heavily used today (other architectures will be explored in the next chapters). 
> In the second part, we will look at how to implement neural networks using the popular Keras API.

### ANNs
> Warren McCulloch and Walter Pitts proposed a very simple model of the biological neuron, which later became known as an artificial neuron: it has one or more binary (on/off) inputs and one binary output. The artificial neuron simply activates its out‐ put when more than a certain number of its inputs are active. McCulloch and Pitts showed that even with such a simplified model it is possible to build a network of artificial neurons that computes any logical proposition you want.

Pg 283: Artificial neuron contains:
- 1+ binary input neurons (IN)
- Input **connections** between IN & ON
- 1 binary output neuron (ON)
- If a threshold number of **connections** are reached, the ON is activated

---

### Perceptron
> The Perceptron is one of the simplest ANN architectures, invented in 1957 by Frank Rosenblatt.

Table from Pg 293: Typical Regression MLP Architecture

| hyperparameter               | Typical value                                           |
| ---------------------------- | ------------------------------------------------------- |
| \## input neurons            | One per input feature                                   |
| \## hidden layers            | Typically 1-5                                           |
| \## neurons per hidden layer | Typically 10-100                                        |
| \## output neurons           | 1 per prediction dim (1 for regress, 2 for binary, etc) |
| Hidden activation            | ReLu or SELU                                            |
| Output activation            | None for regression. ReLu/softplus                      |
| Loss function                | MSE or MAE/Huber (if outliers)                          |
> An MLP is composed of one passthrough input layer, one or more layers of TLUs (threshold logic units), called hidden layers, and one final layer of TLUs called the output layer. The layers close to the input layer are usually called the lower layers, and the ones close to the outputs are usually called the upper layers. Every layer except the output layer includes a bias neuron and is fully connected to the next layer. The architecture that the signal flows only in one direction from the inputs to the outputs is called feedforward neural network (FNN). When an ANN (artificial neural network) contains a deep stack of hidden layers, it is called a deep neural network (DNN). - pg 287
---

Pg 284: **Perceptron** (figure on pg 286)

**Perceptrons** are based on a slightly different type of artificial neuron called a *threshold logical unit* (TLU). Instead of using binary "off/on", the inputs & outputs are **numbers**.

Steps:
1. TLU computes **weighted sum** of inputs (IN & input weight).
   $z = w_1 x_1 + w_n x_n = X^T w$
2. TLU applies a **step function** (sigmoid, tangent, or ReLu) to this sum.
   $h_w(x) = step(z)$,     where     $z=X^T w$

1 single TLU **layer** is called a **Perceptron**.

---

#### Equation

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

*Note*: The Perceptron learning algorithm is the same thing as Stochastic Gradient Descent assuming the following parameters:
- `loss` = 'perceptron'
- `learning_rate` = 'constant'
- `eta0` = 1 (the learning rate)
- `penalty` = None (no regularization)

Pg 290: Backpropagation is **Gradient Descent** but using an efficient technique for computing the **gradients** automatically.
- **Forward** | Make prediction, measure total error
- **Backward** | (in reverse) Go through each layer to measure **each connection's** error contribution
- **Gradient descent** | Tweak connection weights

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

- **\# hidden layers**: Start with 1 or 2 hidden layers. Early layers find simple patterns, later layers find complex. Add until we start overfitting.
- **\# neurons per hidden layer**: Typically use the same for each (100), but could try adding more neurons to early layers if needed.
- **Learning rate**: Start by training the model with 300 iterations and a low learning rate ($10^{-5}$) and gradually increase it to 10.
- **Optimizer**: Ch 11
- **Batch size**: 32
- **Activation function**: ReLU for hidden layers, output layer depends on task
- **\# of iterations**: Don't worry about it, use Early Stopping instead

### Tips for training NN

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
- Vanishing gradient - First layers not nearly as impacted as later stages because much large variance in later stages
 - ReLU - A change in the slope from one neuron to the next will have the same impact on each resulting layer
   - Problem of Relu - Change of zero will lead to the resulting neuron dying out though
   - Alternative - Leaky ReLU - very small instead of 0
   - Alternative - Parametric ReLU - can adjust slope for the "below 0" section
 - Batch normalization - Makes sure that the changing distribution of prev layer's inputs aren't impacting us
 - Gradient clipping (for grad explosion) - set a threshold that gradients can't go above/below
