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
_kMDItemDisplayNameWithExtensions: Nonlinear.md
ai_abstract: null
ai_key_terms: []
aliases: null
children: 0
created: '2025-07-18'
cssclasses: null
grandchildren: 0
kMDItemContentCreationDate: 2020-05-03 19:16:19 +0000
kMDItemContentCreationDate_Ranking: 2025-02-01 00:00:00 +0000
kMDItemContentModificationDate: 2024-12-27 23:43:24 +0000
kMDItemContentType: net.daringfireball.markdown
kMDItemContentTypeTree: (
kMDItemDateAdded: 2025-02-01 17:16:38 +0000
kMDItemDocumentIdentifier: '97060'
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
kMDItemInterestingDate_Ranking: 2024-09-06 00:00:00 +0000
kMDItemLastUsedDate: 2024-09-06 22:32:01 +0000
kMDItemLastUsedDate_Ranking: 2024-09-06 00:00:00 +0000
kMDItemUseCount: '10'
kMDItemUsedDates: (
modified: '2024-12-27'
published: true
reading_time: 5.1
source_file: Nonlinear.md
tags: null
title: Nonlinear
word_count: 1020
---

[Week 5 Playlist - Non-Linear](https://www.youtube.com/watch?list=PL8uIP3DsMWIyps1hmNmfI2Y5c0gdavMmd&v=_VzJ7QxZK3g&feature=emb_title)

*Convex* = when line segments are above the graph

*Contour lines* = the slope of the function at different boundaries

Able to find solutions when (or vice versa)

- Concave objective function (maximization)
- Convex constraints (or linear)

---

[Video 2](https://www.youtube.com/watch?v=friizMs4SM4&list=PL8uIP3DsMWIyps1hmNmfI2Y5c0gdavMmd&index=2)

If constraints are non-linear: 

- The maximum/minimum of an obj function s.t. constraints occurs when the **slope of the constraints** = **slope of the contour lines** (the tangent point)

If constraints & obj function are non-linear: 

- The maximum/minimum of an obj function s.t. constraints occurs when the **slope of the constraints (convex hull)** = **slope of the obj function** (contour lines). This is the tangent point.

---

The gradient of the obj function gives a vector perpendicular to the contour line.

<img src="https://i.imgur.com/lQ9QsqK.png" style="zoom:25%;" />



**Gradient of a circle**

$g(x, y) = x^2 + y^2 = k$    |     This is the contour line for a circle

$\frac{\partial g}{\partial x} = 2x$      |       Partial derivative with respect to x

$\frac{\partial g}{\partial y} = 2y$       |       Partial derivative with respect to y

The image shows the gradient when we are looking at point (1, 0). The slope of the contour lines goes up&down, so the gradient is side-to-side.

<img src="https://i.imgur.com/ZEXwLub.png" style="zoom:25%;" />



---

[Video 3](https://www.youtube.com/watch?v=NxMs9vtfFZk&list=PL8uIP3DsMWIyps1hmNmfI2Y5c0gdavMmd&index=3)

When the contour lines are tangent, the gradient vectors are parallel. 

<img src="https://i.imgur.com/yEY0MYo.png" style="zoom:25%;" />

Even though the gradients could be parallel, it doesn't necessarily mean the vectors have the same magnitude. We can always multiply one of the vectors by a constant though to get them as the same magnitude & in the same direction.

Tangency condition: 

Gradient vector of $f$ as some (x,y) 

= Gradient vector of $g$ at the (x,y) * some scalar

---

## First Example

$f(x, y) = 2x + y$    |     This is the obj function

$g(x, y) = x^2 + y^2 - 1$    |     This is the constraint

$\frac{\partial g}{\partial x} = 2$      |       (Obj) Partial derivative with respect to x

$\frac{\partial g}{\partial y} = 1$       |       (Obj) Partial derivative with respect to y

$\frac{\partial g}{\partial x} = 2x$      |       (Constraint) Partial derivative with respect to x

$\frac{\partial g}{\partial y} = 2y$       |       (Constraint) Partial derivative with respect to y



This is the tangency condition.

$\begin{bmatrix}
2\\
1
\end{bmatrix}$ = $\lambda_0  \begin{bmatrix}
2x_0\\
1y_0
\end{bmatrix}$



These leaves us with our 3 variables and 3 equations we need to solve. (The bottom one is our constraint equation)

$2 = 2 * \lambda_0 * x_0$

$1 = 2 * \lambda_0 * y_0$

$x^2 + y^2 = 1$

---

[Video 4](https://www.youtube.com/watch?v=C7ziarEslqM&list=PL8uIP3DsMWIyps1hmNmfI2Y5c0gdavMmd&index=4)

## Lagrangian

Conditions: $x_0, y_0, \lambda_0$ must satisfy

1. (Constraint)      $g(x_0, y_0) = c$     

2. (Tangency condition)

   Gradient vector of $f$ as some (x,y) = Gradient vector of $g$ at the (x,y) * some scalar

   $\nabla f(x_0, y_0) = \lambda_0 * \nabla f(x_0, y_0)$



$L(x, y, \lambda)$ = $f(x,y) - \lambda(g(x,y) - c)$

Need to take the partial derivative with respect to x, y, and then $\lambda$

<img src="https://i.imgur.com/iaz06k6.png" style="zoom:25%;" />

---

### Example

[Video 5: Example](https://www.youtube.com/watch?v=gF5s7-s6AtY&list=PL8uIP3DsMWIyps1hmNmfI2Y5c0gdavMmd&index=5)

Revenue Max

- Budget = 20k
- Labor - 20/hour
- Steel - 170/ton
- Rev(hour, steel) = $200 * hours^.66 * steel^.33$
- R(h, s) = $200 * h^.66 * s^.33$



(Total cost)     20h + 170s = 20,000

(Revenue)       $\$200 * h^.66 * s^.33$



$L(x, y, \lambda)$ = $f(x,y) - \lambda(g(x,y) - c)$

$L(x, y, \lambda)$ = $200 * h^.66 * s^.33 \: - \: \lambda(20h + 170s - 20,000)$

<img src="https://i.imgur.com/agWe33r.png" style="zoom:25%;" />



1. Derivative with respect to h
   - $0 = 200 * \frac{2}{3}h^\frac{-1}{3} * s^\frac{1}{3} - 20\lambda$

2. Derivative with respect to s
   - $0 = 200 * \frac{1}{3}h^\frac{2}{3} * s^\frac{-2}{3} - 170\lambda$

3. Derivative with respect to $\lambda$
   - $0 = 20h + 170s - 20,000$



$h^* = 667 \: hours$

$s^* = 39 \: tonnes$

$\lambda^*$ = 2.59

$Revenue = \$51777 = 200*667^\frac{2}{3} *29^\frac{1}{3}$

---

[Video 6](https://www.youtube.com/watch?v=RZvkmAkDMfU&list=PL8uIP3DsMWIyps1hmNmfI2Y5c0gdavMmd&index=6)

Above, $\lambda^*$ was 2.59.

In our Lagrangian equation, we have two parts: objective function and constraint. We are going to use $M$ to represent the objective function part. 

$L(x^*, y^*, \lambda^*)$ = $f(x^*,y^*) - \lambda(g(x^*,y^*) - c)$

We know that we are going to set our $x$ and $y$ in the constraint part in a way that the section will become 0, so our Lagrangian at the optimal point is just

$L(x, y, \lambda)$ = $f(x^*,y^*)$

$L(x, y, \lambda)$ = $M^*$

We want to know what the impact of relaxing our budget constraint will be on the optimal value of the objective function. This first part is showing how we represent the original function

$M^*(c)$ 

= $f(x^*,y^*) - \lambda(g(x^*,y^*) - c)$

= $L(\:\: x^*(c), \:\: y^*(c), \:\: \lambda^*(c), \:\: c)$

Now we take the partial derivative with respect to our budget constraint

$\frac{\partial M^*}{\partial c}$ = $\lambda^*$

$\lambda^*$ = 2.59 represents the change in the optimal value from our objective function as we relax our budget constraint. This is our Shadow Price.

Original budget: \$20,000          |           New budget: \$20,001

Original revenue: \$51,777         |          New revenue: \$51779.59

---

[Video 7](https://www.youtube.com/watch?v=RUKO4dznGY0&list=PL8uIP3DsMWIyps1hmNmfI2Y5c0gdavMmd&index=7)

1. Writing in standard form (ie a maximization obj function)

<img src="https://i.imgur.com/HOuyXEo.png" style="zoom:25%;" />



2. Re-writing as functions

<img src="https://i.imgur.com/T3trjWw.png" style="zoom:25%;" />



3. Solving partial derivatives

<img src="https://i.imgur.com/Crzqqv7.png" style="zoom:25%;" />



4. Plotting

<img src="https://i.imgur.com/W3Q4SfJ.png" style="zoom:25%;" />





<img src="https://i.imgur.com/sntaWaQ.png" style="zoom:25%;" />