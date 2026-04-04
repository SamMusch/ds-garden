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
kMDItemContentCreationDate: 2026-01-06 18:13:12 +0000
kMDItemContentModificationDate: 2026-04-04 18:16:23 +0000
kMDItemDateAdded: 2026-01-06 18:13:12 +0000
kMDItemFSFinderFlags: '0'
published: true
reading_time: 2.3
source_file: 00-Building-Blocks.md
tags: null
word_count: 467
---

This doc contains foundational **concepts** applied in the rest of the docs.

Sources

- **Textbook**: *A Simple Guide to RAG* by Abhinav Kimothi. ([Oreilly](https://learning.oreilly.com/library/view/a-simple-guide/9781633435858/OEBPS/Text/part-1.html), [Github](https://github.com/abhinav-kimothi/A-Simple-Guide-to-RAG), based on [arXiv](https://arxiv.org/abs/2005.11401))

- **Documentation**: [LangChain](https://docs.langchain.com/oss/python/langchain/overview), [LangGraph](https://docs.langchain.com/oss/python/langgraph/overview), [LangSmith](https://docs.langchain.com/langsmith/home)

---

!!! sam
    Tokens

    - **are**: the fundamental semantic units used in NLP

    - 1 token ~ 4 characters (OpenAI suggestion)


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

    2. I | Create *non-parametric* memory (external KB)

    3. R | Fetch info from KB

    4. A | Add KB info to prompt, send to LLM

    5. G | LLM generates response


!!! sam
    **transformers**

    - **are**: NN architecture based on attention mechanisms

    - **do**: let LLMs store & present knowledge



### LangChain

!!! sam
    LangChain

    - **is**: a modular framework

    - **purpose**: helps build LLM apps

    - **languages**: Python, JavaScript

    - **other uses**: chatbots, document summarizers, synthetic data generation

    - **integrates with**:

        - **LLM providers**

        - **vector store providers**

        - **cloud storage systems**: eg AWS, SQL & NoSQL databases

        - **APIs**: eg news, weather


<div class="hb-row" markdown="block">
  <div class="hb-col" markdown="block">
LangChain

- **is**: a modular *framework*

- **does**: provides building blocks to implement LLM apps
  </div>
  <div class="hb-col" markdown="block">
LangGraph

- **is**: a graph-based *orchestration engine*

- **does**: enables complex workflows for LLM-powered systems
  </div>
  <div class="hb-col" markdown="block">
LangSmith

- **is**: a platform

- **does**: enables observability, debugging, evaluation, and monitoring
  </div>
</div>


!!! sam
    Analogy:

    - *LangChain*: individual workers doing straightforward tasks

    - *LangGraph*: a coordinated team with a manager who oversees complex workflows

    - *LangSmith*: quality control




### Similarity

!!! sam
    Similar pieces of text lie close to each other in space.

    similarity calculations | common measures

    - *cosine similarity*: use **angles**. (0 deg = similar, 90 deg = unrelated, 180 deg = opposite)

    - *euclidean distance*: use **distance**



### Embedding

!!! sam
    ***embedding* (process)**: converting raw data (chunks) ⟶ numerical *vectors*. Enables similarity search based on semantics, not just keywords.


    **textbook example**: We have 3 words. We want to find their **similarities** in 2D space.

    **data**: `dog`, `bark`, `fly`
    **similarities** (2D):

    - **x-axis**: *grammatically* ---> `fly` & `bark` are close (verbs)

    - **y-axis**: *contextually* ---> `dog` & `bark` are close

    ![](https://i.imgur.com/B6PJCBN.png)