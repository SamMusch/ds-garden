
Steps (just reminders)
- [ ] Generating AI metadata fields (abstract, key terms)
- [ ] Selectively displaying metadata
- [ ] Hiding assets
- [ ] Virtual environment



# Website


[Tokens](https://github.com/settings/tokens)
[Actions](https://github.com/SamMusch/notes-vault/settings/secrets/actions)
[Workflow Runs](https://github.com/SamMusch/notes-vault/actions)


`src/content`: Source folders/content
`dist/`: Output folder

|            **Element**             |                                      **Definition**                                       |                                      **Purpose**                                      |
| :--------------------------------: | :---------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------: |
|            .astro files            | Component/page files that mix: <br>- HTML<br>- frontmatter script <br>- templating syntax |           Define pages and UI components that Astro compiles to static HTML           |
|      JavaScript / TypeScript       |                                  Regular JS/TS modules.                                   |    Add build-time logic, utilities, and client-side interactivity when you opt in.    |
|           Markdown / MDX           |                               MDX = Markdown + components.                                |         Write content-heavy pages/posts; Astro turns them into HTML at build.         |
| Static assets (CSS, images, fonts) |                                                                                           |                                                                                       |
|          astro.config.mjs          |                                        config file                                        | Set integrations, output mode (static/server), build options, adapters, aliases, etc. |
|            package.json            |                                  Node project manifest.                                   |           Declares dependencies and scripts (astro dev, astro build, etc.).           |





date created, data modified, word count, keywords, content group



Sure! Here are 15 best-practice metadata fields for a research website:
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
