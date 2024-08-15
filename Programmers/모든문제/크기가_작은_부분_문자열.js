// 크기가 작은 부분 문자열 https://school.programmers.co.kr/learn/courses/30/lessons/147355

function solution(t, p) {
  let answer = 0;
  const pLength = p.length;
  for (let i = 0; i <= t.length - pLength; i++) {
    if (t.slice(i, i + pLength) <= parseInt(p)) answer++;
  }
  return answer;
}
