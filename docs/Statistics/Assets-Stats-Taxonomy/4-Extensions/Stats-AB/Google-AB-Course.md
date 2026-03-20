---
published: true
---

[Udacity Course](https://learn.udacity.com/courses/ud257/lessons/9983ee8a-91e6-4c2b-9440-66e00839c98e/concepts/220249ec-36d8-4188-bad9-0c65371fe16e)

> Statistics textbooks frequently define power to mean the same thing as sensitivity, that is, 1 - beta. However, conversationally power often means the probability that your test draws the correct conclusions, and this probability depends on both alpha and beta. In this course, we'll use the second definition, and we'll use sensitivity to refer to 1 - beta. [Link](https://learn.udacity.com/courses/ud257/lessons/9983ee8a-91e6-4c2b-9440-66e00839c98e/concepts/f0e603b9-d105-4028-9443-428fd78ce3d1/instructions?lesson_tab=lesson)


#### 2 samples proportions

Effect size (aka *Difference* below): The minimum size of the effect that you hope to be able to detect.

!!! sam
    Test group

    - $\text{Successes} = X_{test}$ = 1242

    - $\text{Total} = N_{test}$ = 9886

    - $\text{Proportion} = p_{test} = \frac{X_{test}}{N_{test}} = \frac{1242}{9886} = 0.1256322$


!!! sam
    Control group

    - $\text{Successes} = X_{control}$ = 974

    - $\text{Total} = N_{control}$ = 10072

    - $\text{Proportion} = p_{control} = \frac{X_{control}}{N_{control}} = \frac{1242}{10072} = 0.09670373$


!!! sam
    Pooled

    - $\text{Pooled Probability of Success} = \hat{p}_{pooled} = \frac{X_{all}}{N_{all}} = \frac{1242 + 974}{9886 + 10072} = 0.111$

    - $\text{Pooled Standard Error} = SE_{pool} = \sqrt{ \hat{p}_{pool} \: * \: (1 - \hat{p}_{pool}) \: (\frac{1}{N_{control}} + \frac{1}{N_{test}})}$

      $\text{Pooled Standard Error} = SE_{pool} =  \sqrt{ 0.111 \: * \: (1 - 0.111) \: (\frac{1}{10072} + \frac{1}{9886})} = 0.00445$


---

!!! sam
    $\text{Difference} = \hat{d} = \hat{p}_{test} - \hat{p}_{control} = 0.1256322 - 0.09670373 = 0.02892847$

    - We want at least 0.02 improvement.

    $\text{Margin} = \text{Z score conf level} \: * \: SE_{pool} = 1.96 \: * \: 0.00445 = 0.008717974$

    - $\text{Upper = Difference + Margin} = 0.03764645$

    - $\text{Lower = Difference - Margin} = 0.0202105$

    The lower bound (0.0202105) is higher than our minimum need (0.02), so we roll out the change.


---

```r
## https://learning.oreilly.com/library/view/practical-statistics-for/9781492072935/ch03.html#idm45782042023560

## Different example than shown above

# In R
p1 = 0.0121 ## new
p2 = 0.011  ## current

effect_size = ES.h(p1=p1, p2=p2)
pwr.2p.test(h=effect_size,
            sig.level=0.05,
            power=0.8,
            alternative='greater’)
```

```python
# In Python
effect_size = sm.stats.proportion_effectsize(0.0121, 0.011)
analysis = sm.stats.TTestIndPower()
result = analysis.solve_power(effect_size=effect_size,
                              alpha=0.05,
                              power=0.8,
                              alternative='larger')
print('Sample Size: %.3f' % result)
```