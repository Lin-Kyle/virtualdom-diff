import { isString, objForEach, aryForEach, isNotEmptyObj } from "./util";
import { REPLACE, REORDER, PROPS, TEXT } from "./common";
import listDiff from "list-diff2";

/**
 *
 * @param {旧Dom树} oTree
 * @param {新Dom树} nTree
 * 返回差异记录
 */
function diff(oTree, nTree) {
  // 节点位置
  let index = 0;
  // 差异记录
  const patches = {};
  dfsWalk(oTree, nTree, index, patches);
  return patches;
}

function dfsWalk(oNode, nNode, index, patches) {
  const currentPatch = [];

  // 首次渲染
  if (nNode === null) return;

  // 都是字符串形式并且不相同直接替换
  if (isString(oNode) && isString(nNode)) {
    oNode !== nNode &&
      currentPatch.push({
        type: TEXT,
        content: nNode
      });
    // 同种标签并且key相同
  } else if (oNode.tagName === nNode.tagName && oNode.key === nNode.key) {
    // 至少一方有值
    if (isNotEmptyObj(oNode.props) || isNotEmptyObj(nNode.props)) {
      // 计算props结果
      const propsPatches = diffProps(oNode, nNode);
      propsPatches &&
        currentPatch.push({
          type: PROPS,
          props: propsPatches
        });
    }
    if (
      !(!isNotEmptyObj(nNode.props) && nNode.props.hasOwnProperty("ignore"))
    ) {
      (oNode.children.length || nNode.children.length) &&
        diffChildren(
          oNode.children,
          nNode.children,
          index,
          patches,
          currentPatch
        );
    }
  } else {
    // 都不符合上面情况就直接新增
    currentPatch.push({ type: REPLACE, node: nNode });
  }

  // 最终对比结果
  currentPatch.length && (patches[index] = currentPatch);
}

/**
 *  同级对比
 * @param {*} oChildren
 * @param {*} nChildren
 * @param {*} index
 * @param {*} patches
 * @param {*} currentPatch
 */
function diffChildren(oChildren, nChildren, index, patches, currentPatch) {
  // 得出相对简化移动路径
  const diffs = listDiff(oChildren, nChildren, "key");

  // 保留元素
  nChildren = diffs.children;

  // 记录排序位移
  diffs.moves.length &&
    currentPatch.push({ type: REORDER, moves: diffs.moves });

  // 深度遍历
  let leftNode = null;
  let currentNodeIndex = index;
  aryForEach(oChildren, (_item, _index) => {
    const nChild = nChildren[_index];
    currentNodeIndex =
      leftNode && leftNode.count
        ? currentNodeIndex + leftNode.count + 1
        : currentNodeIndex + 1;
    _item !== nChild && dfsWalk(_item, nChild, currentNodeIndex, patches);
    leftNode = _item;
  });
}

/**
 *
 * @param {旧节点} oNode
 * @param {新节点} nNode
 */
function diffProps(oNode, nNode) {
  let isChange = false;
  const oProps = oNode.props;
  const nProps = nNode.props;
  // 节点属性记录
  const propsPatched = {};

  // 替换/新增属性
  objForEach(oProps, key => {
    if (nProps[key] !== oProps[key] || !oProps.hasOwnProperty(key)) {
      !isChange && (isChange = true);
      propsPatched[key] = nProps[key];
    }
  });

  return !isChange ? null : propsPatched;
}

export default diff;
