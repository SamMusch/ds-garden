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
_kMDItemDisplayNameWithExtensions: AutoEncoding.md
ai_abstract: null
ai_key_terms: []
aliases: null
children: 0
created: '2026-03-20'
cssclasses: null
grandchildren: 0
kMDItemContentCreationDate: 2025-01-20 18:48:33 +0000
kMDItemContentCreationDate_Ranking: 2025-05-19 00:00:00 +0000
kMDItemContentModificationDate: 2026-03-20 21:56:13 +0000
kMDItemContentType: net.daringfireball.markdown
kMDItemContentTypeTree: (
kMDItemDateAdded: 2025-05-19 18:46:56 +0000
kMDItemDocumentIdentifier: '627730'
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
kMDItemInterestingDate_Ranking: 2025-03-22 00:00:00 +0000
kMDItemLastUsedDate: 2025-03-22 15:42:13 +0000
kMDItemLastUsedDate_Ranking: 2025-03-22 00:00:00 +0000
kMDItemUseCount: '10'
kMDItemUsedDates: (
modified: '2026-03-20'
published: true
reading_time: 0.9
source_file: AutoEncoding.md
tags: null
title: AutoEncoding
word_count: 188
---

### Deep Learning / AutoEncode

Fundamental challenges of ML that deep learning is addressing

 - Universality Theorem - `correct functional form` - can do with any function with 1 hidden layer

 - Representation Learning - `correct features`

Understand how deep learning methods learn and model hierarchies of representations.

How unsupervised deep learning is conducted, & why it is offers fundamentally different value than other forms of deep learning

Know what these models are optimizing

 - Optimize the layers in between the input and output

Be able to articulate what are the main ideas of sparse coding and (stacked) autoencoders.

 - similar to PCA - taking sparse and finding new `bases` that rep features from train

 - don't need to retain all training - just `base` matrix and the weights

   - maybe race doesn't matter on its own, but race * age does


Notes

- Instead of having a small set of neurons in the final layer, we are looking to map the original neurons back to themselves (encode and then decode)

- We are looking to take advantage of the feature selection that occurs with neural networks

- Encode to learn features, decode to learn form

- Autoencoder + limited neurons in hidden = similar to PCA