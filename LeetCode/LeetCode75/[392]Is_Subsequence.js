// Two Pointers - 392. Is Subsequence
// https://leetcode.com/problems/is-subsequence/description/?envType=study-plan-v2&envId=leetcode-75

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function (s, t) {
  let sp = 0;
  let tp = 0;

  while (sp < s.length && tp < t.length) {
    if (s[sp] === t[tp]) sp++;
    tp++;
  }

  return sp === s.length;
  //   for (let tp = 0; tp < t.length; tp++) {
  //     if (s[sp] === t[tp]) sp++;
  //   }
  //   if (sp >= s.length) return true;
  //   return false;
};
