// 짝지어 제거하기 https://school.programmers.co.kr/learn/courses/30/lessons/12973

/**
 * 이렇게 짝 짓는 문제는 💡 스택을 활용하는 것이 간단하다.
 * 처음 시도했던 내 풀이는 직접 문자열을 수정하고 순회하는 방식이 반복되므로 비효율적이다.
 */
function solution(s) {
  let stack = [];
  for (let i = 0; i < s.length; i++) {
    if (stack.length > 0 && stack[stack.length - 1] === s[i]) {
      stack.pop();
    } else stack.push(s[i]);
  }
  return stack.length ? 0 : 1;
}

// 🛑 시간 초과 발생
function solution(s) {
  let i = 0;
  for (; i < s.length; i++) {
    if (s.length === 0) break;
    if (s.charAt(i) === s.charAt(i + 1)) {
      s = s.slice(0, i) + s.slice(i + 2);
      i = -1; // 다시 처음부터 순회
      continue;
    }
  }

  return s.length === 0 ? 1 : 0;
}
