// Binary Tree(DFS) - 872. Leaf-Similar Trees
// https://leetcode.com/problems/leaf-similar-trees/description/?envType=study-plan-v2&envId=leetcode-75

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */
var leafSimilar = function (root1, root2) {
  const collectLeafValues = function (root, leafValues) {
    if (!root) return;

    // leaf가 되는 조건 : 왼쪽과 양쪽이 없어야함
    if (!root.left && !root.right) {
      leafValues.push(root.val);
    }

    collectLeafValues(root.left, leafValues);
    collectLeafValues(root.right, leafValues);
  };

  const leafValues1 = [];
  const leafValues2 = [];

  collectLeafValues(root1, leafValues1);
  collectLeafValues(root2, leafValues2);

  return JSON.stringify(leafValues1) === JSON.stringify(leafValues2);
};
