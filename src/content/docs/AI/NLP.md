---
Quality: ★
QualityComment: Why isn't this a 10?
Objective: Reference
Function: Hierarchy
ReviewFreq: 'Weekly, 1-Month, 2-Month, 3-Month'
Due: null
HoursDone: 3
HoursRemain: 11
CoverImage: null
tags:
  - ai_
TimeSpent: null
TimeSpent2: null
title: NLP
---

Back/Outgoing Links
```dataview
list from [[]] and !outgoing([[]])
```


Deeper
- [[HuggingFace NLP]]

### Methods
`What are the most common model types (and corresponding examples) within NLP?`

**NLP methods**
1. **Symbolic (Rule-Based):**
   Not really used anymore because of the advance of LLMs. Used to be used for:
   - Small data
   - Tokenization (pre-processing in NLP pipelines)
   - Knowledge extraction (pre-processing output of NLP pipelines)

2. **ML (Statistical & Neural)**
   

**Breaking out the "ML" methods**

1. **ML / DL:**
   - **RNNs**: Sequential data in sentiment analysis
   - **LSTMs**: Same as above, better for long-range dependencies.
2. **Transformer Models:**
   - **Description:** Transformer architectures have gained widespread adoption in NLP due to their attention mechanisms.
   - **Example:** BERT (Bidirectional Encoder Representations from Transformers) for pre-training language representations.
3. **Sequence-to-Sequence Models:**
   - **Description:** Sequence-to-sequence models process variable-length input sequences and generate variable-length output sequences.
   - **Example:** Used for machine translation, summarization, and question answering. Notable model: Google's GNMT (Google Neural Machine Translation).
4. **Transfer Learning Models:**
   - **Description:** Transfer learning models pre-train on large datasets and fine-tune for specific tasks.
   - **Example:** ULMFiT (Universal Language Model Fine-tuning) for transfer learning in NLP.
5. **Attention Mechanism Models:**
   - **Description:** Models incorporating attention mechanisms to focus on different parts of input sequences.
   - **Example:** Transformer-based models like BERT, GPT, and T5.
6. **Graph Neural Networks (GNNs):**
   - **Description:** GNNs handle data with complex relationships, suitable for tasks involving graphs.
   - **Example:** GNNs applied to tasks like semantic parsing and knowledge graph completion.
