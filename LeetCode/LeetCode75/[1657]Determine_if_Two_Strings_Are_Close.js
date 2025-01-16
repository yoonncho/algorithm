// Hash Map/Set -1657. Determine if Two Strings Are Close
// https://leetcode.com/problems/determine-if-two-strings-are-close/?envType=study-plan-v2&envId=leetcode-75

/**
 * true가 반환되는 조건
 * - 문자열 길이가 동일
 * - 존재하는 알파벳이 동일해야함 (동일한 알파벳 집합)
 * - 알파벳 빈도가 동일해야함 (빈도를 교환할 수는 있지만, 새로 생성 및 제거는 안됨)
 */

/**
 * @param {string} word1
 * @param {string} word2
 * @return {boolean}
 */
var closeStrings = function (word1, word2) {
  if (word1.length != word2.length) return false;

  let map1 = new Map();
  let map2 = new Map();

  for (let i = 0; i < word1.length; i++) {
    map1.set(word1[i], (map1.get(word1[i]) || 0) + 1);
    map2.set(word2[i], (map2.get(word2[i]) || 0) + 1);
  }

  for (let [key] of map1) {
    if (!map2.has(key)) return false;
  }

  const count1 = Array.from(map1.values()).sort();
  const count2 = Array.from(map2.values()).sort();

  return count1.every((val, index) => val === count2[index]);
};

// 💡 다른 풀이
/**
 * @param {string} word1
 * @param {string} word2
 * @return {boolean}
 */
var closeStrings = function (word1, word2) {
  const freq1 = new Array(26).fill(0);
  const freq2 = new Array(26).fill(0);

  for (let i = 0; i < word1.length; i++) {
    // 0부터 시작하는 인덱스로 관리
    freq1[word1.charCodeAt(i) - "a".charCodeAt(0)]++;
  }

  for (let i = 0; i < word2.length; i++) {
    freq2[word2.charCodeAt(i) - "a".charCodeAt(0)]++;
  }

  // 한쪽에만 문자가 존재하는지 확인
  for (let i = 0; i < 26; i++) {
    if ((freq1[i] > 0 && freq2[i] === 0) || (freq2[i] > 0 && freq1[i] === 0))
      return false;
  }

  // 빈도수가 동일한지 확인
  freq1.sort((a, b) => a - b);
  freq2.sort((a, b) => a - b);

  for (let i = 0; i < 26; i++) {
    if (freq1[i] !== freq2[i]) return false;
  }

  return true;
};
