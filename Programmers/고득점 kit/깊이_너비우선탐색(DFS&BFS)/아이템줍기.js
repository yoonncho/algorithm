// 최단거리 - BFS
// 주요 함정 - 모든 좌표를 2배로 키우기
// 테두리: 1, 사각형내부: 2, 그 외: 0

function solution(rectangle, characterX, characterY, itemX, itemY) {
  characterX *= 2;
  characterY *= 2;
  itemX *= 2;
  itemY *= 2;

  // 움직일 수 있는 상하좌우 방향
  const directions = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
  ];
  // 모든 좌표를 2배로 키운다
  const doubleRec = rectangle.map((rec) => rec.map((point) => point * 2));
  // 2차원 배열로 설정
  const range = Array.from({ length: 103 }, () => Array(103).fill(0));

  let queue = [[characterX, characterY, 0]];

  doubleRec.forEach(([x1, y1, x2, y2]) => {
    for (let i = x1; i <= x2; i++) {
      for (let j = y1; j <= y2; j++) {
        if (i === x1 || i === x2 || j === y1 || j === y2) {
          // 내부(2) 위에 테두리(1)가 겹쳐지는 경우가 발생할 수 있음
          // 따라서
          // 처음 아무것도 없는 0이면 → 테두리(1)로 채운다
          // 이미 다른 사각형에서 내부(2)로 채워졌다면 → 덮지 않는다
          if (range[i][j] === 0) range[i][j] = 1;
        } else {
          range[i][j] = 2;
        }
      }
    }
  });

  // 방문 처리
  range[characterX][characterY] = 0;

  while (queue.length) {
    const [x, y, cnt] = queue.shift();
    // 현재 위치가 목표 위치에 도달하면 리턴
    if (x === itemX && y === itemY) return cnt / 2;
    for (let i = 0; i < 4; i++) {
      const nx = x + directions[i][0];
      const ny = y + directions[i][1];
      if (range[nx][ny] === 1) {
        queue.push([nx, ny, cnt + 1]);
        range[nx][ny] = 0; //방문처리
      }
    }
  }
  return 0;
}
