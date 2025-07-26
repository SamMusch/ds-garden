export default function () {
  return (tree) => {
    visit(tree, 'code', (node, idx, parent) => {
      const m = /^ad-([\w-]+)/.exec(node.lang || '');
      if (!m) return;

      const type = m[1];          // “sam”
      const body = node.value;    // content

      parent.children[idx] = {
        type: 'mdxJsxFlowElement',
        name: 'Admonition',
        attributes: [{ name: 'type', value: type }],
        children: [{ type: 'text', value: body }],
      };
    });
  };
}
