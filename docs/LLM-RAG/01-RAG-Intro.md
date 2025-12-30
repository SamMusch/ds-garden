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
_kMDItemDisplayNameWithExtensions: 01-RAG-Intro.md
ai*abstract: null
ai*key*terms: []
ai_abstract: null
ai_key_terms: []
aliases: null
children: 0
created: '2025-12-30'
cssclasses: null
grandchildren: 0
kMDItemContentCreationDate: 2025-10-07 22:23:24 +0000
kMDItemContentCreationDate*Ranking: 2025-10-07 00:00:00 +0000
kMDItemContentCreationDate_Ranking: 2025-10-07 00:00:00 +0000
kMDItemContentModificationDate: 2025-12-30 21:14:32 +0000
kMDItemContentType: net.daringfireball.markdown
kMDItemContentTypeTree: (
kMDItemDateAdded: 2025-10-07 22:23:24 +0000
kMDItemDisplayNameWithExtensions: 00-RAG-Ontology.md
kMDItemDocumentIdentifier: '222794'
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
kMDItemInterestingDate*Ranking: 2025-10-11 00:00:00 +0000
kMDItemInterestingDate_Ranking: 2025-12-30 00:00:00 +0000
modified: '2025-12-30'
published: true
reading*time: 1.1
reading_time: 2.2
source*file: 00-RAG-Ontology.md
source_file: 01-RAG-Intro.md
tags: null
title: 01 RAG Intro
word*count: 211
word_count: 434
---

**Overall objective of these notes**: With LangChain as the orchestration framework, improve LLMs by applying a RAG system.

- This folder contains conceptual notes.

- [This repo](https://github.com/SamMusch/llm_code) contains working code.

---

### Intuition behind LLMxRAG

There are 2 sources of info:

- *public* - what LLMs have

- *private* - what LLMs DO NOT have. *RAG* is how we provide this private info to the LLM.

!!! sam
    More technically:
    After applying RAG, the LLM has 2 sources of **memory**:

    - *parametric*: public info LLM already learned

    - *non-parametric*: private documents we provide


!!! sam
    **RAG** stands for retrieval-augmented generation.

    - *retrieval*: pulls our private documents

    - *augmented*: sends to LLM

    - *generation*: use our private documents to respond



Overall, a **LLMxRAG** system's purpose is to enhance an LLM's accuracy & relevance.


---
### Acronyms

!!! sam
    My acronyms, in sequantial order.


    **Indexing Pipeline**

    - `docs` | our internal *documents*, unknown to the LLM

    - `KB` | the *knowledge base* where we store these docs as embeddings

    - `I` | the *indexing pipeline* which prepares info for the generation pipeline


    **Generation (RAG) Pipeline**

    - `Q` | The user's query/prompt.

    - `R` | The *retrieval* process where we pull docs from KB

    - `A` | The *augmentation* where we send R to LLM

    - `G` | The *generation* process where answer Q



### Hierarchies
!!! sam
    2 major *structural hierarchies*:

    - **Layer hierarchy** ⟶ architectural (how the system *is built*)

    - **Pipeline hierarchy** ⟶ functional (what the system *does*)


#### Hierarchy 1: Layers
See [[LLM-RAG/07-RAG-Ops|07-RAG-Ops]]
<div class="hb-row" markdown="block">
  <div class="hb-col" markdown="block">
**Critical Layers**

- *Data*

- *Model*

- *Model Deployment*

- *App Orchestration*
  </div>
  <div class="hb-col" markdown="block">
**Essential Layers**

- *Prompt*

- *Evaluation*

- *Monitoring*

- *Security & Privacy*

- *Caching*
  </div>
  <div class="hb-col" markdown="block">
**Enhancement Layers**

- *Human-in-the-Loop*

- *Cost Optimization*

- *Explainability*

- *Collaboration & Experimentation*
  </div>
</div>


#### Hierarchy 2: Pipelines
See [[LLM-RAG/03-INDEXING|03-INDEXING]] and [[LLM-RAG/04-GENERATING|04-GENERATING]]
<div class="hb-row" markdown="block">
  <div class="hb-col" markdown="block">
Indexing Pipeline

- ***load***: *Connect* ⟶ *Extract* ⟶ *Metadata* ⟶ *Transform*

- ***chunk***: *Divide* ⟶ *Merge* ⟶ *Overlap*

- ***embed***

- ***store***
  </div>
  <div class="hb-col" markdown="block">
Generating Pipeline

- ***R*** | *retrieving*

- ***A*** | *prompt managing (augmenting)*

- ***G*** | *LLM constructing (generating)*
  </div>
</div>


<div class="hb-row" markdown="block">
  <div class="hb-col" markdown="block">
<img src="https://i.imgur.com/clHMu8p.png" alt="Indexing Pipeline">
  </div>
  <div class="hb-col" markdown="block">
<img src="https://i.imgur.com/Ab8rMqF.png" alt="Generation Pipeline">
  </div>
</div>


---

## Footnotes
Images from textbook:

- **Hierarchy 1**: [Layers](https://learning.oreilly.com/api/v2/epubs/urn:orm:book:9781633435858/files/OEBPS/Images/CH07_F06_Kimothi.png) (just the *critical layers*)

- **Hierarchy 2**: [Pipelines](https://learning.oreilly.com/api/v2/epubs/urn:orm:book:9781633435858/files/OEBPS/Images/CH07_F01_Kimothi.png)


!!! sam
    RAG system analogy

    - **Pipelines** (*assembly line*)

    - **System-level components** (*quality inspector*)

    - **RAGOps infrastructure / `layers`** (*electricity in factory*)



!!! sam
    Ch 9 - dev framework

    6 stages:

    1. *Initiation*: gather reqs, design architecture

    2. *Design*: I & G pipelines

    3. *Development*: develop pipelines, create prototype for evaluation

    4. *Evaluation*: assess components & system performance

    5. *Deployment*

    6. *Maintenance*: track & improve