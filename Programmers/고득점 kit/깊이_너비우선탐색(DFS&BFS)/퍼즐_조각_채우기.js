// 상하좌우 방향들
const directions = [
  [-1, 0],
  [1, 0],
  [0, 1],
  [0, -1],
];

// 범위 내에 있는지 여부
function inRange(n, r, c) {
  return r >= 0 && c >= 0 && r < n && c < n;
}

// 좌표를 정규화 - 좌측 상단을 (0, 0)으로 맞춘 뒤 정렬
function normalize(cells) {
  let minR = Infinity,
    minC = Infinity;
  for (const [r, c] of cells) {
    if (r < minR) minR = r;
    if (c < minC) minC = c;
  }
  const shifted = cells.map(([r, c]) => [r - minR, c - minC]);
  shifted.sort((a, b) => a[0] - b[0] || a[1] - b[1]);
  return shifted;
}

// 회전 처리 - 시계 90도 회전
function rotate90(cells) {
  return cells.map(([r, c]) => [c, -r]);
}

// 하나의 문자열로 직렬화 "r,c|r,c|..."
function serialize(cells) {
  return cells.map(([r, c]) => `${r},${c}`).join("|");
}

// 회전 4가지 중 사전순 최소 문자열을 대표키로
function canonicalKey(cells) {
  let pts = cells.slice(); // 얕은 복사
  const candidates = [];
  // 4번 회전시켜보기 (0, 90, 180, 270도)
  for (let k = 0; k < 4; k++) {
    candidates.push(serialize(normalize(pts)));
    pts = rotate90(pts);
  }
  candidates.sort();
  // 동일한 도형(회전만 다른)에서 항상 같은 대표 문자열 키
  return candidates[0];
}

// 보드에서 target(0 또는 1)으로 연결된 묶음을 전부 찾아서 좌표 리스트로 반환
function extractComponents(board, target) {
  const n = board.length;
  const visited = Array.from({ length: n }, () => Array(n).fill(false));
  const comp = [];

  for (let r = 0; r < n; r++) {
    for (let c = 0; c < n; c++) {
      if (board[r][c] === target && !visited[r][c]) {
        const q = [[r, c]];
        visited[r][c] = true;
        const cells = [];

        for (let head = 0; head < q.length; head++) {
          const [y, x] = q[head];
          cells.push([y, x]);

          for (const [dy, dx] of directions) {
            const ny = y + dy;
            const nx = x + dx;
            if (
              inRange(n, ny, nx) &&
              !visited[ny][nx] &&
              board[ny][nx] === target
            ) {
              visited[ny][nx] = true;
              q.push([ny, nx]);
            }
          }
        }
        comp.push(cells);
      }
    }
  }
  return comp;
}

// 조각 모양에 따른 개수 map 반환
function buildPieceMultiset(pieces) {
  // 대표키(key) : 개수(value)
  const m = new Map();
  for (const p of pieces) {
    // 회전까지 표준화된 키
    const key = canonicalKey(p);
    m.set(key, (m.get(key) || 0) + 1);
  }
  return m;
}

function solution(game_board, table) {
  let answer = 0;

  const holes = extractComponents(game_board, 0); // 빈칸(0) 컴포넌트들
  const pieces = extractComponents(table, 1); // 조각(1) 컴포넌트들

  const pieceCount = buildPieceMultiset(pieces);

  for (const hole of holes) {
    const key = canonicalKey(hole);
    const cnt = pieceCount.get(key) || 0;
    // 같은 모양의 조각이 아직 남아있다.
    if (cnt > 0) {
      answer += hole.length; // 채운 칸 수 더하기
      pieceCount.set(key, cnt - 1);
    }
  }
  return answer;
}
