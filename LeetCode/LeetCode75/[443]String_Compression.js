// 443. String Compression
// https://leetcode.com/problems/string-compression/description/?envType=study-plan-v2&envId=leetcode-75

// 💡 주의. 문제를 잘 읽을 것!!
// 별도 배열로 반환되는 것이 아니라 입력받은 chars에 저장되어야한다.
// 새롭게 변경된 배열의 길이를 반환해야한다.

/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function (chars) {
  let index = 0; // 결과를 기록할 위치
  const length = chars.length;

  for (let i = 0; i < length; i++) {
    let ch = chars[i];
    let count = 0;

    while (i < length && chars[i] === ch) {
      count++;
      i++;
    }
    if (count === 1) {
      chars[index++] = ch;
    } else {
      chars[index++] = ch; // 문자 설정
      for (let digit of count.toString()) {
        chars[index++] = digit; // 자릿수 마다 추가함
      }
    }
    // while문에서 한 번 더 증가시키므로 다시 하나 빼준다
    i--;
  }

  chars.length = index;
  return index;
};
