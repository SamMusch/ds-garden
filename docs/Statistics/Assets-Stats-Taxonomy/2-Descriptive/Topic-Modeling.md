---
published: true
---

### Topic Modeling

[Paper | Probabilistic Topic Models](https://www.cs.columbia.edu/~blei/papers/Blei2012.pdf)

>While more and more texts are available online, we simply do not have the human power to read and study them to provide the kind of browsing experience described above. To this end, machine learning researchers have developed **probabilistic topic modeling**, a suite of algorithms that aim to discover and annotate large archives of documents with thematic information.
>
>"Topic modeling algorithms are statistical methods that analyze the words of the original texts to discover the themes that run through them, how those themes are connected to each other, and how they change over time".
>
>"LDA is a statistical model of document collections that tries to capture this intuition of assigning words to their topics"



> Key Insights
>
> 1. Topic models are algorithms for **discovering the main themes** that pervade a large and otherwise unstructured collection of documents. Topic models can organize the collection according to the discovered themes.
> 2. Topic modeling algorithms can be **applied to massive collections** of documents. Recent advances in this field allow us to analyze streaming collections, like you might find from a Web API.
> 3. Topic modeling algorithms **can be adapted** to many kinds of data. Among other applications, they have been used to find patterns in genetic data, images, and social networks.



**Objective**: We are looking to find **groups** (similar to clustering)

1. Model the topics that exist in our data  

2. Find the underlying themes (ie topics)



Model types

- **Probabilistic Model:** Refers to a broad category of models that incorporate probabilities to represent uncertainty. This term doesn't inherently imply mixed membership, as a model could be probabilistic without allowing for mixed membership.

- **Mixed Membership Model:** Refers to a specific type of probabilistic model that explicitly allows for the simultaneous presence of **multiple categories** in each data point. In the context of topic modeling, mixed membership models acknowledge that documents may be associated with more than one topic.

Most popular algorithms (via ChatGPT):

1. **Latent Dirichlet Allocation (LDA):** Assumes each document is a mix of topics and that each topic is a mix of words. The goal is to uncover these latent topics and their distribution in documents.

2. **Probabilistic Latent Semantic Analysis (pLSA):** Similar to LDA, pLSA is a probabilistic model that assumes documents are generated from a mixture of topics. It aims to discover these topics and their distribution in documents.

3. **Non-Negative Matrix Factorization (NMF):** Factorizes document-term matrix into 2 lower-dimensional matrices.
   (1) Representing the documents
   (2) Representing the terms
   Constraint: all values in the matrices are non-negative

4. **Latent Semantic Analysis (LSA):** LSA, also known as Latent Semantic Indexing (LSI), uses singular value decomposition (SVD) to reduce the dimensionality of the document-term matrix. It aims to capture the latent semantic structure in the data.



#### LDA

LDA | Automatically discover topics from sentences

Strengths v weaknesses

- **Strengh**: Good for finding core thematic structure in large archives of text. Adaptable and extendable.

- **Weakness**: Limited by assumptions. Evaluation should be based on interpretability.

Assumes


 -  There is a set distribution of topic for our documents

 -  Order of documents doesn't matter

 -  Bag of words - order doesn't matter

Parameters


 - topic

 - per-doc topic distribution

 - per-doc per-word topic assignment

Notes

- Latent - the "groups" that we don't know  

- K = number of topics  

- D = number of documents  

- N = number of unique words total

Distributions

- Each document is a distribution of topics  

- Each column is a topic (multinomial distributions)    

- Each row is a word  

- Each of these topics have distributions of words  

- Looking on a per topic basis - weight words accordingly

How it works

 - Take documents

 - Take words in each document

 - Decide how many topics you would like

 - Per topic - how likely is each word to belong to us?

 - Now that we know this, what topics do the words fall in for 1 specific document?

   - Doc 1 = 50% sports, 40% news

Understand what the Dirichlet and Multinomial Distributions represent

- Diri = topic distribution

  - How are they used in LDA? How could you use LDA in contexts that are not textual?

  - Genetic data, images, social networks