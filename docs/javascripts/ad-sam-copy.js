/* ad-sam-copy.js — v2.1 (Typora-friendly, no "Copy" in output) */

function htmlToMd(node, ctx = { depth: 0, ordered: false, index: 1 }) {
  if (!node) return "";
  if (node.nodeType === Node.TEXT_NODE) {
    return node.nodeValue.replace(/\s+/g, " ");
  }
  if (node.nodeType !== Node.ELEMENT_NODE) return "";

  const el = node;
  const name = el.nodeName.toLowerCase();
  const trim = (s) => s.replace(/[ \t]+\n/g, "\n").replace(/^\s+|\s+$/g, "");
  const renderChildren = (nextCtx = ctx) =>
    Array.from(el.childNodes).map((c) => htmlToMd(c, nextCtx)).join("");

  switch (name) {
    case "p":
      return trim(renderChildren()) + "\n\n";
    case "br":
      return "  \n";
    case "strong":
    case "b":
      return `**${trim(renderChildren())}**`;
    case "em":
    case "i":
      return `*${trim(renderChildren())}*`;
    case "code": {
      const isBlock =
        el.parentElement &&
        el.parentElement.nodeName.toLowerCase() === "pre";
      const content = el.textContent.replace(/\n+$/g, "");
      return isBlock
        ? "```\n" + content + "\n```\n\n"
        : "`" + content.trim() + "`";
    }
    case "pre": {
      const content = el.textContent.replace(/\n+$/g, "");
      return "```\n" + content + "\n```\n\n";
    }
    case "a": {
      const href = el.getAttribute("href") || "";
      const txt = trim(renderChildren());
      return href ? `[${txt}](${href})` : txt;
    }
    case "ul":
    case "ol": {
      let counter = 1;
      const items = Array.from(el.children)
        .filter((li) => li.tagName.toLowerCase() === "li")
        .map((li) =>
          htmlToMd(li, {
            ...ctx,
            depth: ctx.depth + 1,
            ordered: name === "ol",
            index: name === "ol" ? counter++ : 1,
          })
        )
        .join("");
      return items + (ctx.depth === 0 ? "\n" : "");
    }
    case "li": {
      const blocks = Array.from(el.childNodes);
      const inlineParts = [];
      const sublists = [];
      for (const child of blocks) {
        const tag = child.nodeType === 1 ? child.nodeName.toLowerCase() : "";
        if (tag === "ul" || tag === "ol") sublists.push(child);
        else inlineParts.push(child);
      }
      const indent = "  ".repeat(Math.max(0, ctx.depth - 1));
      const bullet = ctx.ordered ? `${ctx.index}. ` : "- ";
      const inlineText = trim(
        inlineParts.map((c) => htmlToMd(c, ctx)).join("")
      ).replace(/\n+/g, " ");
      let out = `${indent}${bullet}${inlineText}\n`;
      for (const sl of sublists) {
        out += htmlToMd(sl, {
          ...ctx,
          depth: ctx.depth + 1,
          ordered: sl.nodeName.toLowerCase() === "ol",
          index: 1,
        });
      }
      return out;
    }
    default:
      return renderChildren();
  }
}




/* Inject a copy button into every ad-sam box on the page */
function injectSamCopyButtons(root = document) {
  const boxes = root.querySelectorAll(
    ".md-typeset .admonition.sam, .md-typeset details.sam"
  );

  boxes.forEach((box) => {
    // Avoid duplicates
    if (box.querySelector(".ad-sam__copy")) return;

    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "ad-sam__copy";
    btn.setAttribute("aria-label", "Copy");
    btn.title = "Copy as Markdown";
    btn.textContent = "Copy";

    btn.addEventListener("click", async () => {
      // Clone visible content only (exclude title + button)
      const frag = document.createElement("div");
      Array.from(box.children).forEach((el) => {
        if (
          !el.classList.contains("admonition-title") &&
          !el.classList.contains("ad-sam__copy")
        ) {
          frag.appendChild(el.cloneNode(true));
        }
      });

      const markdown = htmlToMd(frag).trim();

      try {
        await navigator.clipboard.writeText(markdown);
        btn.classList.add("ad-sam__copy--ok");
        btn.textContent = "Copied";
        setTimeout(() => {
          btn.classList.remove("ad-sam__copy--ok");
          btn.textContent = "Copy";
        }, 1200);
      } catch (e) {
        console.error("[ad-sam] Clipboard write failed:", e);
        btn.textContent = "Copy (blocked)";
        setTimeout(() => (btn.textContent = "Copy"), 1400);
      }
    });

    box.appendChild(btn);
  });
}

/* Run once on initial load */
document.addEventListener("DOMContentLoaded", () => injectSamCopyButtons(document));

/* Re-run on every Material page change */
if (window && window.document$ && typeof window.document$.subscribe === "function") {
  window.document$.subscribe(() => injectSamCopyButtons(document));
}

/* As a final safety net, observe DOM mutations (e.g., late-rendered content) */
const observer = new MutationObserver((mutations) => {
  for (const m of mutations) {
    if (m.addedNodes && m.addedNodes.length) {
      injectSamCopyButtons(document);
      break;
    }
  }
});
observer.observe(document.documentElement, { childList: true, subtree: true });
