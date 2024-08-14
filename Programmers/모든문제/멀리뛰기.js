// 멀리뛰기 https://school.programmers.co.kr/learn/courses/30/lessons/12914

function solution(n) {
  const arr = [1, 2];
  for (let i = 2; i < n; i++) {
    arr[i] = (arr[i - 1] + arr[i - 2]) % 1234567;
  }

  return n === 1 ? arr[0] : arr.at(-1);
}
