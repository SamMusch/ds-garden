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
_kMDItemDisplayNameWithExtensions: 1.6 Hugging Face Workflows.md
ai_abstract: null
ai_key_terms: []
aliases: null
children: 0
created: '2025-07-18'
cssclasses: null
grandchildren: 0
kMDItemContentCreationDate: 2025-05-20 16:21:19 +0000
kMDItemContentCreationDate_Ranking: 2025-05-20 00:00:00 +0000
kMDItemContentModificationDate: 2025-05-20 16:21:59 +0000
kMDItemContentType: net.daringfireball.markdown
kMDItemContentTypeTree: (
kMDItemDateAdded: 2025-05-20 16:37:27 +0000
kMDItemDocumentIdentifier: '167122'
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
kMDItemInterestingDate_Ranking: 2025-05-20 00:00:00 +0000
kMDItemLastUsedDate: 2025-05-20 17:00:40 +0000
kMDItemLastUsedDate_Ranking: 2025-05-20 00:00:00 +0000
kMDItemUseCount: '8'
kMDItemUsedDates: (
modified: '2025-05-20'
published: true
reading_time: 1.0
source_file: 1.6 Hugging Face Workflows.md
tags: null
title: 1.6 Hugging Face Workflows
word_count: 203
---

[Behind the pipeline](https://huggingface.co/learn/nlp-course/chapter2/2?fw=pt) - steps - [YouTube](https://www.youtube.com/watch?v=1pedAIvTWXk&t=52s)

1. **Preprocessing with a tokenizer**:
   2. Load the tokenizer.
   3. Tokenize input text into tokens and convert to tensors.
4. **Model**:
   5. Load the pretrained model.
   6. Pass the tokenized inputs through the model to get output logits.
7. **Postprocessing the output**:
   8. Convert logits to probabilities using softmax.
   9. Map the probabilities to labels.

Breaking out steps in detail: **Tokenizer**
1. **Tokens** | Split the input into *tokens* (ie words, subwords, punctuation)
2. **Special tokens** | Add special tokens such as "sentence begin".
3. **Input IDs** | Map each token to it's unique ID from that specific pre-trained model. (This is the *checkpoint* which comes out as a *dictionary*.)

Breaking out steps in detail: **Model** ([Image](https://huggingface.co/datasets/huggingface-course/documentation-images/resolve/main/en/chapter2/transformer_and_head.svg))
1. Input from Tokenizer
2. Transformer network
   3. **Embeddings** | convert each unique ID into vector
   4. **Layers** | manipulate vectors using attention mechanism
3. **Hidden states (features)** |
4. **Head** | take high-dimensional vector of hidden states as input, then convert predictions to task-specific output
5. Output for post-processing

