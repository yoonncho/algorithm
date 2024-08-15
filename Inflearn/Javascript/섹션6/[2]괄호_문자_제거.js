// 스택 - 괄호 문자 제거

function solution(s) {
  let answer;
  let stack = [];

  for (let x of s) {
    if (x === ")") {
      // 여는 괄호를 만날 때까지 pop
      while (stack.pop() !== "(");
    } else stack.push(x);
  }
  answer = stack.join("");
  return answer;
}

// EFLM
console.log(solution("(A(BC)D)EF(G(H)(IJ)K)LM(N)"));
