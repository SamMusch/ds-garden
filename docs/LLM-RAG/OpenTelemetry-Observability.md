---
Function: null
Objective: null
Quality: null
QualityComment: null
ReviewFreq: null
ai_abstract: null
ai_key_terms: []
children: 0
grandchildren: 0
kMDItemContentCreationDate: 2026-03-14 20:34:25 +0000
kMDItemContentModificationDate: 2026-04-04 18:16:23 +0000
kMDItemDateAdded: 2026-03-14 20:34:25 +0000
kMDItemFSFinderFlags: '0'
published: true
reading_time: 0.8
source_file: OpenTelemetry-Observability.md
tags: null
word_count: 170
---

## OTel

***OpenTelemetry*** (OTel)

- **is**: an open-source **standard** for collecting/exporting telemetry data

- **purpose**: to provide observability into apps 

Key Concepts

- **Unified Standard**: 1 way to collect logs/metrics/traces

- **Vendor Neutral**: OTel's flexible exporter system allows you to switch monitoring backends

**unified framework**, with these components:

<div class="hb-row" markdown="block">
  <div class="hb-col" markdown="block">
*APIs* (for developers)

You instrument code once. The API defines *what* telemetry you emit without deciding *where it goes*.
  </div>
  <div class="hb-col" markdown="block">
*SDKs* (for instrumentation)

The SDK decides *how* telemetry is produced: sampling, aggregation, batching, context propagation
  </div>
  <div class="hb-col" markdown="block">
*OTLP* (the standard protocol + data model)

A single, canonical wire format. Every signal uses the same model and transport, so components interoperate predictably.
  </div>
  <div class="hb-col" markdown="block">
*Collector* (for processing and exporting)

A standalone pipeline. It receives OTLP, processes it (filter, transform, enrich), and exports it to any backend. Apps don’t talk to vendors.
  </div>
</div>


Links

- https://opentelemetry.io/docs/what-is-opentelemetry/

- https://opentelemetry.io/docs/

- https://blog.langchain.com/end-to-end-opentelemetry-langsmith/

    - Full: [Trace with OpenTelemetry - Docs by LangChain](https://docs.langchain.com/langsmith/trace-with-opentelemetry)