// https://school.programmers.co.kr/learn/courses/30/lessons/42747

// 방법 1
function solution(citations) {
  let answer = 0;
  const sortedArr = citations.sort((a, b) => a - b);
  const length = sortedArr.length;

  for (let i = 0; i < length; i++) {
    const h = length - i;
    if (sortedArr[i] >= h) return h;
  }
  return answer;
}

// 방법2
function solution(citations) {
  citations.sort((a, b) => b - a);
  let i = 0;
  while (i + 1 <= citations[i]) {
    i++;
  }
  return i;
}
