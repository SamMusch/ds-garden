## Examples

### Min cost

#### Primal Example: Min cost (Problem 1)

Meat loaf = beef (x) + pork (y). Minimize cost, keep the fat content <= 25%

Step 1: Define decision variables and quantity to be optimized as a mathematical function

- Beef costs 80 cents per pound, pork costs 60 cents
- $Obj: Min(Cost) = .8x + .6y$

Step 2: Define constraints mathematically

- $Fat: .2x + .32y \leq .25$ 

Step 3: Express hidden conditions (eg can't be negative, has to be integer, etc)

- $x >= 0, y >= 0$
- $x + y = 1$



<img src="https://i.imgur.com/HnyXvoV.jpg" style="zoom:50%;" />



```cplex
/* Objective function */
max: 300 X1 + 200 X2;

/* Variable bounds */
2 X1 + X2 <= 8;
X1 + 2 X2 <= 8;
```

---

### 1: Production

[Youtube](https://www.youtube.com/watch?v=q1gG1-RnZug&list=PL8uIP3DsMWIy_b3CxJ4WmfZyGMXULx0dj&index=6)

*End result is that we should produce 400, 400, 50, 0.*

*q1* = quantity to produce in 1st month

*s1* = quantity to stock at end of 1st month

| Month              | 1       | 2       | 3       | 4       |
| ------------------ | ------- | ------- | ------- | ------- |
| **Total Cost**     | **$12** | **$14** | **$16** | **$18** |
| Labor Cost         | $6      | $6      | $6      | $6      |
| Unit Cost          | $6      | $8      | $10     | $12     |
|                    |         |         |         |         |
| **Demand**         | **100** | **200** | **150** | **400** |
|                    |         |         |         |         |
| **Total Capacity** | **400** | **400** | **300** | **300** |
| Available Hours    | 200     | 200     | 150     | 150     |

- $2 for each unit not sold by end of month



Step 1: Define decision variables and quantity to be optimized as a mathematical function. We are looking to min cost of production and min cost of storage.

- $Obj: Z = Min(12q_1 + 14q_2 + 16q_3 + 18q_4 + 2s_1 + 2s_2 + 2s_3 + 2s_4)$

Step 2: Define constraints mathematically. In this case, the constraints are our demand.

- (Month 1)   |  $q_1 - s_1 = 100$
- (Month 2)   |  $s_1 + q_2 - s_2 = 200$
- (Month 3)   |  $s_2 + q_3 - s_3 = 150$
- (Month 4)   |  $s_3 + q_4 - s_4 = 400$

Step 3: Express hidden conditions (eg can't be negative, has to be integer, etc)

- (Total capacity constraints)  |  $q_1 \leq 400, q_2 \leq 400, q_3 \leq 300, q_4 \leq 300$
- (Non-negative)  |  Each $s$ can't be negative, each $q$ can't be negative

```
/* Objective function */
min: 12q1 + 14q2 + 16q3 + 18q4 + 2s1 + 2s2 + 2s3 + 2s4;

/* Variable bounds */
c1: q1-s1 =100;
c2: s1+q2-s2=200;
c3: s2+q3-s3=150;
c4: s3+q4-s4=400;
c5: q1-400<=0;
c6: q2-400<=0;
c7: q3-300<=0;
c8: q4-300<=0;
```

---

[Youtube](https://www.youtube.com/watch?v=_VpKE4Lou_w&list=PL8uIP3DsMWIy_b3CxJ4WmfZyGMXULx0dj&index=7)

Now we are making a slight adjustment: there is a fixed cost every month for $1,000 if we produce anything.

*End result is that we should produce 150, 400, 300, 0.*

Adjustments:

- (Obj function) Add $1000b_i$
- (Total capacity constraints, c5:c8)  |  Multiply $b_i$ with capacity values

```
/* Objective function */
min: 12q1 + 14q2 + 16q3 + 18q4 + 2s1 + 2s2 + 2s3 + 2s4  + 1000b1 + 1000b2 + 1000b3 + 1000b4;

/* Variable bounds */
c1: q1 - s1 = 100;
c2: s1 + q2 - s2 = 200;
c3: s2 + q3 - s3 = 150;
c4: s3 + q4 - s4 = 400;
c5: q1 - 400b1 <= 0;
c6: q2 - 400b2 <= 0;
c7: q3 - 300b3 <= 0;
c8: q4 - 300b4 <= 0;

bin b1;
bin b2;
bin b3;
bin b4;
```

---

### 2: Purchasing, Decreasing Costs

[Youtube](https://www.youtube.com/watch?v=D8migSjrxQw&list=PL8uIP3DsMWIy_b3CxJ4WmfZyGMXULx0dj&index=8)

*$q_1$* = quantity to purchase in 1st month $\leq 200$

*$r_1$* = quantity to purchase in 1st month $> 200$

*$s_1$* = quantity to stock at end of 1st month

*$b_1$* = 1 if we should go above 200 in the month

| Month                            | 1       | 2       | 3       | 4       |
| -------------------------------- | ------- | ------- | ------- | ------- |
| **Unit Cost (before 200 units)** | **$12** | **$14** | **$16** | **$18** |
| **Unit Cost (after 200 units)**  | **$10** | **$12** | **$14** | **$16** |
| **Total Capacity**               | **200** | **200** | **200** | **200** |
| **Demand**                       | **150** | **200** | **250** | **150** |

- All units purchased above 200 in any given month will have a discounts of $2



Step 1: Define decision variables and quantity to be optimized as a mathematical function. 

$Obj: Z \\ = Min(12q_1 + 14q_2 + 16q_3 + 18q_4 \\ + 2s_1 + 2s_2 + 2s_3 + 2s_4 \\ + 10r_1 + 12r_2 + 14r_3 + 16r_4)$

Step 2: Define constraints mathematically. 

- (Month 1)   |  $q_1 + r_1 - s_1 = 150$
- (Month 2)   |  $s_1 + q_2 + r_2 - s_2 = 200$
- (Month 3)   |  $s_2 + q_3 + r_3 - s_3 = 250$
- (Month 4)   |  $s_3 + q_4 + r_4 - s_4 = 150$

Step 3: Express hidden conditions (eg can't be negative, has to be integer, etc)

- (Total capacity constraints)  |  $q_1 \leq 200, q_2 \leq 200, q_3 \leq 200, q_4 \leq 200$
- (Non-negative)  |  Each $s$ can't be negative, each $q$ can't be negative
- We are going to say that $r_i$ has to be less than some huge number to make sure we don't hit infinity

```
/* Objective function */
min: 12 q1 + 14 q2 + 16 q3 + 18 q4 + 10 r1 + 12 r2 + 14 r3 + 16r4 + 2s1 + 2s2 + 2s3 + 2s4;

/* Variable bounds */
d1: q1 +r1 - s1 = 150;
d2: s1 + q2 + r2 - s2 = 200;
d3: s2 + q3 + r3 - s3 = 250;
d4: s3 + q4 + r4 - s4 = 150;
l1: q1 - 200 b1 >= 0;
l2: q2 - 200 b2 >= 0;
l3: q3 - 200 b3 >= 0;
l4: q4 - 200 b4 >= 0;
m1: r1 - 10000 b1 <= 0;
m2: r2 - 10000 b2 <= 0;
m3: r3 - 10000 b3 <= 0;
m4: r4 - 10000 b4 <= 0;

0 <= q1 <= 200;
0 <= q2 <= 200;
0 <= q3 <= 200;
0 <= q4 <= 200;

bin b1;
bin b2;
bin b3;
bin b4;
```

---

### 3: Production, Increasing Costs

[Youtube](https://www.youtube.com/watch?list=PL8uIP3DsMWIygSH23C6vVIEzuOfqs-kr9&v=i0Dv5S63YMU&feature=emb_title)

- Monthly capacity = 1,300 tonnes
- Storage cost = $2k per tonne
- Initial stock = 200 tonnes
- Ending stock = need to have 200 tonnes

![](https://i.imgur.com/ubrVM8u.png)

- $q$ = tonnes to produce
- $s$ = tonnes to stock at end of each month

Step 1: Define decision variables and quantity to be optimized as a mathematical function.

- $Obj: Z \\ = Min(3q_1 + 8q_2 + 6q_3 + 7q_4 \\ + 2s_1 + 2s_2 + 2s_3 + 2s_4)$



Step 2: Define constraints mathematically. In this case, the constraints are our demand.

- For the following 4 months: $Starting \: stock + q_i = demand + s_i$
- (Month 1)   |  $200 + q_1 = 800 + s_1$
- (Month 2)   |  $s_1 + q_2 = 900 + s_2$
- (Month 3)   |  $s_2 + q_3 = 1200 + s_3$
- (Month 4)   |  $s_3 + q_4 = 1800 + s_4$
- (Starting)   |   $s_0 = 200$
- (Ending)     |   $s_4 = 200$



Step 3: Express hidden conditions (eg can't be negative, has to be integer, etc)

- (Total capacity constraints)  |  $q_1, q_2, q_3, q_4 \leq 1300$
- (Min production))  |  $q_1, q_2, q_3, q_4 \geq 0$
- (Storage non-negative)  |  $s_i \geq 0$

```
/* Objective function */
min: 3q1+8q2+6q3+7q4+2s1+2s2+2s3+2s4;

/* Variable bounds */
d0: s0=200;
d1: q1+s0-s1=800;
d2: s1+q2-s2=900;
d3: s2+q3-s3=1200;
d4: s3+q4-s4=1800;
d5: s4=200;

0<=q1<=1300;
0<=q2<=1300;
0<=q3<=1300;
0<=q4<=1300;
```

*What is the meaning of the dual variables of the constraints defined in the model?*

The dual variables here are what we looked at in Step 2 and Step 3. Generally, they each show how a marginal change in the constraint (the RHS) will impact our objective function.

(For demand, Step 2) Here, they show how cost (our objective function) increases as we increase demand (our constraint).

(For capacity, Step 3) Here they show how our total cost (the objective function) decreases as we relax the available amount we can produce each month.

---

#### b. Add new shift

- Should we add a new shift? 
  - Would increase plant capacity in 400 tonnes per month
  - Would include an extra fixed cost of $500k 
  - For legal reasons, it is not possible to add extra capacity in a month if it has been added in the previous month.



Step 1: Define decision variables and quantity to be optimized as a mathematical function.

$Obj: Z \\ = Min(3q_1 + 8q_2 + 6q_3 + 7q_4 \\ + 2s_1 + 2s_2 + 2s_3 + 2s_4\\ + 500(b_1 + b_2 + b_3 + b_4)$



Step 2: Define constraints mathematically. In this case, the constraints are our demand.

- For the following 4 months: $Starting \: stock + q_i = demand + s_i$
- (Month 1)   |  $200 + q_1 = 800 + s_1$
- (Month 2)   |  $s_1 + q_2 = 900 + s_2$
- (Month 3)   |  $s_2 + q_3 = 1200 + s_3$
- (Month 4)   |  $s_3 + q_4 = 1800 + s_4$
- (Starting)   |   $s_0 = 200$
- (Ending)     |   $s_4 = 200$



Step 3: Express hidden conditions (eg can't be negative, has to be integer, etc)

- (Total capacity constraints) 
  - $q_1 \leq 1300 + 400b_1$
  - $q_2 \leq 1300 + 400b_2$
  - $q_3 \leq 1300 + 400b_3$
  - $q_4 \leq 1300 + 400b_4$
- (Min production))  |  $q_1, q_2, q_3, q_4 \geq 0$
- (Storage non-negative)  |  $s_i \geq 0$
- $b_1$ = binary
- (Binary alternating constraint)
  - $b_1 + b_2 \leq 1$
  - $b_2 + b_3 \leq 1$
  - $b_3 + b_4 \leq 1$

```
/* Objective function */
min: 3q1+8q2+6q3+7q4+2s1+2s2+2s3+2s4+500b1+500b2+500b3+500b4;

/* Variable bounds */
d0: s0=200;
d1: q1+s0-s1=800;
d2: s1+q2-s2=900;
d3: s2+q3-s3=1200;
d4: s3+q4-s4=1800;
d5: s4=200;

q1-400b1<=1300;
q2-400b2<=1300;
q3-400b3<=1300;
q4-400b4<=1300;
b1+b2<=1;
b2+b3<=1;
b3+b4<=1;
bin b1;
bin b2;
bin b3;
bin b4;
```

---

### 4: Transportation

[Youtube](https://www.youtube.com/watch?v=Ci4wmBHDgxU&list=PL8uIP3DsMWIygSH23C6vVIEzuOfqs-kr9&index=5)

- Storage cost = $8k per tonne
- Initial stock = 100 tonnes
- Ending stock = needs to be 100 tonnes
- Small trucks
  - Cost = $700k
  - Capacity = 500 tonnes
- Large trucks
  - Cost = $1,400k
  - Capacity = 1,200 tonnes



![](https://i.imgur.com/QN2EBSO.png)

- $q$ = tonnes to produce
- $s$ = tonnes to stock at end of each month
- $t$ = number of small trucks
- $u$ = number of large trucks



Step 1: Define decision variables and quantity to be optimized as a mathematical function.

$Obj: Min \: Z = \sum c_i * q_i + 8s_i + 700k_i + 1400u_i$



Step 2: Define constraints mathematically. In this case, the constraints are our demand.

- For the following 4 quarters: Last quarter stock + quantity we produce = demand + ending stock

- (Demand)  |  $s_{i-1} + q_i = d_i+ s_i$

- (Demand re-written)  |  $s_{i-1} + q_i  - s_1 = d_i$

- (Starting)   |   $s_0 = 100$

- (Ending)     |   $s_4 = 100$

  

Step 3: Express hidden conditions (eg can't be negative, has to be integer, etc)

- (Trucks)      |   $q_i \leq 500t_i + 1200u_i$

- (Min production))  |  $q_1, q_2, q_3, q_4 \geq 0$

- (Storage non-negative)  |  $s_i \geq 0$

  

```
/* Objective function */
min:20 q1 + 25 q2 + 30 q3 + 40 q4 + 8 s1 + 8 s2 + 8 s3 + 8 s4 + 700 t1 + 700 t2 + 700 t3 + 700 t4 + 1400 u1 + 1400 u2 + 1400 u3 + 1400 u4 ;


/* Variable bounds */
s0 = 100;
s0 + q1 - s1 = 1000;
s1 + q2 - s2 = 1200;
s2 + q3 - s3 = 1500;
s3 + q4 - s4 = 1800;
q1 - 500 t1 - 1200 u1 <= 0;
q2 - 500 t2 - 1200 u2 <= 0;
q3 - 500 t3 - 1200 u3 <= 0;
q4 - 500 t4 - 1200 u4 <= 0;
s4 = 100;
int t1;
int t2;
int t3;
int t4;
int u1;
int u2;
int u3;
int u4;

```



---

### 5: Building Products

- Can buy wood for $80 / block
  - 1 block = 10 seats, 20 legs, 2 backs
- Need to produce at least 1k chairs

![](https://i.imgur.com/8uxJwWs.png)

Step 1: Define decision variables and quantity to be optimized as a mathematical function.

$Obj: Z = Min(30q_1 + 40q_2 + 80q_3)$



Step 2: Define constraints mathematically.

- (Legs)   |  $4q_1 + 3q_2 \leq 200 + 10q_3$

- (Seats)   |  $q_1 + q_2 \leq 500 + 20q_3$

- (Backs)   |  $q_1 \leq 100 + 2q_3$

- (Demand)   |  $q_1 + q_2 \geq 1000$

  

Step 3: Express hidden conditions (eg can't be negative, has to be integer, etc)

- (Integer and non-neg)      |   $q_1, q_2, q_3 \geq 0$
- (Min production)  |  $q_1 + q_2 \geq 1000$

```
/* Objective function */
min: 80q3 + 30q1 + 40q2;

/* Variable bounds */

q1 + q2 - 10q3 <= 500;
4q1 + 3q2 - 20q3 <= 200;
q1 - 2q3 <= 100;
q1 + q2 >= 1000;

int q2;
int q1;
int q3;
```





---

#### b. Only Make 1 Product

In order to get the program to choose between $q_1$ and $q_2$, we are going to use "M" as a large number to make the cost of producing both look huge. This is translated in "Additional constaints" below.

- $q_1 \leq = M * b$      and also that     $q_2 \leq M(1 - b)$

  

Additional constraints

- $b$ is binary
- $q_2 - 10,000*b \leq 0$
- $q_1 + 10,000 * b \leq 10,000$

```
/* Objective function */
min: 80q3 + 30q1 + 40q2;

/* Variable bounds */

q1 + q2 - 10q3 <= 500;
4q1 + 3q2 - 20q3 <= 200;
q1 - 2q3 <= 100;
q1 + q2 >= 1000;

q1 - 10000b<=0;
q2 + 10000b<=10000;

int q2;
int q1;
int q3;

bin b;
```

---

#### c. 4x more

The CEO wants to produce 4 times more Model A than Model B.

Additional constraints (relative to Part 2)

- $4 * q_2 \leq q_1$

```
/* Objective function */
min: 80q3 + 30q1 + 40q2;

/* Variable bounds */
q1 + q2 - 10q3 <= 500;
4q1 + 3q2 - 20q3 <= 200;
q1 - 2q3 <= 100;
q1 + q2 >= 1000;

q1 - 4q2 >= 0;

int q2;
int q1;
int q3;

```



---

### 6: Hiring and Firing

- Salary = 8k per month
- Initial staff = 20 people
- Cost of firing = $10k
- Cost of hiring = $5k
- We need to at least meet demand

![](https://i.imgur.com/KK8zpB7.png)

- $h$ = number of pilots we hired last month
- $f$ = number of pilots we fired last month
- $s$ = number of pilots during the month



Step 1: Define decision variables and quantity to be optimized as a mathematical function.

$Obj: Z = Min \:\: \sum5h_i + \sum10f_i + \sum8s_i$



Step 2: Define constraints mathematically.

- (Per month)   |  $s_i = h_i - f_i + s_{i-1}$




Step 3: Express hidden conditions (eg can't be negative, has to be integer, etc)

- (Starting)   |  $s_0 = 20$
- (Demand)   |   $s_i \geq d_i$
- (Non-neg)   |   $h, f, s \geq 0$

```
min: 5 h1 + 5 h2 + 5 h3 + 5 h4 + 5 h5 + 5 h6 + 10 f1 + 10 f2 + 10 f3 + 10 f4 + 10 f5 + 10 f6 + 8 s1 + 8 s2 + 8 s3 + 8 s4 + 8 s5 + 8 s6;

/* Variable bounds */
sini: s0 = 20;
sm1: s0 + h1 - f1 - s1 = 0;
sm2: s1 + h2 - f2 - s2 = 0;
sm3: s2 + h3 - f3 - s3 = 0;
sm4: s3 + h4 - f4 - s4 = 0;
sm5: s4 + h5 - f5 - s5 = 0;
sm6: s5 + h6 - f6 - s6 = 0;

 s1 - 30 >= 0;
 s2 - 60 >= 0;
 s3 - 55 >= 0;
 s4 - 40 >= 0;
 s5 - 45 >= 0;
 s6 - 50 >= 0;
```



#### b. New constraint

Can't fire if we hired last month

Generally, we are setting a binary variable that has $b_i = 1$ if we hired in the month and a corresponding $f_{i+1} = 0$ if we did.

We do this by adding in a large number as "M" which will make it look extremely expensive to hire and then fire. We are setting "M" as 1000 in the code below.

- (Hire this month)   |   $h_i \leq Mb_i$
- (Fire next month)   |   $f_{i+1} \leq M(1- b_i)$

```
/* Objective function */
min: 5 h1 + 5 h2 + 5 h3 + 5 h4 + 5 h5 + 5 h6 + 10 f1 + 10 f2 + 10 f3 + 10 f4 + 10 f5 + 10 f6 + 8 s1 + 8 s2 + 8 s3 + 8 s4 + 8 s5 + 8 s6;

/* Variable bounds */
sini: s0 = 20;
sm1: s0 + h1 - f1 - s1 = 0;
sm2: s1 + h2 - f2 - s2 = 0;
sm3: s2 + h3 - f3 - s3 = 0;
sm4: s3 + h4 - f4 - s4 = 0;
sm5: s4 + h5 - f5 - s5 = 0;
sm6: s5 + h6 - f6 - s6 = 0;
hf01: h1 - 1000 b1 <= 0; /*if you hire in month 1 ie b1 = 1 */
hf02: h2 - 1000 b2 <= 0;
hf03: h3 - 1000 b3 <= 0;
hf04: h4 - 1000 b4 <= 0;
hf05: h5 - 1000 b5 <= 0;
hf06: f2 + 1000 b1 <= 1000;  /* you cannot fire in month 2 since f2 = 0 */
hf07: f3 + 1000 b2 <= 1000;
hf08: f4 + 1000 b3 <= 1000;
hf09: f5 + 1000 b4 <= 1000;
hf10: f6 + 1000 b5 <= 1000;

 s1 - 30 >= 0;
 s2 - 60 >= 0;
 s3 - 55 >= 0;
 s4 - 40 >= 0;
 s5 - 45 >= 0;
 s6 - 50 >= 0;

int h1,h2,h3,h4,h5,h6,f1,f2,f3,f4,f5,f6;
bin b1,b2,b3,b4,b5,b6;
```



---

### 7: Shift Planning

- 6 shifts, 4 hours each
- Each person works 2 consecutive shifts

<img src="https://i.imgur.com/F4eutX5.png" style="zoom:50%;" />

$s_i$ = employees per shift



Step 1: Define decision variables and quantity to be optimized as a mathematical function.

$Obj: Z = Min \:\: \sum s_i $



Step 2: Define constraints mathematically.

- (Per shift) 
  - $s_6 + s_1 \geq 5$ 
  - $s_1 + s_2 \geq 7$
  - $ s_2 + s_3 \geq 18$
  - $s_3 + s_4 \geq 12$ 
  - $s_4 + s_5 \geq 15$ 
  - $s_5 + s_6 \geq 10$



Step 3: Express hidden conditions (eg can't be negative, has to be integer, etc)

- (Int and non-neg)   |  $s_i \geq 0$

```
/* Objective function */
min:s1 + s2 + s3 + s4 + s5 + s6 ;

/* Variable bounds */
s6 + s1 >= 5;
s1 + s2 >= 7;
s2 + s3 >= 18;
s3 + s4 >= 12;
s4 + s5 >= 15;
s5 + s6 >= 10;
int s1;
int s2;
int s3;
int s4;
int s5;
int s6;
```

---

### 8: Employee day planning

[Youtube](https://www.youtube.com/watch?v=tGfDYeXQT74&list=PL8uIP3DsMWIx33yWHEYjXW2CCJoRkDGOF&index=6)

- Each person must work 5 consecutive days and then take 2 consecutive days off

![](https://i.imgur.com/3E3u5Ar.png)

$s_i$ = number of employees that start working per day, Monday is $s_1$



Step 1: Define decision variables and quantity to be optimized as a mathematical function.

$Obj: Z = Min \:\: \sum s_i $



Step 2: Define constraints mathematically.

- (Monday)   |    $s_1 + s_4 + s_5 + s_6 + s_7 \geq 17$ 
  - This is everyone except for people who started working on Tuesday and Wednesday



Step 3: Express hidden conditions (eg can't be negative, has to be integer, etc)

- (Int and non-neg)   |  $s_i \geq 0$

```
/* Objective function */
min: x1+x2+x3+x4+x5+x6+x7;

/* Variable bounds */
x1+x4+x5+x6+x7 >= 17;
x1+x2+x5+x6+x7 >=13;
x1+x2+x3+x6+x7 >=15;
x1+x2+x3+x4+x7 >=19;
x1+x2+x3+x4+x5 >=14;
x2+x3+x4+x5+x6 >=16;
x3+x4+x5+x6+x7 >=11;

int x1,x2,x3,x4,x5,x6;
```



---

### 9: Assignment Maximizing Quality

<img src="https://i.imgur.com/XcN6S0m.png" style="zoom:50%;" />

- 1 course per teacher

```
/* Objective function */
max: 34 b11 + 87 b12 + 26 b13 + 47 b14 + 76 b15
+ 43 b21 + 90 b22 + 24 b23 + 63 b24 + 97 b25
+ 60 b31 + 65 b32 + 64 b33 + 83 b34 + 54 b35
+ 89 b41 + 62 b42 + 39 b43 + 37 b44 + 18 b45
+ 27 b51 + 15 b52 + 69 b53 + 93 b54 + 96 b55;

/* Variable bounds */
 b11 + b12 + b13 + b14 + b15 = 1;
 b21 + b22 + b23 + b24 + b25 = 1;
 b31 + b32 + b33 + b34 + b35 = 1;
 b41 + b42 + b43 + b44 + b45 = 1;
 b51 + b52 + b53 + b54 + b55 = 1;
 b11 + b21 + b31 + b41 + b51 = 1;
 b12 + b22 + b32 + b42 + b52 = 1;
 b13 + b23 + b33 + b43 + b53 = 1;
 b14 + b24 + b34 + b44 + b54 = 1;
 b15 + b25 + b35 + b45 + b55 = 1;
```



---

### 10: Investment

- Investing for 3 years
- Balance at year 0 = $100k
- "-1" means an investment became available
- $75k max per investment
- Could earn 8% annually if using money market acct instead
- A, C, D are available at t=0

<img src="https://i.imgur.com/6nDgDHj.png" style="zoom:50%;" />



Step 1: Define decision variables and quantity to be optimized as a mathematical function.

$Obj: Z = Max \:\: 1B + 1.9D + 1.5E + 1.08S_2$ 

- We are looking to maximize the values of cash inflow at time period 3 - Note that we are moving from time period 2 to time period 3 in this setup

```
/* Objective function */
max: B + 1.9 D + 1.5 E + 1.08 S2;

/* Variable bounds */
A + C + D + S0 - 100000 = 0;       /* t=0 */

0.5A + 1.2C + 1.08S0 - B - S1 = 0; /* t=1 */

A + 0.5B + 1.08S1 - E - S2 = 0;   /* t=2 */

A<=75000;
B<=75000;
C<=75000;
D<=75000;
E<=75000;
```

---

### 11: Short term production

We are trying to determine how much to produce in December. 

- Dec 1, 2002 - Raw materials able to produce
  - 100 tape recorders
  - 100 radios
- Current ratio = 20k / 10k = 2
- December - We must pay 1k loan and 1k rent
- December - We will be paid 2k from previous A/R
- January 1 - Cash balance must be at least 4k

- January 1 - Current ratio must be at least 2
- January - Will receive raw materials worth 2k
- February - Payments from December will be received

<img src="https://i.imgur.com/swDl9im.png" style="zoom:50%;" />



$x_1$ = tape recorders to produce

$x_2$ = radios to produce

Profit from tape recorder = $100 - 50 - 30 = 20$

Profit from radio = $90 - 35 - 40 = 15$

Jan 1 cash = 10k 

- $Dec \: 1 \: cash + Dec \: AR \: collect  - loan \: pay - Dec \: rent \: - Dec \: labor$

Jan 1 AR = $1000 + 100x_1 + 90x_2$

- $Dec \: 1 \: AR + Dec \: sales \: AR - Dec \: collected \: AR$

Jan 1 inventory = $9000 - 30x_1 - 40x_2$

- $Dec \: 1 \: inventory - Dec \: inventory \: used + Jan \: 1 \: inventory \: received$

Jan 1 assets = $20000 + 20x_1 + 15x_2$

- Jan 1 cash + Jan 1 AR + Jan 1 inventory

Jan 1 liable = $11000$

- Dec 1 liable - Dec loan pmt + amt due for inventory shipment

Bank: $20x_1 + 15x_2 \geq 2000$

- Assets / liable $\geq$ 2

```
/* Objective function */
max: 20x1 + 15x2;


/* Variable bounds */
x1 <= 100;             /* Capacity */
x2 <= 100;             /* Capacity */

50x1 + 35x2 <= 6000;   /* Labor and Jan 1 cash */
20x1 + 15x2 >= 2000;   /* Liquid */

int x1, x2;
```



---

### 12: Loans

<img src="https://i.imgur.com/cVlOHvC.png" style="zoom:50%;" />



```
/* Objective function */
max: 0.026x1 + 0.0509x2 + 0.0864x3 + 0.06875x4 + 0.078x5;

/* Variable bounds */
x1 + x2 + x3 + x4 + x5 <= 10;
0.3x1 + 0.3x2 + 0.3x3 - 0.7x4 - 0.7x5 <= 0;
0.4x1 + 0.4x2 - 0.6x3 <= 0;
0.06x1 + 0.03x2 - 0.01x3 + 0.01x4 - 0.02x5 <= 0;
```



---

### 13: Distances

<img src="https://i.imgur.com/V1dTxDw.png" style="zoom:50%;" />

```
/* Objective function */
min: 21 x14 +50 x15 +40 x16 +35 x24 +30 x25 + 22 x26 +55 x34 +20 x35 +25x36;

/* Variable bounds */
x14 +x24 +x34 <=200000;
x15 +x25 +x35 <=600000;
x16 +x26 +x36 <=225000;

x14 +x15 +x16 = 275000;
x24 +x25 +x26 = 400000;
x34 +x35 +x36 = 300000;
```



# R

**Primal**

```R
library(lpSolve) # https://cran.r-project.org/web/packages/lpSolve/lpSolve.pdf

# Profit of beer and ale
obj_fun <- c(13, 23)

constr_eq <- matrix(c(5,15,    # corn
                      4,4,     # hops
                      35,20),  # malt
                      ncol=2, byrow=T)

constr_dir <- c("<=", "<=", "<=")

# Available quantities
constr_rhs <- c(480, 160, 1190)

solution <- lp("max", 
               obj_fun, 
               constr_eq, 
               constr_dir, 
               constr_rhs)

solution$objval    # profit
solution$solution  # quant of each
```



**Dual**

```R
library(lpSolve) # https://cran.r-project.org/web/packages/lpSolve/lpSolve.pdf

# Available quantities
obj_fun <- c(480, 160, 1190)

constr_eq <- matrix(c(5,15,    # corn
                      4,4,     # hops
                      35,20),  # malt
                      nrow=2, byrow=F)

constr_dir <- c(">=", ">=")

# Available quantities
constr_rhs <- c(13, 23)

solution <- lp("min", 
               obj_fun, 
               constr_eq, 
               constr_dir, 
               constr_rhs)

solution$objval    # profit
solution$solution  # quant of each
```



### R Example: Furniture (Problem 3)

<img src="https://i.imgur.com/KHTXnW9.jpg" style="zoom:25%;" />

<img src="https://i.imgur.com/5lirwXD.png" style="zoom:25%;" />



### R Example: Production (Problem 2)



<img src="https://i.imgur.com/pn38dnZ.jpg" style="zoom:15%;" />

<img src="https://i.imgur.com/XIgWrjK.png" style="zoom:25%;" />

<img src="https://i.imgur.com/4NPfm1c.png" style="zoom:25%;" />



