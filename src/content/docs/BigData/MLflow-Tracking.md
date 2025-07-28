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
_kMDItemDisplayNameWithExtensions: MLflow - Tracking.md
ai_abstract: null
ai_key_terms: []
aliases: null
children: 0
created: '2025-07-18'
cssclasses: null
grandchildren: 0
kMDItemContentCreationDate: 2024-11-05 17:40:41 +0000
kMDItemContentCreationDate_Ranking: 2025-02-01 00:00:00 +0000
kMDItemContentModificationDate: 2024-12-27 23:43:24 +0000
kMDItemContentType: net.daringfireball.markdown
kMDItemContentTypeTree: (
kMDItemDateAdded: 2025-02-01 17:16:38 +0000
kMDItemDocumentIdentifier: '97074'
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
kMDItemInterestingDate_Ranking: 2024-12-27 00:00:00 +0000
modified: '2024-12-27'
published: true
reading_time: 0.5
source_file: MLflow - Tracking.md
tags: null
title: MLflow   Tracking
word_count: 90
---

Main page: https://www.mlflow.org/docs/latest/tracking.html#tracking
Quickstart: https://www.mlflow.org/docs/latest/getting-started/intro-quickstart/index.html
- Loaded into databricks: [Databricks notebook](https://community.cloud.databricks.com/#notebook/306626164773736/command/306626164773737)

> Tracks parameters, code versions, metrics, and artifacts.

Concepts:
- **Runs**: Runs are executions of some piece of code (eg, a single `python train.py` execution). Records metadata and artifacts.
- **Experiments**: An experiment groups together runs for a specific task.
- **Tracing**: Each "trace" is data that's recorded for future review, debugging, or analysis.