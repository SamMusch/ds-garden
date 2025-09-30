---
published: true
---

```
Note Topics: RAG's definition and purpose.
```


!!! sam
    **RAG**:

    - _retrieval_: adds info from external data

    - _augmented_: provide to LLM

    - _generation_: improve LLM's result



!!! sam
    **LLMs** (as a type of model)

    - **are**: next-token <abbr title="Subset of unsupervised learning. Model creates its own labels from raw, unlabeled data.">self-supervised</abbr> probabilistic models

    - **do**: look at text, find statistical patterns, then estimate a token distribution and generate.

    - **how**: pretraining paradigms of <abbr title="causal language modeling">CLM</abbr> (next-token) or <abbr title="masked language modeling">MLM</abbr> (fill-in-the-blank)

    - **challenges**: knowledge cut-off, data/compute limits, hallucinations, bias, context-length



!!! sam
    **Memory**: LLM x RAG models use memory for generation

    - *Parametric*: info learned during LLM training

    - *Non-parametric*: info learned afterwards from RAG



!!! sam
    **Pipeline** of LLM x RAG

    1. Train LLM. Get *parametric* memory

    2. Create *non-parametric* memory (external knowledge base)

    3. Retriever fetches info from KB

    4. Add KB info to prompt

    5. Send augmented prompt to LLM

    6. LLM generates response



!!! sam
    **transformers**

    - **are**: NN architecture based on attention mechanisms

    - **do**: let LLMs store & present knowledge