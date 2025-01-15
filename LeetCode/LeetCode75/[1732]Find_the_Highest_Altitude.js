// Prefix Sum - 1732. Find the Highest Altitude
// https://leetcode.com/problems/find-the-highest-altitude/description/?envType=study-plan-v2&envId=leetcode-75

// 시작점은 0이고, gain은 더해질 값
// 각 gain 값을 더해서 고도를 구한다.

/**
 * @param {number[]} gain
 * @return {number}
 */
var largestAltitude = function (gain) {
  let max = 0;
  let sum = 0;
  for (let val of gain) {
    sum += val;
    if (sum > max) max = sum;
  }

  return max;
};
