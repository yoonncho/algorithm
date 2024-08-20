// 7576. 토마토 (BFS) https://www.acmicpc.net/problem/7576

const fs = require("fs");

const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [M, N] = input.shift().split(" ").map(Number);
const map = input.map((v) => v.split(" ").map(Number));

// 상하좌우 방향
const dx = [-1, 0, 1, 0];
const dy = [0, 1, 0, -1];

function solution() {
  let answer = -1;

  const queue = [];
  let front = 0;

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      // 토마토가 존재하는 칸을 모두 큐에 넣고 시작한다. (시작점이 여러 개)
      if (map[i][j] === 1) queue.push([i, j]);
    }
  }

  while (queue.length > front) {
    // 💡 처음에 queue.shift()로 하니까 시간초과 났음.
    // index로 첫번째 요소 값 가져오기
    const [x, y] = queue[front++];

    for (let k = 0; k < 4; k++) {
      const nx = x + dx[k];
      const ny = y + dy[k];
      if (nx >= 0 && nx < N && ny >= 0 && ny < M && map[nx][ny] === 0) {
        map[nx][ny] = map[x][y] + 1;
        queue.push([nx, ny]);
      }
    }
  }

  for (let arr of map) {
    for (let val of arr) {
      if (val === -1) continue;
      if (val === 0) return -1;
      // 가장 마지막
      answer = Math.max(answer, val);
    }
  }

  // 시작점이 1이였으므로 항상 1만큼 더 큰 값이 나온다.
  // 따라서 답에서는 1을 빼준다.
  return answer - 1;
}

console.log(solution());
