---
published: true
---

**Source systems**

- [SharePoint](https://docs.langchain.com/oss/python/integrations/document_loaders/microsoft_sharepoint): `pdf/doc/docx/txt` ⟶ `Document` objects

- [Postgres](https://reference.langchain.com/v0.3/python/community/document_loaders/langchain_community.document_loaders.sql_database.SQLDatabaseLoader.html?utm_source=chatgpt.com): let agent run queries

### SharePoint
***Microsoft Graph Files API***

- NOT Graph Data Connect

- NOT Metered APIs

***Microsoft Graph Files API***:

- **Requests/day**: 10k+

- **Documents**: 100k+

- **Throttling**: Safe below 20 requests/sec

---

AWS ⟶ ECS (running Docker)

- SharePoint ⟶ *LangChain’s SharePoint loader* ⟶ RAG pipeline

*LangChain’s SharePoint loader*

- **is**: an *HTTP* client to Microsoft Graph 

- **does**: downloads files ⟶ returns them as `Documents`

- **does NOT**: create an “airgapped” path by itself


What happens on ECS:

1. Your task makes **outbound HTTPS** calls from your VPC to **graph.microsoft.com** (Microsoft’s public SaaS edge).

2. Documents transit **AWS → Internet → Microsoft 365** (TLS), then back.