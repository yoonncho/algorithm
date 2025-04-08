// Binary Tree(DFS) - 1448. Count Good Nodes in Binary Tree
// https://leetcode.com/problems/count-good-nodes-in-binary-tree/description/?envType=study-plan-v2&envId=leetcode-75

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var goodNodes = function (root) {
  if (!root) return 0;
  let numOfGoodNodes = 0;
  const stack = [];
  // [root, max] 삽입
  stack.push([root, -Infinity]);
  while (stack.length) {
    let [node, max] = stack.pop();
    const { left, right, val } = node;
    if (max <= val) {
      numOfGoodNodes++;
      max = val;
    }
    if (left) stack.push([left, max]);
    if (right) stack.push([right, max]);
  }

  return numOfGoodNodes;
};
