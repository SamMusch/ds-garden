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
_kMDItemDisplayNameWithExtensions: Website.md
ai_abstract: null
ai_key_terms: []
aliases: null
children: 0
created: '2025-07-26'
cssclasses: null
grandchildren: 0
kMDItemContentCreationDate: 2025-07-26 00:36:51 +0000
kMDItemContentCreationDate_Ranking: 2025-07-26 00:00:00 +0000
kMDItemContentModificationDate: 2025-07-26 15:55:18 +0000
kMDItemContentType: net.daringfireball.markdown
kMDItemContentTypeTree: (
kMDItemDateAdded: 2025-07-26 00:36:51 +0000
kMDItemDocumentIdentifier: '169839'
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
kMDItemInterestingDate_Ranking: 2025-07-26 00:00:00 +0000
kMDItemLastUsedDate: 2025-07-26 03:57:18 +0000
kMDItemLastUsedDate_Ranking: 2025-07-26 00:00:00 +0000
kMDItemUseCount: '57'
kMDItemUsedDates: (
kMDItemUserModifiedDate: (
kMDItemUserModifiedUserHandle: (
modified: '2025-07-26'
published: true
reading_time: 1.3
source_file: Website.md
tags: null
title: Website
word_count: 258
---

### Todo

Steps (just reminders)
- [ ] Generating AI metadata fields (abstract, key terms)
- [ ] Selectively displaying metadata
- [ ] Hiding assets
- [ ] Virtual environment
- [ ] Move sidebar to top like traditional website
- [ ] Data - via [Content Layer: A Deep Dive \| Astro](https://astro.build/blog/content-layer-deep-dive/)
- [ ] Figure out why output files are going to the wrong place
- [ ] Redo admonition stuff - maybe within obsidian instead





### Github

[Tokens](https://github.com/settings/tokens)
[Actions](https://github.com/SamMusch/notes-vault/settings/secrets/actions)
[Workflow Runs](https://github.com/SamMusch/notes-vault/actions)

Create two repos

- **`notes-vault` (private)** — My notes
  - **Action secret**: DS_GARDEN_PAT
- **`ds-garden` (public)** — Astro site
  - **Action secret**: VAULT_PAT

[Tokens](https://github.com/settings/tokens): (PAT classic)

- vault-25-09-20
  [Secrets](https://github.com/SamMusch/ds-garden/settings/secrets/actions)

---



### Roles & names (no ambiguity)

- **Repo (source):** `notes-vault` — your private Obsidian vault.
- **Repo (dest):** `ds-garden` — your public Astro site.
- **Direction:** `notes-vault` **pushes** prepared Markdown into `ds-garden`.
- **PAT display name (in GitHub > Developer settings):** `pat-ds-garden-publish-2025-09`.
- **Secret (in `notes-vault` only):** `DS_GARDEN_PUBLISH_PAT`.
- **No secrets needed in `ds-garden`** (delete `VAULT_PAT` there to avoid confusion).
- **Workflow file (in `notes-vault`):** `.github/workflows/publish-to-ds-garden.yml`.







### Astro

**Astro**: a web framework. Best known for a new frontend architecture that reduces JS overhead & complexity.
- **How**: Builds pages as static HTML by default. Only adds JS code when requested, only loads when needed.
- **[Islands architecture](https://docs.astro.build/en/concepts/islands/)**:
    - **Islands**: Interactive components (eg buttons)
    - **Hydration**: Turning Islands into functional JS in the browser

[Design Principles](https://docs.astro.build/en/concepts/why-astro/#design-principles)
- **Content driven**: Not designed for building web _applications_ (eg logged-in admin dashboards, inboxes, social networks). Astro best for content-rich sites (eg documentation sites, blogs, portfolios, e-commerce sites)
- **Server-first**: Astro leverages **server** rendering over client-side rendering whenever possible.
- **Easy for non web-devs**: The `.astro` UI language is built on HTML. Don't need to know other template languages.

Hundreds of [integrations](https://astro.build/integrations/) to expand functionality, and [API hooks](https://docs.astro.build/en/reference/integrations-reference/) where integrations can execute code.

Resources:
[Astro (framework) - Wikiwand](https://www.wikiwand.com/es/articles/Astro_(framework))
[ELI5: What's so good about Astro? : r/webdev](https://www.reddit.com/r/webdev/comments/17gbja9/eli5_whats_so_good_about_astro/)

---

**Astro's framework taxonomy** - via ChatGPT

**1. Framework**: Astro
* **Type:** Static site generator + hybrid web framework
* **Ecosystem Role:** Meta-framework (renders HTML, integrates multiple UI libraries)

**2. Architecture**
* **Rendering Model:** Islands Architecture
* **Primary Rendering Modes Supported:**
  * **SSG** (default)
  * **SSR** (optional with adapter)
* **Client Interaction:** Partial hydration only where needed

**3. Rendering Strategy**
* **Output:** HTML-first, minimal JS
* **Hydration:** Manual/opt-in hydration (`client:load`, `client:visible`, etc.)
* **Templating:** Astro components + Markdown + JSX/Vue/Svelte/etc.
* **Routing:** File-based

**4. Supported UI Libraries (Component Model)**
* React, Vue, Svelte, Solid, Preact, etc.
* Astro components (native templating)

**5. Target Use Cases**
* Content-heavy sites
* Blogs, marketing sites, documentation
* Fast static delivery, SEO-friendly

**6. Deployment Targets**
* Static hosting (Netlify, Vercel, GitHub Pages)
* Serverless (with SSR adapters)
* Edge (Cloudflare Workers, Deno)

---

### Components

```
# hide
chflags hidden __

# unhide
chflags nohidden __
```

```
.

├── astro.config.mjs         Global config: integrations, md settings, output dir
├── package.json             NPM stuff
├── tsconfig.json            TypeScript stuff


├── public/                  -- Logos, etc
├── dist/                    OUTPUT


├── src/                     All source code that Astro compiles.
│   ├── assets/                -- Images, fonts, etc.
│   ├── content/               -- Content Collections (Starlight docs).
│   │   ├── docs/            INPUT: My notes
│   └── content.config.ts    -- Defines schema & collection settings for `content/`



```

### `src/`

The `src/` folder is where most of your project source code lives. This includes:
- [Pages](https://docs.astro.build/en/basics/astro-pages/): Markdown docs, similar
- [Layouts](https://docs.astro.build/en/basics/layouts/): Not clear
- [Components](https://docs.astro.build/en/basics/astro-components/): Buttons, interactive stuff
- [Styles](https://docs.astro.build/en/guides/styling/): CSS

Extra:
- [Markdown](https://docs.astro.build/en/guides/markdown-content/)
- [Images](https://docs.astro.build/en/guides/images/)







### Metadata

Ways to find files
- [Faceted classification](https://www.wikiwand.com/en/articles/Library_classification) - for **finding** files
- Search
- Hierarchy
- Graph view & filters

date created, data modified, word count, keywords, content group

1. Title (kMDItemDisplayName)
2. Date Created (kMDItemFSCreationDate)
3. Date Modified (kMDItemFSContentChangeDate)
4. Word Count
5. Reading time (using 200 wpm)
6. Content Group/Category
7. Document Type (kMDItemContentType)
8. 
9. Keywords
10. Abstract
11. DOI/Identifier
12. Resources
13. Version

mdls filename

| Metadata Field       | Description                           |
| -------------------- | ------------------------------------- |
| `kMDItemDisplayName` | File name as seen in Finder           |
| `kMDItemTitle`       | Title metadata (if set)               |
| `kMDItemAuthors`     | Author(s) metadata                    |
| `kMDItemKind`        | File type (e.g. “Markdown Document”)  |
| `kMDItemTextContent` | Full text content for indexing/search |
| `kMDItemKeywords`    | User-defined tags/keywords            |
| `kMDItemProjects`    | Related project metadata (if used)    |