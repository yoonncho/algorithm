// 방법1. Top-Down
function solution(triangle) {
  // 0번 인덱스는 어차피 자기 자신 값일 것이라 1부터 순회
  for (let i = 1; i < triangle.length; i++) {
    for (let j = 0; j < triangle[i].length; j++) {
      // 양쪽 비교해서 최댓값을 더해가며 저장
      triangle[i][j] += Math.max(
        triangle[i - 1][j - 1] ?? 0,
        triangle[i - 1][j] ?? 0
      );
    }
  }

  return Math.max(...triangle.at(-1));
}

// 방법2. Bottom-Up
// 맨 아래 (삼각형의 마지막 행)에서 시작해서, 위로 거슬러 올라가며 "아래 두 자식 중 더 큰 값"을 부모에 저장
function solution(triangle) {
  const n = triangle.length;
  const dp = triangle[n - 1].slice(); // 마지막 행 복사
  for (let i = n - 2; i >= 0; i--) {
    for (let j = 0; j <= i; j++) {
      dp[j] = triangle[i][j] + Math.max(dp[j], dp[j + 1]);
    }
  }

  return dp[0];
}
