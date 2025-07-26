# Website

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

