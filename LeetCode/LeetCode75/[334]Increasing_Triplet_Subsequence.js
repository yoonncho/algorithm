// 334. Increasing Triplet Subsequence
// https://leetcode.com/problems/increasing-triplet-subsequence/description/?envType=study-plan-v2&envId=leetcode-75

// 첫 번째 요소와, 두 번째 요소를 변수로 관리

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var increasingTriplet = function (nums) {
  let firstNum = Infinity;
  let secondNum = Infinity;

  for (let num of nums) {
    // num이 현재까지 가장 작은 값(firstNum)보다 작거나 같으면, 첫 번째 값 갱신
    if (num <= firstNum) {
      firstNum = num;
    }
    // num이 firstNum보다 크지만 secondNum보다 작거나 같으면, 두 번째 값 갱신.
    else if (num <= secondNum) {
      secondNum = num;
    }
    // num이 firstNum과 secondNum보다 크다면, 세 번째 값이 존재하므로 true를 반환
    else {
      return true;
    }
  }

  // 조건을 만족하는 세 값이 없는 경우
  return false;
};
