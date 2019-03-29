import createElement from "./element";
import diff from "./diff";
import patch from "./patch";

// 1. 构建虚拟DOM
const tree = createElement("div", { id: "root" }, [
  createElement("h1", { style: "color: blue" }, ["Tittle1"]),
  createElement("p", ["Hello, virtual-dom"]),
  createElement("ul", [
    createElement("li", { key: 1 }, ["li1"]),
    createElement("li", { key: 2 }, ["li2"]),
    createElement("li", { key: 3 }, ["li3"]),
    createElement("li", { key: 4 }, ["li4"])
  ])
]);

// 2. 通过虚拟DOM构建真正的DOM
const root = tree.render();
console.log(tree)
document.body.appendChild(root);

// 3. 生成新的虚拟DOM
const newTree = createElement("div", { id: "container" }, [
  createElement("h1", { style: "color: red" }, ["Title2"]),
  createElement("h3", ["Hello, virtual-dom"]),
  createElement("ul", [
    createElement("li", { key: 3 }, ["li3"]),
    createElement("li", { key: 1 }, ["li1"]),
    createElement("li", { key: 2 }, ["li2"]),
    createElement("li", { key: 5 }, ["li5"])
  ])
]);
console.log(newTree)

// 4. 比较两棵虚拟DOM树的不同
const patches = diff(tree, newTree);
console.log(patches)

// 5. 在真正的DOM元素上应用变更
patch(root, patches);
