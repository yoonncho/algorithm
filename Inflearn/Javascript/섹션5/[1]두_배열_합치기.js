// 섹션5 - [1]: 두 배열 합치기 (투 포인터 알고리즘)

function solution(arr1, arr2) {
  let answer = [];
  const n = arr1.length;
  const m = arr2.length;

  let p1 = (p2 = 0);

  while (p1 < n && p2 < m) {
    if (arr1[p1] <= arr2[p2]) answer.push(arr1[p1++]);
    else answer.push(arr2[p2++]);
  }
  while (p1 < n) answer.push(arr1[p1]++);
  while (p2 < m) answer.push(arr2[p2++]);

  return answer;
}

const arr1 = [1, 3, 5];
const arr2 = [2, 3, 6, 7, 9];

// [1, 2, 3, 3, 5, 6, 7, 9]
console.log(solution(arr1, arr2));
