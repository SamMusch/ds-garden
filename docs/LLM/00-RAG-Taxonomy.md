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
_kMDItemDisplayNameWithExtensions: 00-RAG-Taxonomy.md
ai_abstract: null
ai_key_terms: []
aliases: null
children: 0
created: '2025-10-04'
cssclasses: null
grandchildren: 0
kMDItemContentCreationDate: 2025-08-11 18:27:11 +0000
kMDItemContentCreationDate_Ranking: 2025-08-11 00:00:00 +0000
kMDItemContentModificationDate: 2025-10-04 15:51:54 +0000
kMDItemContentType: net.daringfireball.markdown
kMDItemContentTypeTree: (
kMDItemDateAdded: 2025-08-11 18:27:23 +0000
kMDItemDocumentIdentifier: '176613'
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
kMDItemInterestingDate_Ranking: 2025-10-04 00:00:00 +0000
modified: '2025-10-04'
published: true
reading_time: 0.3
source_file: 00-RAG-Taxonomy.md
tags: null
title: 00 RAG Taxonomy
word_count: 63
---

**Textbook**: A Simple Guide to RAG | [Oreilly](https://learning.oreilly.com/library/view/a-simple-guide/9781633435858/OEBPS/Text/part-1.html) | [Github](https://github.com/abhinav-kimothi/A-Simple-Guide-to-RAG)

**Terms & Symbols**

- **Indexing Pipeline**: create & maintain KB

- **Generation Pipeline**: enable interaction with LLM.



| Symbol | Term           |                      |
| ------ | -------------- | -------------------- |
| I      | Indexing       | Create & maintain KB |
| KB     | Knowledge Base | Our docs             |
| R      | Retrieve       | Get from KB          |
| A      | Augment        | Provide to LLM       |
| G      | Generation     | Gen KB + LLM         |


### Hierarchies

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