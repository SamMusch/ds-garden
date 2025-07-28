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
_kMDItemDisplayNameWithExtensions: Problems.md
ai_abstract: null
ai_key_terms: []
aliases: null
children: 0
created: '2025-07-18'
cssclasses: null
grandchildren: 0
kMDItemContentCreationDate: 2024-09-06 20:10:35 +0000
kMDItemContentCreationDate_Ranking: 2024-09-06 00:00:00 +0000
kMDItemContentModificationDate: 2024-12-27 23:43:24 +0000
kMDItemContentType: net.daringfireball.markdown
kMDItemContentTypeTree: (
kMDItemDateAdded: 2025-02-01 17:16:38 +0000
kMDItemDocumentIdentifier: '97055'
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
kMDItemLastUsedDate: 2024-09-06 20:16:18 +0000
kMDItemLastUsedDate_Ranking: 2024-09-06 00:00:00 +0000
kMDItemUseCount: '10'
kMDItemUsedDates: (
kMDItemUserCreatedDate: (
kMDItemUserCreatedUserHandle: (
kMDItemUserModifiedDate: (
kMDItemUserModifiedUserHandle: (
modified: '2024-12-27'
published: true
reading_time: 15.0
source_file: Problems.md
tags: null
title: Problems
word_count: 3002
---

**Resources**
- [Textbook](https://play.google.com/books/reader?id=nWaFCgAAQBAJ&pg=GBS.PA37&hl=en)
- [Textbook Code](https://github.com/jmsallan/linearprogramming/tree/master/LP)
- more-optim-examples.md | Messier, probably won't need.
- quantecon-example.md | Python. Probably won't need either.

# HW1

## Q1 | Manufacturing

### Problem

A manufacturing firm in California produces four different metal products, each of which must be machined, polished, and assembled. (All info is weekly.)

![](https://i.imgur.com/lJVq2bx.png)

Contract with 1 firm:
- 50 units of product I
- 100 units of any combination of products II and III

Can sell to other firms:
- Products I, II, and III: No restriction
- Product IV: 30 unit max

Govt regulation:
- Product IV: Can only produce 25 units

Need to meet all obligations.

### Solutions

How many units of each product should the firm manufacture each week? What is the max profit?

```r
library(lpSolve) # https://cran.r-project.org/web/packages/lpSolve/lpSolve.pdf
library(knitr)


# Profit
obj_fun <- c(6, 4, 6, 8)

constr_eq <- matrix(c(3,2,2,4,  # Machine
                      1,1,2,3,  # Polish
                      2,1,2,1,  # Assemble
                      1,0,0,0,  # Product I contract
                      0,1,1,0,  # Product II & III contract
                      0,0,0,1   # Product IV govt regs
                      ), ncol=4, byrow=T) # 4 products

constr_dir <- c("<=", "<=", "<=",  # Machine, Polish, Assemble
                ">=",">=","<=")

# Available quantities
constr_rhs <- c(480, 400, 400,  # Machine, Polish, Assemble
                50, 100, 25)

solution <- lp("max", 
               obj_fun, 
               constr_eq, 
               constr_dir, 
               constr_rhs)

solution$objval    # 1250
solution$solution  # 50  0  145  10
```
---

## Q2 | Grocery Store

### Problem
On Saturday, the manager of a supermarket is making hamburger meat, picnic patties, and meat loaf. The demand for each always exceeds the supermarket’s supply.

"Filler": The remainder of each product is an inexpensive non-meat filler which the store has in unlimited supply.

![](https://i.imgur.com/G6oZiGH.png)

### Solution
How many pounds of each product should be made? How much meat needs to be stored for Sunday?

```r
# Profit
obj_fun <- c(0.7, 0.7, 0.8)   # Found by taking "1 - Filler"


constr_eq <- matrix(c(0.2, 0.0, 0.1, # Round Steak
                      0.5, 0.5, 0.4, # Chuck Steak
                      0.0, 0.2, 0.3  # Pork
                      ), ncol=3, byrow= TRUE )

constr_dir <- c("<=", "<=","<=")

# Available quantities
constr_rhs <- c(200, 800, 150)

solution <- lp("max", 
               obj_fun, 
               constr_eq, 
               constr_dir, 
               constr_rhs)

solution$objval    # 1150
solution$solution  # 937.5  562.5  125.0
```

---

## Q3 | Oil

### Problem
Produces two types of unleaded gasoline:

- Regular: \$12 per barrel revenue
- Premium: \$14 per barrel revenue

Both types are blended from Aztec’s inventory of refined domestic oil and refined foreign oil, and must meet the following specifications:

The characteristics of the refined oils in inventory are as follows:

![](https://i.imgur.com/T4bojeV.png)

### Solution
The company wants to decide what quantities (i.e., blended barrels) of the oils should it blend into the two gasolines in order to maximize weekly profit? What is the maximum weekly profit? (Note: Solve it as a LP, no need to mandate integer values for barrels)

```r
obj_fun <- c(4,   # barrels of domestic blended into regular (12 - 8)
             -3,  # barrels of foreign blended into regular (12 - 15)
             6,   # barrels of domestic blended into premium (14 - 8)
             -1)  # barrels of foreign blended into premium (14 - 15)


constr_eq <- matrix(c(1,1,0,0,     # ≤ 100000 | max regular demand  
                      0,0,1,1,     # ≤ 20000  | max premium demand  
                      1,1,0,0,     # ≥ 50000  | min regular required
                      0,0,1,1,     # ≥ 5000   | min premium required
                      1,0,1,0,     # ≤ 40000  | domestic
                      0,1,0,1,     # ≤ 60000  | foreign
                      
                      1,-10,0,0,   # ≤ 0  | octane rating of regular
                      0,0,6,-5,    # ≤ 0  | premium octane constraint
                      2,-8,0,0,    # ≤ 0  | regular vapor-pressure constraint
                      0,0,2,-8    # ≤ 0  | premium vapor-pressure constraint
                      ), ncol=4, byrow= TRUE )


constr_dir <- c("<=", "<=",">=",">=","<=","<=","<=","<=","<=","<=")
constr_rhs <- c(100000,20000,50000,5000,40000,60000,0,0,0,0)

solution <- lp("max",obj_fun,constr_eq,constr_dir,constr_rhs)
solution$objval      # 125000
solution$solution    # 40000   10000   0    5000
```

# HW2

## Q1 | Investment Bonds

### Problem
You have $10M to invest.

Policy limitations on the portfolio manager’s actions:
1. Govt + agency bonds $\geq$ $4M.
2. Portfolio avg **quality** $\leq$ 1.4.
3. Portfolio avg years to **maturity** $\leq$ 5 years.

Taxes
- **Muni**: 0%
- **Others**: 50%

![](https://i.imgur.com/00sLtF7.png)

### Solutions

1. Maximize post-tax earnings. Write the dual.

[ChatGPT](https://chatgpt.com/share/f9d95e9f-72dc-4451-af32-e8a6b1a721a3)
```
/* Objective function */
max: 1.043 q1 + 1.054 q2 + 1.05 q3 + 1.044 q4 + 1.045 q5 ; // each of the 5 yields

/* Variable bounds */

// Govt + agency bonds
q2 + q3 + q4 >= 4;   

// Quality constraint
.6q1 + .6q2 - .4q3 - .4q4 + 3.6q5 <= 0;

// Maturity constraint
4q1 + 10 q2 - 1 q3 + - 2q4 - 3q5 <= 0;

// Available to invest
q1 + q2 + q3 + q4 + q5 <= 10;
```

### Dual

>The dual problem would involve finding the values of these dual variables that minimize the cost function while satisfying the corresponding dual constraints. Specifically, the dual variables can be interpreted as the marginal value of relaxing each constraint.

# Textbook examples

## P1 | Production Plan with Fixed Costs

### Resources
[Book: 3.1](https://play.google.com/books/reader?id=nWaFCgAAQBAJ&pg=GBS.PA31&hl=en)
[Week 3 | Monday YT Playlist](https://www.youtube.com/watch?v=8BnphwZJtBY&list=PL8uIP3DsMWIy_b3CxJ4WmfZyGMXULx0dj)
5. Ex: Production plan with fixed costs (reading problem)
6. Ex: Production plan with fixed costs (solve part 1).
7. Ex: Production plan with fixed costs (solve part 2).

### Problem

**Objective**: Min total cost (raw materials, labor and storage costs).

**Constraints**:
- **Labor**: \$12 per hour. Only worked hours are paid.
- **Each unit**: 30 minutes of labor.
- **Storage**: \$2 per unit at the end of each month.
- **Fixed cost**: \$1,000 for each month with production

**Other**:
- Units produced this month can carry over next month.
- No beginning stock
- No minimum stock requirements

|                          | Month 1 | Month 2 | Month 3 | month 4 |
| ------------------------ | ------- | ------- | ------- | ------- |
| Unit Cost (\$)           | 6       | 8       | 10      | 12      |
| Demand (units)           | 100     | 200     | 150     | 400     |
| **Available work hours** | 200     | 200     | 150     | 150     |

### Solution
Define decision variables, objective function, and constraints.

```r
# q = quantity produced in month i
# s = stock at the end of month i
# b = fixed cost

Minimize
  cost: 12q1 + 14q2 + 16q3 + 18q4 + 2s1 + 2s2 + 2s3 + 2s4 + 1000b1 + 1000b2 + 1000b3 + 1000b4
Subject To
  d1: q1 - s1 = 100
  d2: s1 + q2 - s2 = 200 # (stock month 1) + (produced month 2) - (stock month 2)
  d3: s2 + q3 - s3 = 150
  d4: s3 + q4 - s4 = 400
  
  l1: q1 - 400b1 <= 0    # (produced month 1) - (fixed cost)
  l2: q2 - 400b2 <= 0
  l3: q3 - 300b3 <= 0    # 300 because only 150 available hours
  l4: q4 - 300b4 <= 0
  
Binary
  b1
  b2
  b3
  b4
End
```

---

## P2 | A purchase plan with decreasing unit costs

### Resources

[Book: 3.2](https://play.google.com/books/reader?id=nWaFCgAAQBAJ&pg=GBS.PA31&hl=en)
[Week 3 | Monday YT Playlist](https://www.youtube.com/watch?v=8BnphwZJtBY&list=PL8uIP3DsMWIy_b3CxJ4WmfZyGMXULx0dj)
8. Ex: Purchase plan with decreasing unit costs

### Problem

**Objective**: Min cost (raw materials & storage costs).

**Constraints**:
- **Storage**: $2 per stored unit at the EoM.

**Other**:
- Units produced this month can carry over next month.
- No beginning stock
- No minimum stock requirements

**New offer**: After purchasing 200 units in a month, each additional unit will have a discounts of \$2.

|                | Month 1 | Month 2 | Month 3 | month 4 |
| -------------- | ------- | ------- | ------- | ------- |
| Unit Cost (\$) | 12      | 14      | 16      | 18      |
| Demand (units) | 150     | 200     | 250     | 150     |

### Solution

a. Define decision variables, objective function, and constraints.

```r

# q = quantity purchased leq 200
# r = quantity purchased > 200
# s = beginning stock
# b = binary, value of 1 when >200 were purchased

Minimize
  cost: 
  12q1 + 14q2 + 16q3 + 18q4 +  # cost w/o discount
  10r1 + 12r2 + 14r3 + 16r4 +  # cost w $2 discount
  2s1 + 2s2 + 2s3 + 2s4        # $2 storage fee
Subject To
  d1: q1 + r1 - s1 = 150       # demand month 1
  d2: s1 + q2 + r2 - s2 = 200
  d3: s2 + q3 + r3 - s3 = 250
  d4: s3 + q4 + r4 - s4 = 150
  l1: q1 - 200b1 >= 0          # have to purchase at least 200 for discount
  l2: q2 - 200b2 >= 0
  l3: q3 - 200b3 >= 0
  l4: q4 - 200b4 >= 0
  m1: r1 - 10000b1 <= 0     
  m2: r2 - 10000b2 <= 0
  m3: r3 - 10000b3 <= 0
  m4: r4 - 10000b4 <= 0
Bounds
  0 <= q1 <= 200  # expensive has to be purchased 1st
  0 <= q2 <= 200
  0 <= q3 <= 200
  0 <= q4 <= 200
Binary
  b1
  b2
  b3
  b4
End
```

---

## P3 | A Production Plan with Extra Capacity

### Resources

[Book: 3.3](https://play.google.com/books/reader?id=nWaFCgAAQBAJ&pg=GBS.PA31&hl=en)
[Week 3 | Wednesday YT Playlist](https://www.youtube.com/watch?v=i0Dv5S63YMU&list=PL8uIP3DsMWIygSH23C6vVIEzuOfqs-kr9&index=1)
1. Ex: A Production Plan with Extra Capacity (reading problem)
2. Ex: A Production Plan with Extra Capacity (solve part 1 & 2)
3. Ex: A Production Plan with Extra Capacity (read part 3)
4. Ex: A Production Plan with Extra Capacity (solve part 3)

### Problem

**Objective**: Min costs (production + storage)

**Constraints**:
- **Plant capacity**: 1,300 tonnes (t.) per month.
- **Storage costs** = \$2k per tonne stocked at EoM.
- **End stock month 4**: 200 tonnes

Others:
- Production can carryover months.
- Initial stock = 200 tonnes of finished, 0 of raw materials

|                | Month 1 | Month 2 | Month 3 | Month 4 |
| -------------- | ------- | ------- | ------- | ------- |
| Unit Cost (\$) | 3       | 8       | 6       | 7       |
| Demand (units) | 800     | 900     | 1200    | 1800    |

### Solution
1. Formulate and solve.

```r
Minimize
  cost: 3q1 + 8q2 + 6q3 + 7q4 + 2s1 + 2s2 + 2s3 + 2s4
Subject To
  d0: s0 = 200
  d1: q1 + s0 - s1 = 800
  d2: s1 + q2 - s2 = 900
  d3: s2 + q3 - s3 = 1200
  d4: s3 + q4 - s4 = 1800
  d5: s4 = 200
Bounds
  0 <= q1 <= 1300
  0 <= q2 <= 1300
  0 <= q3 <= 1300
  0 <= q4 <= 1300
End
```

2. What is the meaning of the dual variables of the constraints defined in the model?

3. Demand is irregular. Mgmt is considering adding extra capacity to the plant (ie, introducing a new shift).
	- **New plant capacity**: Extra 400 T (from 1300 to 1700.)
	- **New fixed cost**: \$500
	- It is not possible to add extra capacity in a month if it has been added in the previous month.
	- Modify the model obtained previously to include the possibility of including extra shifts, and assess the practicality of adding extra shifts.

```r
Minimize
  cost: 3q1 + 8q2 + 6q3 + 7q4 + 2s1 + 2s2 + 2s3 + 2s4 + 500b1 + 500b2 + 500b3 + 500b4
Subject To
  d0: s0 = 200
  d1: q1 + s0 - s1 = 800
  d2: s1 + q2 - s2 = 900
  d3: s2 + q3 - s3 = 1200
  d4: s3 + q4 - s4 = 1800
  d5: s4 = 200
  e1: q1 - 400b1 <= 1300
  e2: q2 - 400b2 <= 1300
  e3: q3 - 400b3 <= 1300
  e4: q4 - 400b4 <= 1300
Binary
  b1
  b2
  b3
  b4
End
```

## P4 | Transportation by Trucks

### Resources

[Book: 3.4](https://play.google.com/books/reader?id=nWaFCgAAQBAJ&pg=GBS.PA31&hl=en)
[Week 3 | Wednesday YT Playlist](https://www.youtube.com/watch?v=i0Dv5S63YMU&list=PL8uIP3DsMWIygSH23C6vVIEzuOfqs-kr9&index=1)

5. Ex: Transportation by Trucks (reading problem)
6. Ex: Transportation by Trucks (solving problem)

### Problem
- Obj: Min total costs (acquisition, storage & transport, obtaining raw materials, and trucks to be contracted)
- Table shows quarterly demand (in tonnes) & acquisition costs of raw materials (\$k per tonne)
- Can carryover.
- Stocking = \$8k per tonne stored at the end of each quarter.
- Begin stock = 100 tonnes
- Needed end stock = 100 tonnes

Transportation costs (for the raw materials):

- Small trucks: cost of \$700k, and capacity of 500 tonnes.
- Large trucks: cost of \$1400k, and capacity of 1,200 tonnes.

### Solution
Define the problem.

```r
Minimize
  cost: 20q1 + 25q2 + 30q3 + 40q4 + 8s1 + 8s2 + 8s3 + 8s4 + 700t1 + 700t2 + 700t3 + 700t4 + 1400u1 + 1400u2 + 1400u3 + 1400u4
Subject To
    sini: s0 = 100
    dem1: s0 + q1 - s1 = 1000
    dem2: s1 + q2 - s2 = 1200
    dem3: s2 + q3 - s3 = 1500
    dem4: s3 + q4 - s4 = 1800
    sfin: s4 = 100

    cap1: q1 - 500t1 - 1200u1 <= 0
    cap2: q2 - 500t2 - 1200u2 <= 0
    cap3: q3 - 500t3 - 1200u3 <= 0
    cap4: q4 - 500t4 - 1200u4 <= 0

Integer
    t1
    t2
    t3
    t4
    u1
    u2
    u3
    u4

End
```

## P5 | Production of two models of chairs

### Resources

[Book: 3.5](https://play.google.com/books/reader?id=nWaFCgAAQBAJ&pg=GBS.PA31&hl=en)
[Week 3 | Wednesday YT Playlist](https://www.youtube.com/watch?v=i0Dv5S63YMU&list=PL8uIP3DsMWIygSH23C6vVIEzuOfqs-kr9&index=1)
7. Reading problem
8. Solve part 1
9. Solve part 2
10. Solve part 3

### Problem
A company produces two models of chairs: 4P and 3P. The model 4P needs 4 legs, 1 seat and 1 back. On the other hand, the model 3P needs 3 legs and 1 seat. The company has a initial stock of 200 legs, 500 seats and 100 backs. If the company needs more legs, seats and backs, it can buy standard wood blocks, whose cost is \$80 per block. The company can produce 10 seats, 20 legs and 2 backs from a standard wood block.

The cost of producing the model 4P is \$30/chair, meanwhile the cost of the model 3P is \$40/chair. Finally, the company informs that the minimum number of chairs to produce is 1,000 units per month.

### Solution
1. Define a linear programming model, which minimizes the total cost (the production costs of the two chairs, plus the buying of new wood blocks). Answer: z = \$48,680

```r
Minimize
    cost: 80xwood + 30x4p + 40x3p
Subject To
    seats: x4p + x3p - 10xwood <= 500
    legs: 4x4p + 3x3p - 20xwood <= 200
    backs: x4p - 2xwood <= 100
    dem: x4p + x3p >= 1000
Integer
    x3p
    x4p
    xwood
End
```

2. Due to the economic crisis, the company has considered the possibility to just produce a single chair model between 3P and 4P. Define the new linear programming model for producing only a single chair model, which minimizes the total cost. Answer: z = \$51,200

```r
Minimize
    cost: 80xwood + 30x4p + 40x3p
Subject To
    seats: x4p + x3p - 10xwood <= 500
    legs: 4x4p + 3x3p - 20xwood <= 200
    backs: x4p - 2xwood <= 100
    dem: x4p + x3p >= 1000
    dec3: x3p - 1000decision <= 0
    dec4: x4p + 1000decision <= 1000
Integer
    x3p
    x4p
    xwood
Binary
    decision
End
```

3. Finally, the new CEO decided that the factory needs to produce of the model 4P a minimum of 4 times the quantity of the model 3P. Define the new linear programming model, which minimizes the total cost when producing 4P four times the quantity of 3P. Answer: z = \$60,000

```r
Minimize
    cost: 80xwood + 30x4p + 40x3p
Subject To
    seats: x4p + x3p - 10xwood <= 500
    legs: 4x4p + 3x3p - 20xwood <= 200
    backs: x4p - 2xwood <= 100
    dem: x4p + x3p >= 1000
    times: x4p - 4x3p >= 0
Integer
    x3p
    x4p
    xwood
End
```

## P6 | Hiring and Firing
### Resources
[Week 4 | Monday YT Playlist](https://www.youtube.com/watch?v=4RwptG8BKkI&list=PL8uIP3DsMWIx33yWHEYjXW2CCJoRkDGOF)
1. Ex: Hiring and Firing (reading)
2. Ex: Hiring and Firing (solve part 1)
3. Ex: Hiring and Firing (solve part 2)

[Book: 3.6](https://play.google.com/books/reader?id=nWaFCgAAQBAJ&pg=GBS.PA31&hl=en)

### Problem
Table 5 lists the need of the number of pilots able to fly a Boeing 787 for the following six months. The cost of a pilot’s salary is \$8k per month. At the beginning of Month 1 the airline has a staff of 20 pilots, but this staff can be adjusted each month.

|               | Month 1 | Month 2 | Month 3 | month 4 | month 5 | month 6 |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- |
| Needed pilots | 30      | 60      | 55      | 40      | 45      | 50      |

Pilots can be hired and fired at the beginning of each month. Newly hired pilots can start working at the same month, and fired pilots stop working the same day they are fired. The cost of firing a pilot is \$10k, and the hiring cost is of \$5k per pilot. If it is convenient, the airline can have a staff of pilots larger than the actual needs.

### Solution
1. Define a linear programming model to obtain the pilots to hire and fire each month to minimize the total cost of pilot staff (costs of salary plus hiring and firing costs). Answer: Total cost = \$2655k

```r
Minimize
  cost: 5h1 + 5h2 + 5h3 + 5h4 + 5h5 + 5h6 + 10f1 + 10f2 + 10f3 + 10f4 + 10f5 + 10f6 + 8s1 + 8s2 + 8s3 + 8s4 + 8s5 + 8s6
Subject To
    sini: s0 = 20
    sm1: s0 + h1 - f1 - s1 = 0
    sm2: s1 + h2 - f2 - s2 = 0
    sm3: s2 + h3 - f3 - s3 = 0
    sm4: s3 + h4 - f4 - s4 = 0
    sm5: s4 + h5 - f5 - s5 = 0
    sm6: s5 + h6 - f6 - s6 = 0
Bounds
  30 <= s1
  60 <= s2
  55 <= s3
  40 <= s4
  45 <= s5
  50 <= s6
End
```

2. Modify the linear model to include the constraint that the airline cannot fire pilots if it has hired pilots the previous month. Answer: Total cost = \$2695k

```r
Minimize
  cost: 5h1 + 5h2 + 5h3 + 5h4 + 5h5 + 5h6 + 10f1 + 10f2 + 10f3 + 10f4 + 10f5 + 10f6 + 8s1 + 8s2 + 8s3 + 8s4 + 8s5 + 8s6
Subject To
    sini: s0 = 20
    sm1: s0 + h1 - f1 - s1 = 0
    sm2: s1 + h2 - f2 - s2 = 0
    sm3: s2 + h3 - f3 - s3 = 0
    sm4: s3 + h4 - f4 - s4 = 0
    sm5: s4 + h5 - f5 - s5 = 0
    sm6: s5 + h6 - f6 - s6 = 0
    hf01: h1 - 1000b1 <= 0
    hf02: h2 - 1000b2 <= 0
    hf03: h3 - 1000b3 <= 0
    hf04: h4 - 1000b4 <= 0
    hf05: h5 - 1000b5 <= 0
    hf06: f2 + 1000b1 <= 1000
    hf07: f3 + 1000b2 <= 1000
    hf08: f4 + 1000b3 <= 1000
    hf09: f5 + 1000b4 <= 1000
    hf10: f6 + 1000b5 <= 1000
Bounds
  30 <= s1
  60 <= s2
  55 <= s3
  40 <= s4
  45 <= s5
  50 <= s6
Binary
b1
b2
b3
b4
b5
End
```

---

## P7 | Planning of Personnel Shifts

### Resources

[Book: 3.7](https://play.google.com/books/reader?id=nWaFCgAAQBAJ&pg=GBS.PA31&hl=en)
[Week 4 | Monday YT Playlist](https://www.youtube.com/watch?v=4RwptG8BKkI&list=PL8uIP3DsMWIx33yWHEYjXW2CCJoRkDGOF)
4. Ex: Planning of Personnel Shifts (reading)
5. Ex: Planning of Personnel Shifts (solving)

### Problem

A hospital has an emergency center that remains open 24 hours a day. Table 6 details the minimal needs of employees for each of the six shifts of four hours in which the day is divided.

Each of the employees of the emergency center works eight hours a day, covering two consecutive shifts of four hours. For instance, a given employee may start working at 20:00, and end working at 04:00.

![](https://i.imgur.com/BIVaXFh.png)

### Solution
1. You are asked to define a linear programming model that can define a planning of shifts to cover the minimal needs for each shift with a minimum number of employees.

```r
Minimize
  workforce: s1 + s2 + s3 + s4 + s5 + s6
Subject To
  t1: s6 + s1 >= 5
  t2: s1 + s2 >= 7
  t3: s2 + s3 >= 18
  t4: s3 + s4 >= 12
  t5: s4 + s5 >= 15
  t6: s5 + s6 >= 10
Integer
  s1
  s2
  s3
  s4
  s5
  s6
End
```