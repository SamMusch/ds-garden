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
_kMDItemDisplayNameWithExtensions: 04-GENERATING.md
ai_abstract: null
ai_key_terms: []
aliases: null
children: 0
created: '2025-10-12'
cssclasses: null
grandchildren: 0
kMDItemContentCreationDate: 2025-10-07 22:23:24 +0000
kMDItemContentCreationDate_Ranking: 2025-10-07 00:00:00 +0000
kMDItemContentModificationDate: 2025-10-12 14:06:38 +0000
kMDItemContentType: net.daringfireball.markdown
kMDItemContentTypeTree: (
kMDItemDateAdded: 2025-10-07 22:23:24 +0000
kMDItemDocumentIdentifier: '222798'
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
kMDItemInterestingDate_Ranking: 2025-10-11 00:00:00 +0000
kMDItemLastUsedDate: 2025-10-11 18:59:16 +0000
kMDItemLastUsedDate_Ranking: 2025-10-11 00:00:00 +0000
kMDItemUseCount: '45'
kMDItemUsedDates: (
kMDItemUserModifiedDate: (
kMDItemUserModifiedUserHandle: (
modified: '2025-10-12'
published: true
reading_time: 2.3
source_file: 04-GENERATING.md
tags: null
title: 04 GENERATING
word_count: 467
---

## Summary
!!! sam
    **Generation pipeline**: Tie together user Q with our **indexing pipeline**.

    1. **R** | Retrieve info from KB based on Q.

    2. **A** | Augment Q with fetched info, create prompt for LLM.

    3. **G** | Generate response via LLM.


## 1. Retrieval
**Process**: Take Q ⟶ find matching docs ⟶ extract relevant info ⟶ return a list of matching documents (stored embeddings) as output

### Retrieval methods
LangChain has abstracted these algorithms ⟶ retrievers.
!!! sam
    **TF-IDF**: keyword-based, uses <abbr title="term frequency">TF</abbr> and <abbr title="inverse document frequency">IDF</abbr> to score words.

    **BM25**: probabilistic variant of TF-IDF. Adds length normalization & saturation effects so longer documents aren’t unfairly favored.

    **Static Word Embeddings**: vector-based semantics (fixed meaning per word)

    * Represents words as dense vectors (e.g., `Word2Vec`, `GloVe`)

    **==Contextual Embeddings==**: context-aware semantics (meanings shift with context)

    * Handles polysemy & nuanced meanings

    * Embeddings from models (e.g., `BERT`, `GPT`)


### Other popular retrievers
!!! sam
    1. **Vector stores and DBs**:

        1. Combine `FAISS` with contextual embedding model

        2. `PineCone` / `Milvus` / `Weaviate` combine dense retrieval methods ⟶ provide hybrid search functionality.

    2. **Cloud providers**: Includes infrastructure, APIs, and tools for info retrieval

    3. **Web info**: Connect to Wikipedia / Arxiv / AskNews / etc. See [Langchain](https://python.langchain.com/v0.2/docs/integrations/retrievers/) .


## 2. Augmentation
We can control **prompt engineering** to best augment Q with retrieved info.

| Prompting Technique      | Description                                                          |
| ------------------------ | -------------------------------------------------------------------- |
| *Contextual*             | “Answer based on only the context provided below.”                   |
| *Controlled generation*  | "Say 'I don’t know' when provided context doesn't have needed info." |
| *Few-shot*               | Provide examples in prompt                                           |
| *Chain-of-thought (CoT)* | Provide intermediate reasoning steps                                 |

## 3. Generation

For G, the key decision is the LLM to use. There are 3 themes to consider.

### 3.1 Foundation v fine-tuned
!!! sam
    **Foundation models**: massive pre-trained LLMs.

    - **are**: autoregressive next-token prediction models

    - **how**: trained via unsupervised learning

    - **benefits**: Deployment speed, resource efficiency

    **SFT** (supervised fine-tuning): 

    - **is**: a process to adjust foundation model's weights for specific tasks

    - **how**: start with a pre-trained model ⟶ prepare labelled dataset ⟶ train model. This adjusts the model parameters to perform better on the given task.

    - **benefits**: Domain specialization, retrieval integration w KB, response customization, output control


### 3.2 Open source v proprietary
!!! sam
    **Open source**: more flexible, but need infrastructure and maintenance.

    Criteria

    - *Customization*: Open source allows (1) deep integration with custom retrievers (2) control over fine-tuning

    - *Ease of use*:  Open source is more difficult. Proprietary can offer prebuilt RAG solutions.

    - *Deployment flexibility*: Open source are customizable(private cloud, on-premises)

    - *Cost*: Open source has higher up-front fixed costs, lower variable costs over time.


### 3.3 Model size
!!! sam
    Small models..

    pros:

    - Face fewer *resource constraints*

    - Are easier to *deploy*

    cons:

    - Have limited *reasoning capability* (rely heavily on KB)

    - Could struggle with *context windows* & diverse queries.