// Programmers 고득점 Kit - 깊이/너비 우선탐색(DFS/BFS)
// 단어 변환 (Level 3)

/**
 * 객체를 사용하여 해당 단어의 Level 값을 저장하자 (그래프 상의 Level)
 * 그래프에서 현재 노드의 deps는 연결된 이전 단계 deps에 1을 더한 것임을 활용하자
 */

// 한 글자 차이나는지 여부를 반환하는 함수
function isConnected(str1, str2) {
  let count = 0;
  for (let i = 0; i < str1.length; i++) {
    if (str1[i] !== str2[i]) count++;
  }
  return count === 1 ? true : false;
}

function solution(begin, target, words) {
  const visited = {};
  const queue = [];

  visited[begin] = 0;
  queue.push(begin);

  while (queue.length) {
    const popped = queue.shift();

    if (popped === target) break;

    for (const word of words) {
      if (isConnected(popped, word) && !visited[word]) {
        // 현재 노드의 deps는 기존 단계 deps에 1을 더한 것
        visited[word] = visited[popped] + 1;
        queue.push(word);
      }
    }
  }

  return visited[target] ? visited[target] : 0;
}

// 방법2
// [단어, 변환횟수]를 모두 저장
function solution(begin, target, words) {
  const visited = Array(words.length).fill(false);
  let queue = [[begin, 0]]; // [단어, 변환 횟수]

  while (queue.length) {
    const [word, count] = queue.shift();
    if (word === target) return count;

    for (let i = 0; i < words.length; i++) {
      if (!visited[i] && isConnected(word, words[i])) {
        visited[i] = true; // 방문처리
        queue.push([words[i], count + 1]);
      }
    }
  }
  return 0;
}
