---
published: true
---

**Taxonomy**

Evaluation aspects

- Quality scores

	1. <abbr title="For a given query, how relevant is the retrieved info from KB? (calcs precision & recall)">Context relevance</abbr>

	2. Answer faithfulness (groundedness)

	3. Answer relevance

- Abilities

    1. Noise robustness

    2. Negative rejection

    3. Info integration

    4. Counterfactual robustness

How?

- Frameworks

    - RAGAs

    - ARES

- Benchmarks

    - RGB

    - Multi-hop RAG 

    - CRAG




---



R & G components produce outputs that can be evaluated. I & A do not.

3 `quality scores` (evaluating R & G components. I & A don't produce output.)

- _Context relevance_: For a given query, how relevant is the retrieved info from KB? (calcs precision & recall)

- _Answer faithfulness (aka groundedness)_: Is LLM using the retrieved info?

- _Answer relevance_: For a given query, how relevant is the system's answer?

4 `abilities` (overall system)

- _Noise robustness_: Among KB docs related to Q, only want actionable ones.

- _Negative rejection_: If KB doesn't have relevant info, don't hallucinate.

- _Info integration_: If multiple KB docs, can RAG integrate?

- _Counterfactual robustness_: If info in KB is inaccurate, can RAG address it?
Other aspects include _latency_, _ethical considerations_ (bias/toxicity), and _robustness_ (diverse queries).


Evaluating the `quality scores` and `abilities`:

- _Frameworks_

    - **are**: tools aiding evaluation

    - **purpose**: provide structured environment for testing aspects of RAG

    - **include**:

        - RAGAs | Retrieval-Augmented Generation Assessment

        - ARES | Automated RAG evaluation system

- _Benchmarks_

    - **are**: standardized datasets & evaluation metrics

    - **purpose**: establish a baseline, ID strengths/weaknesses in specific tasks




RAGAs 

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