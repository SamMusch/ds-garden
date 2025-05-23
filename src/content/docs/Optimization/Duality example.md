---
title: Duality example
---

[Youtube]([https://www.youtube.com/watch?v=642lZIwdSxs&list=PL8uIP3DsMWIxgSIfkKXv0GxJFAazocko3&index=6](https://youtu.be/642lZIwdSxs?si=PzNKPdiHOubCkJCG&t=1657))

![](https://i.imgur.com/DyLqQeW.png)

$x_1$ = units of product 1 we should produce
$x_2$ = units of product 2 we should produce

---
##### Part 1: Primal
$Max: \:\: 300x_1 + 200x_2$  |  *Profit*
st.
- $2x_1 + 1x_2 \leq 8$    |  *Machine 1*
- $1x_1 + 2x_2 \leq 8$    |  *Machine 2*

When we plot the constraints, we find an intersection point of (2.66, 2.66). After plugging in and trying our corner points, this point ends up also being the optimal point. The resulting profit is $1333.

$z = \$1333$  |  *Profit*
- $x_1 = 2.66$   |  *Machine 1 units*
- $x_2 = 2.66$

Instead, increase the available hours for *Machine 1* from 8 hours to 9 hours, we end up with:
$z = \$1466$  |  *Profit*
- $x_1 = 3.33$
- $x_2 = 2.33$
---
##### Part 2: Shadow

This **Shadow Price** is showing us how our profit changes as we adjust *Machine 1* available hours.

$\frac{Z_b - Z_a}{M1 \: capacity \: to \: change} = \frac{1466 - 1333}{1 \: hour \: adj} = \$133.33 / hour$

When the objective function is a..
- **Max**: Shadow price is marginal utility of *relaxing* constraint
- **Min**: Shadow price is marginal cost of *strengthening* constraint
---
##### Tying in together
The values we got from relaxing our constraints (shown in Part 2) are conceptually the same as the values we would be willing to sell the raw materials for; in this case, machine hours.

**Primal**: (units to produce)
$z = \$1333$  |  *Profit*
- $x_1 = 2.66$   |  *Machine 1 units*
- $x_2 = 2.66$

**Dual**: (price where we are willing to sell raw materials instead of producing)
$z = \$1333$  |  *Profit*
- $y_1 = \$133.33$   |  *Machine 1 price to charge*
- $y_2 = \$33.33$


---

##### LPsolve

```
 /* Objective function */  
 max: 300 X1 + 200 X2;  
 ​  
 /* Variable bounds */  
 2 X1 + X2 <= 8;  
 X1 + 2 X2 <= 8;
```
