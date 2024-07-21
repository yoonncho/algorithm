// Programmers 고득점 Kit - 깊이/너비 우선탐색(DFS/BFS)
// 게임 맵 최단거리 (Level 2)

function solution(maps) {
  let queue = [];
  let L = 1;

  const n = maps.length;
  const m = maps[0].length;

  const directions = [
    [-1, 0], // 위
    [1, 0], // 아래
    [0, -1], // 왼쪽
    [0, 1], // 오른쪽
  ];

  queue.push([0, 0]); // [행, 열]
  maps[0][0] = 0; // 시작점 방문 표시

  while (queue.length) {
    const len = queue.length;
    for (let i = 0; i < len; i++) {
      let [x, y] = queue.shift();

      for (let [dx, dy] of directions) {
        let nx = x + dx;
        let ny = y + dy;
        if (nx === n - 1 && ny === m - 1) return L + 1;
        if (nx >= 0 && nx < n && ny >= 0 && ny < m && maps[nx][ny] === 1) {
          queue.push([nx, ny]);
          maps[nx][ny] = 0; // 방문 처리
        }
      }
    }
    L++;
  }

  // queue를 모두 순회했음에도 목적지까지 도달하지 못했으면 도달할 방법이 없다고 판단하여 -1을 리턴
  return -1;
}
