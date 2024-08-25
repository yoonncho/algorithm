// Programmers 고득점 Kit - 해시
// 포켓몬 (Level 1) https://school.programmers.co.kr/learn/courses/30/lessons/1845

function solution(nums) {
  const numSet = [...new Set(nums)];
  const max = nums.length / 2;

  return numSet.length > max ? max : numSet.length;
}
