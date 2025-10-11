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
_kMDItemDisplayNameWithExtensions: 00-RAG-Ontology.md
ai_abstract: null
ai_key_terms: []
aliases: null
children: 0
created: '2025-10-11'
cssclasses: null
grandchildren: 0
kMDItemContentCreationDate: 2025-10-07 22:23:24 +0000
kMDItemContentCreationDate_Ranking: 2025-10-07 00:00:00 +0000
kMDItemContentModificationDate: 2025-10-11 18:34:40 +0000
kMDItemContentType: net.daringfireball.markdown
kMDItemContentTypeTree: (
kMDItemDateAdded: 2025-10-07 22:23:24 +0000
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
kMDItemInterestingDate_Ranking: 2025-10-11 00:00:00 +0000
modified: '2025-10-11'
published: true
reading_time: 1.1
source_file: 00-RAG-Ontology.md
tags: null
title: 00 RAG Ontology
word_count: 211
---

```
For this doc

- Ontology ⟶ meaning and relationships

- Taxonomy ⟶ grouping

- Hierarchy ⟶ order

```

**Textbook**: A Simple Guide to RAG | [Oreilly](https://learning.oreilly.com/library/view/a-simple-guide/9781633435858/OEBPS/Text/part-1.html) | [Github](https://github.com/abhinav-kimothi/A-Simple-Guide-to-RAG)

**Terms & Symbols**

| Symbol | Term           | Purpose              |
| ------ | -------------- | -------------------- |
| I      | Indexing       | Create & maintain KB |
| KB     | Knowledge Base | Our docs             |
| R      | Retrieve       | Get from KB          |
| A      | Augment        | Provide to LLM       |
| G      | Generation     | Gen KB + LLM         |

### Structural Hierarchies

!!! sam
    There are 2 major *structural* hierarchies that organize nearly all aspects of LLM × RAG systems:

    - **Layer hierarchy** ⟶ architectural decomposition (how the system _is built_)

    - **Pipeline hierarchy** ⟶ functional decomposition (what the system _does_)

    (Besides *structural*, there's also 3 *meta-functional* hierarchies (<abbr title="what the system can do">capability</abbr>, <abbr title="what the system knows">knowledge</abbr>, <abbr title="how the system improves itself">evaluation</abbr>)).


#### Layers

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

- Indexing Pipeline

    - _loading_

        - *Connect* to source

        - *Extract* & *parse*

        - *Metadata* review

        - *Transform* and clean

    - _splitting (chunking)_

        - *Divide*

        - *Merge*

        - *Overlap*

    - _converting (embedding)_

    - _storing (vector DB)_

- Generating Pipeline

    - _retrieving_

    - _prompt managing (augmenting)_

    - _LLM constructing (generating)_