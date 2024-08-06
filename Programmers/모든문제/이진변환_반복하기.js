// 이진변환 반복하기 https://school.programmers.co.kr/learn/courses/30/lessons/70129

function solution(s) {
  let answer = [0, 0]; // [횟수, 제거된 0의 개수]

  while (s.length > 1) {
    let length = s.length;
    s = s.split("0").join("");
    answer[0]++; // 횟수 증가
    answer[1] += length - s.length; // 0의 개수
    s = s.length.toString(2); // 이진 변환
  }

  return answer;
}

/**
 * 10진수를 => 몇 진수로 변환하기
 * 참고 : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toString
 * Number.prototype.toString(radix)
 *
 * A 진수를 => B 진수로 변환하기
 * 참고 : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseInt
 * => parseInt는 해당 진수의 숫자를 10진수로 반환한다.
 * parseInt(numA, A).toString(B)
 */
