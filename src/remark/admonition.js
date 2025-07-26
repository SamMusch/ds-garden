import { visit } from 'unist-util-visit';

export default function remarkAdmonition() {
  return (tree) => {
    visit(tree, 'code', (node, index, parent) => {
      if (!parent || !node.lang) return;

      const match = /^ad-([\w-]+)/i.exec(node.lang);
      if (!match) return;

      // first line like `title: My Title` (optional)
      const lines = node.value.split('\n');
      let title = '';
      if (/^\s*title:/i.test(lines[0])) {
        title = lines.shift().replace(/^\s*title:\s*/i, '');
      }
      const body = lines.join('\n');

      parent.children[index] = {
        type: 'mdxJsxFlowElement',
        name: 'Admonition',
        attributes: [
          { type: 'mdxJsxAttribute', name: 'type',  value: match[1] },
          ...(title ? [{ type: 'mdxJsxAttribute', name: 'title', value: title }] : [])
        ],
        children: [{ type: 'text', value: body }]
      };
    });
  };
}
