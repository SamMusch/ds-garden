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
_kMDItemDisplayNameWithExtensions: 05-Evaluating.md
ai_abstract: null
ai_key_terms: []
aliases: null
children: 0
created: '2025-11-28'
cssclasses: null
grandchildren: 0
kMDItemContentCreationDate: 2025-10-07 22:23:24 +0000
kMDItemContentCreationDate_Ranking: 2025-10-07 00:00:00 +0000
kMDItemContentModificationDate: 2025-11-28 18:54:54 +0000
kMDItemContentType: net.daringfireball.markdown
kMDItemContentTypeTree: (
kMDItemDateAdded: 2025-10-07 22:23:24 +0000
kMDItemDocumentIdentifier: '222799'
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
kMDItemInterestingDate_Ranking: 2025-11-28 00:00:00 +0000
modified: '2025-11-28'
published: true
reading_time: 3.5
source_file: 05-Evaluating.md
tags: null
title: 05 Evaluating
word_count: 699
---

## TL;DR

```mermaid
flowchart LR
  %% Nodes
  QS[Quality Scores]
  EM[Evaluation Metrics]
  FW[Frameworks]
  BM[Benchmarks]
  RA[Required Abilities]
  GT[Ground Truth Data]
  SYS[RAG Systems]

  %% Edges (functional dependencies)
  QS -- quantified_by --> EM
  RA -- validated_by --> BM
  EM -- implemented_in --> FW
  FW -- used_with --> BM
  BM -- compare --> SYS
  QS -- influence --> RA
  EM -- depend_on --> GT
  FW -- generate --> GT
```

!!! sam
    **evaluation | info flow**:

    1. ***[[#5.1-Quality-Scores]]*** define what to measure

    2. ***[[#5.2-Evaluation-Metrics]]*** quantify those meanings

    3. ***[[#5.3-Frameworks]]*** implement the measurements

    4. ***[[#5.4-Benchmarks]]*** provide standardized datasets for comparison

    5. ***[[#5.5-Abilities]]*** represent RAG capabilities validated through benchmarks

    Use *frameworks* and *evaluation metrics* to evaluate the *3 quality scores* and *4 abilities*. Compare against *benchmarks*.


<div class="hb-row" markdown="block">
  <div class="hb-col" markdown="block">
***Quality Scores*** (Goals)

- <abbr title="For a given query, how relevant is the retrieved info from KB?">Context relevance</abbr>

- <abbr title="Is LLM using the retrieved info?">Answer faithfulness</abbr>

- <abbr title="For a given query, how relevant is the system's answer?">Answer relevance</abbr>
  </div>
  <div class="hb-col" markdown="block">
***Evaluation Metrics*** (Formulas)

- Retrieval Metrics

- RAG-Specific Metrics (Quality Scores)
  </div>
  <div class="hb-col" markdown="block">
***Frameworks*** (Tools)

- <abbr title="Retrieval-Augmented Generation Assessment">RAGAs</abbr>

- <abbr title="Automated RAG evaluation system">ARES</abbr>

- TruLens / DeepEval / RAGChecker

- Ground Truth Generation
  </div>
  <div class="hb-col" markdown="block">
***Benchmarks*** (Datasets)

- <abbr title="Examples include SQuAD | HotpotQA | BEIR">Classical QA</abbr>

- <abbr title="Examples include RGB | Multi-hop RAG | CRAG">RAG-Specific</abbr>

- <abbr title="Examples include MedRAG | CRUD-RAG | FeB4RAG">Domain-Specific</abbr>
  </div>
  <div class="hb-col" markdown="block">
***Required abilities*** (Properties)

- <abbr title="Among KB docs related to Q, only want actionable ones.">Noise robustness</abbr>

- <abbr title="If KB doesn't have relevant info, don't hallucinate.">Negative rejection</abbr>

- <abbr title="If multiple KB docs, can RAG integrate?">Info integration</abbr>

- <abbr title=" If info in KB is inaccurate, can RAG address it?">Counterfactual robustness</abbr>
  </div>
</div>


---

### 5.1-Quality-Scores
!!! sam
    **Definition**: Evaluate R & G outputs.

    **Relations**:

    - `influences` ⟶ Frameworks        

    - `depends_on` ⟶ R & G Components


[TrueEra's proposed evaluation](https://learning.oreilly.com/api/v2/epubs/urn:orm:book:9781633435858/files/OEBPS/Images/CH02_F07_Kimothi.png) (where Q = user query, R = retrieved info/context, G = generated response)
<div class="hb-row" markdown="block">
  <div class="hb-col" markdown="block">
*Context Relevance* compares

1. (True) Q

2. R
  </div>
  <div class="hb-col" markdown="block">
*Groundedness* (answer faithfulness) compares

1. R

2. G
  </div>
  <div class="hb-col" markdown="block">
*Answer relevance* compares

1. G

2. (True) Q
  </div>
</div>


**In greater detail**:
<div class="hb-row" markdown="block">
  <div class="hb-col" markdown="block">
*Context Relevance*

- **Def**: Degree of alignment between Q & R.

- **Metrics**: Precision, Recall.

- **Evaluated By**: Human annotation, semantic similarity, frameworks.
  </div>
  <div class="hb-col" markdown="block">
*Groundedness* (Answer Faithfulness)

- **Def**: Degree to which G is factually supported by R.

- **Inverse Metric**: Hallucination Rate.

- **Related Metric**: <abbr title="How much R info appears in G">Coverage</abbr>
  </div>
  <div class="hb-col" markdown="block">
*Answer Relevance*

- **Def**: How well G addresses Q semantically.

- **Metric Type**: <abbr title="e.g., cosine similarity of synthetic vs. original questions">Similarity-based</abbr>
  </div>
</div>


### 5.2-Evaluation-Metrics
!!! sam
    **Definition**: Quantitative functions measuring RAG performance.

    **Relations**:

    - `implemented_in` ⟶ Frameworks

    - `used_in` ⟶ Benchmarks


!!! sam
    2 categories of evaluation metrics

    **Retrieval Metrics**

    - *Accuracy*: Correct retrieval proportion.

    - *Precision*: Relevance ratio among retrieved docs.

    - *Precision@k*: Precision among top-k retrieved results.

    - *Recall*: Coverage of all relevant docs.

    - *F1-Score*: Harmonic mean of Precision and Recall.

    - *Mean Reciprocal Rank (MRR)*: Rank position of first relevant result.

    - *Mean Average Precision (MAP)*: Combined precision over multiple cutoff points.

    - *nDCG*: Rank quality weighted by graded relevance.


    **RAG-Specific Metrics**

    - *Context Relevance*

    - *Answer Faithfulness*

        - *Hallucination Rate*

        - *Coverage Score*

    - *Answer Relevance*


### 5.3-Frameworks
!!! sam
    **Definition**: Tools that automate evaluation and data generation.

    **Relations**:

    - `implements` ⟶ Evaluation Metrics

    - `supports` ⟶ Ground Truth Generation

    - `used_with` ⟶ Benchmarks


    **Subclasses**:

    - <abbr title="Retrieval-Augmented Generation Assessment">RAGAs</abbr>

    - <abbr title="Automated RAG evaluation system">ARES</abbr>

    - Others: TruLens, DeepEval, RAGChecker


### 5.4-Benchmarks
!!! sam
    **Definition**: Standardized datasets and tasks to compare RAG systems.


    **Subclasses**:

    - **Classical**: SQuAD, HotpotQA, BEIR

    - **RAG-Specific**

        - *RGB*: For noise robustness, negative rejection, counterfactual robustness.

        - *Multi-hop RAG*: For multi-document reasoning. (Inference, Comparison, Temporal, Null queries).

        - *CRAG*: For factual QA with diverse question types


### 5.5-Abilities
!!! sam
    **Definition**: Functional capacities that determine robustness and utility of RAG systems.

    **Subclasses**:

        - *Noise Robustness*: Can ignore irrelevant docs. (*Relates to R.*)

        - *Negative Rejection*: Can respond “I don’t know” when facing insufficient context. (*Relates to G.*)

        - *Information Integration*: Can synthesize multiple sources.

        - *Counterfactual Robustness*: Can reject incorrect/contradictory context.

    **Additional required abilities**: *Latency*, *Bias & Toxicity*, *Robustness*