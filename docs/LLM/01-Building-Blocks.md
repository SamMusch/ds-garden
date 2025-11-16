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
_kMDItemDisplayNameWithExtensions: 01-Building-Blocks.md
ai_abstract: null
ai_key_terms: []
aliases: null
children: 0
created: '2025-11-16'
cssclasses: null
grandchildren: 0
kMDItemContentCreationDate: 2025-10-12 15:55:56 +0000
kMDItemContentCreationDate_Ranking: 2025-10-12 00:00:00 +0000
kMDItemContentModificationDate: 2025-11-13 21:47:44 +0000
kMDItemContentType: net.daringfireball.markdown
kMDItemContentTypeTree: (
kMDItemDateAdded: 2025-10-12 15:55:56 +0000
kMDItemDocumentIdentifier: '222795'
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
kMDItemInterestingDate_Ranking: 2025-11-13 00:00:00 +0000
kMDItemLastUsedDate: 2025-09-30 17:04:51 +0000
kMDItemLastUsedDate_Ranking: 2025-09-30 00:00:00 +0000
kMDItemUseCount: '34'
kMDItemUsedDates: (
modified: '2025-11-13'
published: true
reading_time: 1.7
source_file: 01-Building-Blocks.md
tags: null
title: 01 Building Blocks
word_count: 341
---

!!! sam
    Tokens

    - **are**: the fundamental semantic units used in NLP

    - OpenAI suggests one token to be made of four characters or 0.75 words


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

    - **is**: an open source framework developed by Harrison Chase

    - **purpose**: helps build LLM apps

    - **languages**: Python and JavaScript

    - **other uses**: chatbots, document summarizers, synthetic data generation

    - **integrates with**:

        - **LLM providers**: eg OpenAI, Anthropic, Hugging Face

        - **vector store providers**

        - **cloud storage systems**: eg AWS, Google, Azure, SQL & NoSQL databases

        - **APIs**: eg news, weather





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