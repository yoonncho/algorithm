// Programmers 고득점 Kit - 스택/큐
// 같은 숫자는 싫어 (Level 2) https://school.programmers.co.kr/learn/courses/30/lessons/12906

function solution(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === arr[i + 1]) continue;
    result.push(arr[i]);
  }
  return result;
}

// 💡 filter 사용
function solution(arr) {
  return arr.filter((val, index) => val != arr[index + 1]);
}
