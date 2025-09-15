// 2839. 설탕 배달 (DP) https://www.acmicpc.net/problem/2839

// 방법1. DP 이용한 방식
const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim();

n = Number(input);

const BAGS = [3, 5];

// dp[j] = j(kg)을 만드는 데 필요한 최소 봉지 수 (불가능이면 Infinity)
const dp = Array.from({ length: n + 1 }, () => Infinity);
dp[0] = 0;

for (const i of BAGS) {
  for (let j = i; j <= n; j++) {
    if (dp[j - i] !== Infinity) {
      dp[j] = Math.min(dp[j], dp[j - i] + 1);
    }
  }
}

console.log(dp[n] === Infinity ? -1 : dp[n]);

// 방법2. 재귀 이용
// 💡 5kg를 최대한 많이 사용하는 것이 유리함

N = Number(input);

// 5kg을 최대로 쓸 수 있는 개수부터 시작
let five = Math.floor(N / 5);

// 답을 못 찾는 경우 기본값: -1
let result = -1;

// five를 0까지 줄여가며, 남은 무게가 3으로 나눠떨어지면 종료
while (five >= 0) {
  // 현재 five로 사용했을 때 남는 무게
  const remain = N - five * 5;

  // 남는 무게가 3으로 딱 나눠떨어지면 최소 조합 완성
  if (remain % 3 == 0) {
    result = five + Math.floor(remain / 3);
    break;
  }

  // 나눠 떨어지지 않으면 5kg 하나씩 덜어서 다시 시도
  five--;
}

console.log(result);
