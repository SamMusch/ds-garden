---
Quality: ★
QualityComment: Why isn't this a 10?
Objective: Reference
Function: Hierarchy
ReviewFreq: Weekly, 1-Month, 2-Month, 3-Month
Due: 
HoursDone: 0
HoursRemain: 0
CoverImage: 
tags: 
TimeSpent: 
TimeSpent2:
---

[HuggingFace](https://huggingface.co/learn/nlp-course/chapter1/1)  |  [Wikipedia](https://www.wikiwand.com/en/Transformer_(deep_learning_architecture))
- **NLP** | field of linguistics & ML related to language. The aim is to understand single words & the context of those words together.
- **LLMs** are DL algorithms that use **transformer models** to perform **NLP** tasks.

> Intro to [Attention is all you Need](https://arxiv.org/abs/1706.03762)
> 
> The dominant sequence transduction models are based on complex RNNs or CNNs that include an encoder & a decoder. The best performing models also connect the encoder & decoder through an attention mechanism. 
>
> We propose a new simple network architecture, the Transformer, based solely on attention mechanisms, dispensing with recurrence and convolutions entirely. 

### 1. Transformer Models
3 major groups of transformer models: [History, 2018-2021](https://huggingface.co/datasets/huggingface-course/documentation-images/resolve/main/en/chapter1/transformers_chrono.svg)

| Model                                                        |      |                      |                                                            | Examples                                   | Tasks                                                        |
| ------------------------------------------------------------ | ---- | -------------------- | ---------------------------------------------------------- | ------------------------------------------ | ------------------------------------------------------------ |
| [Encoder](https://huggingface.co/learn/nlp-course/chapter1/5?fw=pt) | BERT | Auto-Encoding        | Receives input, builds features.                           | ALBERT, BERT, DistilBERT, ELECTRA, RoBERTa | Sentence classification, named entity recognition, extractive question answering |
| [Decoder](https://huggingface.co/learn/nlp-course/chapter1/6?fw=pt) | GPT  | Auto-Regressive      | Uses encoder's features + other inputs to generate target. | CTRL, GPT, GPT-2, Transformer XL, LLaMA    | Text generation                                              |
| [Encoder-decoder](https://huggingface.co/learn/nlp-course/chapter1/7?fw=pt) | BART | Sequence-to-sequence |                                                            | BART, T5, Marian, mBART                    | Summarization, translation, generative question answering    |
> All the Transformer models mentioned above (GPT, BERT, BART, T5, etc.) have been trained as ***language models***. This means they have been trained on large amounts of raw text in a **self-supervised** fashion. Self-supervised learning is a type of training in which the objective is automatically computed from the inputs of the model. That means that humans are not needed to label the data!
>
> The general pretrained model then goes through ***transfer learning*** where the model is fine-tuned in a supervised way — that is, using human-annotated labels — on a given task.

#### Transfer Learning
- *Pretraining* is the act of training a model from scratch.
- *Fine-tuning* is done **after** a model has been pretrained, using a new specific dataset.

Transformer models are built with *attention layers*, which tell the model to pay specific attention to certain words in the sentence. ([Paper](https://arxiv.org/abs/1706.03762))

**Transformer Model** Terms:
- **Architecture**: Skeleton of the model — the definition of each layer & operation within the model. (eg `BERT`)
- **Checkpoints**: The weights that will be loaded in the architecture. (eg `bert-lower-cased`)
- **Model**: Umbrella term that could mean “architecture” or “checkpoint”. This course will specify *architecture* or *checkpoint* when it matters.

### 2. Using Transformers
[Behind the pipeline](https://huggingface.co/learn/nlp-course/chapter2/2?fw=pt) - steps - [YouTube](https://www.youtube.com/watch?v=1pedAIvTWXk&t=52s)

1. **Preprocessing with a tokenizer**:
   1. Load the tokenizer.
   2. Tokenize input text into tokens and convert to tensors.
2. **Model**:
   1. Load the pretrained model.
   2. Pass the tokenized inputs through the model to get output logits.
3. **Postprocessing the output**:
   1. Convert logits to probabilities using softmax.
   2. Map the probabilities to labels.

Breaking out steps in detail: **Tokenizer**
1. **Tokens** | Split the input into *tokens* (ie words, subwords, punctuation)
2. **Special tokens** | Add special tokens such as "sentence begin".
3. **Input IDs** | Map each token to it's unique ID from that specific pre-trained model. (This is the *checkpoint* which comes out as a *dictionary*.)

Breaking out steps in detail: **Model** ([Image](https://huggingface.co/datasets/huggingface-course/documentation-images/resolve/main/en/chapter2/transformer_and_head.svg))
1. Input from Tokenizer
2. Transformer network
   1. **Embeddings** | convert each unique ID into vector
   2. **Layers** | manipulate vectors using attention mechanism
3. **Hidden states (features)** | 
4. **Head** | take high-dimensional vector of hidden states as input, then convert predictions to task-specific output
5. Output for post-processing


## Sentiment Analysis
[Finbert Github](https://github.com/ProsusAI/finBERT)  |  [Blog](https://huggingface.co/blog/sentiment-analysis-python)  |  [Grammar Correction](https://huggingface.co/vennify/t5-base-grammar-correction)

BERT
- Bidirectional Encoder Representations from Transformers
- ML model for NLP
- Developed in 2018 by Google AI. Serves as a swiss army knife solution to 11+ of the most common language tasks, such as sentiment analysis and named entity recognition.

A massive dataset of 3.3 Billion words has contributed to BERT’s continued success. BERT was specifically trained on Wikipedia (~2.5B words) and Google’s BooksCorpus (~800M words). 

MLM enables/enforces bidirectional learning from text by masking (hiding) a word in a sentence and forcing BERT to bidirectionally use the words on either side of the covered word to predict the masked word.

A random 15% of tokenized words are hidden during training and BERT’s job is to correctly predict the hidden words. Thus, directly teaching the model about the English language (and the words we use).

