// 섹션9 - [6]: 송아지 찾기 (BFS)

// dis 배열에 이동 횟수 저장해서 구하는 방식
function solution(s, e) {
  let answer = 0;
  let ch = Array.from({ length: 10001 }, () => 0);
  let dis = Array.from({ length: 10001 }, () => 0);
  let queue = [];

  // 현재 현수의 위치 체크
  ch[s] = 1;
  queue.push(s);

  dis[s] = 0;
  while (queue.length) {
    let x = queue.shift();
    // 연결된 노드 순차적으로 삽입
    for (let nx of [x - 1, x + 1, x + 5]) {
      // 목표하는 종착점이라면 순회를 종료
      if (nx === e) return dis[x] + 1;
      if (nx > 0 && nx <= 10000 && ch[nx] === 0) {
        ch[nx] = 1;
        queue.push(nx);
        dis[nx] = dis[x] + 1;
      }
    }
  }
  return answer;
}

// 트리의 Level로 구하는 방식
function solution_level(s, e) {
  let answer = 0;
  let ch = Array.from({ length: 100001 }, () => 0);

  let queue = [];
  queue.push(s);
  ch[s] = 1;
  let L = 0; // 몇 번만에 도착하는지 추적하는 Level

  while (queue.length) {
    let len = queue.length;
    // i는 그냥 len 번 순회하기 위함임
    for (let i = 0; i < len; i++) {
      let x = queue.shift();
      for (nx of [x - 1, x + 1, x + 5]) {
        if (nx === e) return L + 1;
        if (nx > 0 && nx <= 10000 && ch[nx] === 0) {
          ch[nx] = 1;
          queue.push(nx);
        }
      }
    }
    // 다음 레벨로
    L++;
  }
  return answer;
}

// 3
console.log(solution(5, 14));

// 3
console.log(solution_level(5, 14));
