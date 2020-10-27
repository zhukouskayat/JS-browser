/* eslint-disable import/extensions */
/* eslint-disable import/prefer-default-export */

export function flattenTree(tree) {
  const result = [];

  const treeLabel = tree.label;
  const treeChildren = tree.children;

  if (tree.length === 0) {
    return null
  } result.push(treeLabel);

  if (treeChildren.length !== 0) {
    for (let i = 0; i < treeChildren.length; i += 1) {
      const children = treeChildren[i];
      result.push(...flattenTree(children));
    }
  }

  return result;
};

export function renderFlattenTree(treeArray) {
  const ol = document.createElement('ol');
  treeArray.forEach(tree => {
    const li = document.createElement('li');
    li.innerHTML = tree;
    ol.append(li)
  })
  return ol;
}