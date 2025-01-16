// Hash Map/Set - 2215. Find the Difference of Two Arrays
// https://leetcode.com/problems/find-the-difference-of-two-arrays/description/?envType=study-plan-v2&envId=leetcode-75

// 💡 Set 활용
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
var findDifference = function (nums1, nums2) {
  // 중복 제거
  const set1 = new Set(nums1);
  const set2 = new Set(nums2);

  // 겹치는 요소 제거
  for (let num of nums2) {
    if (set1.has(num)) {
      set1.delete(num);
      set2.delete(num);
    }
  }

  return [Array.from(set1), Array.from(set2)];
};
