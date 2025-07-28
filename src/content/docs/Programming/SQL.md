---
published: true
---

Books

- SQL Queries for Mere Mortals by John Viescas
- Datab Design, Application Developmen and Administration by Michael Mannino

Overview and Setup
================

Mannino 3.1-3.3 (pg 68)

## Terms and Overview

SQL is...  

- **Relational**: only works with tables  
- **Nonprocedural**: user says what to do, but not how  
- **Unified**: All SQL user use the same language

DDL (Definition): setting up a database
DML (Manipulation): query the database
DCL (Control): admin control

<img src="https://i.imgur.com/ISQBQvy.png" width="400px" />

Table-Oriented = end users
Set-oriented = academics
Record-oriented = info sys professions

<img src="https://i.imgur.com/J4oB8j1.png" width="400px" />

### Entity

A single table

- One subject
- PK: enforce table integrity, help establish relationships
- No nulls in any primary key
  - **Super** key = name for the columns with unique values (primary key if just 1)
  - **Candidate** key = min needed column to keep the unqiues columns still unqiue
  - **Foreign** key = usually matches the primary key from parent table. Nulls are okay if foreign was not the primary from the parent  
  - **Unique** keys = candidate keys that are not primary keys

### Reference

(connections)

- For each related table, needs to be a 'matching' column
- Can't create a row in child table if no link to parent table. (Exception: There can be a null value in child table)

Deletion rules

- Restrict deletion rule = have to delete child rows first if you want to delete parent row (usually default)
- Cascade deletion rule = delete parent row, auto deletes child rows
- Nullify = when deleting child rows, sets foreign keys of those rows as null
- Default = when deleting child rows, sets foreign keys of those rows as its default

We can use an existing column as primary key iff..

- Each row reps a single instance of the purpose of the table
- Each row in the unique column has a different + single value
- Won't ever contain unknown values, optional values, values that can be modified

### Relationships

- **1-to-1**: each row in parent only related to one row in child
- **1-to-many**: each row in parent related to multiple rows in child
- **Many to many**: each row in parent related to many rows in child, and each row in child related back to many rows in parent
  - Linking table --> created with a composite of each tables' primary key

## Data Types

Cast converts a literal into another data type

- CHAR(L): fixed length entries, L reps max number of chars
- VARCHAR(L)
- FLOAT(P): P is the number of sig figs
- DATE/TIME
- DECIMAL(W, R): W is total digits, R is digits after decimal
- INTEGER
- BOOLEAN

## DDL

- If you `UPDATE` without a `WHERE` clause, all columns will be updated
- `DROP database` will delete entire database + data
- You can't drop a table if it has active references to other tables

```sql
# Create database
CREATE DATABASE students;
USE students;

# Create table
# If we use auto_inc we don't need to assign the numbers
DROP TABLE IF EXISTS Student;
CREATE TABLE Student (
stdid INTEGER NOT NULL AUTO_INCREMENT PRIMARY KEY
FOREIGN KEY (column) REFERENCES table (Column));

# Alter table
ALTER TABLE Student ADD COLUMN phone CHAR(12) NULL;
```

#  Querying

## Text

```mysql
# Partial matching
LIKE '%Minnesota%'

# Exact matching
NOT IN ('CA', 'NV', 'OR')

# Change data type
CAST(RetailPrice AS CHARACTER(8))

# Concat
concat(first, ', ', second) AS vendor_address

# Substring
SUBSTR(vendor_contact_last_name, 1, 1) # start, length

# End with one of the following
.. where vendor_name REGEXP "(Inc|Corporation|Co)$";

# Include "of" (between)
.. where vendor_name REGEXP "  :<:.md  of  :>:.md  ";

# ends with 5 digit number
.. where REGEXP ':<:.md  :digit:.md{5}  $';

# Regex
-- ^  begin        
-- $ end      
-- | or

-- :<:.md  match begin        
-- :>:.md  match end
-- [abc]    match one
-- [^xyz]   many any not here

# Characters
-- [:digit:] 
-- [:alpha:] 
-- [:space:] 
-- [:punct:] 
-- [:upper:] 
-- [:alnum:]

# Matching
-- {3}      match 3 times
-- {3,5}    match 3 - 5 times
-- {3,}     match 3+ times
-- . match any       
-- ?  match 0 or 1         
-- * match 0+          
-- +  match 1+
```

## Case (Ch 19)

Types:

- **Simple**: Simply an "equals" test, can not handle nulls. Can only be done on one column.
- **Searched**: Anything we can specify in a "join", "where", or "having"

```sql
# Simple
select ..,
	CASE col + col2
	WHEN 0 THEN 'Not Paid'
	WHEN invoice_total THEN 'Paid In Full'
	ELSE 'Partial Paid' END as pmt_status

# Searched / complex
select ..,
	CASE 
	WHEN col + col2 = col_name THEN 'Paid In Full'
	WHEN col + col2 = 0 THEN 'Not Paid'
  ELSE 'Partial Paid' END as pmt_status
```

## Dates

https://dev.mysql.com/doc/refman/8.0/en/date-and-time-functions.html

```mysql
# Year month day
BETWEEN '2014-05-01' AND '2014-05-31';

# Days
DATEDIFF(CURRENT_DATE, '2001-09-11');

# Years
TIMESTAMPDIFF(YEAR,  '2001-09-11', CURRENT_DATE);

DATE_ADD('2014-04-01', INTERVAL 60 DAY)

# Weekends
WHERE DAYOFWEEK(invoice_date) IN (1,7);
WHERE WEEKDAY(invoice_date) IN (5,6);
```

