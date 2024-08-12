// Programmers 고득점 Kit - 완전 탐색
// 카펫 (Level 2)

function solution(brown, yellow) {
  let answer = [];
  const total = brown + yellow;
  // 💡 yellow가 1 이상이므로, 무조건 세로 길이는 3 이상이다.
  // 따라서 i를 3부터 시작해도 된다.
  for (let i = 0; i <= Math.sqrt(total); i++) {
    // 자연수가 아니면 넘어간다
    if (total % i !== 0) continue;
    // (x-2)(y-2) = yellow 이고 xy = brown+yellow 인 두 성질을 통해 도출해낸 식
    if (brown + 4 === 2 * (total / i + i)) {
      answer.push(total / i);
      answer.push(i);
    }
  }

  return answer;
}
