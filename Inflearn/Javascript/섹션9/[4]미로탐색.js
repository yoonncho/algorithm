// 섹션9 - [4]: 미로탐색

function solution(board) {
  let answer = 0;
  // 상하좌우 방향
  let dx = [-1, 0, 1, 0];
  let dy = [0, 1, 0, -1];
  function DFS(x, y) {
    // 도착지에 도착
    if (x === 6 && y === 6) answer++;
    else {
      // 다음 좌표 (상하좌우 방문)
      for (let k = 0; k < 4; k++) {
        let nx = x + dx[k];
        let ny = y + dy[k];
        // 경계를 벗어나지 않는지 확인
        if (nx >= 0 && nx <= 6 && ny >= 0 && ny <= 6 && board[nx][ny] === 0) {
          board[nx][ny] = 1; // 체크 걸어두기
          DFS(nx, ny);
          board[nx][ny] = 0; // 다시 되돌아갈때는 체크 풀어주기
        }
      }
    }
  }
  board[0][0] = 1;
  DFS(0, 0);

  return answer;
}

let arr = [
  [0, 0, 0, 0, 0, 0, 0],
  [0, 1, 1, 1, 1, 1, 0],
  [0, 0, 0, 1, 0, 0, 0],
  [1, 1, 0, 1, 0, 1, 1],
  [1, 1, 0, 0, 0, 0, 1],
  [1, 1, 0, 1, 1, 0, 0],
  [1, 0, 0, 0, 0, 0, 0],
];

// 8
console.log(solution(arr));
