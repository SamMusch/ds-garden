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
kMDItemAlternateNames: (
kMDItemContentCreationDate: 2024-09-06 16:45:29 +0000
kMDItemContentModificationDate: 2026-04-04 18:16:26 +0000
kMDItemDateAdded: 2025-05-19 18:56:42 +0000
kMDItemFSFinderFlags: '16'
published: true
reading_time: 1.0
source_file: AB-Testing.md
tags: null
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