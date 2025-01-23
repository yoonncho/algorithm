// Binary Tree(DFS) - 104. Maximum Depth of Binary Tree
// https://leetcode.com/problems/maximum-depth-of-binary-tree/description/?envType=study-plan-v2&envId=leetcode-75

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
var maxDepth = function (root) {
  if (!root) return 0;

  const queue = [];
  let depth = 0;
  queue.push(root);

  while (queue.length > 0) {
    depth++;

    const levelSize = queue.length;
    for (let i = 0; i < levelSize; i++) {
      const node = queue.shift();
      console.log("node", node);
      if (node.left) {
        queue.push(node.left);
      }
      if (node.right) {
        queue.push(node.right);
      }
      console.log("queue", queue, "depth", depth);
    }
  }

  return depth;
};

// 💡 다른 풀이
var maxDepth = function (root) {
  if (!root) {
    return 0;
  }
  return 1 + Math.max(maxDepth(root.left), maxDepth(root.right));
};
