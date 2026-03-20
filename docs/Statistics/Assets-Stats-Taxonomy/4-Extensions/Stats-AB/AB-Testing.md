---
CoverImage: null
Due: null
Function: Hierarchy
HoursDone: 10
HoursRemain: 3
Objective: Move
Quality: ★
QualityComment: Why isn't this a 10?
ReviewFreq: Weekly, 1-Month, 2-Month, 3-Month
TimeSpent: null
TimeSpent2: null
published: true
tags:

- stats_
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