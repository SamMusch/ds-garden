---
title: LP Notes
---
[Key Topics (Image)](https://i.imgur.com/fRgtITF.png)

Textbooks

- [Modeling and Solving Linear Programming with R](https://www.omniascience.com/books/index.php/scholar/catalog/book/34)
- [Doing Bayesian Data Analysis: A Tutorial with R, JAGS, and Stan](https://nyu-cdsc.github.io/learningr/assets/kruschke_bayesian_in_R.pdf)
- [Introducing Monte Carlo Methods with R](https://moodle2.units.it/pluginfile.php/290154/mod_resource/content/1/Casella%20Robert%20R.pdf)

[[LP Math formula]]


| 1H \| Optimization |                  |                                                              |
| ------------------ | ---------------- | ------------------------------------------------------------ |
| March 18           | **Intro**        | Linear programs, integer programs, initial feasible solution |
| March 23           | **Intro**        | Setting up optimization problems, using R for solving LPs.   |
| March 25           | **Applications** | Dual problem, branch and bound search, sensitivity analysis, shadow prices. |
| April 15           | **Non-Linear**   | Langrangian method                                           |

| 2H \| Bayesian |                                                   |                                                              |
| -------------- | ------------------------------------------------- | ------------------------------------------------------------ |
| April 20       | **Introduction to Distributions for Simulations** | Overview of Monte Carlo Simulations, Probability distributions, Random Numbers, PMF/PDF and CDF of Discrete and Continuous Distributions: Bernoulli, Binomial, Geometric, Poisson, Uniform, Exponential, Weibull, Normal, Gamma, Beta |
| April 22       | **Random Number Generation**                      | RNG implementations in R, RNG from non-standard distributions, Inverse Transforms, General Transformation Methods, Accept Reject Method. |
| April 27       | **Bayesian Analysis & Applications**              | Bayes Theorem, Informative vs Non-informative Priors, Conjugate priors, Likelihood Function. Approximate Bayesian Computation in R with examples. Application: A/B Testing with Bayesian Computation in R. |
| April 29       | **Discrete Event Simulation in R**                | Queuing simulations, Tandem queues                           |

---


# Lectures

## Wk1 | Linear Optimization

> Linear programs, integer programs, initial feasible solution.

[YT Playlist](https://www.youtube.com/watch?v=9p9MvPS1X7Q&list=PL8uIP3DsMWIzkdOb4710ANbAEg_LNX6H-&index=1)

- 1-4 | Ignore
- [5](https://www.youtube.com/watch?v=nMC8Lm4q6PM&list=PL8uIP3DsMWIzkdOb4710ANbAEg_LNX6H-&index=5) | Notes below, ignore

[Problem Formulation](https://youtu.be/nMC8Lm4q6PM?si=8CriYQNfz1H6wT8T&t=499)

1. **Define decision variables** | Determine quantity to be optimized.
2. **Define constraints**
3. **Define conditions** | Think non-negativity.

---



## Wk2a | Linear Optimization

> Setting up optimization problems, using R for solving LPs.

[Week 2 | Monday YT Playlist](https://www.youtube.com/watch?v=dZdQOfsZJdA&list=PL8uIP3DsMWIyAXuHDB2Y2ZpV-xcAFw4au)

1. Beer vs ale example graphically. Ignore, in separate note section. 
2. Continued. Ignore.
3. Practice problem 1. Butcher Shop.
4. Practice problem 3. Furniture Maker.
5. Practice problem 2. Universal Mines.
6. Exercise Problem. Blue Ridge Hot Tubs.
7. Continued.
8. Special Case: [**Unbounded Solutions**](https://www.youtube.com/watch?v=xEoFAcFOgWk&list=PL8uIP3DsMWIyAXuHDB2Y2ZpV-xcAFw4au&index=8) & [**Infeasibility**](https://youtu.be/xEoFAcFOgWk?si=YIAtKWAwIklKJBfz&t=275). Why?
   1. My mistake --> Forgot a constraint
   2. My mistake --> Wrote as max problem instead of min problem
   3. My mistake --> Defined constraints incorrectly.
   4. My mistake --> Error in the inequality sign of the constraint.
9. Beer vs ale example in R.

---



## Wk2b | Applications

> Dual problem, branch and bound search, sensitivity analysis, shadow prices.

[Week 2 | Wednesday YT Playlist](https://www.youtube.com/watch?v=jytGeGs4kl0&list=PL8uIP3DsMWIxgSIfkKXv0GxJFAazocko3)

1. Review, intro Simplex ([MIT Chapter](https://web.mit.edu/15.053/www/AMP-Chapter-02.pdf))
2. **Duality**
3. **Duality continued, economic interpretation**
4. **Duality continued, solving with R**
5. 1 pager: connecting primary & dual. [Strong Duality Theorom](https://www.youtube.com/watch?v=NWxYQQYaWO8&t=445s)
   1. 1 pager: [see page 4](https://canvas.umn.edu/courses/161932/files/11795212?module_item_id=3709569)
6. Example: Manufacturing.
7. Example: Manufacturing (continued). Dual problem.
8. **Sensitivity Analysis**



### Dual Problem

[[LP duality example beer ale]]

[ChatGPT](https://chatgpt.com/share/150c6a88-3448-429d-a749-490ca2ba5686): In linear programming (LP), **duality** is a fundamental concept that establishes a relationship between two related optimization problems: the **primal** problem and its **dual** problem. Understanding the dual problem provides valuable insights into the original (primal) problem, offering alternative perspectives, aiding in sensitivity analysis, and sometimes simplifying computations. [These dual variables are also known as "shadow prices".](https://youtu.be/hDw970ogeOY?si=jYmwrF198v7IjzqH&t=893)



### [Strong Duality Theorem](https://youtu.be/NWxYQQYaWO8?si=J8iv7jLpBNnA2yNY&t=445)

[ChatGPT](https://chatgpt.com/share/2ea28ff3-b5f0-4764-a7a2-f81b531144dc): If a linear programming problem (the **primal** problem) has an optimal solution, then its **dual** problem also has an optimal solution, and the optimal values of the objective functions for both the primal and dual problems are equal.



### [Shadow Price](https://youtu.be/642lZIwdSxs?si=2q0COwQSNqedjlXx&t=1156)

[ChatGPT](https://chatgpt.com/share/432129a8-bc37-44e0-b89f-85a3702fa912): The **shadow price** (also known as the **dual value** or **dual price**) is the value that represents how much the objective function (such as profit or cost) would improve or deteriorate if there were a one-unit increase in the right-hand side (RHS) of a constraint, while keeping all other parameters constant.

> **Shadow price**: The change in the optimal value of the object function when we relax a constraint.
>
> --> If the objective function is **utility**, then the shadow price is the marginal utility of relaxing the contraint.
>
> --> If the objective function is **cost**, then the shadow price is the marginal cost of strengthening the contraint.

[YouTube](https://youtu.be/a5ceSLFeutk?si=j-SwiXGPn5DC5h8n&t=538): Showing Strong Duality Theorem.

[YouTube](https://youtu.be/8BnphwZJtBY?si=ueLU6dVyrr7KSkGq&t=525): 8:45. Since solving the primal problem is equivalent to solving the dual problem, don't try to "guess and check" a bunch of constraint changes in the primal problem. Just solve the dual problem.

---


## Wk3a | Applications

[Week 3 | Monday YT Playlist](https://www.youtube.com/watch?v=8BnphwZJtBY&list=PL8uIP3DsMWIy_b3CxJ4WmfZyGMXULx0dj)

1. **Review of primal & dual.** 
2. Ex: Furniture Maker.
3. Ex: Universal Mines.
4. Ex: Universal Mines (continued). Introducing "Cplex" tool as alternative to R.
5. Ex: Production plan with fixed costs (reading problem)
6. Ex: Production plan with fixed costs (solve part 1).
7. Ex: Production plan with fixed costs (solve part 2).
8. Ex: Purchase plan with decreasing unit costs



## Wk3b | Applications

[Week 3 | Wednesday YT Playlist](https://www.youtube.com/watch?v=i0Dv5S63YMU&list=PL8uIP3DsMWIygSH23C6vVIEzuOfqs-kr9&index=1)

1. Ex: A Production Plan with Extra Capacity (reading problem)
2. Ex: A Production Plan with Extra Capacity (solve part 1 & 2)
3. Ex: A Production Plan with Extra Capacity (read part 3)
4. Ex: A Production Plan with Extra Capacity (solve part 3)
5. Ex: Transportation by Trucks (reading problem)
6. Ex: Transportation by Trucks (solving problem)
7. Ex: Production of two models of chairs (reading problem)
8. Ex: Production of two models of chairs (solve part 1)
9. Ex: Production of two models of chairs (solve part 2)
10. Ex: Production of two models of chairs (solve part 3)



## Wk4a | Applications

[Week 4 | Monday YT Playlist](https://www.youtube.com/watch?v=4RwptG8BKkI&list=PL8uIP3DsMWIx33yWHEYjXW2CCJoRkDGOF)

1. Ex: Hiring and Firing (reading)
2. Ex: Hiring and Firing (solve part 1)
3. Ex: Hiring and Firing (solve part 2)
4. Ex: Planning of Personnel Shifts (reading)
5. Ex: Planning of Personnel Shifts (solving)
6. Ex: Staff Scheduling Problem (reading)
7. Ex: Staff Scheduling Problem (solving)
8. Ex: Assignment Maximizing Quality (reading)
9. Ex: Assignment Maximizing Quality (solving)





# Textbook

[Modeling and Solving Linear Programming with R](https://www.omniascience.com/books/index.php/scholar/catalog/book/34) (only like 100 pages)

- [Github](https://github.com/jmsallan/linearprogramming)



## 1 | Intro

> Introduction 
>
> This book is about using linear programming to help making better decisions in the organizational context. Linear programming is one of the most useful and extensively used techniques of operational research. It is one special case of mathematical optimization , where the function to optimize and the constraints are linear functions of the decision variables. 

---



## 2 | Solving LP

### 2.1 Intro

>  Linear programming is one of the most extensively used techniques in the toolbox of quantitative methods of optimization. Its origins date as early as 1937, when Leonid Kantorovich published his paper "A new method of solving some classes of extremal problems. Kantorovich developed linear programming as a technique for planning expenditures and returns in order to optimize costs to the army and increase losses to the enemy. The method was kept secret until 1947, when George B. Dantzig published the simplex method for solving linear programming. In this same year, John von Neumann developed the theory of duality in the context of mathematical analysis of game theory.



> The power of linear programming was greatly enhanced when came the opportunity of solving integer and mixed integer linear programming. In these models all or some of the decision variables are integer, respectively. This field was opened by the introduction of the branch and bound method by Land and Doig. Later other algorithms have appear, like the cutting plane method. These techniques, and the extension of computing availability, have increased largely the possibilities of linear programming. 

---



### 2.2 Problem Formulation

**2.2.1 Linear programming formulation**

> Roughly speaking, the LP problem consists in **optimizing** the value of a linear **objective function** of a vector of **decision variables**, considering that the variables can only take the values defined by a set of linear **constraints**. 

- **Objective function**: value we want to optimize
- **Decision Variables**: values we want to determine (vector)
- **Linear Constraints**: constrains values of the Decision Variables

*Written out in mathematical form in doc called "Optimization Notes"*.



**2.2.2 A simple example of a PL model**: Example showing how to set up the problem. (See 2.6.1 for R code.)

**2.2.3 A transportation problem**: Same ^

**2.2.4 Transformations of elements of a LP**: How to transform a "MAX" problem into a "MIN" problem.



**2.2.5 Turning a PL into standard form**

> A usual transformation of a PL model is turning all constraints into equalities adding slack and excess variables. This is required to solve the PL using any version of the simplex algorithm. 



### 2.3 Solving

> The most extended procedure to solve the LP is the **simplex algorithm**, developed by George Bernard Dantzig in 1947. 

> The software that solves LPs uses usually the **simplex** algorithm, or the **revised simplex** algorithm, a variant of the original simplex algorithm that is implemented more efficiently on computers. Other algorithms exist for **particular LP problems**, such as the transportation or trans-shipment problem, or the maximum flow problem. 
>
> Another approach to solve LPs is the interior point algorithm, developed by Narenda Karmarkar [4]. This algorithm has been proven as partic- ularly useful in large problems with sparse matrices. Contrarily to the simplex approach, this algorithm starts from a point inside the feasible region, and approaches the optimum iteratively. 



### 2.4 Duality in LP

>  Let’s consider a MAX linear program in its canonical form. The following linear program, expressed in MIN canonical form, is the **dual** of the program above, called the **primal**.



**2.4.2 Properties of the primal-dual relationship** 

- **The dual of dual is the primal** 
- **Optimum of primal and dual**: If a linear program has a bounded optimum, its primal has also a bounded optimum and both have the same value.
- **Dual variables as shadow prices**: The values of the dual variables in the optimum represent the shadow price of the constraints of the primal. 

[[Duality example]]



### 2.5 Integer and mixed-integer linear programming 

**Integer** linear programming (ILP): When *all* decisions variables need to be integers.

**Mixed integer** linear programming (MILP): When *a subset* of decisions variables need to be integers.



















