// 섹션7 - [8]: 회의실 배정 (Greedy 탐욕법)
/**
 * n개의 회의실이 존재하며,
 * 각 회의가 겹치지 않게 하여 최대한 회의 많이 할 수 있는 개수
 * => 끝나는 시간 기준으로 오름차순 정렬
 */

function solution(meetings) {
  let answer = 0;
  let et = 0; // 끝나는 시간
  meetings.sort((a, b) => {
    // 끝 시간이 같은 경우 시작 시간 기준으로 정렬
    if (a[1] === b[1]) return a[0] - b[0];
    else return a[1] - b[1];
  });

  for (let x of meetings) {
    if (x[0] >= et) {
      answer++;
      et = x[1];
    }
  }
  return answer;
}

const meetings1 = [
  [1, 4],
  [2, 3],
  [3, 5],
  [4, 6],
  [5, 7],
];

const meetings2 = [
  [3, 3],
  [2, 3],
  [1, 3],
];

console.log(solution(meetings1)); // 3
console.log(solution(meetings2)); // 2
