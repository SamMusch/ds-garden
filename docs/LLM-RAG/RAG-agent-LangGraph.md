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
_kMDItemDisplayNameWithExtensions: RAG-agent-LangGraph.md
ai_abstract: null
ai_key_terms: []
aliases: null
author:

- '[[Docs by LangChain]]'
children: 0
created: '2025-12-30'
cssclasses: null
description: null
grandchildren: 0
kMDItemContentCreationDate: 2025-12-30 21:11:39 +0000
kMDItemContentCreationDate_Ranking: 2025-12-30 00:00:00 +0000
kMDItemContentModificationDate: 2025-12-30 21:14:31 +0000
kMDItemContentType: net.daringfireball.markdown
kMDItemContentTypeTree: (
kMDItemDateAdded: 2025-12-30 21:11:39 +0000
kMDItemDocumentIdentifier: '0'
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
kMDItemInterestingDate_Ranking: 2025-12-30 00:00:00 +0000
modified: '2025-12-30'
published: true
reading_time: 5.5
source: https://docs.langchain.com/oss/python/langgraph/agentic-rag
source_file: RAG-agent-LangGraph.md
tags: null
title: RAG agent LangGraph
word_count: 1091
---

## Overview

Build a [retrieval](https://docs.langchain.com/oss/python/langchain/retrieval) agent using LangGraph. 

[Retrieval](https://docs.langchain.com/oss/python/langchain/retrieval) agents: want LLMs to decide - retrieve context from a vectorstore? or respond to the user directly?


Tutorial

1. Pre-process

2. I pipe

3. Build an agentic RAG system (decides when to use the R tool)

### Concepts
We will cover the following concepts:

- [Retrieval](https://docs.langchain.com/oss/python/langchain/retrieval) using [document loaders](https://docs.langchain.com/oss/python/integrations/document_loaders), [text splitters](https://docs.langchain.com/oss/python/integrations/splitters), [embeddings](https://docs.langchain.com/oss/python/integrations/text_embedding), and [vector stores](https://docs.langchain.com/oss/python/integrations/vectorstores)

- The LangGraph [Graph API](https://docs.langchain.com/oss/python/langgraph/graph-api), including state, nodes, edges, and conditional edges.


![SQL agent graph](https://mintcdn.com/langchain-5e9cc07a/-_xGPoyjhyiDWTPJ/oss/images/agentic-rag-output.png?w=280&fit=max&auto=format&n=-_xGPoyjhyiDWTPJ&q=85&s=e8ade9698046fa97bd4600ffc0ee2ffd)


## 2\. Create a retriever tool

```python
# index into KB for search
from langchain_core.vectorstores import InMemoryVectorStore
from langchain_openai import OpenAIEmbeddings
vectorstore = InMemoryVectorStore.from_documents(
    documents=doc_splits, embedding=OpenAIEmbeddings())

retriever = vectorstore.as_retriever()
```

```python
# create retriever
from langchain_classic.tools.retriever import create_retriever_tool
retriever_tool = create_retriever_tool(
    retriever,
    "retrieve_blog_posts",
    "Search and return information about Lilian Weng blog posts.",
)

# test it out
retriever_tool.invoke({"query": "types of reward hacking"})
```



## 3\. Generate query

Start building *components* for our agentic RAG graph. 

- components: [nodes](https://docs.langchain.com/oss/python/langgraph/graph-api#nodes) and [edges](https://docs.langchain.com/oss/python/langgraph/graph-api#edges)

- components will operate on the [`MessagesState`](https://docs.langchain.com/oss/python/langgraph/graph-api#messagesstate), a graph state that contains a `messages` key with a list of [chat messages](https://python.langchain.com/docs/concepts/messages/).


```python
from langgraph.graph import MessagesState
from langchain.chat_models import init_chat_model
response_model = init_chat_model("gpt-4o", temperature=0)

def generate_query_or_respond(state: MessagesState):
    """
    Call model ⟶ gen response based on the current state. 
    Model decides between a) simple reponse or b) R using R tool
    """
    response = (
        response_model
        .bind_tools([retriever_tool]).invoke(state["messages"]))
    return {"messages": [response]}
```


```python

# test
# Ask a question that requires semantic search:
input = {
    "messages": [
        {
            "role": "user",
            "content": "What does Lilian Weng say about types of reward hacking?",
        }
    ]
}

generate_query_or_respond(input)["messages"][-1].pretty_print()
```



## 4\. Grade documents

This is how we decide between a) simple response or b) R using R tool

**Evaluation**: a [conditional edge](https://docs.langchain.com/oss/python/langgraph/graph-api#conditional-edges)  (`grade_documents`)
Compares:

1. R docs

2. Q

If not relevant ⟶ `generate_answer`
If relevant ⟶  `rewrite_question`

```python

from pydantic import BaseModel, Field
from typing import Literal

GRADE_PROMPT = (
    "You are a grader assessing relevance of a retrieved document to a user question. \n "
    "Here is the retrieved document: \n\n {context} \n\n"
    "Here is the user question: {question} \n"
    "If the document contains keyword(s) or semantic meaning related to the user question, grade it as relevant. \n"
    "Give a binary score 'yes' or 'no' score to indicate whether the document is relevant to the question."
)


# conditional edge: 
# https://docs.langchain.com/oss/python/langgraph/graph-api#conditional-edges
class GradeDocuments(BaseModel):  
    """Grade documents using a binary score for relevance check."""
    binary_score: str = Field(
        description="Relevance score: 'yes' if relevant, or 'no' if not relevant")


grader_model = init_chat_model("gpt-4o", temperature=0)


def grade_documents(
    state: MessagesState,
) -> Literal["generate_answer", "rewrite_question"]:
    """Determine whether the retrieved documents are relevant to the question."""
    question = state["messages"][0].content
    context = state["messages"][-1].content
    prompt = GRADE_PROMPT.format(question=question, context=context)
    response = (
        grader_model
        .with_structured_output(GradeDocuments).invoke(  
            [{"role": "user", "content": prompt}]
        )
    )
    score = response.binary_score
    if score == "yes":
        return "generate_answer"      # if docs relevant
    else:
        return "rewrite_question"     # if docs not relevant

```



## 5\. Rewrite question

Build `rewrite_question` node. 

- why: prevent R from returning irrelevant docs

```python


from langchain.messages import HumanMessage
REWRITE_PROMPT = (
    "Look at the input and try to reason about the underlying semantic intent / meaning.\n"
    "Here is the initial question:"
    "\n ------- \n"
    "{question}"
    "\n ------- \n"
    "Formulate an improved question:"
)

def rewrite_question(state: MessagesState):
    """Rewrite the original user question."""
    messages = state["messages"]
    question = messages[0].content
    prompt = REWRITE_PROMPT.format(question=question)
    response = response_model.invoke([{"role": "user", "content": prompt}])
    return {"messages": [HumanMessage(content=response.content)]}
```



## 6\. Generate an answer

Build `generate_answer` node: 

once we pass grader checks ⟶ use Q & R context ⟶ G


```python
GENERATE_PROMPT = (
    "You are an assistant for question-answering tasks. "
    "Use the following pieces of retrieved context to answer the question. "
    "If you don't know the answer, just say that you don't know. "
    "Use three sentences maximum and keep the answer concise.\n"
    "Question: {question} \n"
    "Context: {context}"
)

def generate_answer(state: MessagesState):
    """Generate an answer."""
    question = state["messages"][0].content
    context = state["messages"][-1].content
    prompt = GENERATE_PROMPT.format(question=question, context=context)
    response = response_model.invoke([{"role": "user", "content": prompt}])
    return {"messages": [response]}
```



## 7\. Assemble the graph

Now we’ll assemble all the nodes and edges into a complete graph:

- Start with a `generate_query_or_respond` and determine if we need to call `retriever_tool`

- Route to next step using `tools_condition`:

	- If `generate_query_or_respond` returned `tool_calls`, call `retriever_tool` to retrieve context

	- Otherwise, respond directly to the user

- Grade retrieved document content for relevance to the question (`grade_documents`) and route to next step:

	- If not relevant, rewrite the question using `rewrite_question` and then call `generate_query_or_respond` again

	- If relevant, proceed to `generate_answer` and generate final response using the [`ToolMessage`](https://reference.langchain.com/python/langchain/messages/#langchain.messages.ToolMessage) with the retrieved document context

```python
from langgraph.graph import StateGraph, START, END
from langgraph.prebuilt import ToolNode, tools_condition


workflow = StateGraph(MessagesState)

# Define the nodes we will cycle between
workflow.add_node(generate_query_or_respond)
workflow.add_node("retrieve", ToolNode([retriever_tool]))
workflow.add_node(rewrite_question)
workflow.add_node(generate_answer)
workflow.add_edge(START, "generate_query_or_respond")

# Decide whether to retrieve
workflow.add_conditional_edges(
    "generate_query_or_respond",
    tools_condition,  # Assess LLM decision
    {
        "tools": "retrieve",  # Translate the condition outputs to nodes in our graph
        END: END,
    },
)

# Edges taken after the \`action\` node is called.
workflow.add_conditional_edges(
    "retrieve",
    grade_documents, # Assess agent decision
)

workflow.add_edge("generate_answer", END)
workflow.add_edge("rewrite_question", "generate_query_or_respond")

graph = workflow.compile()
```

Visualize the graph:

```python
from IPython.display import Image, display
display(Image(graph.get_graph().draw_mermaid_png()))
```

[SQL agent graph](https://mintcdn.com/langchain-5e9cc07a/-_xGPoyjhyiDWTPJ/oss/images/agentic-rag-output.png?w=280&fit=max&auto=format&n=-_xGPoyjhyiDWTPJ&q=85&s=e8ade9698046fa97bd4600ffc0ee2ffd)




## 8\. Run the agentic RAG

Now let’s test the complete graph by running it with a question:

```python
for chunk in graph.stream(
    {
        "messages": [
            {
                "role": "user",
                "content": "What does Lilian Weng say about types of reward hacking?",
            }
        ]
    }
):

    for node, update in chunk.items():
        print("Update from node", node)
        update["messages"][-1].pretty_print()
        print("\n\n")
```