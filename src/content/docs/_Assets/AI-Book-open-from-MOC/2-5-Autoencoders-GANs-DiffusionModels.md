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
_kMDItemDisplayNameWithExtensions: 2.5 Autoencoders, GANs & Diffusion Models (Hands‑On).md
ai_abstract: null
ai_key_terms: []
aliases: null
children: 0
created: '2025-07-18'
cssclasses: null
grandchildren: 0
kMDItemContentCreationDate: 2025-03-22 15:34:26 +0000
kMDItemContentCreationDate_Ranking: 2025-05-20 00:00:00 +0000
kMDItemContentModificationDate: 2025-05-25 13:54:04 +0000
kMDItemContentType: net.daringfireball.markdown
kMDItemContentTypeTree: (
kMDItemDateAdded: 2025-05-20 16:34:44 +0000
kMDItemDocumentIdentifier: '99248'
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
kMDItemInterestingDate_Ranking: 2025-05-25 00:00:00 +0000
modified: '2025-05-25'
published: true
reading_time: 27.3
source_file: 2.5 Autoencoders, GANs & Diffusion Models (Hands‑On).md
tags: null
title: 2.5 Autoencoders, GANs & Diffusion Models (Hands‑On)
word_count: 5455
---

```ad-sam
May20: Renamed from "Ch 17 Autoencoders, GANs, and Diffusion Models"

Note to self - created March 22, 2025. 
```

## Autoencoders

Also see 2-4-gen-models-overview.md - different textbook
Moved to 2-4-gen-models-overview#overview---separate-resource.md

---

## Ch 17

**Autoencoders** are ANNs capable of learning latent representations without supervision.
- **Latent representations** (aka **codings**): dense representations of the input data.

**Autoencoders** uses
- **Dimensionality reduction**: Since codings typically have a lower dimensionality than the input data
- **Feature detectors**: Can be used for unsupervised pretraining of DNNs
- **Generation**: Some are _generative models_: they are capable of randomly generating new data that looks very similar to the training data

### GANs

**GANs** (Generative Adversarial Networks) are composed of 2 NNs that compete
1. *generator* to generate data similar to training data
2. *discriminator* that tries to tell real data from fake data
**Intuition**: criminal generates fake money, cop tries to id fake money
**Adversarial training**: training *competing* NNs

### Autoencoders vs GANs
Both
- Unsupervised
- Learn dense representations
- Can be used for generation
- Similar applications

Work differently:
- **Autoencoders**: simply learn to copy their inputs --> outputs (non-trivial)
- **GANs**: create 2 NNs that compete with each other

### Variational Autoencoders

These are different than the other autoencoders in the chapter:
- They are **probabilistic** - ie, their outputs are partly determined by chance.
- They are **generative** - ie, they can produce new data

## Getting to AI - generative models
Classes of neural networks (goals):
- **Discriminative models**: focus on learning boundaries or correlations between _inputs_ & _labels_.
    - (e.g., typical feedforward nets, CNNs for classification, RNNs for sequence labeling)
- **Generative models**: focus on modeling the underlying data _distribution_, allowing them to produce new (synthetic) data or fill in missing features given partial information.
    - (e.g., **autoencoders**, **VAEs**, **GANs**)

### Autoencoders (For Inspiration)

Summarized in 2-5-autoencoders-gans-diffusionmodels#autoencoders.md

### Building an Autoencoder

If you're thinking that the task of reconstructing an output doesn't appear that useful, you're not alone. 

What exactly do we use these networks for? Autoencoders help to extract features when there are no known labeled features at hand.

To illustrate how this works, let's walk through an example using TensorFlow. We're going to reconstruct the MNIST dataset here, and, later on, we will compare the performance of the standard autoencoder against the variational autoencoder in relation to the same task.

Let's get started with our imports and data. MNIST is contained natively within TensorFlow, so we can easily import it:
```python
import tensorflow as tf  
import numpy as np  
  
from tensorflow.examples.tutorials.mnist import input_data  
mnist = input_data.read_data_sets("/tmp/data/", one_hot=True)
```

For ease, we can build the auto-encoder with the `tf.layers` library. We'll want our Autoencoder architecture to follow the convolutional/de-convolutional pattern, where the input layer of the decoder matches the size of the input and the subsequent layer squash the data into a smaller and smaller representation. The decoder will be the same architecture reversed, starting with the small representation and working larger.

All together, we want it to look something like the following:
!pasted-image-20241231144552.png.md

Let's start with the encoder; we'll define an initializer for the the weight and bias factors first, and then define the encoder as a function that takes and input, x. we'll then use the `tf.layers.dense` function to create standard, fully connected neural network layers. The encoder will have three layers, with the first layer size matching the input dimensions of the input data (`784`), with the subsequent layers getting continually smaller:
```python
initializer = tf.contrib.layers.xavier_initializer()  
def encoder(x): 
    input_layer = tf.layers.dense(
        inputs=x, units=784, activation=tf.nn.relu,
        kernel_initializer=initializer, bias_initializer=initializer)  
    z_prime = tf.layers.dense(
        inputs=input_layer, units=256, activation=tf.nn.relu,
        kernel_initializer=initializer, bias_initializer=initializer)  
    z = tf.layers.dense(
        inputs=z_prime, units=128, activation=tf.nn.relu,
        kernel_initializer=initializer, bias_initializer=initializer)  
    return z
```

Next, let's let's build our decoder; it will be using the same layer type and initializer as the encoder, only now we invert the layers, so that the first layer of the decoder is the smallest and the last is the largest.
```python
def decoder(x):  
    x_prime_one = tf.layers.dense(
        inputs=x, units=128, activation=tf.nn.relu,
        kernel_initializer=initializer, bias_initializer=initializer)  
    x_prime_two = tf.layers.dense(
        inputs=x_prime_one, units=256, activation=tf.nn.relu,
        kernel_initializer=initializer, bias_initializer=initializer)  
    output_layer = tf.layers.dense(
        inputs=x_prime_two, units=784, activation=tf.nn.relu,
        kernel_initializer=initializer, bias_initializer=initializer)  
    return output_layer
```

Before we get to training, let's define some hyper-parameters that will be needed during the training cycle. We'll define the size of our input, the learning rate, number of training steps, the batch size for the training cycle, as well as how often we want to display information about our training progress.
```python
input_dim = 784   
learning_rate = 0.001  
num_steps = 1000  
batch_size = 256  
display = 1
```

We'll then define the placeholder for our input data so that we can compile the model:
```python
x = tf.placeholder("float", [None, input_dim])
```

And subsequently, we compile the model and the optimizer as you've seen before in previous chapter:
```python
# Construct the full autoencoder  
z = encoder(x)  
  
## x_prime represents our predicted distribution  
x_prime = decoder(z)   
  
# Define the loss function and the optimizer  
loss = tf.reduce_mean(tf.pow(x - x_prime, 2))  
optimizer = tf.train.RMSPropOptimizer(learning_rate).minimize(loss)
```

Lastly, we'll code up the training cycle. By this point, most of this should be fairly familiar to you; start a TensorFlow session, and iterate over the epochs/batches, computing the loss and accuracy at each point:
```python
with tf.Session() as sess:  
    sess.run(tf.global_variables_initializer())  
  
    ## Training Loop  
    for i in range(1, num_steps+1):  
      
        ## Feed Batches of MNIST Data  
        batch_x, _ = mnist.train.next_batch(batch_size)  
  
        ## Run the Optimization Process  
        _, l = sess.run([optimizer, loss], feed_dict={x: batch_x})  
  
        ## Display the loss at every 1000 out of 30,000 steps  
        if i % display == 0 or i == 1:  
            print('Step %i: Loss: %f' % (i, l))
```

For this particular example, we'll add in a little something more to this process; a way to plot the reconstructed images alongside their original versions. Keep in mind that this code is still contained within the training session, just outside of the training loop:
```python
n = 4  
canvas_orig = np.empty((28 * n, 28 * n))  
canvas_recon = np.empty((28 * n, 28 * n))  

for i in range(n):  

    batch_x, _ = mnist.test.next_batch(n)  

    # Encode and decode each individual written digit  
    g = sess.run(decoder, feed_dict={x: batch_x})  

    # Display original images  
    for j in range(n):  

        # Draw the original digits  
        canvas_orig[i * 28:(i + 1) * 28, j * 28:(j + 1) * 28] = batch_x[j].reshape([28, 28])  

    # Display reconstructed images  
    for j in range(n):  

        # Draw the reconstructed digits  
        canvas_recon[i * 28:(i + 1) * 28, j * 28:(j + 1) * 28] = g[j].reshape([28, 28])  

# Plot the original image vs the reconstructed images.   
print("Original Images")  
plt.figure(figsize=(n, n))  
plt.imshow(canvas_orig, origin="upper", cmap="gray")  
plt.show()  

print("Reconstructed Images")  
plt.figure(figsize=(n, n))  
plt.imshow(canvas_recon, origin="upper", cmap="gray")  
plt.show()
```

After training, you should end up with a result along the lines of the following, with the actual digits on the left, and the reconstructed digits on the right:
!pasted-image-20241231145350.png.md

So what have we done here? By training the autoencoder on unlabeled digits, we've done the following: 
- Learned the latent features of the dataset without having explicit labels
- Successfully learned the distribution of the data and reconstructed the image from scratch, from that distribution

Now, let's say that we wanted to take this further and generate or classify new digits that we haven't seen yet. To do this, we could remove the decoder and attach a classifier or generator network:
!pasted-image-20241231145424.png.md

The encoder therefore becomes a means of initializing a supervised training model. Standard autoencoders have been used in a variety of tasks. In the supplementary code for this chapter, we'll walk through an example where we utilize autoencoders for visual anomaly detection.

## Variational autoencoders (VAE)

### Overview
**Variational autoencoders** (**VAEs**) are built on the idea of the standard autoencoder, and are powerful generative models and one of the most popular means of learning a complicated distribution in an unsupervised fashion. VAEs are **probabilistic models** rooted in Bayesian inference. A probabilistic model is exactly as it sounds:

_Probabilistic models incorporate random variables and probability distributions into the model of an event or phenomenon._

VAEs, and other generative models, are probabilistic in that they seek to learn a distribution that they utilize for subsequent sampling. While all generative models are probabilistic models, not all probabilistic models are generative models.

The probabilistic structure of VAEs comes into play with their encoders. Instead of building an encoder that outputs a single value to describe the input data, we want to learn the latent variables by generating a probability distribution for each of those variables. VAEs have a constraint on the encoding network that forces it to generate vectors that roughly follow a standard normal distribution. This is what makes VAEs unique: they generate from continuous space, which means that we can easily sample and interpret from that space. We'll see how this unique probabilistic structure helps us to overcome the limitations of standard autoencoders.

### Structure
Like standard autoencoders, VAEs utilize the same encoder/decoder framework, but, that aside, they are mathematically different from their namesake. VAEs take a probabilistic perspective in terms of guiding the network:
!pasted-image-20241231145555.png.md

Both our **encoder** and **decoder** networks are generating distributions from their input data. The encoder generates a distribution from its training data, **Z**, which then becomes the input distribution for the decoder. The decoder takes this distribution, **Z**, and tries to replicate the original distribution, **X**, from it.

#### Encoder
The encoder generates its distribution by first defining its prior as a standard normal distribution. Then, during training, this distribution becomes updated, and the decoder can easily sample from this distribution later on. Both the encoder and the decoder are unique in terms of VAEs in that they output two vectors instead of one: a vector of means, _μ_, and another vector of standard deviation, _σ_. These help to define the limits for our generated distributions. Intuitively, the mean vector controls where the encoding of an input should be centered, while the standard deviation controls the extent to which the encoding may vary from the mean. This constraint on the encoder forces the network to learn a distribution, thereby taking it beyond the vanilla autoencoder that simply reconstructs its output.

#### Decoder
Like the standard autoencoder, the decoder in the VAE is a backward convolutional network, or a deconvolutional network. In processing the decoding, data is sampled from the generation stochastically (randomly), making the VAE one of the few models that can directly sample a probability distribution without a Markov chain Monte Carlo method. As a result of the stochastic generation process, the encoding that we generate from each pass will be a different representation of the data, all while maintaining the same mean and standard deviation. This helps with the decoder's sampling technique; because all encodings are generated from the same distribution, the decoder learns that a latent data point and its surrounding points are all members of the same class. This allows the decoder to learn how to generate from similar, but slightly varying, encodings.

#### Training and optimizing VAEs
VAEs utilize a negative log-likelihood loss as their reconstruction loss to measure how much information is lost during the reconstruction phase of the decoder. If the decoder does not reconstruct the input satisfactorily, it will incur a large reconstruction loss. VAEs also introduce something called **Kullback**–**Leibler** (**KL**) divergence into their loss functions. KL divergence simply measures how much two probability distributions diverge; in other words, how different they are from one another. We want to minimize the KL distance between the mean and standard deviation of the target distribution and that of a standard normal. It is properly minimized when the mean is zero and the standard deviation is one. The log-likelihood loss with KL divergence forms the complete loss function for VAEs.

When training VAEs, there is an implicit trade-off between the accuracy of the model and how close it can model the normal distribution. On its own, KL loss results in encoded data that is densely clustered near the center of the distribution, with little iteration with other potentially similar encoded data. A decoder wouldn't be able to decode anything from the space, because it wouldn't be particularly continuous! By combining the losses and optimizing them, we are able to preserve the dense nature of encoded data created by the KL loss function, as well as the clustered data produced by the reconstruction loss. What we then end up with are tight clusters that are easy for the decoder to work with. We wanted our generated distribution Z to resemble a standard normal distribution as closely as possible, and the more efficiently we can encode the original image, the closer we can push the standard deviation of the generated distribution toward one, the standard deviation of the targeted normal distribution.

#### Utilizing a VAE
We can construct a variational autoencoder in TensorFlow to see how it compares to it's simpler, standard autoencoder cousin. In this section, we'll be using the same MNIST dataset so that we can standardize our comparison across methods. Let's walk through how to construct a VAE by utilizing it to generate handwriting based on the MNIST dataset. Think of _x_ as being the individual written characters and _z_ as the latent features in each of the individual characters that we are trying to learn.

First, let's start with our imports:
```python
import numpy as np  
import tensorflow as tf  
from tensorflow.examples.tutorials.mnist import input_data
```

As before, we can import the data directly from the TensorFlow library:
```python
mnist = input_data.read_data_sets('MNIST_data', one_hot=True)
```

Next, we can start to build the encoder. We're going to be utilizing the same `tf.layers` package as we did before. Here, our encoder will look fairly similar to how it did in the previous example, our layers will take in an input and gradually compress that input until we generate a latent distribution, _z_:
```python
def encoder(x):
    input_layer = tf.layers.dense(
        inputs=x, units=784, activation=tf.nn.elu,
        kernel_initializer=initializer, bias_initializer=initializer,name='input_layer')
        
    hidden_1 = tf.layers.dense(
        inputs=input_layer, units=256, activation=tf.nn.elu,
        kernel_initializer=initializer, bias_initializer=initializer)
    
    hidden_2 = tf.layers.dense(
        inputs=hidden_1, units=128, activation=tf.nn.elu,
        kernel_initializer=initializer, bias_initializer=initializer)
```

Here's where we start to diverge from the standard autoencoder, however. While the last layer in the encoder will give us the potential z-distribution that represents our data, we'll need to calculate the values of $\mu$ and $\sigma$ that will help define that distribution. We can do that by creating two new layers that take in the potential distribution z, and output out values of `mu` and `sigma`:
```python
mu = tf.layers.dense(inputs=z, units=10, activation=None)  
sigma = tf.layers.dense(inputs=z, units=10, activation=None)
```

Next, we'll use these values to go ahead and calculate the KL divergence for the encoder, which will eventually go into constructing our final loss function:
```python
kl_div = -0.5 * tf.reduce_sum( 1 + sigma - tf.square(mu) - tf.exp(sigma), axis=1)  
  
kl_div = tf.reduce_mean(latent_loss)
```

Let's go ahead and create the decoder portion of the variational autoencoder now; we'll create a deconvolutional pattern that reverses the dimensions of the encoder. All of this will be contained under the function below:
```python
def decoder(z, initializer):
    layer_1 = fully_connected(
        z, 256, scope='dec_l1', activation_fn=tf.nn.elu, 
        kernel_initializer=initializer, bias_initializer=initializer)
    layer_2 = fully_connected(
        layer_1, 384, scope='dec_l2', activation_fn=tf.nn.elu,
        kernel_initializer=initializer, bias_initializer=initializer)
    layer_3 = fully_connected(
        layer_2, 512, scope='dec_l3', activation_fn=tf.nn.elu,
        kernel_initializer=initializer, bias_initializer=initializer)
    dec_out = fully_connected(
        layer_3, input_dim, scope='dec_l4', activation_fn=tf.sigmoid,
        kernel_initializer=initializer, bias_initializer=initializer)
```

Also under the decoder function, we'll use the decoder output to calculate the reconstruction loss:
```python
epsilon = 1e-10  
  
rec_loss = -tf.reduce_sum(x * tf.log(epsilon + dec_out) + (1 - x) * tf.log(epsilon + 1 - dec_out), axis=1)  
  
rec_loss = tf.reduce_mean(rec_loss)
```

As usual, we'll prepare our training parameters before we start initializing the model. We'll define a learning rate, batch size for our training, the number of training epochs, dimension of the input, and the size of our total training sample:
```python
learning_rate = 1e-4  
batch_size = 100  
epochs = 100  
input_dim = 784   
num_sample = 55000  
n_z = 10
```

We'll also define the placeholder for our input data, x:
```python
x = tf.placeholder(name='x', dtype='float', shape=[None, input_dim])
```

Before we start training, we'll initialize the model, loss, and optimizer:
```python
## initialize the models  
z, kl_div = encoder(x)  
dec_out, rec_loss = decoder(x)  
  
## Calculate the overall model loss term  
loss = tf.reduce_mean(rec_loss + kl_div)  
  
## Create the optimizer  
optimizer = tf.train.AdamOptimizer(learning_rate).minimize(loss)  
  
## Create the weight initializer  
initializer = tf.contrib.layers.xavier_initializer()
```

Finally, we can run the actual training process. This we be similar to the training processes that we've already built and experienced:
```python
with tf.Session() as sess:
    sess.run(tf.global_variables_initializer())
    for epoch in range(epochs):
        for iter in range(num_sample // batch_size):
            batch_x = mnist.train.next_batch(batch_size)
            _, l, rl, ll = sess.run([optimizer, loss, rec_loss, kl_div], feed_dict={x: batch_x[0]})

        if epoch % 5 == 0:
            print('[Epoch {}] Total Loss: {}, Reconstruction Loss: {}, Latent Loss: {}'.format(epoch, l, rl, ll))
```

Lastly, we can use the bit of code following code to generate new samples from our newly trained model:
```python
z = np.random.normal(size=[batch_size, n_z])  
x_generated = x_hat = self.sess.run(dec_out, feed_dict={z: z})  
  
n = np.sqrt(batch_size).astype(np.int32)  
I_generated = np.empty((h*n, w*n))  
for i in range(n):  
    for j in range(n):  
        I_generated[i*h:(i+1)*h, j*w:(j+1)*w] = x_generated[i*n+j, :].reshape(28, 28)  
  
plt.figure(figsize=(8, 8))  
plt.imshow(I_generated, cmap='gray')
```

Ultimately, you should end up with an image such as the following, with the original digits on the left and the generated digits on the right. Observe how much clearer the digits are compared to the original autoencoder. Now, let's see how we can take this further with GANs. 

## Generative adversarial networks (GAN)

### Overview
Generative adversarial networks (**GANs**) are a class of networks that were introduced by Ian Goodfellow in 2014. In GANs, two neural networks play off against one another as adversaries in an **actor**-**critic model**, where one is the creator and the other is the scrutinizer. The creator, referred to as the **generator network**, tries to create samples that will fool the scrutinizer, the discriminator network. These two increasingly play off against one another, with the generator network creating increasingly believable samples and the discriminator network getting increasingly good at spotting the samples. In summary:

- The generator tries to maximize the probability of the discriminator passing its outputs as real, not generated
- The discriminator guides the generator to create ever more realistic samples

All in all, this process is represented as follows:
!pasted-image-20241231150923.png.md

GANs can be used for a variety of tasks, and, in recent years, many GAN varieties have been created. As they were originally built for image-related tasks, we will focus our architecture discussions on image-based GANs. A larger list of GANs is available at the end of the section. Throughout, we'll follow along in TensorFlow to illuminate the topics. As before, we'll be utilizing the same MNIST data in order to compare the frameworks with our previous ones:
```python
import tensorflow as tf  
import numpy as np

from tensorflow.examples.tutorials.mnist import input_data  
mnist = input_data.read_data_sets("MNIST_data/", one_hot=True)  
training_data = (mnist.train.images - 0.5) / 0.5
```

With that, let's walk through the pieces of the network one at a time. By this point, you should be pretty familiar with this process in TensorFlow.

### Discriminator network
The discriminator network in image-related GANs is a standard convolutional neural network. It takes in an image and outputs a single number that tells us whether the image is _real_ or _fake_. The discriminator takes in an image, and learns the attributes of that image so that it may be a good _judge_ vis-à-vis the outputs of the generator. In TensorFlow, we can create the `discriminator` as a function that we will then run in a TensorFlow session later on. This framework is more or less the same as you've seen in the previous sections with autoencoder and variational autoencoders; we'll use the higher level `tf.layers` api to create three main network layers and an output layer. After each of the main network layers, we'll add a dropout layer for regularization. The last layer will be slightly different, as we'll want to squash the output. For this, we'll use a sigmoid activation function that will give us a final output saying if an image is believed to be fake or not:
```python
def discriminator(x, initializer, dropout_rate):
    layer_1 = tf.layers.dense(
        x, units=1024, activation=tf.nn.relu, kernel_initializer=initializer,
        bias_initializer=initializer, name='input_layer')
    dropout_1 = tf.layers.dropout(inputs=layer_1, rate=dropout_rate, training=True)
    layer_2 = tf.layers.dense(
        dropout_1, units=512, activation=tf.nn.relu, kernel_initializer=initializer,
        bias_initializer=initializer, name='disc_layer_1')
    dropout_2 = tf.layers.dropout(inputs=layer_2, rate=dropout_rate, training=True)
    layer_3 = tf.layers.dense(
        dropout_2, units=256, activation=tf.nn.relu, kernel_initializer=initializer,
        bias_initializer=initializer, name='disc_layer_2')
    dropout_3 = tf.layers.dropout(inputs=layer_3, rate=dropout_rate, training=True)
    output_layer = tf.layers.dense(
        dropout_3, units=1, activation=tf.sigmoid, kernel_initializer=initializer,
        bias_initializer=initializer, name='disc_output')
    return output_layer
```

Now that we have this discriminator defined, let's go ahead and move on to the generator.

### Generator network

You can think of the `generator` portion of the GAN as a reverse convolutional neural network. Like a VAE, it uses generic normal distribution, the only difference being that it up samples the distribution to form an image. This distribution represents our prior, and is updated during training as the GAN improves at producing images that the discriminator is unable to determine whether they are fake.

In between each layer, we utilize a `ReLu` activation function and `batch_normalization` to stabilize each layer's outputs. As the discriminator starts inspecting the outputs of `generator`, `generator` will continually adjust the distribution from which it's drawing to closely match the target distribution. The code will look fairly familiar to what you've seen in previous sections:
```python
def generator(x, initializer):
    layer_1 = tf.layers.dense(
        x, units=256, activation=tf.nn.relu, kernel_initializer=initializer,
        bias_initializer=initializer, name='input_layer')
    layer_2 = tf.layers.dense(
        layer_1, units=512, activation=tf.nn.relu, kernel_initializer=initializer,
        bias_initializer=initializer, name='hidden_layer_1')
    layer_3 = tf.layers.dense(
        layer_2, units=1024, activation=tf.nn.relu, kernel_initializer=initializer,
        bias_initializer=initializer, name='hidden_layer_2')
    output_layer = tf.layers.dense(
        layer_3, units=784, activation=tf.nn.tanh, kernel_initializer=initializer,
        bias_initializer=initializer, name='generator_output')
    return output_layer
```

Now that we have our model set up, let's get into the training process!

### Training GANs
GANs are easy to train, but difficult to optimize due to a number of unstable dynamics in their training processes. To train a GAN, we train the generator on sub samples of a high-dimensional training distribution; since this does not innately exist, we initially sample from a standard normal (Gaussian) distribution.

!pasted-image-20241231152334.png.md

When training GANs, we train to minimize the objective function so that the generator can win. We want the generator to be able to create examples that are realistic enough to fool the discriminator. To do this, we train and optimize the discriminator and the generator in parallel using gradient ascent. For each iteration of training, we are going to train the discriminator network in small batches, and then train the generator network in small batches, alternating between the two paradigms. Gradient ascent for the discriminator computes the following:
!pasted-image-20241231152415.png.md

By taking the maximum of the generator's objective, we're maximizing the likelihood of being wrong. This parallelized training process can still be unstable, however, and stabilizing GANs is a very active area of research at the moment.

Let's get back to the TensorFlow process. We'll start by defining our network's training parameters:
```python
learning_rate = 0.0002  
batch_size = 100  
epochs = 100  
dropout_rate=0.5
```

We then need to define our placeholders, both for the input `x`, as well as the `z` distribution which the generator will generate from:
```python
z = tf.placeholder(tf.float32, shape=(None, 100))  
x = tf.placeholder(tf.float32, shape=(None, 784))
```

Like before, we'll create a Glorot `Initializer` that will initialize our weight and bias values for us:
```python
initializer = tf.contrib.layers.xavier_initializer()
```

Once we have all of this, we can go ahead and actually define our network pieces. You'll notice that for the discriminator, we're using something called a scope. Scopes allow us to reuse items from the TensorFlow graph without generating an error - in this case, we want to use the variables from the discriminator function twice in a row, so we use the `tf.variable_scope` function that TensorFlow provides us. Between the two, we simply use the `scope.reuse_variables()` function to tell TensorFlow what we're doing:
```python
G = generator(z, initializer)  
  
with tf.variable_scope('discriminator_scope') as scope:  
    disc_real = discriminator(x, initializer, 0.5)  
    scope.reuse_variables()  
    disc_fake = discriminator(G, initializer, 0.5)
```

Lastly, we'll define the loss functions for both the generator and discriminator, and set the optimizer:
```python
epsilon = 1e-2  
disc_loss = tf.reduce_mean(-tf.log(disc_real + epsilon) - tf.log(1 - disc_fake + epsilon))  
gen_loss = tf.reduce_mean(-tf.log(disc_fake + epsilon))  
  
disc_optim = tf.train.AdamOptimizer(lr).minimize(disc_loss)  
gen_optim = tf.train.AdamOptimizer(lr).minimize(gen_loss)
```

We can the run the training cycle just as we have in the previous two examples. The only two differences you'll see here is that we run two optimization processes, one for the generator and one for the discriminator:
```python
with tf.Session() as sess:  
    sess.run(tf.global_variables_initializer())   
    for epoch in range(epochs):  
          
        ## Define the loss to update as a list  
        gen_loss = []  
        disc_loss = []  
          
        ## Run the training iteration  
        for iter in range(training_data.shape[0] // batch_size):  
              
            ## Batch the input for the discriminator  
            x_prime = training_data[iter*batch_size:(iter+1)*batch_size]  
            z_prime = np.random.normal(0, 1, (batch_size, 100))  
  
            ## Run the discriminator session  
            _, DLoss = sess.run([disc_optim, disc_loss], {x: x_prime, z: z_prime, drop_out: 0.3})  
            disc_loss.append(DLoss)  
  
            ## Run the generator session   
            z_prime = np.random.normal(0, 1, (batch_size, 100))  
            _, GLoss = sess.run([gen_optim, gen_loss], {z: z_prime, drop_out: 0.3})  
            gen_loss.append(GLoss)  
              
        if epoch % 5 == 0:  
            print('[%d/%d] - loss_d: %.3f, loss_g: %.3f' % ((epoch + 1), epochs, np.mean(D_losses), np.mean(G_losses)))
```

GANs are fairly computational expensive, so training this network may take a while unless you scale with a web services platform. 

As you can see, all of the models that we've run thus far have built upon each other. Even with advanced generative models like GANs, we can use certain recipes to create powerful neural networks, and larger AI applications, quickly and efficiently.

## Other forms of generative models

### Overview
While we've only covered two types of generative model, there are many different types that you may encounter in the literature. The following chart is not exhaustive, but does provide a general overview of the types of generative models out there:
!pasted-image-20241231152903.png.md

Let's break this down: 
- **Explicit density models**: Model our data directly from a probability distribution. We explicitly define the probability and solve for it
- **Implicit density models**: Learn to sample from a probability distribution without defining what that distribution is

Within explicit density models, we have **tractable density** models and **approximate density** models. Here, tractable is related to defined computational time; we can calculate the computational complexity of a tractable problem. Approximate density relates to **intractability**—a computer science term that means that there is no defined computational time or algorithm. In practice, an intractable problem utilizes too many computational resources in order to be useful. Therefore, approximate density models use probabilistic approximation techniques to estimate the solution.

We'll briefly touch upon three notable classes: fully visible belief nets, Hidden Markov models, and Boltzmann machines. While each of these could be a chapter on its own, we'll touch on them briefly. Examples of each of these networks in Python are available in the code accompanying this chapter.

### Fully visible belief nets

Fully visible belief networks are a class of explicit density models and a form of deep belief network. They use the chain rule to decompose a probability distribution $p(x)$ over a vector, into a product over each of the members of the vector, represented between by $p(x_i | x_1, \dots)$. All together, it's formula is:
!pasted-image-20241231153111.png.md

The most popular model in this family is PixelCNN, an **autoregressive** generative model. Pixels approach image generation problems by turning them into a sequence modeling problem, where the next pixel value is determined by all the previously generated pixel values. The network scans an image one pixel at a time, and predicts conditional distributions over the possible pixel values. We want to assign a probability to every pixel image based on the last pixels that the network saw. For instance, if we're looking at the same horse images as in the previous example, we would be consistently predicting what the next anticipated pixel looks such as follows:
!pasted-image-20241231153143.png.md

Based on the features that we've seen, will the next pixel still contain the horse's ear, or will it be background? While their training cycles are more stable than GANs, the biggest issue with the networks is that they generate new samples extremely slowly; the model must be run again fully in order to generate a new sample. They also block the execution, meaning that their processes cannot be run in parallel.

### Hidden Markov models
A hidden Markov model is a type of **Markov model**, which is itself a subclass of **Dynamic Bayesian Networks**. Markov models are used to model randomly changing systems called **Markov processes** also called **Markov chains**. Simply put, a Markov process is a sequence of events where the probability of an event happening solely depends on the previous event.

Markov chains appear as follows:
!pasted-image-20241231153404.png.md

In this simple chain, there are three states, represented by the circles. We then have probabilities for transitioning to another state, as well as probabilities of staying in a current state. The classic example of a Markov chain is that of the taxi driver, where the driver finds himself currently solely depends on where he was last, in other words, his most recent fare. If we were to apply this example to the preceding Markov chain, the driver would have three possible locations to pick up or drop off customers; the associated probabilities between locations would represent the chance of him going to the other location or staying put.

Hidden Markov models are used to model Markov processes that we can't observe; what if the driver's route structure of where he would like to pick up customers is secret? There is likely some logic to the scenario, and we can try and model that process with a Hidden Markov model.

### Boltzmann machines
Boltzmann machines are a general class of models that contain take binary vectors as input and units that assign a probability distribution to each of those binary vectors. As you can see in the following diagram, each unit is dependent on every other unit:
!pasted-image-20241231153508.png.md

A Boltzmann machine uses something called an **energy function**, which is similar to a loss function. For any given vector, the probability of a particular state is proportional to each of the energy function values. To convert this to an actual probability distribution, it's necessary to renormalize the distribution, but this problem becomes another intractable problem. Monte Carlo methods are again used here for sampling as a workaround, hence making Boltzmann machines a Monte Carlo-based method.

Let's say we have documents that are represented by binary features. A Boltzmann machine can help us determine whether a particular word or phrase came from a particular document. We can also use Boltzmann machines for anomaly detection in large, complex systems. They work well up to a point, although this method does not work well in high dimensional spaces.