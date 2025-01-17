// Stack - 2390. Removing Stars From a String
// https://leetcode.com/problems/removing-stars-from-a-string/description/?envType=study-plan-v2&envId=leetcode-75

/**
 * @param {string} s
 * @return {string}
 */
var removeStars = function (s) {
  const stack = [];

  for (const ch of s) {
    if (ch === "*") stack.pop();
    else stack.push(ch);
  }

  return stack.join("");
};
