

# Branches of Optimization

Update/consolidate this. See [Brittanica](https://www.britannica.com/science/optimization)

[ChatGPT](https://chatgpt.com/share/98d49c1d-314b-4876-afd1-2bda0aecd27d)

> I took an undergrad course on Constrained Optimization which focused heavily on the Lagrangian multiplier and the Hessian matrix. I took a graduate course on Optimization which focused on linear programming. How do these 2 connect?

Both are **branches** of optimization, but they emphasize different types of problems and techniques.
- **LP** focuses on finding the optimal solution at the vertices (corners) of the feasible region.
- **Nonlinear programming** (where Lagrangians and Hessians are used) finds critical points within a broader, often continuous, space. The constraints or the objective function are not necessarily linear.


> Provide an outline of the branch of optimization.
## Unconstrained Optimization

**Objective**: Minimize or maximize a function without constraints.

**Problem Classes**:
- **Nonlinear Programming (NLP)**: When there are no constraints (i.e., optimizing a nonlinear function without any restrictions).
    - Example: Using Gradient Descent for machine learning without constraints.
- **Quadratic Programming (QP)**: If no constraints are present in a quadratic objective function (though typically it involves linear constraints).



## Constrained Optimization

**Objective**: Minimize or maximize a function subject to constraints.
**Subtypes**:
- **Equality-constrained**: Constraints are equations.
- **Inequality-constrained**: Constraints are inequalities.


**Problem Classes**:
- **Linear Programming (LP)**: Optimizing a linear objective function subject to linear constraints (both equality and inequality constraints).
    - Example: Supply chain optimization with resource limitations.
- **Nonlinear Programming (NLP)**: When optimizing a nonlinear objective function subject to nonlinear constraints.
    - Example: Engineering design problems.
- **Integer Programming (IP) / Mixed Integer Programming (MIP)**: Involves both integer variables and constraints (linear or nonlinear).
    - Example: Scheduling problems, logistics.
- **Quadratic Programming (QP)**: Optimizing a quadratic objective function subject to linear constraints.
    - Example: Portfolio optimization in finance.
- **Convex Optimization**: Constrained or unconstrained optimization where the objective and constraint functions are convex.
    - Example: Machine learning algorithms like Support Vector Machines (SVM).
- **Non-Convex Optimization**: Can involve either unconstrained or constrained optimization where the objective or constraints are non-convex.
    - Example: Deep learning model training.


## Both

### **Stochastic Optimization**

- This can apply to both unconstrained and constrained problems but introduces randomness or uncertainty into the problem.
    - Example: Financial modeling under uncertain market conditions.

### **Multi-Objective Optimization**

- This involves optimizing multiple objectives and can be applied in both unconstrained and constrained optimization.
    - Example: Engineering design where cost, performance, and safety are optimized simultaneously under specific constraints.