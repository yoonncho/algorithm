// Programmers 고득점 Kit - 깊이/너비 우선탐색(DFS/BFS)
// 타겟 넘버 (Level 3)

function solution(numbers, target) {
  let answer = 0;

  function DFS(v, sum) {
    if (v === numbers.length) {
      if (sum === target) answer++;
      return;
    }
    // 양수를 선택하는 경우
    DFS(v + 1, sum + numbers[v]);
    // 음수를 선택하는 경우
    DFS(v + 1, sum - numbers[v]);
  }

  DFS(0, 0);
  return answer;
}
