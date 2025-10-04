---
published: true
---

Use *frameworks* and *benchmarks* to evaluate the *3 quality scores* (for R & G) and *4 abilities* (overall system).

!!! sam
    **Taxonomy**


    Evaluation aspects

    - <abbr title="For evaluating R & G outputs">3 quality scores</abbr>

        1. <abbr title="For a given query, how relevant is the retrieved info from KB? (calcs precision & recall)">Context relevance</abbr>

        2. <abbr title="Is LLM using the retrieved info?">Answer faithfulness (groundedness)</abbr>

        3. <abbr title="For a given query, how relevant is the system's answer?">Answer relevance</abbr>

    - <abbr title="For evaluating overall system">4 abilities</abbr>

        1. <abbr title="Among KB docs related to Q, only want actionable ones.">Noise robustness</abbr>

        2. <abbr title="If KB doesn't have relevant info, don't hallucinate.">Negative rejection</abbr>

        3. <abbr title="If multiple KB docs, can RAG integrate?">Info integration</abbr>

        4. <abbr title=" If info in KB is inaccurate, can RAG address it?">Counterfactual robustness</abbr>

    How?

    - Frameworks

        - <abbr title="Retrieval-Augmented Generation Assessment">RAGAs</abbr>

        - <abbr title="Automated RAG evaluation system">ARES</abbr>

    - Benchmarks

        - <abbr title="Retrieval-augmented generation benchmark">RGB</abbr>

        - Multi-hop RAG 

        - <abbr title="Comprehensive RAG benchmark">CRAG</abbr>


---

### 5.1 Evaluation Aspects
!!! sam
    Evaluation aspects - extra notes:

    - **For the 3 quality scores**: The R & G components produce outputs that can be evaluated, but the I & A do not.

    - **For the 4 abilities**: Other aspects include _latency_, _ethical considerations_ (bias/toxicity), and _robustness_ (diverse queries).


### 5.2 Evaluation Metrics

#### *Retrieval metrics*
!!! sam
    Primary metrics, basic:

    - **Accuracy**: Numerator is **TP** (# of relevant docs retrieved) & **TN** (# of irrelevant docs NOT retrieved). Denominator is total.

    - **Precision**: “Of all the documents that were retrieved, how many were relevant?”

    - **Precision at k**: “Of all the documents that were retrieved in the top k, how many were relevant?”

    - **Recall**: “Of all relevant docs, how many were retrieved?”

    - **F1-score**: balances both the quality and coverage of the retriever

    Primary metrics, advanced:

    - **Mean reciprocal rank** (MRR): "How quickly can the system find a relevant doc & consider the ranking of the results?"

    - **Mean average precision** (MAP): When result ranking is complex but important, provides a single measure of quality across recall levels.

    - **Normalized discounted cumulative gain** (nDCG): evaluates the ranking quality, assigns high scores to relevant docs appearing earlier.


#### *RAG-specific metrics*
!!! sam
    3 **quality score** dimensions to measure R and G.

    - _Context relevance_: For a given query, how relevant is the retrieved info from KB? (calcs precision & recall)

    - _Answer faithfulness (aka groundedness)_: Is LLM using the retrieved info?

        - *answer faithfulness*

        - *hallucination rate*

        - *coverage*

    - _Answer relevance_: For a given query, how relevant is the system's answer?


### 5.3 Frameworks
!!! sam
    _Frameworks_

    - **are**: tools aiding evaluation

    - **purpose**: provide structured environment for testing aspects of RAG


#### *RAGAs*
!!! sam
    Process: 

    1. Create ground truths dataset

        1. Q | Create test queries.

        2. R | (Per test query) Retrieve candidate docs from KB.

        3. G | Gen answer using LLM

    2. Evaluate

        1. Evaluate R | precision, recall, etc

        2. Evaluate G | 3 quality scores

        3. Agg metrics & diagnose

    3. Iterate using evolver module

    4. Monitor in production


### 5.4 Benchmarks

!!! sam
    _Benchmarks_

    - **are**: standardized datasets & evaluation metrics

    - **purpose**: establish a baseline, ID strengths/weaknesses in specific tasks



Top 3:

| BENCHMARK     | APPLICABILITY                                     | TASK       | DATASET                                         | METRICS                                                               |
| ------------- | ------------------------------------------------- | ---------- | ----------------------------------------------- | --------------------------------------------------------------------- |
| RGB           | Robustness of RAG systems                         | Robust QA  | News articles, ChatGPT-generated QA             | Accuracy, rejection rate, error detection rate, error correction rate |
| Multi-hop RAG | RAG apps requiring multi-source synthesis         | Complex QA | HKUST-curated queries                           | Various                                                               |
| CRAG          | Evaluating factual QA with diverse question types | Factual QA | Multiple sources (finance, sports, music, etc.) | Four-class evaluation (perfect, acceptable, missing, and incorrect)   |

Others:

| BENCHMARK         | APPLICABILITY                                                | TASK           | DATASET                             | METRICS                    |
| ----------------- | ------------------------------------------------------------ | -------------- | ----------------------------------- | -------------------------- |
| SQuAD             | General QA tasks, model evaluation on comprehension accuracy | Open domain QA | Stanford Question Answering Dataset | Exact match (EM), F1-score |
| Natural questions | Real-world QA, info retrieval from large corpora             | Open domain QA | Real Google search queries          | F1-score                   |
| HotpotQA          | QA involving multiple documents, complex reasoning tasks     | Multi-hop QA   | Wikipedia-based QA                  | EM, F1-score               |
| BEIR              | Comprehensive IR model evaluation across multiple domains    | info retrieval | Multiple datasets                   | nDCG@10                    |