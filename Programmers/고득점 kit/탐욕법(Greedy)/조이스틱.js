// Programmers 고득점 Kit - 탐욕법 (Greedy)
// 조이스틱 (Level 2) https://school.programmers.co.kr/learn/courses/30/lessons/42860

// 💡
// 알파벳 이동: 알파벳을 뒤로가거나 / 앞으로 가거나 둘 중 더 작은 값
// 커서 이동: 목표 문자가 'A'이면 알파벳 변경 필요없음

function solution(name) {
  let answer = 0;

  // 1. 알파벳 이동 계산
  for (let i = 0; i < name.length; i++) {
    const code = name.charCodeAt(i);
    answer += Math.min(code - 65, 91 - code);
  }

  // 2. 커서 이동 최소 계산
  // (1) 쭉 오른쪽만 가거나 (2) 오른쪽 갔다가 왼쪽 (3) 왼쪽 갔다가 오른쪽 중 최소 값 확인
  let move = name.length - 1; // 쭉 오른쪽만 갔을 떄

  // i 지점까지 커서를 이동했다고 간주, next는 연속된 A가 끝나는 위치 (다시 조작이 필요한 위치)
  for (let i = 0; i < name.length; i++) {
    let next = i + 1;
    // 다음 위치가 A면 연속된 A 끝까지 건너뜀
    while (next < name.length && name.charAt(next) === "A") {
      next++;
    }

    move = Math.min(
      move,
      i * 2 + name.length - next, // 오른쪽 갔다가 왼쪽으로 우회
      (name.length - next) * 2 + i // 왼쪽으로 끝 부분을 갔다가 오른쪽으로
    );
  }

  return answer + move;
}

// 💡 charCodeAt(index):
// 문자열(String)의 특정 위치에 있는 문자의 유니코드(UTF-16 코드 유닛)를 정수로 반환하는 메서드
