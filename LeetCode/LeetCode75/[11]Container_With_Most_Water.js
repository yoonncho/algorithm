// Two Pointers - 11. Container With Most Water
// https://leetcode.com/problems/container-with-most-water/description/?envType=study-plan-v2&envId=leetcode-75

/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  let left = 0;
  let right = height.length - 1;
  let maxArea = 0;

  while (left < right) {
    let width = right - left;
    let area = width * Math.min(height[right], height[left]);
    if (maxArea < area) maxArea = area;

    // width는 더 줄어들테니, 높이가 더 높은 값을 찾을 수 있도록
    // 더 낮은 쪽의 포인터를 이동시킨다
    if (height[left] < height[right]) left++;
    else right--;
  }

  return maxArea;
};
