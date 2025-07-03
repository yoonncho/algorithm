// Programmers 고득점 Kit - 그래프
// 가장 먼 노드 (Level 3) https://school.programmers.co.kr/learn/courses/30/lessons/49189

function solution(n, edge) {
  const queue = [];
  const graph = Array.from({ length: n + 1 }, () => []);
  // 각 노드의 방문 여부 체크
  const visited = Array.from({ length: n + 1 }, () => false);
  // 1번 노드로부터 떨어진 거리 저장
  const distance = Array.from({ length: n + 1 }, () => 0);

  // 연결된 정보를 연결리스트 형태로 저장
  for (const [a, b] of edge) {
    graph[a].push(b);
    graph[b].push(a);
  }

  queue.push(1);
  visited[1] = true;

  while (queue.length) {
    const current = queue.shift();

    for (const next of graph[current]) {
      if (visited[next]) continue;
      queue.push(next);
      distance[next] = distance[current] + 1;
      visited[next] = true;
    }
  }

  const maxDistance = Math.max(...distance);
  return distance.filter((d) => d === maxDistance).length;
}
