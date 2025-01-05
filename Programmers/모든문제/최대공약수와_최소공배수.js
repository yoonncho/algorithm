// https://school.programmers.co.kr/learn/courses/30/lessons/12940

/**
 * 💡 유클리드 호제법에 의해
 *  정수 a와 b가 있을 때, a와 b의 최대공약수는 b와 (a % b)의 최대공약수와 같다.
 */
function solution(n, m) {
  // 최대공약수
  const gcd = (a, b) => (a % b === 0 ? b : gcd(b, a % b));
  // 최소공배수
  const lcm = (a, b) => (a * b) / gcd(a, b);
  return [gcd(n, m), lcm(n, m)];
}
