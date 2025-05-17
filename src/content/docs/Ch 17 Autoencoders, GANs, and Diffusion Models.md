---
title: 'Ch 17 Autoencoders, GANs, and Diffusion Models'
---
```ad-sam
Note to self - created March 22, 2025. 
```


Also see [[Generative Models]] - different textbook

## Autoencoders

[ChatGPT](https://chatgpt.com/share/67dee1a1-8600-8000-88c7-ffce728e06cf) - `Quick summary. Meant to be intuitive, not exhaustive.`

Autoencoders learn succinct representations. They serve as a foundation for many generative and dimensionality-reduction techniques.
Structurally, autoencoders consist of an **input layer**, a **hidden layer**, and an **output** **layer**: [[Pasted image 20241231143947.png]]

```ad-sam

**Intuition**

**Autoencoders**: example of encoder --> decoder.

1. I have an **idea** that I want to share. I'll explain using an example. Three examples come to mind, and I choose the simplest one.
2. The listener hears my example, and then re-generates my original **idea**.

We want the **idea** I shared to be as close as possible to the **idea** the listener understands. ("Reconstruction loss")

```

**Autoencoders** are a self-supervised approach to representation learning. They operate with two main components:
1. An **encoder** that compresses (or *encodes*) the input into a smaller, more compact representation (an “information bottleneck”).
2. A **decoder** that *reconstructs* the original input from this compact representation.
The encoder is a *recognition* network, the decoder is a *generative* network.

**Key Ideas**
- **Information Bottleneck**: The encoder forces the network to keep only *the most relevant aspects* of the data; this helps avoid simply memorizing inputs.
- **Reconstruction Loss**: Typically mean squared error or cross entropy, which measures how close the decoder’s output is to the original input.
- **Goal**: Find a balance where the model accurately reconstructs input data but doesn’t overfit or memorize it.

**Connection to PCA**
- Like **PCA**, autoencoders perform **dimensionality reduction**, taking high-dimensional data and learning a lower-dimensional representation.
- **Difference**: Autoencoders can capture **nonlinear** relationships, whereas PCA is restricted to **linear** correlations.

Manifolds
- A **manifold** is a continuous, non-intersecting surface (think of a sphere).
- In neural networks, loss functions and data structures often lie on (possibly complex) manifolds. Autoencoders learn to navigate these manifolds by mapping input data into a meaningful, compressed space and then reconstructing it back.

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




