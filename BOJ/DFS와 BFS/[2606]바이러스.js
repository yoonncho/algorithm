// 백준 (DFS) - 바이러스 https://www.acmicpc.net/problem/2606

/**
 * 1과 연결된 노드의 개수만 구하면 된다.
 */
const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const N = input[0];
const edges = [];

for (let i = 2; i < input.length; i++) {
  const [node1, node2] = input[i].split(" ").map(Number);
  edges.push([node1, node2]);
}

let answer = 0;
// 방문 여부를 저장하는 배열
const visited = Array.from({ length: N + 1 }, () => 0);

// 인접 리스트 형태로 만든다.
const createAdjacencyList = (edges) => {
  const adjacencyList = {};

  edges.forEach(([u, v]) => {
    if (!adjacencyList[u]) adjacencyList[u] = [];
    if (!adjacencyList[v]) adjacencyList[v] = [];

    adjacencyList[u].push(v);
    adjacencyList[v].push(u);
  });
  return adjacencyList;
};

const adjacencyList = createAdjacencyList(edges);

function DFS(index) {
  // 방문 처리
  visited[index] = 1;
  for (let i = 1; i <= N; i++) {
    if (!visited[i] && adjacencyList[index]?.includes(i)) {
      answer++;
      DFS(i);
    }
  }
}

DFS(1);
console.log(answer);
