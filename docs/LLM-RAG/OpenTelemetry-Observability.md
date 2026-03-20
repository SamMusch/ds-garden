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
_kMDItemDisplayNameWithExtensions: OpenTelemetry-Observability.md
ai_abstract: null
ai_key_terms: []
aliases: null
children: 0
created: '2026-03-20'
cssclasses: null
grandchildren: 0
kMDItemContentCreationDate: 2026-03-14 20:34:25 +0000
kMDItemContentCreationDate_Ranking: 2026-03-14 00:00:00 +0000
kMDItemContentModificationDate: 2026-03-20 21:56:11 +0000
kMDItemContentType: net.daringfireball.markdown
kMDItemContentTypeTree: (
kMDItemDateAdded: 2026-03-14 20:34:25 +0000
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
kMDItemInterestingDate_Ranking: 2026-03-20 00:00:00 +0000
modified: '2026-03-20'
published: true
reading_time: 0.8
source_file: OpenTelemetry-Observability.md
tags: null
title: OpenTelemetry Observability
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