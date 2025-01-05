// 1768. Merge Stringw Alternately
// https://leetcode.com/problems/merge-strings-alternately/?envType=study-plan-v2&envId=leetcode-75

/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function (word1, word2) {
  const n = Math.max(word1.length, word2.length);
  const arr = new Array(n);

  for (let i = 0; i < n; i++) {
    if (word1[i]) arr.push(word1[i]);
    if (word2[i]) arr.push(word2[i]);
  }

  return arr.join("");
};
