---
Quality: ★
QualityComment: Why isn't this a 10?
Objective: Reference
Function: Hierarchy
ReviewFreq: 'Weekly, 1-Month, 2-Month, 3-Month'
Due: null
HoursDone: 0
HoursRemain: 0
CoverImage: null
tags: null
TimeSpent: null
TimeSpent2: null
title: _Strategy MOC
---

```dataview
TABLE without id

file.link,
covers,

Quality,

"<progress max=" + 
(sum(HoursDone) + sum(HoursRemain)) + " value=" + number(
sum(HoursDone)) + "> </progress> "  + number(
sum(HoursDone)) + " of " + number(
sum(HoursDone) + sum(HoursRemain)) + " " + "hours" + " (" +round(number(
sum(HoursDone))/number(
sum(HoursDone) + sum(HoursRemain))*100) + "%" + ")" as Progress,

sum(HoursRemain) as Remain
from outgoing([[]])
```



Deeper
- [[Undergrad Capstone]]
- [[Greenwood]]
- [[History of Data Science]]


[Profit Max](Profit%20Max.canvas) - Logic tree. #monthly

[Case Studies](Case%20Studies.md) - McKinsey structure #monthly 

