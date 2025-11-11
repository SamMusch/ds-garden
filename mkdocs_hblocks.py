# mkdocs_hblocks.py
from markdown.extensions import Extension
from markdown.blockprocessors import FencedCodeBlockProcessor
from markdown.util import etree
import re

SEP = re.compile(r'^\s*---\s*$', re.MULTILINE)

class HorizontalBlockProcessor(FencedCodeBlockProcessor):
    def run(self, parent, blocks):
        block = blocks[0]
        m = self.RE.match(block)
        if not m:
            return False
        lang = (m.group('lang') or '').strip().lower()
        if lang not in ('horizontal', 'hblock'):
            return False

        blocks.pop(0)
        code = (m.group('code') or '').strip()
        parts = [p.strip() for p in SEP.split(code) if p.strip()]

        container = etree.SubElement(parent, 'div')
        container.set('class', 'hb-grid')
        container.set('style', f'--hb-cols:{max(1, len(parts))};')

        for part in parts:
            col = etree.SubElement(container, 'div')
            col.set('class', 'hb-col')
            self.parser.parseBlocks(col, [part])

        return True

class HorizontalBlocksExtension(Extension):
    def extendMarkdown(self, md):
        md.parser.blockprocessors.register(
            HorizontalBlockProcessor(md.parser), 'horizontal_blocks', 105
        )

def makeExtension(**kwargs):
    return HorizontalBlocksExtension(**kwargs)