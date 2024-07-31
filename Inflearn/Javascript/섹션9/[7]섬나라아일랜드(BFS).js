// 섹션9 - [7]: 섬나라 아일랜드 (BFS)

const DUMMY = [
  [1, 1, 0, 0, 0, 1, 0],
  [0, 1, 1, 0, 1, 1, 0],
  [0, 1, 0, 0, 0, 0, 0],
  [0, 0, 0, 1, 0, 1, 1],
  [1, 1, 0, 1, 1, 0, 0],
  [1, 0, 0, 0, 1, 0, 0],
  [1, 0, 1, 0, 1, 0, 0],
];

function solution(board) {
  let answer = 0;
  const dx = [-1, -1, 0, 1, 1, 1, 0, -1];
  const dy = [0, 1, 1, 1, 0, -1, -1, -1];
  const length = board.length;
  let queue = [];

  for (let i = 0; i < length; i++) {
    for (let j = 0; j < length; j++) {
      if (board[i][j] === 1) {
        board[i][j] = 0; // 큐에 넣을 때 방문 체크
        queue.push([i, j]);
        answer++;

        while (queue.length) {
          let [x, y] = queue.shift();

          // 8개의 방향 순회
          for (let k = 0; k < 8; k++) {
            let nx = x + dx[k];
            let ny = y + dy[k];

            if (
              nx >= 0 &&
              nx < length &&
              ny >= 0 &&
              ny < length &&
              board[nx][ny] === 1
            ) {
              board[nx][ny] = 0; // 방문 체크
              queue.push([nx, ny]);
            }
          }
        }
      }
    }
  }
  return answer;
}

// 5
console.log(solution(DUMMY));
