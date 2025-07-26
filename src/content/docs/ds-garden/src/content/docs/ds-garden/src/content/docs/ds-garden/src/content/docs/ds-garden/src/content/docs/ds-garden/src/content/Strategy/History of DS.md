---
Quality: 8
QualityComment: Source wasn't detailed enough about modern day. Need to supplement.
Objective: Development
Function: Network
ReviewFreq: 3-Month
Due: 2024-12-31T00:00:00.000Z
title: History of DS
---


## 50 Years of Data Science
[Paper](https://courses.csail.mit.edu/18.337/2015/docs/50YearsDataScience.pdf)

Interesting stories
- > Pg 6 | In the late 1700s, **census** data started being collected to get data about all inhabitants of a country. This is where the term ‘**statistics**’ was coined. A statistician (Hollerith) invented the punched card reader to compile US results. #story

- > Pg 10, John Tukey | I used to think of myself as a statistician, focused on drawing inferences from the specific to the general. However, observing the evolution of mathematical statistics has led me to question this identity. Over time, I’ve realized that my true interest lies in data analysis. This encompasses methods for analyzing data, interpreting results, planning data collection to improve analysis, and the statistical tools and insights that support these activities. #story 
	- Tukey’s central claim was that this new entity, which he called ‘**Data Analysis**’, was a new science, rather than a branch of mathematics. The subject of interest was **learning from data**. (Currently called '**Data Science**'.)


### Ch 2 | DS v Stats

*What distinguishes stats & DS?* In this chapter, author is basically suggesting that stats & DS have the same objective - learning from data. He then talks about the 3 "memes" that people use when favoring DS, and argues against each one.

1. **"Big Data?"** Author suggests people tend to associate Big Data with DS, so university presidents or others working in "sales" roles use the term "DS" instead of "stats" for commercial benefits.
2. **"Skills?"** Author suggests Computer Scientists tend to regard DS as able to work with Big Data, whereas statisticans cannot. Author says that this moves away from the "learning from data" definition - says that this type of thinking moves away from "what is our analysis strategy" into "what is the easiest technique for our computer".
3. **"Jobs"?** Author notes that job postings seem to require additional skills such as computing/database skills. Author says this is IT type of info, shouldn't be considered in the "stats vs DS" debate.



### Ch 3 | Future of Data Analysis (1962)

In this paper, John Tukey downplays the role of formal statistical inference. Instead, he says that what matters is *data analysis* (learning from data). This encompasses the whole process, making statistical inference a subset of data analysis.

Tukey identified four driving forces in the new science: 

>  Four major influences act on data analysis today: 
>
> 1. The formal theories of statistics
> 2. Accelerating developments in computers and display devices 
> 3. The challenge, in many fields, of more and ever larger bodies of data
> 4. The emphasis on quantification in an ever wider variety of disciplines



So Tukey’s vision embedded statistics in a larger entity. Tukey’s central claim was that this new entity, which he called ‘Data Analysis’, was a new science, rather than a branch of mathematics

At the time, statistics was considered a sub-field of mathamatics. This new broader classification of "data analysis" can be viewed as a science.



### Ch 4 | 50 Years Since FoDA

This section talks about how statisticians were hesitant to join this new "data analysis" field, but that it is necessary to avoid becoming obsolete.

William Cleveland (Bell Labs) proposed 6 foci of activity
1. Multidisciplinary investigations (25%) 
2. Models and Methods for Data (20%) 
3. Computing with Data (15%) 
4. Pedagogy (Teaching) (15%) 
5. Tool Evaluation (5%)
6. Theory (20%)



### Ch 8 | Full Scope of DS

The activities of Greater Data Science are classified into 6 divisions: 
1. EDA & Cleaning
2. Understanding Databases & Applying Mathematical Transformations
3. Computing with Data (Knowing languages, cloud/clusters, etc)
4. Data Modeling (Causal & Predictive)
5. Data Visualization (Learning about data, dashboards for monitoring, conclusions from modeling)
6. Science about Data Science (Research, domain knowledge)
   > The true effectiveness of a tool is related to the probability of deployment times the probability of effective results once deployed. Tukey, pg 24




## Timeline

### Early Figures in Statistics

1. **Blaise Pascal (1623-1662)**
   - **Contributions:** Developed the foundations of probability theory, worked on Pascal's Triangle and the concept of expected value.
2. **Pierre-Simon Laplace (1749-1827)**
   - **Contributions:** Made significant contributions to the field of probability and statistics, including the Bayesian interpretation of probability.
3. **Carl Friedrich Gauss (1777-1855)**
   - **Contributions:** Developed the method of least squares and the Gaussian distribution (normal distribution).
4. **Francis Galton (1822-1911)**
   - **Contributions:** Introduced concepts of correlation and regression to the mean, and made early contributions to the field of eugenics.


### 20th Century Pioneers
1. **Ronald A. Fisher (1890-1962)**
   - **Contributions:** Developed the analysis of variance (ANOVA), maximum likelihood estimation, and the design of experiments. Fisher is often referred to as the father of modern statistics.
2. **Jerzy Neyman (1894-1981)**
   - **Contributions:** Introduced the Neyman-Pearson lemma, a fundamental result in hypothesis testing. Developed concepts of confidence intervals and the theory of estimation.
3. **John Tukey (1915-2000)**
   - **Contributions:** Developed the Fast Fourier Transform (FFT) algorithm, exploratory data analysis (EDA), and box plots.
4. **Andrey Kolmogorov (1903-1987)**
   - **Contributions:** Formulated the axioms of probability theory and made significant contributions to the theory of stochastic processes.


### Data Science and Computing Pioneers
1. **John von Neumann (1903-1957)**
   - **Contributions:** Made foundational contributions to computer science, including the architecture of the modern computer (von Neumann architecture).
2. **Alan Turing (1912-1954)**

- **Contributions:** Pioneered theoretical computer science and artificial intelligence. Developed the concept of the Turing machine and the Turing test.

1. **Claude Shannon (1916-2001)**

- **Contributions:** Known as the father of information theory, Shannon developed the mathematical foundations of communication and data compression.





### Modern Figures in Data Science

1. **Geoffrey Hinton (b. 1947)**
- **Contributions:** A pioneer in artificial neural networks and deep learning. His work on backpropagation and deep learning algorithms has had a profound impact on AI and machine learning.

1. **Yann LeCun (b. 1960)**
- **Contributions:** Developed convolutional neural networks (CNNs), which are widely used in image and video recognition.

1. **Judea Pearl (b. 1936)**
- **Contributions:** Made significant contributions to artificial intelligence and causal inference, developing Bayesian networks and the theory of causal and counterfactual inference.

1. **Cynthia Dwork (b. 1958)**
- **Contributions:** A key figure in the development of differential privacy, ensuring privacy-preserving data analysis.

1. **Hadley Wickham (b. 1979)**
- **Contributions:** Developed numerous influential tools for data analysis in R, including ggplot2, dplyr, and tidyr, which are widely used in the data science community.






## AI Timeline

[Book | Oreilly](https://learning.oreilly.com/library/view/hands-on-artificial-intelligence/9781788991063/95d2ab83-e690-4866-8cde-b503dbcc3ca8.xhtml)

> **AI** | Systems that allow computers to perform tasks without explicitly programming

**1956** *Dartmouth Summer Research Project*: Their topics of discussion were fairly forward-thinking for the time – they could have easily been those of an AI conference today—ANNs, NLP, theories of computation, and general computing frameworks.

**1958**: *Perceptron*: Single-layer networks that work as linear classifiers. Consist of four main architectural aspects: (1) input layer (2) weights & biases (3) summation function (4) activation function.

**1980-1987**: *Rebirth*: Hinton coins term "deep learning", works with Rumelhart to create back-propagation. 

**1997-2005**: *Modern era*: IBM Deep Blue (chess), Bell Labs develops CNNs, development of LSTMs.

**2012-Now**: Cheaper computing power. Other helpers: GPUs, drop-out, ReLu




### NLP History

1950: Turing Test

1980s-1990s: **Symbolic** NLP

- Rule-based parsing (e.g., the development of HPSG as a computational operationalization of generative grammar)
- Morphology (e.g., two-level morphology)
- Semantics (e.g., Lesk algorithm)
- Reference (e.g., within Centering Theory)

1990s-2010s: **Statistical** NLP
Before the 90's, most NLPs were based on hand-written rules. Then, ML enters the picture. Why?

1. **Moore's law**: increase in computational power
2. **Change in linguistic theory** (Transformational vs corpus): Moving to *corpus*.
   1. **Transformational grammar (Chomsky)**: Each sentence has (1) what the speaker meant & (2) a surface grammatical structure (observable form). "Transformational rules" map (1) to (2) and vice-verse.
   2. **Corpus linguistics**: An approach to the study of language that relies on the analysis of large & principled collections of naturally occurring language data, known as corpora. This methodology aims to understand language use based on real-world examples rather than relying solely on theoretical constructs.

1990s: 
Laws call for governments to translate meetings into official languages of other governments.
Canada & EU produce multilingual textual corpora.
IBM Research uses this to advance field of *machine translation*.

2000s: 
Growth in world-wide-web.
Research increases in unsupervised & semi-supervised learning.

Present: **Neural Nets**
2003: Yoshu Bengio's **MLP** (multi-layer perceptron) beats n-gram model
2010: Tomáš Mikolov applies RNN, then develops **Word2vec**. ML usage becomes wide-spread, especially in health care.
2015: Neural networks replaces statistical. Instead of requiring elaborate feature engineering, NN uses **word embeddings** to capture semantic properties of words.

Other tasks made obsolete by NNs
- **Part-of-speech tagging**: Tag for each word (noun, verb, adjective, etc.)
- **Dependency parsing**: Grammatical structure of a sentence due to relationships between words
- **Word alignment**: Translate words in different languages

