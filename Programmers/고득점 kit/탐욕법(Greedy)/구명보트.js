// Programmers 고득점 Kit - 탐욕법 (Greedy)
// 구명보트 (Level 2) https://school.programmers.co.kr/learn/courses/30/lessons/42885

/**
 * 내림차순 정렬을 하고, 양 끝을 가리키는 i와 j 값을 두고
 * 합을 비교하여 i와 j를 증가/감소 시켜나간다.
 */
function solution(people, limit) {
  let answer = 0;
  const sorted = people.sort((a, b) => b - a);
  let i = 0;
  let j = people.length - 1;

  while (i <= j) {
    if (sorted[i] + sorted[j] <= limit) {
      answer++;
      i++;
      j--;
    } else {
      answer++;
      i++;
    }
  }
  return answer;
}

// 🌼 코드 정리
function solution(people, limit) {
  let answer = 0;
  // 사람들의 몸무게를 내림차순으로 정렬
  people.sort((a, b) => b - a);

  // i는 가장 무거운 사람을, j는 가장 가벼운 사람을 가리킨다.
  for (let i = 0, j = people.length - 1; i <= j; answer++) {
    // 가장 무거운 사람과 가장 가벼운 사람을 함께 태울 수 있는지 확인
    if (people[i] + people[j] <= limit) {
      // 함께 태울 수 있다면, 두 사람 모두 보트에 태운다.
      i++;
      j--;
    } else {
      // 함께 태울 수 없다면, 무거운 사람만 보트에 태운다.
      i++;
    }
  }

  return answer; // 필요한 보트의 최소 개수를 반환
}
