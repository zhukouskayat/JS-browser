/* eslint-disable import/no-unresolved */
/* eslint-disable no-param-reassign */
/* eslint-disable import/extensions */
/* eslint-disable import/prefer-default-export */

import { browserTree, nodesHierarchy } from "./model/tree.js"
import { renderTree } from "./render/renderTree.js"
import { flattenTree, renderFlattenTree } from "./render/renderFlattenTree.js"

export function renderPage() {
  const browserTreeList = renderTree([browserTree]);
  const nodesHierarchyList = renderTree([nodesHierarchy]);

  const rootDiv = document.getElementById("root");
  if (browserTreeList !== null)rootDiv.append(browserTreeList);
  if (nodesHierarchyList !== null)rootDiv.append(nodesHierarchyList);

  const root = document.getElementById("root");
  const flattenBrowserTree = flattenTree(browserTree);
  const flattenNodesHierarchy = flattenTree(nodesHierarchy);

  root.append(renderFlattenTree(flattenBrowserTree));
  root.append(renderFlattenTree(flattenNodesHierarchy));
}
