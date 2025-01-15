// Prefix Sum - 724. Find Pivot Index
// https://leetcode.com/problems/find-pivot-index/description/?envType=study-plan-v2&envId=leetcode-75

/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function (nums) {
  let leftTotal = 0;
  const total = nums.reduce((a, b) => a + b, 0); // 총 합

  for (let i = 0; i < nums.length; i++) {
    let rightTotal = total - leftTotal - nums[i];
    if (rightTotal === leftTotal) return i;
    leftTotal += nums[i];
  }

  return -1;
};
