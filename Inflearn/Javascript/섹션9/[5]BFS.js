// 섹션9 - [5]: 이진트리 너비우선탐색 (BFS)

function solution() {
  let answer = "";
  let queue = [];
  queue.push(1);
  while (queue.length) {
    let v = queue.shift();
    answer += v + "";
    for (let nv of [v * 2, v * 2 + 1]) {
      if (nv > 7) continue;
      queue.push(nv);
    }
  }
  return answer;
}

// 1 2 3 4 5 6 7
console.log(solution());
