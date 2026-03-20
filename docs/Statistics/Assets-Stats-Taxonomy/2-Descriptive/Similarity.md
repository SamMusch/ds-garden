---
published: true
---

>[!sam]
>- Data Visualization Techniques
> - Summary Statistics and Insights
> - Identifying Patterns and Anomalies
> - Correlation Analysis


### Similarity

[Image: Types of Similarity](https://i.imgur.com/vVFUNGz.png)

- **Direct** | Literally, how far away are the points

- **Contextual** | Think clusters. Points within a cluster are similar.

- **Conceptual** | Think philosophy.


### Computing | Continuous Data

| **Distance Metric**            | **Summary**                                                            | **When to use**                                                                                      | **When NOT to use**                 | **LaTeX Formula**                                     |
| ------------------------------ | ---------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ----------------------------------- | ----------------------------------------------------- |
| **Euclidean**                  | As the crow flies                                                      | When you want shortest direct distance between points, and all variables are equally important.      | High dimensionality, outliers       | $d = \sqrt{\sum_{i=1}^n (a_i - b_i)^2}$               |
| **Manhattan**                  | Adds up distances along each axis, like walking city blocks in a grid. | When movement happens in straight lines or when variables are on different units/scales.             |                                     | $d = \sum_{i=1}^n \|a_i - b_i\|$                      |
| **Minkowski**                  | Can act like Euclidean, Manhattan, or something in between             | When you want a general approach that can adjust to the problem’s needs, especially for varied data. | When simpler methods work too       | $d = \left(\sum_{i=1}^n \|a_i - b_i\|^p\right)^{1/p}$ |
| **Max-Coordinate (Chebyshev)** | Looks at **biggest difference** between points.                        | When you care about largest / most extreme impact                                                    | When overall distance is important. | $d = \max_i \|a_i - b_i\|$                            |

---

### Computing | Mixed Data (Gower)

**Gower Distance**
For each variable type: 

1. Select distance metric

2. Scale from 0 to 1
Then, apply linear combo to calculate final distance matrix

**Variable types:**

* **Interval**: Manhattan

* **Ordinal**: Variable is first ranked, then Manhattan distance is used with a special adjustment for ties

* **Nominal**: Variables of k categories are first converted into `k` binary columns and then the [Dice coefficient](http://stats.stackexchange.com/a/55802/21654) is used



### Computing | Nominal

**Cosine Similarity** (for text or high-dimensional data)