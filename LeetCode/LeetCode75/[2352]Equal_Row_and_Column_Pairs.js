// Hash Map/Set - 2352. Equal Row and Column Pairs
// https://leetcode.com/problems/equal-row-and-column-pairs/description/?envType=study-plan-v2&envId=leetcode-75

// 💡 숫자이다 보니 하나씩 다 비교해야하는 불편함이 있다.
// 문자열로 변환하여 처리한다.
// (3중첩 for문을 사용하는 것은 너무 비효율적)

/**
 * @param {number[][]} grid
 * @return {number}
 */
var equalPairs = function (grid) {
  let count = 0;
  let set1 = grid.map((row) => row.join(" ")); // [[3,2,1],[1,7,6],[2,7,7]] => ['3 2 1', '1 7 6', '2 7 7']
  let set2 = grid[0].map((_, index) => grid.map((row) => row[index]).join(" ")); // => ['3 1 2', '2 7 7', '1 6 7']

  let map = new Map();

  for (let i = 0; i < set1.length; i++) {
    map.set(set1[i], (map.get(set1[i]) || 0) + 1);
  }

  // 행과 열 비교하여 동일한 쌍을 카운팅한다
  for (let i = 0; i < set2.length; i++) {
    if (map.has(set2[i])) count += map.get(set2[i]);
  }

  return count;
};
