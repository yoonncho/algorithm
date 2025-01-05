// 1071. Greatest Common Divisor of Strings
// https://leetcode.com/problems/greatest-common-divisor-of-strings/description/?envType=study-plan-v2&envId=leetcode-75

// 💡 반복되는 string 문자열 구하기

/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var gcdOfStrings = function (str1, str2) {
  // divisor가 동일하지 않다면 바로 빈 문자열 반환
  if (str1 + str2 !== str2 + str1) return "";

  // 두 길이의 최대공약수 구해서, 해당 길이만큼 잘라서 반환
  function GCD(a, b) {
    if (a % b === 0) return b;
    return GCD(b, a % b);
  }

  const length = GCD(str1.length, str2.length);
  return str2.slice(0, length);
};
