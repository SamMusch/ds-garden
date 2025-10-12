/* Collapsible sections for h2/h3 in MkDocs Material.
   - Wraps each h2/h3 and following siblings (until next equal/higher level) in <details>.
   - Skips headings with class 'no-collapse'.
   - Opens the right section when navigated via #hash.
*/

(function () {
  // Re-run on every page change (Material's instant navigation)
  const onPageLoad = () => {
    const root = document.querySelector('.md-content .md-typeset');
    if (!root) return;

    // Avoid double-processing
    if (root.__headingFoldApplied) return;
    root.__headingFoldApplied = true;

    // Which levels to fold
    const levels = new Set(['H2', 'H3']);

    // Collect headings to process (only direct content area)
    const headings = Array.from(root.querySelectorAll('h2, h3'))
      .filter(h => !h.classList.contains('no-collapse'));

    // Helper: make a <summary> that looks like a heading
    const makeSummary = (h) => {
      const s = document.createElement('summary');
      s.className = `hf-summary hf-${h.tagName.toLowerCase()}`;

      // Clone textual content but drop the permalink icon
      const clone = h.cloneNode(true);
      const anchor = clone.querySelector('a.headerlink');
      if (anchor) anchor.remove();
      s.append(...clone.childNodes);
      return s;
    };

    // Walk headings and wrap content until next equal/higher level
    for (const h of headings) {
      // If heading already wrapped (e.g., comes from previous nav), skip
      if (h.closest('details.hf-block')) continue;

      const currentLevel = h.tagName;
      const details = document.createElement('details');
      details.className = 'hf-block';
      details.setAttribute('data-level', currentLevel);
      details.open = true; // expanded by default

      // Preserve heading id for deep-linking by moving it to <details>
      if (h.id) {
        details.id = h.id;
        h.removeAttribute('id');
      }

      // Build summary
      const summary = makeSummary(h);
      details.appendChild(summary);

      // Content wrapper
      const container = document.createElement('div');
      container.className = 'hf-content';
      details.appendChild(container);

      // Move siblings until next equal/higher heading
      let node = h.nextSibling;
      const stopWhen = (n) =>
        n &&
        n.nodeType === 1 &&
        levels.has(n.tagName) &&
        // stop at same or higher level
        (n.tagName <= currentLevel);

      while (node && !stopWhen(node)) {
        const next = node.nextSibling;
        container.appendChild(node);
        node = next;
      }

      // Replace heading with details
      h.replaceWith(details);
    }

    // Open section if URL has a matching hash
    const openFromHash = () => {
      const id = decodeURIComponent(window.location.hash.slice(1));
      if (!id) return;
      const details = root.querySelector(`details.hf-block#${CSS.escape(id)}`);
      if (details) details.open = true;
    };

    // Optionally start all sections closed; open first h2 if you prefer:
    // const first = root.querySelector('details.hf-block[data-level="H2"]'); if (first) first.open = true;

    openFromHash();

    // Also open when hash changes via in-page TOC clicks
    window.addEventListener('hashchange', openFromHash, { passive: true });
  };

  // Material’s page-change hook
  if (window.document$) {
    window.document$.subscribe(onPageLoad);
  } else {
    // Fallback (non-instant loading)
    document.addEventListener('DOMContentLoaded', onPageLoad);
  }
})();
