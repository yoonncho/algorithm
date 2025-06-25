// Programmers 고득점 Kit - 동적계획법
// N으로 표현 (Level 3) https://school.programmers.co.kr/learn/courses/30/lessons/42895

function solution(N, number) {
  const dp = Array.from({ length: 9 }, () => new Set());

  for (let i = 1; i <= 8; i++) {
    // 숫자 자체를 i번 반복하는 케이스 (ex. 5, 55, 555)
    dp[i].add(Number(String(N).repeat(i)));

    for (let j = 1; j < i; j++) {
      for (const num1 of dp[j]) {
        for (const num2 of dp[i - j]) {
          dp[i].add(num1 + num2);
          dp[i].add(num1 - num2);
          dp[i].add(num1 * num2);
          dp[i].add(Math.floor(num1 / num2));
        }
      }
    }

    if (dp[i].has(number)) return i;
  }

  // 8까지 돌았는데도 값이 없으면 존재하지 않음으로 여긴다
  return -1;
}
