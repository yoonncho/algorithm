// Hash Map/Set - 1207. Unique Number of Occurrences
// https://leetcode.com/problems/unique-number-of-occurrences/description/?envType=study-plan-v2&envId=leetcode-75

/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function (arr) {
  let map = new Map();

  arr.forEach((num) => {
    const count = map.get(num);
    map.set(num, (count || 0) + 1);
  });

  const countArr = Array.from(map.values());
  const countSet = new Set(countArr);

  return countArr.length === countSet.size;
};
