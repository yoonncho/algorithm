// 1012. 유기농 배추 (DFS) https://www.acmicpc.net/problem/1012

/**
 * 💡 가로, 세로를 행과 열로 생각할 때 헷갈리지 말 것!
 */
const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const numOfTests = input[0];
let index = 1;

// 상하좌우 방향
const dx = [-1, 0, 1, 0];
const dy = [0, 1, 0, -1];

for (let i = 0; i < numOfTests; i++) {
  const [M, N, K] = input[index].split(" ");
  const map = Array.from({ length: N }, () => new Array(M).fill(0));

  index++;

  const arr = [];
  let answer = 0;

  for (let j = 0; j < K; j++) {
    const [x, y] = input[index].split(" ").map(Number);
    arr.push([x, y]);
    index++;
  }

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      if (arr.some(([x, y]) => x === j && y === i)) map[i][j] = 1;
      else map[i][j] = 0;
    }
  }

  function DFS(x, y) {
    // 방문 처리
    map[x][y] = 0;

    for (let i = 0; i < 4; i++) {
      const nx = x + dx[i];
      const ny = y + dy[i];

      if (nx >= 0 && nx < N && ny >= 0 && ny < M && map[nx][ny] === 1) {
        DFS(nx, ny);
      }
    }
  }

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      if (map[i][j] === 0) continue;
      DFS(i, j);
      answer++;
    }
  }

  console.log(answer);
}
