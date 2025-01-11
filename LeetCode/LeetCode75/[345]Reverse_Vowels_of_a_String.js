// 345. Reverse Vowels of a String
// https://leetcode.com/problems/reverse-vowels-of-a-string/description/?envType=study-plan-v2&envId=leetcode-75

// 💡 스택 pop

/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function (s) {
  const VOWELS = "aeiouAEIOU"; // 자음 모음
  let vowels = []; // 해당 문자열에서의 자음
  let answer = []; // 최종 문자열

  for (let i = 0; i < s.length; i++) {
    if (VOWELS.includes(s[i])) vowels.push(s[i]);
    answer.push(s[i]);
  }

  for (let i = 0; i < answer.length; i++) {
    if (VOWELS.includes(answer[i])) answer[i] = vowels.pop();
  }

  return answer.join("");
};

// vowels = ['I', 'e', 'e', 'A']
// IceCreAm -> AceCreIm
