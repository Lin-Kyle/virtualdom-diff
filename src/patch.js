import {
  isString,
  isObject,
  objForEach,
  aryForEach,
  setAttr,
  toArray
} from "./util";
import { REPLACE, REORDER, PROPS, TEXT, NOKEY } from "./common";

function patch(node, patches) {
  const walker = { index: 0 };
  dfsWalk(node, walker, patches);
}

// 深度遍历更新
function dfsWalk(node, walker, patches) {
  const currentPatches = patches[walker.index];

  node.childNodes &&
    aryForEach(node.childNodes, item => {
      walker.index++;
      dfsWalk(item, walker, patches);
    });

  currentPatches && applyPatches(node, currentPatches);
}

// 更新类型
function applyPatches(node, currentPatches) {
  aryForEach(currentPatches, item => {
    switch (item.type) {
      case REPLACE:
        const nNode = isString(item.node)
          ? document.createTextNode(item.node)
          : item.node.render();
        node.parentNode.replaceChild(nNode, node);
        break;
      case REORDER:
        reorderChildren(node, item.moves);
        break;
      case PROPS:
        setProps(node, item.props);
        break;
      case TEXT:
        if (node.textContent) {
          // 使用纯文本
          node.textContent = item.content;
        } else {
          // 仅仅对CDATA片段，注释comment，Processing Instruction节点或text节点有效
          node.nodeValue = item.content;
        }
        break;
      default:
        throw new Error("Unknown patch type " + item.type);
    }
  });
}

// 修改属性
function setProps(node, props) {
  objForEach(props, key => {
    if (props[key] === void NOKEY) {
      node.removeAttribute(key);
    } else {
      setAttr(node, key, props[key]);
    }
  });
}

// 列表排序渲染
function reorderChildren(node, moves) {
  const staticNodeList = toArray(node.childNodes);
  const maps = {};

  aryForEach(staticNodeList, node => {
    // Element
    if (node.nodeType === 1) {
      const key = node.getAttribute("key");
      key && (maps[key] = node);
    }
  });

  aryForEach(moves, move => {
    const index = move.index;
    // 0:删除 1:替换
    if (move.type === 0) {
      // 找到对应节点删除
      staticNodeList[index] === node.childNodes[index] &&
        node.removeChild(node.childNodes[index]);
      staticNodeList.splice(index, 1);
    } else if (move.type === 1) {
      let insertNode;
      if (maps[move.item.key]) {
        // 删除并返回节点
        insertNode = node.removeChild(maps[move.item.key]);
        // 获取删除节点位置
        staticNodeList.splice(Array.prototype.indexOf.call(node.childNodes, maps[move.item.key]), 1);
      } else {
        // 创建节点
        insertNode = isObject(move.item)
          ? move.item.render()
          : document.createTextNode(move.item);
      }
      // 同步staticNodeList信息
      staticNodeList.splice(index, 0, insertNode);
      // 操作Dom
      node.insertBefore(insertNode, node.childNodes[index] || null);
    }
  });
}

export default patch;
