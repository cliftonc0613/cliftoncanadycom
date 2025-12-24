import type { Root, Element } from 'hast';

/**
 * Rehype plugin to wrap all tables with a responsive div
 * for horizontal scrolling on mobile devices
 */
export const rehypeWrapTables = () => {
  return (tree: Root) => {
    // Use a manual traversal instead of visit to avoid recursion issues
    const nodesToWrap: Array<{ parent: Element; index: number }> = [];

    // First pass: find all tables and record their positions
    const traverse = (node: any, parent: Element | null, index: number | null) => {
      if (node?.type === 'element' && node?.tagName === 'table' && parent && index !== null) {
        nodesToWrap.push({ parent, index });
      }
      if (node?.children) {
        node.children.forEach((child: any, i: number) => traverse(child, node, i));
      }
    };

    traverse(tree, null, null);

    // Second pass: wrap each table (in reverse order to maintain indices)
    nodesToWrap.reverse().forEach(({ parent, index }) => {
      const table = parent.children[index] as Element;

      // Create wrapper div
      const wrapper: Element = {
        type: 'element',
        tagName: 'div',
        properties: { className: ['table-wrapper'] },
        children: [table],
      };

      // Replace table with wrapper
      parent.children[index] = wrapper;
    });
  };
};
