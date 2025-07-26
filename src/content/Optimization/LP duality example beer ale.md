---
title: LP duality example beer ale
---


## Beer vs Ale

1. [From Week 1 Playlist | Problem Formulation](https://youtu.be/nMC8Lm4q6PM?si=tWgUZeQQjgBCSlGJ&t=959) 
2. [From Week 2 Monday Playlist | Solving Graphically](https://youtu.be/dZdQOfsZJdA?si=ayUbx0hQ1qLi8B7M)
3. [From Week 2 Monday Playlist | Solving with R](https://www.youtube.com/watch?v=xfkdt0geeHY&list=PL8uIP3DsMWIyAXuHDB2Y2ZpV-xcAFw4au&index=9)
4. [From Week 2 Wednesday Playlist | Dual Problem](https://www.youtube.com/watch?v=HMrq1HPAkzc&list=PL8uIP3DsMWIxgSIfkKXv0GxJFAazocko3&index=2) --> [Economic Interpretation](https://www.youtube.com/watch?v=hDw970ogeOY&list=PL8uIP3DsMWIxgSIfkKXv0GxJFAazocko3&index=3) --> [R Code](https://www.youtube.com/watch?v=F3PsccapBrA&list=PL8uIP3DsMWIxgSIfkKXv0GxJFAazocko3&index=4)



**Optimization**: Modeling where we need to max/min value that is subject to some parameters with constraints 

**Objective function**: what needs to be maximized, subject to constraints

<img src="https://i.imgur.com/7zICd6P.png" style="zoom:50%;" />

*Note that X = ale, Y = beer*

*Later on in the dual problem, the Available Quantities will be a, b, and c*
$$
\text{"Primal"} \\
Z = max(13x + 23y) \\
Subject \: to: \\
Corn: \quad 5x + 15y \leq 480 \\
Hops: \quad 4x + 4y \leq 160 \\
Malt: \quad 35x + 20y \leq 1190 \\
x, y \geq 0

\\\\\\

\text{"Dual"} \\
Z \star = min(480a + 160b + 1190c) \\
Subject \: to: \\
Ale: \quad 5a + 4b + 35c \geq 13 \\
Beer: \quad 15a + 4b + 20c \geq 23 

\\\\\\

\text{Solution} \\
Z = Z \star = \$800 \\
X = Ale = \text{12 to produce} \\
Y = Beer = \text{28 to produce}
$$

*Feasible* *region* is a region of possible solutions where all (linear) constraints are satisfied. Optimal point will be one of the corner points. It will be the outermost point that touches the slope from our objective function.

- **Y**: Beer that can be produced (\$23 profit per barrel)
- **X**: Ale that can be produced (\$13 profit per barrel)
- **Result**: $800 in profit, this occurs at (12, 28)

<img src="https://i.imgur.com/fSt6ESQ.png" style="zoom:40%;" />

Special Cases of Feasible Region

1. **Unbounded regions**: when we have constraints moving in opposite directions

2. **Infeasibility**: no overlap between our constraints

   Why can these occur?

   1. Maybe we forgot a constraint
   2. Maybe we defined constraints incorrectly
   3. Maybe we are trying to min - the "inner" line is all that matters
   4. Maybe we have a sign incorrect 

<img src="https://i.imgur.com/7zICd6P.png" style="zoom:50%;" />

```python
# Max function
c_ex1 = np.array([13, 23])     # Profit

# Inequality constraints
A_ex1 = np.array([
    [5, 15],                   # Corn
    [4, 4],										 # Hops
    [35, 20]									 # Malt
    ])

# Available quantities
b_ex1 = np.array([480,160,1190])

# we put a negative sign on the objective as linprog does minimization
res_ex1 = linprog(-c_ex1, A_ub=A_ex1, b_ub=b_ex1, method='revised simplex')

res_ex1

# Results:
  # fun: -800
  # x: array([12, 28])

# The optimal plan says to produce 12 ale and 28 beer; that generates a maximizing value of revenue of $800.
```



### General Solution

**C**:   Profit from ale and beer
**X**:   Decision variables (how much beer / ale should we produce?)
**A**:   6 coefficient values from constraints
**b**:   Available quantities we have of each raw material
**u**:   Decision variables (how much would we sell each raw material for instead)?

[Image 1](https://i.imgur.com/xBoaNH2.png), [Image 2](https://i.imgur.com/5SmtZcs.png), [Image 3](https://i.imgur.com/eA8xexD.png)

**Theorem (Strong Duality):** Objective Function Equal at Optimal Values

$c^T * x' = b^T * u'$ 

- $c^T$ = Primal objective function  
- $x'$ = Primal optimal solution  
- $b^T$ = Dual objective function
- $u'$ = Dual optimal solution  



### Part 1: Primal 

Solving for profit max

Step 1: Define decision variables and quantity to be optimized as a mathematical function

- $Obj: Max(Profit) = Max(13x + 23y)$

Step 2: Define constraints mathematically

- (Corn)   |  $5x + 15y \leq 480$
- (Hops)  |   $4x + 4y \leq 160$     
- (Malt)   |    $35x + 20y \leq 1190$

Step 3: Express hidden conditions (eg can't be negative, has to be integer, etc)

- $x >= 0, y >= 0$



### Part 2: Dual

Solving for shadow price

Step 1: Define decision variables and quantity to be optimized as a mathematical function

- $Obj: Min(Cost) = 480a + 160b + 1190c$

Step 2: Define constraints mathematically

- $st: 5a + 4b + 35c \geq 13$ 
- $st: 15a + 4b + 20c \geq 23$ 

Step 3: Express hidden conditions (eg can't be negative, has to be integer, etc)

- $a, b, c >= 0$

Result:

- $Total \: Profit \: = 800$
- $a = \$1, \: b = \$2, \: c = \$0$

---

### Sensitivity Analysis

What happens if our per-unit profits change?

$$
Z = \text{Slope of Obj Function} \\

C_1 = \text{Product 1 Unit Profit} \\

X_1 = \text{Product 1 Required Hours} \\

X_2 = -1 * \frac{c_1}{c_2} * x_1 + \frac{v}{c_2}
$$
As long as the slope of the obj function is between the slopes of our 2 constraints, the optimal point will be where the 2 constraints intersect.
