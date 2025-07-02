// Programmers 고득점 Kit - 정렬
// K번째 수 (Level 1) https://school.programmers.co.kr/learn/courses/30/lessons/42748

function solution(array, commands) {
  let answer = [];
  for (let i = 0; i < commands.length; i++) {
    const list = array
      .slice(commands[i][0] - 1, commands[i][1])
      .sort((a, b) => a - b);
    answer.push(list[commands[i][2] - 1]);
  }
  return answer;
}
