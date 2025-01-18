// Queue - 649. Dota2 Senate
// https://leetcode.com/problems/dota2-senate/description/?envType=study-plan-v2&envId=leetcode-75

/**
 * 💡 [접근법]
1. 두 개의 큐를 사용한다.
- Radiant와 Dire 각각의 인덱스를 관리하는 두 개의 큐를 사용
- 각 의원은 자신이 속한 큐에서 순서를 기다립니다.

2. 가장 가까운 상대를 제거한다.
- 현재 라운드의 의원은 상대당의 가장 가까운 의원을 제거한다.
- 제거된 의원은 큐에서 제외된다. 

3. 라운드 반복
- 한 라운드가 끝나면, 살아남은 의원들은 다음 라운드에서 자신의 순서로 돌아갑니다.

🛑 [생각할 점]
- 한 번의 라운드만 도는게 아니므로 여러 라운드를 관리할 수 있어야 한다.
 */

/**
 * @param {string} senate
 * @return {string}
 */
function predictPartyVictory(senate) {
  let radiant = [];
  let dire = [];
  const length = senate.length;

  for (let i = 0; i < length; i++) {
    // 순서(인덱스)를 저장
    if (senate[i] === "R") radiant.push(i);
    else dire.push(i);
  }

  // 한 쪽이 모두 투표를 소진할 때까지 loop을 돈다.
  while (radiant.length > 0 && dire.length > 0) {
    // radiant가 더 뒤에 위치하면, 상쇄되고 dire만 그 다음 투표권을 가진다.
    if (radiant[0] > dire[0]) {
      dire.push(dire[0] + length);
    } else {
      radiant.push(radiant[0] + length);
    }

    // 투표를 수행하였으면 제거
    radiant.shift();
    dire.shift();
  }

  return radiant.length > 0 ? "Radiant" : "Dire";
}
