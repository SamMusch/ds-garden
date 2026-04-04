---
Function: null
Objective: null
Quality: null
QualityComment: null
ReviewFreq: null
ai_abstract: null
ai_key_terms: []
children: 0
grandchildren: 0
kMDItemContentCreationDate: 2026-01-06 18:13:12 +0000
kMDItemContentModificationDate: 2026-04-04 18:16:24 +0000
kMDItemDateAdded: 2026-01-06 18:13:12 +0000
kMDItemFSFinderFlags: '0'
published: true
reading_time: 0.5
source_file: MLAI.md
tags: null
word_count: 100
---

<div class="hb-row" markdown="block">
  <div class="hb-col" markdown="block">
**Amazon**

- Augmented AI

- ***[[MLAI#Bedrock]]***

- CodeGuru  

- Comprehend

- DevOps Guru

- Forecast

- Fraud Detector

- Comprehend Medical

- Kendra

- Lex

- Lookout for Equipment

- Lookout for Metrics

- Lookout for Vision

- Monitron

- PartyRock

- Personalize

- Polly

- Q

- Rekognition

- SageMaker AI

- Textract

- Transcribe

- Translate
  </div>
  <div class="hb-col" markdown="block">
**AWS**

- DeepComposer

- DeepRacer

- HealthLake

- HealthScribe

- Panorama
  </div>
</div>



### Bedrock
!!! sam
    ***Bedrock*** provides an API to access AI models.

    **Execution vs Inference**

    - *Docker*/*ECS* decide where your *application code* runs.

    - ***Bedrock*** decides where the *model inference* runs.

    **Local vs Managed**

    - *Ollama*: “Run models _next to my code_ (on my laptop or container).”

    - ***Bedrock***: “Run models _outside my code_ (AWS runs them; I call an API).”