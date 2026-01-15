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
_kMDItemDisplayNameWithExtensions: XMAS-UI.md
ai_abstract: null
ai_key_terms: []
aliases: null
children: 0
created: '2026-01-14'
cssclasses: null
grandchildren: 0
kMDItemContentCreationDate: 2026-01-12 00:06:23 +0000
kMDItemContentCreationDate_Ranking: 2026-01-12 00:00:00 +0000
kMDItemContentModificationDate: 2026-01-14 15:05:58 +0000
kMDItemContentType: net.daringfireball.markdown
kMDItemContentTypeTree: (
kMDItemDateAdded: 2026-01-12 00:06:23 +0000
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
kMDItemInterestingDate_Ranking: 2026-01-14 00:00:00 +0000
modified: '2026-01-14'
published: true
reading_time: 2.9
source_file: XMAS-UI.md
tags: null
title: XMAS UI
word_count: 575
---

Scripts/files I’ll need (in the order we’ll touch them):

1. **app/templates/app.html**

    - Sidebar layout (22% width), hamburger toggle, 4 sections, “…” menu anchor, Settings button → modal markup.    

2. **app/static/app.js**

    - Sidebar toggle behavior, search filter, chat list ordering by date, hover “…” menu actions (rename/move/pin/delete), projects list state, tasks list state, settings persistence (color pickers), model dropdown wiring.

3. **app/static/site.css**

    - Variables for accent/bg colors, light/dark tokens, sidebar sizing, hover states, 3-dot menu, modal styling.

4. **app/templates/base.html**

    - Ensure modal overlay root works cleanly in full-bleed, apply saved preferences early (no flash).

5. **Backend (only if you want these persisted server-side):** **app/main.py**

    - Endpoints or injected config for **models**, **projects**, **pin/rename/delete**, **tasks**
  

app.html
app.js
site.css
base.html
app/main.py




**Page**

- 


**Sidebar** (left):

- toggle: hamburger

- default width: 22% of the viewport

- sections: 4

    - section 1: Controls.

        - Item 1: New chat

        - Item 2: Search chats

    - section 2: Projects.

        - Item 1: New project

        - Item 2+: {Created projects}

    - section 3: Conversation list.

        - Items 1+: {Previous chats ordered by date descending.} Instead of "hide", show 3 dots when hovering. After clicking the dots:

            - Option 1: Rename

            - Option 2: Move to project {show available projects}

            - Option 3: Pin chat

            - Option 4: Delete {in red font}

    - section 4: Settings. {when clicked, open as a model dialog}

        - Sub-section 1: Models {dropdown of available chat models}

        - Sub-section 2: Preferences

            - Preference 1: Accent {color wheel, default rgb(162, 129, 238)}

            - Preference 2: Appearance {light or dark, default light}

            - Preference 3: Toggle background {color wheel, default rgb(238, 245, 255)}

            - Preference 4: Chat background {color wheel, default rgb(255, 255, 255)}

        - Sub-section 3: Tasks

            - Item 1: "Schedule a task"

            - Item 2+: {Tasks that have already been scheduled}





- accent color: choose from wheel

- "add files" option

- metadata to specify

- hyperlinks as buttons



the **Page** is the entire document/content, the **Layout** is the structured arrangement (like a grid/template), and the **Viewport** is the visible window (browser screen or software view) showing a portion of that page


<div class="hb-row" markdown="block">
  <div class="hb-col" markdown="block">
### **1) Page & layout**

- **Route**: /app — the URL path served by FastAPI.

- **Page**: the full browser view rendered at /app.

- **Layout**: the page structure (sidebar + main panel).

- **Viewport**: the visible browser area.
  </div>
  <div class="hb-col" markdown="block">
### **3) Major UI regions (what you see)**

- **Header / Top bar**: “YourSite | Home | App”.

- **Sidebar** (left):

    - **Conversation list**

    - **Session item**: one past chat

    - **Controls**: New chat, Logout, Hide/Show

- **Main panel** (right):

    - **Chat transcript**: messages so far

    - **Composer**: input box + send button
  </div>
  <div class="hb-col" markdown="block">
### **6) Technical terms you’ll see**

- **DOM**: the live HTML tree in the browser.

- **CSS overflow**: why the page “keeps getting longer”.

- **Flexbox**: CSS layout system used for columns.

- **Scroll container**: element that should scroll (chat area).

- **SSE (Server-Sent Events)**: streaming responses.

- **State (UI state)**: which session is active, hidden, etc.
  </div>
</div>




### **4) Chat concepts**

- **Session**: one conversation thread (stored in DynamoDB).

- **Message**: one user or assistant turn.

- **System / hidden message**: stored but not rendered.

- **Session title**: short summary shown in sidebar.

### **5) Data flow (important)**

1. Browser loads /app.

2. FastAPI renders app.html.

3. Browser loads site.css + app.js.

4. User sends message.

5. JS opens **SSE stream** to /chat/stream.

6. Tokens stream back.

7. JS appends text to the DOM.


### **7) Files we’ll keep referring to**

- main.py ⟶ routes + data

- app.html ⟶ structure

- site.css ⟶ layout + scrolling bugs

- app.js ⟶ behavior (send, stream, hide)