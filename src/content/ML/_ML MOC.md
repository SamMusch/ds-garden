---
Quality: ★
QualityComment: Why isn't this a 10?
Objective: Reference
Function: Hierarchy
ReviewFreq: Weekly, 1-Month, 2-Month, 3-Month
Due: 
HoursDone: 0
HoursRemain: 0
CoverImage: https://i.imgur.com/qZ8lFT4.png
tags: 
TimeSpent: 
TimeSpent2:
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

[[TOC]]
[[ML]]
[[Advanced]]
[[DataScienceFolder/AI/ML Ops]]
[[Deep Learning]]