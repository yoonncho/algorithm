function solution(money) {
  const n = money.length;
  if (n === 1) return money[0];
  if (n === 2) return Math.max(money[0], money[1]);

  // [l..r] 구간 선형 도둑질 최댓값
  function robLinear(l, r) {
    let prev2 = 0; // dp[i-2]
    let prev1 = 0; // dp[i-1]
    for (let i = l; i <= r; i++) {
      const curr = Math.max(prev1, prev2 + money[i]);
      prev2 = prev1;
      prev1 = curr;
    }
    return prev1;
  }

  // 마지막은 고려하지 않는 케이스
  const caseA = robLinear(0, n - 2);
  // 첫번째는 고려하지 않는 케이스
  const caseB = robLinear(1, n - 1);

  return Math.max(caseA, caseB);
}
