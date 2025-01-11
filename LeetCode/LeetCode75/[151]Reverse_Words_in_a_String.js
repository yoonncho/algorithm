// 151. Reverse Words in a String
// https://leetcode.com/problems/reverse-words-in-a-string/description/?envType=study-plan-v2&envId=leetcode-75

/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
  const strArr = s.trim().replace(/\s+/g, " ").split(" ");
  let answer = [];

  for (let i = strArr.length - 1; i >= 0; i--) {
    answer.push(strArr[i]);
  }

  return answer.join(" ");
};

// 💡 trim() : 문자열 양 끝의 공백을 제거
// replace(/\s+/g, ' ') : 하나 이상의 공백을 하나의 공백으로 치환
