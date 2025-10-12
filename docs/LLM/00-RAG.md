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
ai*abstract: null
ai*key*terms: []
aliases: null
children: 0
created: '2025-10-11'
cssclasses: null
grandchildren: 0
kMDItemContentCreationDate: 2025-10-07 22:23:24 +0000
kMDItemContentCreationDate*Ranking: 2025-10-07 00:00:00 +0000
kMDItemContentModificationDate: 2025-10-11 18:34:40 +0000
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
modified: '2025-10-11'
published: true
reading*time: 1.1
source*file: 00-RAG-Ontology.md
tags: null
title: 00 RAG Ontology
word*count: 211
---

!!! sam
    For this doc

    - Ontology ⟶ meaning and relationships

    - Taxonomy ⟶ grouping

    - Hierarchy ⟶ order


**Textbook**: A Simple Guide to RAG | [Oreilly](https://learning.oreilly.com/library/view/a-simple-guide/9781633435858/OEBPS/Text/part-1.html) | [Github](https://github.com/abhinav-kimothi/A-Simple-Guide-to-RAG)


**Terms & Symbols**

| Symbol | Term           | Purpose              |
| ------ | -------------- | -------------------- |
| I      | Indexing       | Create & maintain KB |
| KB     | Knowledge Base | Our docs             |
| R      | Retrieve       | Get from KB          |
| A      | Augment        | Provide to LLM       |
| G      | Generation     | Gen KB + LLM         |




### Hierarchies

2 major *structural hierarchies*:

- **Layer hierarchy** ⟶ architectural decomposition (how the system *is built*)

- **Pipeline hierarchy** ⟶ functional decomposition (what the system *does*)

#### Layers
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


#### Pipeline
!!! sam
    - Indexing Pipeline

        - *loading*

            - *Connect* to source

            - *Extract* & *parse*

            - *Metadata* review

            - *Transform* and clean

        - *splitting (chunking)*

            - *Divide*

            - *Merge*

            - *Overlap*

        - *converting (embedding)*

        - *storing (vector DB)*

    - Generating Pipeline

        - R | *retrieving*

        - A | *prompt managing (augmenting)*

        - G | *LLM constructing (generating)*






<img src="https://i.imgur.com/clHMu8p.png" alt="Indexing Pipeline" width="50%">
<img src="https://i.imgur.com/Ab8rMqF.png" alt="Generation Pipeline" width="50%">