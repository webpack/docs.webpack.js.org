import { visit } from "unist-util-visit";

/**
 * Remark plugin to remove .md extensions from links
 */
export default () => (tree) => {
  visit(tree, "link", (node) => {
    if (node.url?.startsWith(".")) {
      node.url = node.url.replace(/\.[^/.]+$/, "");
    }
  });
};
