// Programmers 고득점 Kit - 탐욕법 (Greedy)
// 큰 수 만들기 (Level 2) https://school.programmers.co.kr/learn/courses/30/lessons/42883

// 💡 왼쪽부터 큰 숫자가 와야한다.
// '스택' 자료구조를 활용하여 숫자를 제거한다
function solution(number, k) {
  const stack = [];

  for (let i = 0; i < number.length; i++) {
    const digit = number[i];

    // 더 큰 숫자가 나오면, 앞의 숫자를 제거
    while (k > 0 && stack[stack.length - 1] < digit) {
      stack.pop();
      k--;
    }
    stack.push(digit);
  }

  // 💡 숫자가 같은 경우 제거가 덜 되는 경우가 있음
  return stack.slice(0, number.length - k).join("");
}
