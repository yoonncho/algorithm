const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const [N, M, V] = input[0].split(" ").map(Number);

/** 인접 행렬 형태로 만든다. */
const graph = Array.from(Array(N + 1), () => new Array(N + 1).fill(0));

for (let i = 1; i <= M; i++) {
  const [row, column] = input[i].split(" ").map(Number);
  graph[row][column] = 1;
  graph[column][row] = 1;
}

/** 방문 여부를 체크하는 배열 */
const DFS_checked = new Array(N + 1).fill(false);
const DFS_answer = [];
const BFS_checked = new Array(N + 1).fill(false);
const BFS_answer = [];

function DFS(V) {
  DFS_checked[V] = true;
  DFS_answer.push(V);
  for (let i = 1; i <= N; i++) {
    if (graph[V][i] === 1 && DFS_checked[i] === false) {
      DFS(i);
    }
  }
}

function BFS(V) {
  const queue = [];
  BFS_checked[V] = true;
  BFS_answer.push(V);
  queue.push(V);

  while (queue.length) {
    const poppedValue = queue.shift();
    for (let i = 1; i <= N; i++) {
      if (graph[poppedValue][i] === 1 && BFS_checked[i] === false) {
        BFS_checked[i] = true;
        BFS_answer.push(i);
        queue.push(i);
      }
    }
  }
}

DFS(V);
BFS(V);

console.log(DFS_answer.join(" "));
console.log(BFS_answer.join(" "));
