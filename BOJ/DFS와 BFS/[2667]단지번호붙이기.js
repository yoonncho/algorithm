// 2667. 단지번호 붙이기 (DFS) https://www.acmicpc.net/problem/2667

const fs = require("fs");

const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const N = input[0];
const map = [];
let sum;
let answer = [];

// 상하좌우 방향
const dx = [-1, 0, 1, 0];
const dy = [0, 1, 0, -1];

for (let i = 1; i <= N; i++) {
  map.push(input[i].split("").map(Number));
}

function DFS(x, y) {
  // 체크 처리 (다시 방문하지 못하도록)
  map[x][y] = 0;

  for (let i = 0; i < 4; i++) {
    const nx = x + dx[i];
    const ny = y + dy[i];

    if (nx >= 0 && nx < N && ny >= 0 && ny < N && map[nx][ny] === 1) {
      sum++;
      DFS(nx, ny);
    }
  }
}

for (let i = 0; i < N; i++) {
  for (let j = 0; j < N; j++) {
    if (map[i][j] === 0) continue;
    sum = 1;
    DFS(i, j);
    answer.push(sum);
  }
}

answer.sort((a, b) => a - b);

console.log(answer.length);
console.log(answer.join("\n"));
