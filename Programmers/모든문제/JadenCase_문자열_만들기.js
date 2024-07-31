// JadenCase 문자열 만들기 https://school.programmers.co.kr/learn/courses/30/lessons/12951

function solution(s) {
  const arr = s.split(" ");

  arr.forEach((str, index) => {
    arr[index] = str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
  });

  return arr.join(" ");
}
