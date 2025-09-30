---
published: true
---

Delete this after completing the book.


**Textbook**: A Simple Guide to RAG

- [Oreilly](https://learning.oreilly.com/library/view/a-simple-guide/9781633435858/OEBPS/Text/part-1.html)

- [Github](https://github.com/abhinav-kimothi/A-Simple-Guide-to-RAG)

!!! sam
    Intuition, not from this textbook.

    [RECAP: RAG and Fine-Tuning](https://www.coursera.org/learn/generative-ai-for-everyone/lecture/GTmd7/practically-speaking-retrieval-meets-refinement)

    - **RAG**: Smart student being given new info right before an exam.

    - **Fine-tuning**: Doctor who knows a ton of stuff, but specializes in a subfield.

    Steps:

    1. Start with basic LLM. Hallucinates.

    2. **Improve factual content**: Use RAG so LLM has real-time info ready.

    3. **Improve style/tone**: Use fine-tuning to improve the "delivery" (lingo / acronyms).


**Part 1: Foundations**

- [[01-LLMs-RAG]]: Definition and purpose

- [[02-RAG-systems-design]]: Design of RAG systems, pipelines/components, layers/RAGOps, evaluation

**Part 2: Creating RAG systems**

- [[03-Indexing]]: Create KB  |  *load ⟶ split ⟶ embed ⟶ store*

- [[04-Generation pipeline]]: Gen responses  |  *R ⟶ A ⟶ G*

- [[05-RAG-evaluation]]: Evaluation metrics, frameworks, benchmarks

**Part 3: RAG in Production**

- [[06-Progression-of-RAG systems]]: Naïve, advanced, and modular RAG

- [[07-Evolving RAGOps-stack]]: Critical layers; Essential layers; Enhancement layers

**Part 4: Additional considerations**

- [[08-Graph-multimodal-agentic]]

- [[09-RAG-dev]]



| Part                             | Chapter                                                                   | Section                                         | Subsection                                                                                                                                                                                                                                                                                                         |
| :------------------------------- | :------------------------------------------------------------------------ | :---------------------------------------------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Part 4 Additional considerations | [[08-Graph-multimodal-agentic]]                                           | What are RAG variants, and why do we need them? |                                                                                                                                                                                                                                                                                                                    |
|                                  |                                                                           | Multimodal RAG                                  | Data modality; Multimodal RAG use cases; Multimodal RAG pipelines; Challenges and best practices                                                                                                                                                                                                                   |
|                                  |                                                                           | Knowledge graph RAG                             | Knowledge graphs; Knowledge graph RAG use cases; Graph RAG approaches; Graph RAG pipelines; Challenges and best practices                                                                                                                                                                                          |
|                                  |                                                                           | Agentic RAG                                     | LLM agents; Agentic RAG capabilities; Agentic RAG pipelines; Challenges and pest practices                                                                                                                                                                                                                         |
|                                  |                                                                           | Other RAG variants                              | Corrective RAG; Speculative RAG; Self-reflective (self RAG); RAPTOR                                                                                                                                                                                                                                                |
|                                  | [[09-RAG-dev]]<br><br>framework and further exploration                   | RAG development framework                       | Initiation stage: Defining and scoping the RAG system                                                                                                                                                                                                                                                              |
|                                  |                                                                           | Design stage: Layering the RAGOps stack         | Indexing pipeline design; Generation pipeline design; Other design considerations; Development stage: Building modular RAG pipelines; Evaluation stage: Validating and optimizing the RAG system; Deployment stage: Launching and scaling the RAG system; Maintenance stage: Ensuring reliability and adaptability |
|                                  |                                                                           | Ideas for further exploration                   | Fine-tuning within RAG; Long-context windows in LLMs; Managed solutions; Difficult queries                                                                                                                                                                                                                         |