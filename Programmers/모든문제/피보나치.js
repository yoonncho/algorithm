// 피보나치 수 https://school.programmers.co.kr/learn/courses/30/lessons/12945

function solution(n) {
  const fibonacci = [0, 1];
  for (let i = 2; i <= n; i++)
    fibonacci[i] = (fibonacci[i - 1] + fibonacci[i - 2]) % 1234567;

  return fibonacci[n];
}
