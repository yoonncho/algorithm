function solution(clothes) {
  let obj = {};

  for (const [, type] of clothes) {
    obj[type] = (obj[type] || 0) + 1;
  }

  return Object.values(obj).reduce((acc, cur) => acc * (cur + 1), 1) - 1;
}
