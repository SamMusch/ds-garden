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
_kMDItemDisplayNameWithExtensions: 00-RAG.md
ai*abstract: null
ai*key*terms: []
ai_abstract: null
ai_key_terms: []
aliases: null
children: 0
created: '2025-10-12'
cssclasses: null
grandchildren: 0
kMDItemContentCreationDate: 2025-10-07 22:23:24 +0000
kMDItemContentCreationDate*Ranking: 2025-10-07 00:00:00 +0000
kMDItemContentCreationDate_Ranking: 2025-10-07 00:00:00 +0000
kMDItemContentModificationDate: 2025-10-12 14:06:38 +0000
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
kMDItemInterestingDate_Ranking: 2025-10-12 00:00:00 +0000
modified: '2025-10-12'
published: true
reading*time: 1.1
reading_time: 0.9
source*file: 00-RAG-Ontology.md
source_file: 00-RAG.md
tags: null
title: 00 RAG
word*count: 211
word_count: 190
---

My Streamlit app: [Streamlit](https://smllmcode.streamlit.app/)

These notes come from *A Simple Guide to RAG* by by Abhinav Kimothi. ([Oreilly](https://learning.oreilly.com/library/view/a-simple-guide/9781633435858/OEBPS/Text/part-1.html), [Github](https://github.com/abhinav-kimothi/A-Simple-Guide-to-RAG), based on [arXiv](https://arxiv.org/abs/2005.11401)). This text uses RAG to improve upon LLM, and uses LangChain as an orchestration framework.

!!! sam
    **RAG**:

    - _retrieval_: adds info from external data

    - _augmented_: provide to LLM

    - _generation_: improve LLM's result

    **RAG** purpose: Enhance accuracy & relevance of LLMs.



!!! sam
    My acronyms:

    | Symbol | Term           | Purpose              |
    | ------ | -------------- | -------------------- |
    | I      | Indexing       | Create & maintain KB |
    | R      | Retrieve       | Get from KB          |
    | A      | Augment        | Provide to LLM       |
    | G      | Generation     | Gen KB + LLM         |



    | Symbol | Term           | Purpose              |
    | ------ | -------------- | -------------------- |
    | KB     | Knowledge Base | Our docs             |
    | KG     | Knowledge Graphs |              |



### Hierarchies

!!! sam
    2 major *structural hierarchies*:

    - **Layer hierarchy** ⟶ architectural (how the system *is built*)

    - **Pipeline hierarchy** ⟶ functional (what the system *does*)



#### Layers Hierarchy

!!! sam
    - Critical Layers

        - *Data*

        - *Model*

        - *Model Deployment*

        - *App Orchestration*

    - Essential Layers

        - *Prompt*

        - *Evaluation*

        - *Monitoring*

        - *Security & Privacy*

        - *Caching*

    - Enhancement Layers

        - *Human-in-the-Loop*

        - *Cost Optimization*

        - *Explainability*

        - *Collaboration & Experimentation*



#### Pipeline Hierarchy
!!! sam
    - Indexing Pipeline

        - ***load***:

            - *Connect* to source

            - *Extract* / parse

            - *Metadata* review

            - *Transform* / clean

        - ***chunk***

            - *Divide*

            - *Merge*

            - *Overlap*

        - ***embed***

        - ***store***

    - Generating Pipeline

        - R | *retrieving*

        - A | *prompt managing (augmenting)*

        - G | *LLM constructing (generating)*






<img src="https://i.imgur.com/clHMu8p.png" alt="Indexing Pipeline" width="50%">
<img src="https://i.imgur.com/Ab8rMqF.png" alt="Generation Pipeline" width="50%">