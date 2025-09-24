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
_kMDItemDisplayNameWithExtensions: 0.0 Neural-Network Taxonomy.md
ai_abstract: null
ai_key_terms: []
aliases: null
children: 0
created: '2025-07-18'
cssclasses: null
grandchildren: 0
kMDItemContentCreationDate: 2025-05-20 17:07:14 +0000
kMDItemContentCreationDate_Ranking: 2025-05-20 00:00:00 +0000
kMDItemContentModificationDate: 2025-05-24 16:30:31 +0000
kMDItemContentType: net.daringfireball.markdown
kMDItemContentTypeTree: (
kMDItemDateAdded: 2025-05-20 17:10:51 +0000
kMDItemDocumentIdentifier: '167136'
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
kMDItemInterestingDate_Ranking: 2025-05-24 00:00:00 +0000
modified: '2025-05-24'
published: true
reading_time: 1.6
source_file: 0.0 Neural-Network Taxonomy.md
tags: null
title: 0.0 Neural Network Taxonomy
word_count: 328
---

## Classes of NNs

[ChatGPT](https://chatgpt.com/share/677453cb-d690-8000-8926-be642b5d1e01): Task → Classes
- **Images** → CNNs or Vision Transformers
- **Language** → RNN-based or Transformer-based models
- **Graphs** → GNNs
- **Generating new data** → GANs, VAEs
- **Dimensionality reduction** → Autoencoders, RBMs

| Class                                             | Use Cases                                                                         | Key Idea                                                                                    | Examples                                                     |
| ------------------------------------------------- | --------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------ |
| **1. Feedforward NNs**                            | Basic classification and regression                                               | Information flows in a single direction (input → output); no feedback loops                 |  MLP                                                         |
| **2. Convolutional NNs**                          | Image recognition, computer vision, text classification                           | Uses convolution and pooling layers to capture spatial/temporal features                    | LeNet, AlexNet, ResNet                                       |
| **3. Recurrent NNs**                              | Language modeling, speech recognition, time-series forecasting                    | Maintains a hidden state that evolves over time, processing data sequences                  | LSTM, GRU (Gated Recurrent Unit)                             |
| **4. Transformers** - 1-2-transformers-simple.md | Language modeling, machine translation, text summarization, multimodal tasks      | Relies on self-attention to process sequential data in parallel                             | “Attention Is All You Need,” BERT, GPT series                |
| **5. Autoencoders**                               | Dimensionality reduction, anomaly detection, generative modeling                  | Learns compressed representations (encodings) and reconstructs data from them               | Denoising Autoencoders, Sparse Autoencoders, Variational AEs |
| **6. Generative Adversarial Networks**            | Image generation, data augmentation, style transfer                               | Employs two competing networks: a Generator and a Discriminator, trained in a zero-sum game | DCGAN, CycleGAN, StyleGAN                                    |
| **7. Graph NNs**                                  | Social networks, molecular graph analysis, recommendation systems                 | Operates on graph-structured data, capturing node and edge relationships                    | Graph Convolutional Network (GCN), GraphSAGE, GAT            |
| **8. Boltzmann Machines**                         | Feature learning, collaborative filtering (e.g., Netflix Prize solutions)         | Stochastic, energy-based models learning internal data representations                      | Restricted Boltzmann Machines (RBMs)                         |
| **9. Spiking NNs**                                | Low-power computation, robotics, real-time processing in IoT                      | Uses spikes/timing-based signals, mimicking biological neural behavior                      | Neuromorphic hardware implementations                        |
| **10. Other Specialized Architectures**           | Hierarchical image representation, continuous time modeling, structured NLP tasks | Various advanced or niche models targeting specific improvements or use cases               | Capsule Networks, Neural ODEs, Recursive NNs                 |