// 섹션7 - [1]: 선택정렬

function solution(arr) {
  let answer = arr; // 얕은 복사
  for (let i = 0; i < arr.length - 1; i++) {
    let idx = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[idx]) idx = j;
    }
    // 최신 자바스크립트에서 지원 (swap)
    [arr[i], arr[idx]] = [arr[idx], arr[i]];
  }
  return answer;
}

console.log(solution([13, 5, 11, 7, 23, 15]));
