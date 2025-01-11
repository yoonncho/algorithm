// 238. Product of Array Except Self
// https://leetcode.com/problems/product-of-array-except-self/description/?envType=study-plan-v2&envId=leetcode-75

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
  const output = Array(nums.length).fill(1);

  let left = 1;
  for (let i = 0; i < nums.length; i++) {
    output[i] *= left;
    left *= nums[i];
  }

  let right = 1;
  for (let i = output.length - 1; i >= 0; i--) {
    output[i] *= right;
    right *= nums[i];
  }

  return output;
};

/** 💡 현재 인덱스를 기준으로, 왼쪽과 오른쪽을 나눠서 계산
 * 왼쪽과 오른쪽 곱을 각각 곱하면 해당 위치의 결과가 된다.
 */
