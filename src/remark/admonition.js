import { visit } from 'unist-util-visit';
import { fromMarkdown } from 'mdast-util-from-markdown';
import { gfm } from 'micromark-extension-gfm';
import { gfmFromMarkdown } from 'mdast-util-gfm';

export default function remarkAdmonition () {
  return tree => {
    visit(tree, 'code', (node, idx, parent) => {
      if (!parent || !node.lang) return;

      const m = /^ad-([\w-]+)/i.exec(node.lang);
      if (!m) return;                               // not our block

      // optional first line:  title: foo
      const lines = node.value.split('\n');
      let title = '';
      if (/^\s*title:/i.test(lines[0])) {
        title = lines.shift().replace(/^\s*title:\s*/i, '');
      }
      const body = lines.join('\n');

      /* parse the body markdown → mdast nodes */
      const bodyTree = fromMarkdown(body, {
        extensions: [gfm()],
        mdastExtensions: [gfmFromMarkdown()]
      }).children;

      parent.children[idx] = {
        type: 'mdxJsxFlowElement',
        name: 'Admonition',
        attributes: [
          { type: 'mdxJsxAttribute', name: 'type',  value: m[1] },
          ...(title ? [{ type: 'mdxJsxAttribute', name: 'title', value: title }] : [])
        ],
        children: bodyTree
      };
    });
  };
}
