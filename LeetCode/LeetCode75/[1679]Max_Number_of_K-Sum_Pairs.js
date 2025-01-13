// Two Pointers - 1679. Max Number of K-Sum Pairs
// https://leetcode.com/problems/max-number-of-k-sum-pairs/description/?envType=study-plan-v2&envId=leetcode-75

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxOperations = function (nums, k) {
  let left = 0;
  let right = nums.length - 1;
  let count = 0;
  // 숫자들을 내림차순 정렬
  nums.sort((a, b) => b - a);

  while (left < right) {
    const sum = nums[left] + nums[right];

    if (sum === k) {
      count++;
      left++;
      right--;
    } else if (sum < k) {
      right--;
    } else left++;
  }

  return count;
};
