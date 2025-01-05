// 1431. Kids With the Greatest Number of Candies
// https://leetcode.com/problems/kids-with-the-greatest-number-of-candies/description/?envType=study-plan-v2&envId=leetcode-75

/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function (candies, extraCandies) {
  const numOfKids = candies.length;
  const result = [];
  const greatest = Math.max(...candies);

  for (let i = 0; i < numOfKids; i++) {
    if (candies[i] + extraCandies >= greatest) result.push(true);
    else result.push(false);
  }

  return result;
};
