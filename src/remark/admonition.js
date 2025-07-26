// src/remark/admonition.js
import { visit } from 'unist-util-visit';

export default function remarkAdmonition () {
  return (tree) => {
    visit(tree, 'code', (node, idx, parent) => {
      const m = /^ad-([\w-]+)/.exec(node.lang || '');
      if (!m) return;

      const type  = m[1];
      const value = node.value;

      parent.children[idx] = {
        type: 'mdxJsxFlowElement',
        name: 'Admonition',
        attributes: [
          { type: 'mdxJsxAttribute', name: 'type', value: type }
        ],
        children: [{ type: 'jsxText', value }]
      };
    });
  };
}
