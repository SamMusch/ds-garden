---
Quality: ★
QualityComment: Why isn't this a 10?
Objective: Reference
Function: Hierarchy
ReviewFreq: 'Weekly, 1-Month, 2-Month, 3-Month'
Due: null
HoursDone: 0
HoursRemain: 0
CoverImage: 'https://i.imgur.com/7IsxieV.png'
tags: null
TimeSpent: null
TimeSpent2: null
title: _BigData MOC
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




[ML Ops](DataScienceFolder/AI/ML%20Ops.md)
[MLflow](MLflow.md)



[Platforms and Other Essentials](https://learning.oreilly.com/library/view/hands-on-artificial-intelligence/9781788991063/69346214-320e-487f-b4cf-bd5c469dc75e.xhtml)
1. [Technical requirements](https://learning.oreilly.com/library/view/hands-on-artificial-intelligence/9781788991063/2040ff62-0a01-4742-84f5-617648afb54f.xhtml)
2. TensorFlow, PyTorch, and Keras
3. Cloud computing essentials
   1. AWS basics (EC2, S3, Sagemaker)
   2. Google Cloud Platform basics
4. CPUs, GPUs, and other compute frameworks
   1. Installing GPU libraries and drivers
   2. [Basic GPU operations](https://learning.oreilly.com/library/view/hands-on-artificial-intelligence/9781788991063/df97f2fe-058e-4be6-b7d6-b2c4e7f08489.xhtml)
   3. [The future – TPUs and more](https://learning.oreilly.com/library/view/hands-on-artificial-intelligence/9781788991063/9fb972bb-6148-43e3-86ee-af8a3128e681.xhtml)
