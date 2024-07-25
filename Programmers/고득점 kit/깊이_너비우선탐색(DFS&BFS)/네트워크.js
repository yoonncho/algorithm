function solution(n, computers) {
  let answer = 0;
  const length = computers.length;
  // 체크 배열
  const visited = Array.from({ length }, () => false);

  function DFS(index) {
    // 방문 처리
    visited[index] = true;
    for (let i = 0; i < length; i++) {
      if (!visited[i] && computers[index][i]) {
        // 연결된 노드를 기준으로, 연결된 노드를 계속해서 탐색
        DFS(i);
      }
    }
  }

  for (let i = 0; i < length; i++) {
    if (visited[i]) continue;
    // 하나의 네트워크를 순회했으니까 answer++ 증가시켜준다
    DFS(i);
    answer++;
  }

  return answer;
}
