// 백준 (BFS) - 미로 탐색 https://www.acmicpc.net/problem/2178

/**
 * 💡 현재 위치까지의 거리는 연결된 이전 노드까지의 거리 (deps)에 1을 더한 것!!
 */
const fs = require("fs");

const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

// 상하좌우 방향
const dx = [-1, 0, 1, 0];
const dy = [0, 1, 0, -1];

const [N, M] = input[0].split(" ");
const map = [];
let queue = [];

for (let i = 1; i <= N; i++) {
  map.push(input[i].split("").map((char) => parseInt(char)));
}

/** 💡 map 포맷할 때 아래와 같이 할 수 있다.
 * const [N, M] = input.shift().split(" ").map(Number);
 * const map = input.map((v) => v.split("").map(Number));
 */

queue.push([0, 0]);

while (queue.length) {
  const [x, y] = queue.shift();

  for (let k = 0; k < 4; k++) {
    let nx = x + dx[k];
    let ny = y + dy[k];

    if (nx >= 0 && nx < N && ny >= 0 && ny < M && map[nx][ny] === 1) {
      map[nx][ny] = map[x][y] + 1;
      queue.push([nx, ny]);
    }
  }
}

console.log(map[N - 1][M - 1]);
