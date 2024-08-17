// 약수의 개수와 덧셈 https://school.programmers.co.kr/learn/courses/30/lessons/77884

function solution(left, right) {
  let answer = 0;
  for (let i = left; i <= right; i++) {
    // 제곱근이 정수이면 약수의 개수가 홀수
    if (Number.isInteger(Math.sqrt(i))) answer -= i;
    else answer += i;
  }
  return answer;
}
