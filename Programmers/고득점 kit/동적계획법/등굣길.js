// Programmers 고득점 Kit - 동적계획법
// 등굣길 (Level 3) https://school.programmers.co.kr/learn/courses/30/lessons/12906

// 💡왼쪽에서 접근 가능한 경로의 수 + 위에서 접근 가능한 경로의 수
// 해당 문제에서 m: x, n: y

function solution(m, n, puddles) {
  const MOD = 1000000007;

  // 계산 편의성을 위해서 n+1, m+1 크기로 생성
  const dp = Array.from({ length: n + 1 }, () => new Array(m + 1).fill(0));

  // 집이 있는 곳 (시작점)
  dp[1][1] = 1;

  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= m; j++) {
      if (i === 1 && j === 1) continue;

      // 해당 위치가 웅덩이인 경우 (경로의 수 : 0으로 설정)
      // 주의 x좌표가 j, y좌표가 i
      if (puddles.some(([x, y]) => x === j && y === i)) {
        dp[i][j] = 0;
        continue;
      }

      dp[i][j] = (dp[i - 1][j] + dp[i][j - 1]) % MOD;
    }
  }

  // 최종 위치까지의 경로의 수 반환
  return dp[n][m];
}
