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
_kMDItemDisplayNameWithExtensions: 09-Dev-Framework.md
ai_abstract: null
ai_key_terms: []
aliases: null
children: 0
created: '2025-10-04'
cssclasses: null
grandchildren: 0
kMDItemContentCreationDate: 2025-09-30 19:11:59 +0000
kMDItemContentCreationDate_Ranking: 2025-09-30 00:00:00 +0000
kMDItemContentModificationDate: 2025-10-04 15:51:54 +0000
kMDItemContentType: net.daringfireball.markdown
kMDItemContentTypeTree: (
kMDItemDateAdded: 2025-09-30 19:11:59 +0000
kMDItemDocumentIdentifier: '185062'
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
kMDItemInterestingDate_Ranking: 2025-10-04 00:00:00 +0000
modified: '2025-10-04'
published: true
reading_time: 25.6
source_file: 09-Dev-Framework.md
tags: null
title: 09 Dev Framework
word_count: 5125
---

### Taxonomy

This framework involves the following six stages:

1. *Initiation*: Understand use cases

2. *Design*: Design pipelines, finalize layers of RAGOps stack

3. *Development*: Develop pipelines, create prototype for evaluation

4. *Evaluation*: Assess metrics

5. *Deployment*: Deploy to users

6. *Maintenance*: Track and improve


In greater detail

1. *Initiation*

    1. Gather reqs

    2. Architecture design

2. *Design*

    1. **Indexing**: ingest, transform, store

    2. **Generation**: optimize query, retrieve, optimize context, augment, generate

3. *Development*

    - Model training and fine-tuning

    - Module dev

    - Orchestration

4. *Evaluation*

    1. Rag components

    2. System performance

5. *Deployment*

6. *Maintenance*


[Figure 9.1: dev framework | cyclic nature](https://learning.oreilly.com/api/v2/epubs/urn:orm:book:9781633435858/files/OEBPS/Images/CH09_F01_Kimothi.png)






### 9.1 Initiation stage: Define and scope

[Figure 9.2 A use case evaluation card: do we need RAG?](https://learning.oreilly.com/api/v2/epubs/urn:orm:book:9781633435858/files/OEBPS/Images/CH09_F02_Kimothi.png)

Requirement gathering, multiple lenses:

- *Business objectives*: Outcome to accomplish

    - The "leading light" in the dev process.

- *User needs*: Core requirements. 

    - Determines types of queries that RAG will see

- *Functional requirements*: Core functionalities of the system. 

    - Main influencers of the dev process. (eg data types, scope of docs)

- *Non-functional requirements*: Speed, scalability, reliability, security.

- *Constraints*: Availability of data, cost, and integration with existing systems.


#### 9.1.1 Requirements analysis

Should be quantifiable and lead to specific dev steps.

good criteria for success metrics

- latency

- throughput

- percentage of queries resolved

[Figure 9.4 Example: Customer service](https://learning.oreilly.com/api/v2/epubs/urn:orm:book:9781633435858/files/OEBPS/Images/CH09_F04_Kimothi.png)

identify data sources



#### 9.1.2 Architecture
architecture diagram

- **purpose**: stakeholder alignment

- should

    - illustrate inputs & outputs.

    - use as starting point for the design stage. 

[Figure 9.5 High-level architecture, customer support bot](https://learning.oreilly.com/api/v2/epubs/urn:orm:book:9781633435858/files/OEBPS/Images/CH09_F05_Kimothi.png)



### 9.2.1 Indexing pipeline design

Think through the input & output:

- input: data sources

- output: the KB

Recall:

- **Indexing pipeline**: data loading, chunking, embeddings, and storage

- **Data layer**: enables by extracting, transforming, and loading data

[Figure 9.6: Indexing pipeline components & the data layer](https://learning.oreilly.com/api/v2/epubs/urn:orm:book:9781633435858/files/OEBPS/Images/CH09_F06_Kimothi.png)

- The indexing pipeline is executed using the data layer in the RAGOps stack.


#### Considerations: Data ingestion

Complexity increases with scale.
Pay attention to the source systems & their file formats.

Questions about connecting **data layer** --> **source systems**:

- which tools do we need?

- which connectors do we need? which tech do they depend on?

- how to connect to the internet?

Questions about about parsing files:

- Which formats will be ingested?

- How will the web pages be scraped, if required?

- Do we have the necessary parsers for the different file types?

- Is some special parsing technique required to be developed?

- Can there be more than one modality of data in a single file?

Answers determine the 

- tools needed for data ingestion

- parts needed to develop



#### Considerations: Data transformation
source data --> data layer --> *transformation step*

*transformation step* converts the data into a suitable format for the knowledge base. 

1. pre-process

    - clean, extract metadata, resolve conflicting info

2. chunk

    - can be fixed size, structure driven, semantic chunking, or agentic chunking

3. transform chunks for retrieval

    - approaches such as embeddings and knowledge graphs

transformation approaches

- **embeddings**: almost always in RAG. create using pre-trained embeddings models - may still need to fine-tune

- **knowledge graphs**: when need relational understanding between chunks

pre-processing questions:

- How noisy is the data? What algorithms and techniques can be used to clean up the data?

- Is structured data like tables or JSON present?

- Is metadata readily available, or should it be extracted?

- What algorithms or models should be used for metadata extraction? (Note: All models sit in the model library of the model layer of the RAGOps stack.)

- Does the data contain sensitive information that needs to be masked or redacted? What techniques will be used to execute this?

- Are there any other data protocols or guidelines that need to be followed?

chunking questions:

- Is the chunk size pre-determined? If not, what chunk sizes should be experimented with?

- Is the data in a format that will warrant structured chunking?

- What techniques and models will be employed for semantic chunking, if required?

- Is a chunking agent readily available, or will it need to be built? Which models, algorithms, and tools will be used by the chunking agent?

graphRAG questions:

- Is a hierarchical indexing structure required?

- Do we need to extract entities and relationships for relational context? Do we have the necessary budget?

- What approaches are we going to take for entity-relationship extraction?

- Are we using any frameworks for graph extraction?

- Which models are going to be used?

embeddings questions

- Which embeddings model will we use? Are there any domain-specific embeddings models available that will be more useful?

- Are multimodal embeddings required?

- Do we need to fine-tune embeddings for our use case? Do we have the training data for fine-tuning? How will the training data be sourced?

#### Considerations: Data storage
source data --> data layer --> transformation step --> *storage*

"The final component of the data layer is the storage."

Storage comprises 

- vector stores

- graph databases

- document stores

data storage questions:

- Can all data be stored in a single collection, or are multiple collections required?

- Can we manage the vector database or do we require a managed service?

- What is the current scale of data and how is it likely to grow?

- Which vector database will we use?

- Do we need a graph database? Which graph database will we use?

- Do we need to store raw documents or images? Which document store will we use for this purpose?
(also, is a cache store required?)

now, with storage in place, we can create the KB.


### 9.2.2 Generation pipeline design

We have discussed that the real-time interaction of the user with the knowledge base is facilitated by the generation pipeline. In chapter 4, we developed the three main components of the generation pipeline: the retrievers, augmentation via prompts, and generation using LLMs. Apart from these three components, query optimization in the pre-retrieval stage and context optimization in the post-retrieval stage are advanced components of the generation pipeline. Sometimes, even post-generation, response optimization is conducted to better align the responses. The generation pipeline is powered by the model layer of the RAGOps stage, which has the LLMs, the retrievers, embeddings models, and other task-specific models. The generation pipeline is brought alive by the app orchestration layer of the RAGOps stack. Let’s discuss the design of the generation pipeline in the following six steps: query optimization (pre-retrieval), retrieval, context optimization (post-retrieval), augmentation, generation, and response optimization (post-generation).

#### Query optimization

Query optimization techniques are employed to help retrieval better align with the query. Several techniques are employed for transforming and rewriting queries. For agentic RAG, query routing is an important aspect of this step. Some of the questions to help finalize the nature of query optimization are

- How many types of queries can the user ask? Do each of these query types require different downstream processes?

- Are there multiple collections in the knowledge base that need to be selected before the search?

- Are user queries expected to be short or generic?

- Are users looking for precise responses?

- How much processing time can be afforded to query optimization?

- Which models and techniques will be used for query optimization?

Query optimization is optional but may be unavoidable when the data in the knowledge base is voluminous. It must also be noted that query optimization can add to the latency of the system.

#### Retrieval

Retrieval is a pivotal component of RAG systems. There are many retrieval techniques and strategies discussed in this book. The quality of the RAG system hinges on the accuracy of the retrieval component. You may use a dense embeddings similarity match for simple RAG systems. In more complex systems, you will need to use hybrid, iterative, or adaptive retrieval strategies. The questions to ask at this stage are

- Does our retrieval component need high precision, high recall, or both?

- Can the queries be resolved with a simple similarity match?

- Do we need graph retrieval?

- Will searching through the entire data be prohibitively long? Do we need filtering?

- Will a single pass retrieve all necessary documents?

- Will the information from the retrieved documents lead to more questions?

- Which models and techniques will we use for adaptive, recursive, or iterative retrieval?

- Which retrieval algorithms should we try?

- Are there any providers or libraries that we will leverage?

- How will we estimate the cost of retrieval?

- How many documents should be retrieved for acceptable levels of coverage?

- Does ranking in retrieved results matter?

Retrieval, especially in large knowledge bases, can lead to significant latency and should be optimized for speed and accuracy.

#### Context optimization

Once the results are retrieved from the knowledge base, they need to be sent to the LLM for generation along with the original user query. However, once the results are retrieved to sharpen the context, certain optimization techniques such as re-ranking and compression can be applied. These techniques filter, compress, and optimize the retrieved information to reduce noise and increase the precision of the context. To validate the need for context optimization, a few questions can be asked:

- Will the amount of information retrieved overwhelm the LLM?

- Will the retrieved information fit the context window of the LLM?

- Is there a possibility of the retrieved information being noisy?

- Have a lot of documents been retrieved? Do we need to discard a few?

- Which techniques can be used to sharpen the retrieve context to the query?

- Are there any services or libraries that we can use?

- Can we afford the time taken for this optimization?

Optimizations like this are very helpful in making the context precise and improving the overall quality of the RAG system, but they do add to the processing time and cost.

#### Augmentation

Augmentation is the process of adding the retrieved context to the original query in a prompt that can be sent to the LLM for generation. While it may seem a simple step, there can be many nuances to it. All the use case context along with the retrieved context also needs to be passed. Sometimes, you may need to pass examples of desired responses or the thought process. In cases where you need to use the LLMs internal parametric knowledge, this can also be specified in the prompt. Key questions to ask at this stage are

- What is the system prompt or the overall persona that we need the LLM to take?

- Does the response require nuanced analysis? Can that be passed as a chain of thought?

- Do we want to restrict the responses to the context only?

- What kind of examples should be given?

- Will different query types need different prompting techniques?

Augmentation is done through prompts, and prompts can be managed by the prompt layer of the RAGOps stack. Prompting affects the cost and latency since the LLM-s processing depends on the number of tokens passed in the prompt.

#### Generation

Generation is a core component of all generative AI apps and contains an LLM that takes a prompt as input and generates a response. The nature of the LLM determines the efficacy and efficiency of the RAG system to a large extent. There are several choices that you will need to make:

- Should an open source model be used? Do we have the skills and resources to use them?

- Should a proprietary managed LLM be used?

- Will we need to fine-tune an LLM for our use case?

- How large a model do we need? What capabilities do we need to address?

- How can we estimate the cost of the generation component?

- Are there any deployment constraints to be considered?

- Will the models need optimization for deployment?

- Are there any security implications to be considered?

- Are there any ethical or legal implications to be considered?

The selected LLMs will sit in the model library. All training fine-tuning activities and optimization are carried out in the model layer of the RAGOps stack. LLMs can be costly to train and use. Using the right LLM is key to the success of the RAG system.

#### Response optimization

Sometimes, the response from the generation component may be further processed before presenting the results to the user. This can range from evaluating the response for relevance to checking the format and appending the responses with the retrieved sources. Some questions that can help with the assessment at this stage are

- Does the response from the LLM be presented to the user as is?

- Is there any kind of verification that the responses need to go through?

- What is the impact of a sub-optimal result?

- Are there any workflows that need to be triggered based on the responses?

Response optimizations are highly subjective and closely coupled to the use case, but it is a consideration that should not be overlooked.

With these seven steps, the generation pipeline design is complete. The model library and the training/fine-tuning components of the RAGOps stack can be covered with the necessary tools, platforms, and algorithms. The orchestration of the generation pipeline can also be finalized depending on the choices made during this stage. The prompt layer can also be addressed after finalizing the augmentation techniques. Figure 9.7 shows the generation pipeline design with the overarching question of each step.

[Figure 9.7 Key questions need to be answered to make the choices for the generation pipeline.](https://learning.oreilly.com/api/v2/epubs/urn:orm:book:9781633435858/files/OEBPS/Images/CH09_F07_Kimothi.png)

This completes the design choices of the core RAG pipelines. The model, prompt, and the orchestration layers are largely complete by this stage. But there are more design considerations regarding security, guardrails, caching, and other use case requirements.

### 9.2.3 Other design considerations


RAG pipelines complete the critical layers of the RAG system.

Other system & business considerations

- guardrails?

- cache any certain kinds of responses?

- human supervision needed?

- security?

- approval workflow for system?

- do users need explainability?
these help address the essential and enhancement layers of the RAGOps stack. 

need a complete view of 

- components

- tools

- platforms

- libraries

- deployment options

You can choose between a managed deployment on the cloud, a self-hosted deployment on a private cloud, a bare metal server, or local/edge machines. The choice will largely be driven by the business constraints but can have an effect on the design choices of the pipelines. Fully managed deployment favors managed services for storage and compute to reduce dev complexity and ensure scalability, self-hosted solutions need a special focus on a design with modularity and optimization techniques to handle limited infrastructure, and in edge deployment, you should emphasize lightweight components and efficient retrieval strategies due to resource constraints.

Next step: experimentation can begin for the dev of the RAG system.



### 9.4 dev stage: Building modular RAG pipelines

The dev stage of the RAG dev framework focuses on implementing the design choices into a functional RAG system. The ideal way would be to build the RAG pipelines in a modular fashion, which involves decomposing the system into distinct, interchangeable components, each responsible for a specific function. This approach enhances flexibility, scalability, and maintainability, allowing for tailored configurations to meet diverse application requirements. A few activities in the dev stage involve training and fine-tuning models; creating APIs or microservices for different components; and creating an orchestration layer using different tools, services, and libraries.

#### Model training and fine-tuning LLMs

For most systems, a pre-trained foundation LLM and embeddings models will meet the requirement. There may be instances where you may need to fine-tune models for domain adaptation. In rare cases, you may choose to train language models from scratch. In such cases, the dev of RAG systems may take a back seat, and training the models will be the core of the dev effort. You can follow a progressive approach when deciding whether to fine-tune embeddings models and LLMs.

When creating embeddings using a pre-trained model, you will need to assess if a similarity search yields relevant results. To do this, you can also create ground truth data. The ground truth data can be a set of manually curated search queries and their matching documents. If the embeddings model can retrieve the documents accurately, you may use the pre-trained model. If not, you can either look for another embeddings model more suited for the use case domain or fine-tune the pre-trained embeddings model for the use case domain.

Similarly, if a pre-trained LLM generates desired results by prompting alone, you can use the model as is. In cases where you desire a specific style, vocabulary, or tonality, you can choose to fine-tune a model.

If the system warrants other models such as query classification, harmful content detection, usefulness, and similar, they will also need to be trained.

#### Module development

Different RAG pipeline components should be developed as independent modules in the form of packages, APIs, or other modular frameworks. Some of the modules can be

- *Data loading and parsing*: Responsible for connecting to the source system and parsing file formations

- *Metadata extraction*: Responsible for extracting and tagging metadata

- *Chunking*: Responsible for creating chunks from documents

- *Embeddings*: Responsible for converting chunks into vector embeddings

- *Storage*: Responsible for storing embeddings into vector databases

- *Query optimization*: Responsible for aligning user query with retrievers

- *Retrieval*: Responsible for efficient retrieval of documents

- *Augmentation*: Responsible for maintaining and invoking the prompt library

- *Generation*: Responsible for using the LLMs to generate responses

- *Memory*: Responsible for storing conversations, user preferences, and similar

These are only a few examples. Modularity will be dependent on the complexity of the components. For example, if you are convinced that fixed-size chunking is sufficient for your use case, you may not develop an independent chunking module. Conversely, if you assume that LLMs may need to be changed as the system evolves with the technology, you can create the generation module that allows for quick and easy replacement of models. Figure 9.8 recalls the modular RAG design discussed in chapter 6.

#### Orchestration

Finally, you will develop the orchestration layer that will manage the interaction among the different modules that you have developed. This enables the workflow of your RAGsystem. This workflow should be flexible enough to adapt with feedback for different query types.

[A diagram of a computer  AI-generated content may be incorrect.](https://learning.oreilly.com/api/v2/epubs/urn:orm:book:9781633435858/files/OEBPS/Images/CH09_F08_Kimothi.png)

Figure 9.8 Modular structure allows for flexibility and scalability of individual components.

You will also have access to various managed services, frameworks, libraries, and tools that you can integrate with any of the modules. For example, LangChain is a framework that provides libraries for most components of a RAG framework. You can use these libraries for quick and easy development. However, for components that you desire more control over, you may need to build the functionality from scratch.

dev is an experimentation-driven iterative process. To finalize the different components of the RAG system, you will need to evaluate them and benchmark them against the goals you had set in the initiation stage.

### 9.4 Evaluation stage: Validating and optimizing the RAG system

Evaluation of the RAG system is a key component of its dev process. All the different strategies, tools, and frameworks must be evaluated against some set of benchmarks. The actual business effect can only be measured post-deployment, but some metrics can be evaluated at the dev stage. We can look at these metrics in two broad categories.

#### RAG components

The purpose of evaluating the RAG system is to assess the performance of different RAG components. To this end, there can be retriever-specific, generation-specific, and overall RAG evaluation metrics. Here is a summary of these metrics discussed in chapter 5. We begin with retriever-specific metrics:

- *Accuracy* is typically defined as the proportion of correct predictions (both true positives and true negatives) among the total number of cases examined.

- *Precision* focuses on the quality of the retrieved results. It measures the proportion of retrieved documents relevant to the user query. It answers the question, “Of all the documents that were retrieved, how many were relevant?”

- *Precision@k* is a variation of precision that measures the proportion of relevant documents among the top ‘k’ retrieved results. It is particularly important because it focuses on the top results rather than all the retrieved documents. For RAG, it is important because only the top results are most likely to be used for augmentation.

- *Recall* focuses on the coverage that the retriever provides. It measures the proportion of the relevant documents retrieved from all the relevant documents in the corpus. It answers the question, “Of all the relevant documents, how many were retrieved?”

- *F1-score* is the harmonic mean of precision and recall. It provides a single metric that balances both the quality and coverage of the retriever.

- *Mean reciprocal rank, or MRR*, is particularly useful in evaluating the rank of the relevant document. It measures the reciprocal of the ranks of the first relevant document in the list of results. MRR is calculated over a set of queries.

- *Mean average precision, or MAP,* is a metric that combines precision and recall at different cut-off levels of ‘k’ (i.e. the cut-off number for the top results). It calculates a measure called average precision and then averages it across all queries.

- *nDCG* evaluates the ranking quality by considering the position of relevant documents in the result list and assigning higher scores to relevant documents appearing earlier.

Here is the summary of generation specific metrics:

- *Coherence* assesses the logical flow and clarity of the response, ensuring that the information is presented in an understandable and organized manner.

- *Conciseness* evaluates whether the response is succinct and to the point, avoiding unnecessary verbosity, while still conveying complete information.

We conclude with a summary of overall RAG metrics:

- *Context relevance* assesses the proportion of retrieved information relevant to the user query.

- *Faithfulness* or *groundedness* assesses the proportion of the claims in the response that are backed by the retrieved context.

- *Hallucination rate* calculates the proportion of generated claims in the response that are not present in the retrieved context.

- *Coverage* measures the number of relevant claims in the context and calculates the proportion of relevant claims present in the generated response.

- *Answer relevance* assesses the overall effectiveness of the system by calculating the relevance of the final response to the original question.

Recall the triad of RAG evaluation from chapter 5. Figure 9.9 shows the pairwise interaction between the user query, retrieved context, and the generated response, which calculates the RAG specific metrics.

[A diagram of a customer relationship management  AI-generated content may be incorrect.](https://learning.oreilly.com/api/v2/epubs/urn:orm:book:9781633435858/files/OEBPS/Images/CH09_F09_Kimothi.png)

Figure 9.9 The triad of RAG evaluation proposed by TruEra

To calculate some of these metrics, a ground truth dataset is required. Ground truth is information known to be real or true. In RAG, and the generative AI domain in general, ground truth is a prepared set of prompt–context–response or question–context–response examples, akin to labeled data in supervised machine learning parlance. Ground truth data created for your knowledge base can be used for the evaluation of your RAG system.

You can measure these metrics for different components. For example, you can check if context relevance increases by replacing a hybrid retrieval strategy with an adaptive one. You can also check the effectiveness of query and context optimization. You can also compare two service providers for a particular component.

#### System performance

System performance metrics relate to the non-functional requirements of the system, which affect the usability of the system more than the accuracy of the system. Some of these metrics are

- *Latency*: Measures the time taken from receiving a query to delivering a response. Low latency is crucial for user satisfaction, especially in real-time applications.

- *Throughput*: Indicates the number of queries the system can handle within a specific time frame. Higher throughput reflects the system’s ability to manage large volumes of requests efficiently.

- *Resource utilization*: Assesses the efficiency of CPU and GPU usage during operations. Optimal utilization ensures cost-effectiveness and prevents resource bottlenecks.

- *Cost per query* calculates the average expense incurred for processing each query, encompassing infrastructure, energy, and maintenance costs.

Latency and cost get special attention in LLM-based systems. This is because of the inherent nature of the LLM architecture. RAG adds to both latency and cost. Therefore, the impact of additional components like filtering during retrieval, optimizations, and retrieval strategies should be evaluated from this lens. Sometimes the stakeholders may also ask you to evaluate some use case-specific metrics, and that should also be a part of this evaluation stage.

When your system is thoroughly evaluated and improved to meet all the benchmarks, it is ready to go. You can now deploy it to make it available to the intended users.

### 9.5 Deployment stage: Launching and scaling the RAG system

Once the system is ready to ship, it needs to be deployed into a production server accessible by the intended users. There are a few deployment techniques that are popular for software systems, which can also be used for RAG systems.

#### Blue–green deployment

Blue–green deployment maintains two separate environments named blue and green. The existing system is in the blue environment, and the new RAG system is put in the green. Once the green environment is tested and verified, all traffic is directed to the green environment, and the blue environment is deactivated. The advantage of this blue–green deployment is that it is possible to test the production environment without affecting the live traffic. Consequently, there is zero downtime and an easy option for a rollback if any problem is encountered. However, it is a costly option since the entire production environment is duplicated. Indexing pipelines can be updated in the green environment without affecting the live system. Changes to retrieval strategies or embeddings models can be safely validated before production use.

#### Canary deployment

Canary deployment gradually releases the new RAG system to a small number of users. If it performs well with these users, it is expanded to all users. Canary deployment allows for real-time user feedback that enables early detection of problems. However, it adds feedback and monitoring complexity and multiple versions to manage. It can test changes in retrieval algorithms, embeddings, or generation models on limited queries or specific regions.

#### Rolling deployment

Rolling deployment is used when there are multiple production servers. The new RAG system is deployed to one server incrementally at a time before moving to the next. So, there is no complete downtime and only a part of the system is offline at one time. It may become complex if problems arise mid-deployment. The rollback can become tedious when some servers are updated, while others are not.

#### Shadow deployment

Shadow deployment mirrors live traffic to a new version of the system running alongside the old one, without exposing the new RAG system’s responses to users. By doing this, the system can be tested without affecting the users. However, it requires duplication of the infrastructure much like the blue–green deployment.

#### A/B testing

A/B testing involves deploying two versions of the RAG system (A and B) to separate subsets of users and comparing their performance to determine the better option. This can also be done for new systems. It enables direct comparison and provides clear insights into performance. However, it requires robust mechanisms to split traffic and collect performance metrics. It allows for experimenting with different LLMs or retrieval strategies and variations in prompting and augmentation techniques.

#### Interleaving experiments

*Interleaving experiments* compare two RAG systems by blending their outputs into a single result set shown to users. Results from both systems are interleaved, and user interactions are attributed to the originating system to determine which performs better. This approach provides fast feedback and reduces bias by comparing systems under identical conditions. However, the attribution of user engagement to the correct system can be complex.

The choices for the deployment strategy can depend on factors like such as tolerance, and using strategies such as shadow, canary, and blue–green can mitigate risks in mission-critical systems. It also depends on the scale, and rolling deployments make sense for large-scale systems. Small new RAG systems can be also deployed all at once.

Now that the system is available to the users, you will start getting real-time feedback, and the success and failure of the system will also depend on how you react to the feedback. To measure and improve the system, continuous monitoring is required.

### 9.6 Maintenance stage: Ensuring reliability and adaptability

Deploying a RAG system into production is only the first milestone in the journey toward an evolved contextual AI system. Explicit user feedback, evolving technology, and changing user behavior present previously unexplored challenges that the system may encounter. It is therefore essential to be continually vigilant and monitor the system performance. There are several reasons why a RAG system may fail in production. There are operational reasons such as compute resource constraints, sudden spikes in load, and malicious attacks. The reason can also be a shift in the type of data in the knowledge base or a change in user queries. It is therefore essential to measure a few metrics:

- RAG component metrics that were evaluated before deployment need to be continuously monitored for degradation.

- Changes in user behavior can be tracked by analyzing the nature of user queries.

- System performance metrics such as latency, throughput, and similar should also be continuously monitored.

- Additional metrics such as error rates, system downtime, malicious attacks, and similar should also be tracked.

- User engagement metrics such as customer satisfaction scores or repeat engagement can indicate the usability of the system.

- Business metrics such as revenue effects and cost savings should also be tracked.

This dev framework completed its cycle with maintenance. However, it is not a linear process. New requirements and business objectives will emerge. This will re-initiate the dev cycle for an improved RAG system. This dev framework will prove to be a good reference resource while building RAG systems.

We conclude this book and end the discussion on RAG in the next section with some additional considerations to keep in mind as the generative AI domain evolves.