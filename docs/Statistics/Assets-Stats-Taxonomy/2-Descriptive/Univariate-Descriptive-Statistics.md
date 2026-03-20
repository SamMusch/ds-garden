---
published: true
---

| Term                            | Formula                                           | Definition                                                                                                                                                                                           |
| ------------------------------- | ------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Expected Value                  |                                                   | Probability-weighted long-run average value of an RV over many repeated trials or occurrences.<br><br>- For Discrete --> possible outcomes * probabilities<br>- For Continuous --> integral over ran |
| Range                           | $R = \text{max}(x) - \text{min}(x)$               | The difference between the largest and smallest values in the dataset.                                                                                                                               |
| Variance (Sample)               | $s^2 = \frac{\Sigma (x_i - \bar{x})^2}{n-1}$      | The average of the squared differences from the sample mean, divided by $n-1$.                                                                                                                       |
| Variance (Population)           | $\sigma^2 = \frac{\Sigma (x_i - \mu)^2}{N}$       | The average of the squared differences from the population mean, divided by $N$.                                                                                                                     |
| Standard Deviation (Sample)     | $s = \sqrt{\frac{\Sigma (x_i - \bar{x})^2}{n-1}}$ | The square root of the sample variance.                                                                                                                                                              |
| Standard Deviation (Population) | $\sigma = \sqrt{\frac{\Sigma (x_i - \mu)^2}{N}}$  | The square root of the population variance.                                                                                                                                                          |
| Skewness                        |                                                   | A measure of the asymmetry of a probability distribution.                                                                                                                                            |
| Kurtosis                        |                                                   | A measure of how much mass is contained in the tails of a probability distribution. (3 = normal distribution, anything past 3 is called *leptokurtic*, or heavy-tailed.)                             |
| Moments                         |                                                   | *Shown below*                                                                                                                                                                                        |


!!! sam
    **Calculating Standard Deviation**: Applies to both discrete and continuous.

    1. **Find the mean**:

        - Population: $\mu = \frac{\sum x_i}{N}$

        - Sample: $\bar{x} = \frac{\sum x_i}{n}$

    2. **Compute squared differences**:
       $(x_i - \mu)^2 \text{ (population)} \quad \text{or} \quad (x_i - \bar{x})^2 \text{ (sample)}$

    3. **Sum the squared differences**:
       $\sum (x_i - \mu)^2 \text{ (population)} \quad \text{or} \quad \sum (x_i - \bar{x})^2 \text{ (sample)}$

    4. **Divide**: 

        - Population variance: $\frac{\sum (x_i - \mu)^2}{N}$

        - Sample variance: $\frac{\sum (x_i - \bar{x})^2}{n-1}$   
       $n-1$ in sample denominator because $\bar{x}$ consumes 1 degree of freedom. (called "Bessel's correction")

    5. **Take the square root for standard deviation**.



!!! sam
    **Central Moments**

    | Moment Number | Moment Name        | Moment Equation               | Moment Explanation                                                                 |
    |---------------|--------------------|-------------------------------|-----------------------------------------------------------------------------------|
    | 1             | Mean (First Moment)| $E(Y - \mu) = 0$          | Measures the average difference from the mean; always zero because positive and negative differences cancel out. |
    | 2             | Variance (Second Moment) | $E((Y - \mu)^2)$          | Measures the spread of the data by squaring differences from the mean to make them all positive.                  |
    | 3             | Skewness (Third Moment) | $E((Y - \mu)^3)$          | Captures the asymmetry of the data; positive skewness means more data above the mean, negative means below.       |
    | 4             | Kurtosis (Fourth Moment) | $E((Y - \mu)^4)$          | Measures the "peakedness" of the data; higher values emphasize extreme differences (tails of the distribution).    |