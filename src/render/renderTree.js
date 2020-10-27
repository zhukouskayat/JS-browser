/* eslint-disable import/prefer-default-export */
/* eslint-disable import/extensions */

export function renderTree(tree) {
  if (tree.length === 0) return null;

  const rootUl = document.createElement("ul");

  for (let i = 0; i < tree.length; i += 1) {
    const rootLi = document.createElement("li");
    const treeChildren = tree[i];
    rootLi.innerHTML = treeChildren.label;
    rootUl.append(rootLi);

    const subTree = renderTree(treeChildren.children);
    if (subTree !== null) rootUl.append(subTree);
    };

    return rootUl;
  };

// function renderTree(treeArray) {
//   if (treeArray.length === 0) return null;

//   const rootUlElement = document.createElement("ul");

//   treeArray.forEach((node) => {
//     const liElement = document.createElement("li");
//     liElement.innerHTML = node.label;
//     rootUlElement.append(liElement);

//     const subTree = renderTree(node.children);
//     if (subTree !== null) rootUlElement.append(subTree);
//   });

//   return rootUlElement;
// }