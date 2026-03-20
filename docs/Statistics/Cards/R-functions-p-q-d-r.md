---
published: true
---

[ChatGPT](https://chatgpt.com/share/6775a906-8214-8000-a587-e01d719e4f02)

## R Functions
[Source](http://portal.survey.ntua.gr/main/labs/hgeod/ddeli/analmgeo/Notes/R%20Language%20Basic%20Statistics%20Cheatsheet.pdf)
Every distribution in R has **4 functions**. (Basically, 4 prefixes + name of the distribution.)

| Use Case   | `Function` | Name        | Description                                             | Layman Explanation                                                         |
| ---------- | ---------- | ----------- | ------------------------------------------------------- | -------------------------------------------------------------------------- |
| Continuous | `p`        | Probability | Cumulative Distribution Function (CDF)                  | "What is the probability above or below a cutoff?"                         |
| Continuous | `q`        | Quantile    | Inverse CDF                                             | "What value corresponds to, say, 80% of the way to the maximal value?"     |
| Both       | `d`        | Density     | Density function (PMF for discrete, PDF for continuous) | "What is the 'height' or y-value of the distribution at a specific point?" |
| Both       | `r`        | Random      | Random Variable Generator                               | "Generate random values following this distribution."                      |