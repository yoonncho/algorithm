// 다음 큰 숫자 https://school.programmers.co.kr/learn/courses/30/lessons/12911

function solution(n) {
  // 💡 정규식 사용 : n.toString(2).match(/1/g).length
  const numberLength = n.toString(2).split("0").join("").length;

  while (n++) {
    if (n.toString(2).split("0").join("").length === numberLength) return n;
  }
  return answer;
}
