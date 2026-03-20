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
_kMDItemDisplayNameWithExtensions: Data-Types-Analysis-Choice.md
ai_abstract: null
ai_key_terms: []
aliases: null
children: 0
created: '2026-03-20'
cssclasses: null
grandchildren: 0
kMDItemContentCreationDate: 2025-01-04 04:21:41 +0000
kMDItemContentCreationDate_Ranking: 2025-05-19 00:00:00 +0000
kMDItemContentModificationDate: 2026-03-20 21:56:12 +0000
kMDItemContentType: net.daringfireball.markdown
kMDItemContentTypeTree: (
kMDItemDateAdded: 2025-05-19 18:39:49 +0000
kMDItemDocumentIdentifier: '627688'
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
kMDItemInterestingDate_Ranking: 2026-03-20 00:00:00 +0000
modified: '2026-03-20'
published: true
reading_time: 2.2
source_file: Data-Types-Analysis-Choice.md
tags: null
title: Data Types Analysis Choice
word_count: 449
---

!!! sam
    **Where it fits conceptually**  
    This table belongs in the foundational part of any statistical methods overview, right after you introduce **types of variables** (nominal vs. interval/continuous).


For the table below: Verify that underlying assumptions (normality, homoscedasticity, independence) are met, or consider non-parametric or alternative approaches if they are not. 

| DV                                    | IV                                                       | **Typical Methods / Models**                                 | **Notes / Use Cases**                                        |
| ------------------------------------- | -------------------------------------------------------- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| **Nominal** (2 categories)            | **Nominal** (2 categories)                               | - 2×2 contingency table (Chi-square test)  <br/>- Fisher’s exact test | For two categorical variables (often “success/failure”). Fisher’s exact test is used for small sample sizes. |
| **Nominal** (>2 categories)           | **Nominal** (>2 categories)                              | - R×C contingency table (Chi-square test)  <br/>- Fisher’s exact test (small samples) | For two categorical variables with multiple levels (e.g., a 3×4 table for “brand preference” vs. “region”). |
| **Nominal** (2 categories)            | **Interval/Continuous** or Mixed (could include nominal) | - Logistic regression  <br/>- Probit regression  <br/>- Discriminant analysis | Binary DV (yes/no) predicted by numeric or categorical IVs.  |
| **Nominal** (>2 categories)           | **Interval/Continuous** or Mixed                         | - Multinomial logistic regression  <br/>- Ordinal logistic regression (if categories have order)  <br/>- Classification trees | Categorical DV with more than two classes (e.g., “Type A/B/C” outcome) predicted by numeric/categorical variables. |
| **Ordinal** (ordered categories)      | **Interval/Continuous** or Mixed                         | - Ordinal logistic regression  <br/>- Nonparametric tests (Kruskal–Wallis for group comparisons) | Rank-based or ordered responses (e.g., Likert scale 1–5) predicted by numeric or categorical IVs. |
| **Interval/Continuous** (numeric)     | **Nominal** (2 categories)                               | - Two-sample t-test (independent)  <br/>- Paired t-test (if repeated measures)  <br/>- Wilcoxon rank-sum (nonparametric) | Compare means of a continuous DV across two groups (e.g., “test vs. control”), or the same group measured twice (paired). |
| **Interval/Continuous** (numeric)     | **Nominal** (>2 categories)                              | - One-way ANOVA  <br/>- Factorial ANOVA (≥2 factors)  <br/>- Repeated-measures ANOVA  <br/>- Kruskal–Wallis (nonparametric) | Compare means of a continuous DV across multiple groups/factors (e.g., “3 treatment groups” or “2 factors × 2 levels”). |
| **Interval/Continuous** (numeric)     | **Interval/Continuous** (numeric)                        | - Correlation (Pearson, Spearman)  <br/>- Simple linear regression  <br/>- Multiple linear regression  <br/>- ANCOVA (mix) | Relate continuous DV to one or more numeric IVs. Correlation measures association; regression models the numeric relationship. |
| **Count** (non-negative integers)     | **Interval/Continuous** or Mixed                         | - Poisson regression  <br/>- Negative binomial regression  <br/>- Chi-square goodness-of-fit (for distributions) | DV is a count (e.g., “number of defects”). Poisson or negative binomial are typical if over-dispersion is an issue. |
| **Time-to-event** (a.k.a. “survival”) | **Interval/Continuous** or Mixed                         | - Kaplan–Meier survival curves (for univariate factors)  <br/>- Cox proportional hazards regression  <br/>- Parametric survival models | DV measures time until an event (e.g., “time to failure”)—common in biomedical, reliability, and event-history analyses. |