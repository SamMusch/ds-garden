import { visit } from 'unist-util-visit';
import { fromMarkdown } from 'mdast-util-from-markdown';
import { gfm } from 'micromark-extension-gfm';
import { gfmFromMarkdown } from 'mdast-util-gfm';

export default function obsidianAdmonition() {
  console.log('[admonition] plugin loaded');    // ← you must see this line once

  return tree => {
    visit(tree, 'code', (node, index, parent) => {
      if (!parent || !node.lang) return;

      const match = /^ad-([\w-]+)/i.exec(node.lang);
      if (!match) return;

      const type = match[1];                    // "sam"

      const lines = node.value.split('\n');
      let title = '';
      if (/^\s*title:/i.test(lines[0])) {
        title = lines.shift().replace(/^\s*title:\s*/i, '');
      }
      const bodyMarkdown = lines.join('\n');

      const bodyAst = fromMarkdown(bodyMarkdown, {
        extensions: [gfm()],
        mdastExtensions: [gfmFromMarkdown()]
      }).children;

      parent.children[index] = {
        type: 'mdxJsxFlowElement',
        name: 'div',
        attributes: [
          { type: 'mdxJsxAttribute', name: 'class', value: `admonition ${type}` },
          ...(title ? [{ type: 'mdxJsxAttribute', name: 'data-title', value: title }] : [])
        ],
        children: bodyAst
      };
      console.log('[admonition] fence converted');  // ← and this for every block
    });
  };
}

