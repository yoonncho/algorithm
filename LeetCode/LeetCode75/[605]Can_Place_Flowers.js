// 605. Can Place Flowers
// https://leetcode.com/problems/can-place-flowers/description/?envType=study-plan-v2&envId=leetcode-75

/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function (flowerbed, n) {
  for (let i = 0; i < flowerbed.length; i++) {
    const left = i === 0 || flowerbed[i - 1] === 0;
    const right = i === flowerbed.length - 1 || flowerbed[i + 1] === 0;

    if (left && right && flowerbed[i] === 0) {
      flowerbed[i] = 1;
      n--;
    }
  }

  return n <= 0;
};
