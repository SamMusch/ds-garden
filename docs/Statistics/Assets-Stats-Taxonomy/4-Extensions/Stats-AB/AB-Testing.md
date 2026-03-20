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
_kMDItemDisplayNameWithExtensions: AB-Testing.md
ai_abstract: null
ai_key_terms: []
aliases: null
children: 0
created: '2026-03-20'
cssclasses: null
grandchildren: 0
kMDItemAlternateNames: (
kMDItemContentCreationDate: 2024-09-06 16:45:29 +0000
kMDItemContentCreationDate_Ranking: 2024-09-06 00:00:00 +0000
kMDItemContentModificationDate: 2026-03-20 21:56:13 +0000
kMDItemContentType: net.daringfireball.markdown
kMDItemContentTypeTree: (
kMDItemDateAdded: 2025-05-19 18:56:42 +0000
kMDItemDocumentIdentifier: '627706'
kMDItemFSCreatorCode: ''
kMDItemFSFinderFlags: '16'
kMDItemFSHasCustomIcon: (null)
kMDItemFSInvisible: '0'
kMDItemFSIsExtensionHidden: '1'
kMDItemFSIsStationery: (null)
kMDItemFSLabel: '0'
kMDItemFSNodeCount: (null)
kMDItemFSOwnerGroupID: '20'
kMDItemFSOwnerUserID: '502'
kMDItemFSTypeCode: ''
kMDItemInterestingDate_Ranking: 2024-09-23 00:00:00 +0000
kMDItemLastUsedDate: 2024-09-23 17:19:13 +0000
kMDItemLastUsedDate_Ranking: 2024-09-23 00:00:00 +0000
kMDItemUseCount: '11'
kMDItemUsedDates: (
modified: '2026-03-20'
published: true
reading_time: 1.0
source_file: AB-Testing.md
tags: null
title: AB Testing
word_count: 209
---

"To" docs

- [[Power]]

- [[Google-AB-Course]]



### Design Considerations

!!! sam
    [Vid: A/B testing and design](https://campus.datacamp.com/courses/ab-testing-in-r/introduction-to-ab-tests?ex=1) - AB tests can compare: 

    - *Between* groups (ie, differences between *conditions*)

    - *Within* groups (ie, trend between *measures*)

    [Vid: Considerations in A/B testing](https://campus.datacamp.com/courses/ab-testing-in-r/introduction-to-ab-tests?ex=4) - Only use A/B when:

    - Subjects/traffic are meaningful

    - Time available for design and tests

    - Clear hypothesis. 

    A/B test conditions:

    - **Data fluctuations**: Is there anything outside of the test causing subjects to change?

    - **Number of variables**: Only test 1 variable (see family wise error rate)

    - Regression to the mean




### Metric Considerations

!!! sam
    **Steps to defining a metric**

    1. **Purpose**: What are we using this metric for?

        1. **Invariant checking (Sanity checks)**: Metrics that should NOT change in test vs control

        2. **Evaluation**

            1. **High level**: Revenue, market share, users

            2. **Detailed**: Time on page, etc

    2. **High level concept**: How many active users?

    3. **Detailed**: How do we define active? Which events count as active?

    4. **Summarize**: Convert these details into 1 single metric

    The key is to choose summary statistics that match our data distribution (Poisson, Pareto, etc).