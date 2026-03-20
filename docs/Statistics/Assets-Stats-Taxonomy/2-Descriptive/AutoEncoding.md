---
published: true
---

### Deep Learning / AutoEncode

Fundamental challenges of ML that deep learning is addressing

 - Universality Theorem - `correct functional form` - can do with any function with 1 hidden layer

 - Representation Learning - `correct features`

Understand how deep learning methods learn and model hierarchies of representations.

How unsupervised deep learning is conducted, & why it is offers fundamentally different value than other forms of deep learning

Know what these models are optimizing

 - Optimize the layers in between the input and output

Be able to articulate what are the main ideas of sparse coding and (stacked) autoencoders.

 - similar to PCA - taking sparse and finding new `bases` that rep features from train

 - don't need to retain all training - just `base` matrix and the weights

   - maybe race doesn't matter on its own, but race * age does


Notes

- Instead of having a small set of neurons in the final layer, we are looking to map the original neurons back to themselves (encode and then decode)

- We are looking to take advantage of the feature selection that occurs with neural networks

- Encode to learn features, decode to learn form

- Autoencoder + limited neurons in hidden = similar to PCA