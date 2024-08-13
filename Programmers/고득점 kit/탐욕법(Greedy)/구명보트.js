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
