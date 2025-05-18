---
Quality: ★
QualityComment: Why isn't this a 10?
Objective: Reference
Function: Hierarchy
ReviewFreq: 'Weekly, 1-Month, 2-Month, 3-Month'
Due: null
HoursDone: null
HoursRemain: 0
CoverImage: 'https://i.imgur.com/Oa8nBFE.png'
tags: null
TimeSpent: null
TimeSpent2: null
title: _AI MOC
---


### TOC

```ad-sam

[ChatGPT](https://chatgpt.com/share/6817848d-fc2c-8000-acc3-e7610850caeb)

**Overview of TOC Parts**

(1) **Core Concepts**
Refresh NN intuition. Need for transformers, self‑supervision, and modern frameworks like PyTorch.

(2) **Generative AI Essentials**
Understand and **use** LLMs, prompt engineering, and RAG.  

(3) **Practical MLOps**
Deploy, scale, and version models with minimal DevOps pain.  

(4) **Responsible & Edge AI**
Privacy/security for devices and constrained environments.

(5) **Applications & Career**
Tie to real business use‑cases / continuous learning habits.

```


| Part                            | Chapter                          | Section                                                  |
| ------------------------------- | -------------------------------- | -------------------------------------------------------- |
| I – Core Concepts               | 1 Deep‑Learning Basics           | [[1.1 Why NNs Work (Intuition)]]                         |
|                                 |                                  | [[1.2 Transformers in Plain English]]                    |
|                                 |                                  | 1.3 Self‑Supervision: “Learning Without Labels”          |
|                                 |                                  | 1.4 Modern Frameworks (PyTorch 2.x, JAX) at a Glance     |
| II – Generative AI Essentials   | 2 Large Language Models          | [[2.1 What Makes GPT‑4o & Llama 3 Tick (High Level)]]    |
|                                 |                                  | 2.2 ChatGPT vs Open‑Source LLMs: When to Use Which       |
|                                 |                                  | 2.3 Easy Fine‑Tuning with LoRA (Step‑by‑Step Guide)      |
|                                 | 3 Prompt Engineering             | 3.1 Crafting Prompts & System Messages                   |
|                                 |                                  | 3.2 Chain‑of‑Thought & “Show Your Work” Tricks           |
|                                 |                                  | 3.3 Function Calling & JSON Output (No Coding Headaches) |
|                                 | 4 Retrieval‑Augmented Generation | 4.1 RAG in One Picture                                   |
|                                 |                                  | 4.2 Vector Stores 101 (Pinecone, Qdrant)                 |
|                                 |                                  | 4.3 Building Your First RAG Chatbot                      |
| III – Practical MLOps           | 5 Deploying LLMs                 | 5.1 Local vs Cloud Inference (Pros & Cons)               |
| [[ML Ops]] - need to break down |                                  | 5.2 Quick Quantization to Fit on a Laptop GPU            |
|                                 | 6 Data Pipelines for Gen‑AI      | 6.1 Collecting & Cleaning Text Data Fast                 |
|                                 |                                  | 6.2 Simple CI/CD for Models (GitHub Actions Template)    |
| IV – Responsible & Edge AI      | 7 On‑Device AI                   | 7.1 Running LLMs on Apple Silicon or a Phone             |
|                                 |                                  | 7.2 Privacy‑First Design Tips                            |
|                                 | 8 Ethics & Governance            | 8.1 Bias & Fairness Checklists (Non‑Math)                |
|                                 |                                  | 8.2 Key Regulations in Plain Language (EU AI Act, US EO) |
| V – Applications & Career       | 9 AI Agents & Tools              | 9.1 ReAct, CrewAI & Other Agent Patterns                 |
|                                 |                                  | 9.2 Safeguarding Agents (Rate Limits, Guardrails)        |
|                                 | 10 Domain Playbooks              | 10.1 E‑Commerce: Smart Recommendations                   |
|                                 |                                  | 10.2 Finance: Fast Fraud Detection with Gen‑AI           |
|                                 |                                  | 10.3 Healthcare: HIPAA‑Friendly Chat Assistants          |
|                                 | 11 Portfolio Projects            | 11.1 Build a Personal RAG Bot over Your Notes            |
|                                 |                                  | 11.2 Publish a Blog Post from Your Evergreen Notes       |
|                                 | 12 Continuous Learning           | 12.1 Must‑Follow Newsletters & Paper Digests             |
|                                 |                                  | 12.2 Quarterly Skill‑Gap Self‑Check                      |





# May4: Can get rid of everything below once fleshed out ^

### Temp - move into TOC


