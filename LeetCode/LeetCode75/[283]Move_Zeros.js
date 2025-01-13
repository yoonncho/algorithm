// Two Pointers - 283. Move Zeros
// https://leetcode.com/problems/move-zeroes/description/?envType=study-plan-v2&envId=leetcode-75

/**
 * - 모든 0을 올바른 위치로 옮기기
 * - 0이 아닌 모든 숫자를 왼쪽 위치로 이동시키기
 * => 두 개의 포인터 사용 (left, right)
 * => right는 배열 끝까지 순회
 * => 최종적으로 left 포인터 뒤에는 숫자 0만 남게된다.
 */

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  const length = nums.length;
  // left 뒤로 0 위치하도록 함
  let left = 0;
  // 배열 순회하면서 현재 숫자를 검사
  let right = 0;

  while (left < length && right < length) {
    if (nums[right] === 0) {
      right++;
    } else {
      // swap
      let tmp = nums[right];
      nums[right++] = nums[left];
      nums[left++] = tmp;
    }
  }
};

/** 간단한 코드
 * ES6의 구조 분해 할당 문법 사용하여 swap
 */
var moveZeroes2 = function (nums) {
  const length = nums.length;
  // left 뒤로 0 위치하도록 함
  let left = 0;

  for (let right = 0; right < length; right++) {
    if (nums[right] !== 0) {
      [nums[right], nums[left]] = [nums[left], nums[right]];
      left++;
    }
  }
};
