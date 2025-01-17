// Stack - 735. Asteroid Collision
// https://leetcode.com/problems/asteroid-collision/description/?envType=study-plan-v2&envId=leetcode-75

/**
💡 문제 이해 - [충돌할 조건]
- 두 행성이 반대 방향으로 움직이고 있어야 한다.
- 스택의 마지막 행성이 오른쪽(> 0)으로 움직이고, 현재 행성이 왼쪽(< 0)으로 움직이는 경우에만 충돌이 발생한다.
(기존 요소가 이미 음수로 이동 중인 경우, 새로운 요소가 양수이면 만날 수 없음)
*/

/**
 * @param {number[]} asteroids
 * @return {number[]}
 */
var asteroidCollision = function (asteroids) {
  const stack = [];

  for (let i = 0; i < asteroids.length; i++) {
    let last = stack[stack.length - 1];
    let cur = asteroids[i];
    // 충돌이 일어나지 않음
    if (!stack.length || last < 0 || cur > 0) {
      stack.push(cur);
    }
    // 동일한 절댓값의 경우 모두 충돌
    else if (-cur === last) {
      stack.pop();
    }
    // 새로 들어올 값이 더 큰 경우 기존 것은 상쇄되고, 새로 들어올 값은 다시 평가되어야한다.
    else if (-cur > last) {
      stack.pop();
      i--;
    }
  }

  return stack;
};