[[NLP]]
[[Generative Models]]
[Stanford Cheatsheets](https://stanford.edu/~shervine/teaching/cs-221/)
[[3Blue1Brown - GPT]]



## Classes of NNs

[ChatGPT](https://chatgpt.com/share/677453cb-d690-8000-8926-be642b5d1e01): The “best” class depends heavily on your data and task:
- **Images** → CNNs or Vision Transformers
- **Language** → RNN-based or Transformer-based models
- **Graphs** → GNNs
- **Generating new data** → GANs, VAEs
- **Dimensionality reduction** → Autoencoders, RBMs
In practice, researchers and engineers often combine ideas from multiple classes to tailor solutions to specific problems.

| Class                                   | Use Cases                                                                         | Key Idea                                                                                    | Examples                                                     |
| --------------------------------------- | --------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------ |
| **1. Feedforward NNs**                  | Basic classification and regression                                               | Information flows in a single direction (input → output); no feedback loops                 | Multi-Layer Perceptron (MLP)                                 |
| **2. Convolutional NNs**                | Image recognition, computer vision, text classification                           | Uses convolution and pooling layers to capture spatial/temporal features                    | LeNet, AlexNet, ResNet                                       |
| **3. Recurrent NNs**                    | Language modeling, speech recognition, time-series forecasting                    | Maintains a hidden state that evolves over time, processing data sequences                  | LSTM (Long Short-Term Memory), GRU (Gated Recurrent Unit)    |
| **4. Transformers**                     | Language modeling, machine translation, text summarization, multimodal tasks      | Relies on self-attention to process sequential data in parallel                             | The original “Attention Is All You Need,” BERT, GPT series   |
| **5. Autoencoders**                     | Dimensionality reduction, anomaly detection, generative modeling                  | Learns compressed representations (encodings) and reconstructs data from them               | Denoising Autoencoders, Sparse Autoencoders, Variational AEs |
| **6. Generative Adversarial Networks**  | Image generation, data augmentation, style transfer                               | Employs two competing networks: a Generator and a Discriminator, trained in a zero-sum game | DCGAN, CycleGAN, StyleGAN                                    |
| **7. Graph NNs**                        | Social networks, molecular graph analysis, recommendation systems                 | Operates on graph-structured data, capturing node and edge relationships                    | Graph Convolutional Network (GCN), GraphSAGE, GAT            |
| **8. Boltzmann Machines**               | Feature learning, collaborative filtering (e.g., Netflix Prize solutions)         | Stochastic, energy-based models learning internal data representations                      | Restricted Boltzmann Machines (RBMs)                         |
| **9. Spiking NNs**                      | Low-power computation, robotics, real-time processing in IoT                      | Uses spikes/timing-based signals, mimicking biological neural behavior                      | Neuromorphic hardware implementations                        |
| **10. Other Specialized Architectures** | Hierarchical image representation, continuous time modeling, structured NLP tasks | Various advanced or niche models targeting specific improvements or use cases               | Capsule Networks, Neural ODEs, Recursive NNs                 |



## Other Resources

[what-is-chatgpt-doing-and-why-does-it-work/](https://writings.stephenwolfram.com/2023/02/what-is-chatgpt-doing-and-why-does-it-work/)

**LangChain** | a framework designed to facilitate the development of applications that use large language models (LLMs) for tasks such as answering questions, document retrieval, and automation of workflows. It helps developers easily integrate LLMs with other data sources and tools. [Chat](https://chatgpt.com/share/66f820e4-b0d0-8000-9f59-5bc5ea0765e3)

```ad-sam

I am a data scientist with a background in Machine Learning. I would like to use an existing GPT, but train on my own data. What are some ways I could do this?

[ChatGPT](https://chatgpt.com/share/66ed9177-e9ac-8000-afcf-2827782d1b07)

```



#### AI is for Everyone - Might delete
[External - AI for Everyone](https://www.deeplearning.ai/courses/ai-for-everyone/)
**Artificial Intelligence**: Development of systems that perform tasks that mimic/simulate human intelligence. 

AI "types" or "ideas":
1. **ANI: Artificial *Narrow* Intelligence**: Smart speaker, self driving car.
2. **Generative AI**: ChatGPT
3. **AGI: Artificial *General* Intelligence**: Anything a human can do (or more)

LLMs are built by using **supervised** learning to predict the next word.

AI Branches:
- **ML**
	- Deep Learning
- **Others**: Generative AI, unsupervised learning, reinforcement learning, graphical models, planning

Major AI techniques:
- Video: [Survey of major AI techniques](https://www.coursera.org/learn/ai-for-everyone/lecture/qxMIm/survey-of-major-ai-techniques-optional)
- Slides: [AI-For-Everyone-W3](AI-For-Everyone-W3.pdf)

**Reinforcement learning**: trial & error
**GANs**: can create realistic-looking data, such as images, videos, and text
