// 최솟값 만들기 https://school.programmers.co.kr/learn/courses/30/lessons/12941

// 💡 최솟값을 만들기 위해서는 (가장 작은 수 * 가장 큰 수)로 곱한 값을 더하면 된다.
function solution(A, B) {
  var answer = 0;
  A.sort((a, b) => b - a); // 내림차순
  B.sort((a, b) => a - b); // 오름차순

  for (let i = 0; i < A.length; i++) {
    answer += A[i] * B[i];
  }

  return answer;
}
