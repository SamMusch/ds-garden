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
_kMDItemDisplayNameWithExtensions: 01-LLMs-RAG.md
ai_abstract: null
ai_key_terms: []
aliases: null
children: 0
created: '2025-10-04'
cssclasses: null
grandchildren: 0
kMDItemContentCreationDate: 2025-08-08 20:55:35 +0000
kMDItemContentCreationDate_Ranking: 2025-08-08 00:00:00 +0000
kMDItemContentModificationDate: 2025-10-04 15:51:54 +0000
kMDItemContentType: net.daringfireball.markdown
kMDItemContentTypeTree: (
kMDItemDateAdded: 2025-08-08 21:16:13 +0000
kMDItemDocumentIdentifier: '176544'
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
kMDItemInterestingDate_Ranking: 2025-09-30 00:00:00 +0000
kMDItemLastUsedDate: 2025-09-30 17:04:51 +0000
kMDItemLastUsedDate_Ranking: 2025-09-30 00:00:00 +0000
kMDItemUseCount: '34'
kMDItemUsedDates: (
modified: '2025-10-04'
published: true
reading_time: 0.9
source_file: 01-LLMs-RAG.md
tags: null
title: 01 LLMs RAG
word_count: 189
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