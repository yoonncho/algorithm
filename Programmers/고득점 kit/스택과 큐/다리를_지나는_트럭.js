function solution(bridge_length, weight, truck_weights) {
  let time = 0;

  const bridge = Array(bridge_length).fill(0);

  // 현재 다리 위의 총 무제
  let cur = 0;

  // 종료 조건: 대기도 없고, 다리도 비어있음
  while (truck_weights.length || cur > 0) {
    // 한 칸 전진
    const out = bridge.shift();
    cur -= out;

    // 다음 트럭 올릴지 판단 (가능하면 해당 트럭 올리고, 아니면 0 올리기)
    if (cur + truck_weights[0] <= weight) {
      const w = truck_weights.shift();
      bridge.push(w);
      cur += w;
    } else {
      // 빈칸 한 칸 전진
      bridge.push(0);
    }
    // 시간 + 1
    time++;
  }

  return time;
}
