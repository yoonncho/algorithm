// 11724. 연결요소의 개수 (BFS) https://www.acmicpc.net/problem/11724
// 💡 [Programmers] Level3. 네트워크 문제와 유사

const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [N, M] = input[0].split(" ").map(Number);
const adjacencyList = {};
const visited = Array.from({ length: N + 1 }, () => 0);
let answer = 0;

// 인접 리스트 형태로 만들기
for (let i = 1; i <= M; i++) {
  const [v, w] = input[i].split(" ").map(Number);
  if (!adjacencyList[v]) adjacencyList[v] = [];
  if (!adjacencyList[w]) adjacencyList[w] = [];

  adjacencyList[v].push(w);
  adjacencyList[w].push(v);
}

function DFS(v) {
  visited[v] = 1;
  for (let i = 1; i <= N; i++) {
    if (adjacencyList[v]?.includes(i) && !visited[i]) {
      DFS(i);
    }
  }
}

for (let i = 1; i <= N; i++) {
  if (visited[i]) continue;
  DFS(i);
  answer++;
}

console.log(answer);
