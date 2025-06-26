// Programmers 고득점 Kit - 탐욕법 (Greedy)
// 체육복 (Level 1) https://school.programmers.co.kr/learn/courses/30/lessons/42862

function solution(n, lost, reserve) {
  // 1. 여벌도 있고 도난도 당한 사람 제거
  let realLost = lost.filter((l) => !reserve.includes(l)).sort((a, b) => a - b);
  let realReserve = reserve
    .filter((r) => !lost.includes(r))
    .sort((a, b) => a - b);

  let lostCount = realLost.length;

  // 2. 도난당한 사람 기준으로 빌릴 수 있는지 확인
  // reserve 기준으로 확인하면, 더 필요한 학생이 못 받는 경우 발생할 수 있음
  for (let i = 0; i < realLost.length; i++) {
    const need = realLost[i];
    const idx = realReserve.findIndex((r) => Math.abs(r - need) === 1);
    if (idx !== -1) {
      realReserve.splice(idx, 1); // 빌려준 사람 제거
      lostCount--; // 빌린 사람은 count에서 제거
    }
  }

  // 3. 아직 빌리지 못한 사람 수 빼기
  return n - lostCount;
}
