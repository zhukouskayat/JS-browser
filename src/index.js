/* eslint-disable import/prefer-default-export */
/* eslint-disable import/extensions */

import { browserTree, nodesHierarchy } from "./tree.js"

function renderTree(tree) {
  const rootUl = document.createElement("ul");
  rootUl.style.backgroundColor = "#dde6ff";
  rootUl.style.paddingTop = "20px";
  rootUl.style.paddingBottom = "20px";
  
  
  const rootLi = document.createElement("li");
  rootUl.append(rootLi);
  rootLi.innerHTML = tree.label;

  const sListUl = document.createElement("ul");
  rootUl.append(sListUl);  

  for (let i = 0; i < tree.children.length; i += 1) {
    const sListLi = document.createElement("li");
    const treeChildren = tree.children[i];
    sListLi.innerHTML = treeChildren.label;
    sListUl.append(sListLi);

    const sListUl2 = document.createElement("ul");
    sListUl.append(sListUl2);

    for (let j = 0; j < treeChildren.children.length; j += 1) {
      const sListLi1 = document.createElement("li");
      const treeChildren1 = treeChildren.children[j];
      sListLi1.innerHTML = treeChildren1.label;
      sListUl2.append(sListLi1);

      // const sListUl3 = document.createElement("ul");
      // sListUl.append(sListUl3);

      // for (let q = 0; q < treeChildren1.children.length; q += 1) {
      //   const sListLi2 = document.createElement("li");
      //   const treeChildren2 = treeChildren1.children[q];
      //   sListLi2.innerHTML = treeChildren2.label;
      //   sListUl3.append(sListLi2);

      //   const sListUl4 = document.createElement("ul");
      //   sListUl.append(sListUl4);

      //   for (let z = 0; z < treeChildren2.children.length; z += 1) {
      //     const sListLi3 = document.createElement("li");
      //     const treeChildren3 = treeChildren2.children[z];
      //     sListLi3.innerHTML = treeChildren3.label;
      //     sListUl4.append(sListLi3);
      //   }
      // }
    };
  };
return rootUl;
};

export function renderPage() {
  const browserTreeList = renderTree(browserTree);
  const nodesHierarchyList = renderTree(nodesHierarchy);

  const rootDiv = document.getElementById("root");
  rootDiv.append(browserTreeList);
  rootDiv.append(nodesHierarchyList);
};