## Theory

**SQL Select**
<img src="https://i.imgur.com/Ldt6m6Q.png" width="400px" />

<img src="https://i.imgur.com/btRY6tQ.png" style="zoom:37%;" />

![](https://i.imgur.com/QP5KbDE.png)

# Joins

**Basic Joins**

```mysql
# Basic
SELECT a.col, b.col 
FROM a
JOIN b ON a.col3 = b.col3

# With conditions
WHERE A.column = 'Freight'
WHERE CONCAT(A.col1, A.col2) <> CONCAT(B.col1, B.col2)
```

**Full Outer Join**: This query is just in case the platform doesn't allow Full Outer Joins.

```mysql
# full outer join: 
  # left join + union all + right join
  # all rows from left & right

SELECT col1, col2
FROM A
LEFT JOIN B
USING (col3)
UNION ALL
SELECT col1, col2
FROM A
RIGHT JOIN B                  # used right here, left above
USING (col3)
WHERE A.col3 IS NULL;         # gets rid of duplicates
```

# Subqueries

```mysql
# Select - agg per row
SELECT ..,
   (SELECT ..
	FROM A
	WHERE A.col = B.col) AS description
	
	
# From - cut down the large table
SELECT ..
FROM A
JOIN
   (SELECT ..
	FROM A
	WHERE A.col = B.col) AS description
USING()...
	
	
# Where - match conditions
SELECT ..
FROM ..
WHERE col in (SELECT col
	FROM B
	WHERE B.col2 in ("", ""))
	
	
# Correlated - subquery per group
SELECT ..
FROM A as A1
where col > 
  (SELECT avg(col) 
  from A as A2
  where A2.col = A1.col);
```

# Multiple Aggs (Ch 21)

## Rollup

pg 753

"When you add ROLLUP to the grouping clause, your database system adds new **rows** to produce subtotals, plus a grand total. If there are N columns listed in the ROLLUP, there will be N+1 levels of subtotals. Note that the subtotals are added from right-to-left."

```mysql
select State, Gender, Married, count(*) as Num
from tbl
group by ROLLUP
	(State, Gender, Married);
	
-- There are 0 results where Married is shown while the other are null because Married is the furthest to the right
```

## Cube

pg 765

Number of subtotal groups = $2^n$

This is how to pull **all combos** of the 3 columns.

```mysql
select col1, col2, col3, count(*)
from tbl
group by CUBE
	(col1, col2, col3);
```

## Grouping sets

pg 773

This is the same thing as rollup except that it lets you select the aggregations you would like to see.

```mysql
select col1, col2, col3, count(*)
from tbl
group by GROUPING SETS
	(col1, 
   (col2, col3),
   (col1, col3));
```

# Windows (Ch 22)

**OVER() vs group by**: group by reduces rows, over() does not

- Partition by: level of detail to aggregate over
- Order by
- ROWS (or RANGE)
  - rows between current row and 1 following
    - This takes the previous value and adds the current value
  - rows between unbounded preceding and current row
    - This is the true running total

**Types**:

- Row_number(): no ties
- Rank(): handles ties, works like golf scores
- Dense_rank(): a tie for 4th would give the 6th place person a value of "5"
- Percent_rank(): 0 for first, 1 for last

```sql
select ...
count(*) over (partition by ___) as tab1
```

```mysql
# Example on page 812
select C.CustCity, C.Name, 
count(*) as Preferences,
sum(count(*)) OVER (order by C.CustCity rows between unbounded preceding and current row) as TotalUsingRows
from customers as c
group by C.CustCity, C.Name;
```

## Examples

### Running total

```mysql
SELECT 
vendor_name,
vendor_state,
SUM(line_item_amt) AS raw_total,     # Spent per state
SUM(SUM(line_item_amt)) OVER (			 # Across all states
  PARTITION BY vendor_state 
  ROWS BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW) AS cum_business
FROM ...
```

### Orders & Pay

```mysql
# Orders
WITH T AS 
(SELECT 
 'Order' AS trans_type, 
 customerNumber, 
 orderNumber AS trans_num, 
 orderDate AS trans_date, 
SUM(priceEach * quantityOrdered) AS total
FROM orders
GROUP BY orderNumber

UNION ALL

# Payments
SELECT 
'Payment', 
 customerNumber, 
 checkNumber, 
 paymentDate, 
 -amount
FROM payments) as T

SELECT *, 
SUM(total) OVER (
  ORDER BY trans_date, trans_type 
  ROWS BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW) AS balance
FROM T 
ORDER BY trans_date;
```

# Complex Queries

## Materialized table

Helps with performance

```mysql
SELECT * FROM
	(SELECT vendor_name,
   RANK() OVER (PARTITION BY __ ORDER BY __) AS vendor_rank
   FROM ..) AS T
WHERE vendor_rank = 1 
```

## View

A view is just a saved query, could be slower because we lose the index

```mysql
-- Using a view
DROP VIEW IF EXISTS v;
CREATE VIEW v AS
SELECT vendor_name,
RANK() OVER (PARTITION BY __ ORDER BY __) AS vendor_rank
FROM ..;

SELECT * 
FROM v
WHERE vendor_rank = 1
ORDER BY vendor_state;
```

## CTE

Used to simplify complex joins and subqueries, and to provide a means to query hierarchical data such as an organizational chart

```mysql
WITH cte_rank AS
  (SELECT vendor_name,
  RANK() OVER (PARTITION BY _ ORDER BY _) AS vendor_rank
  FROM ..)
SELECT *
FROM cte_rank
WHERE vendor_rank = 1
```