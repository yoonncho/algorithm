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
