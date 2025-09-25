// 방법1. 인접리스트 방식
function solution(tickets) {
  const N = tickets.length;
  const path = ["ICN"];
  let answer = null;
  const obj = {};

  // 1) 인접 리스트 만들기
  for (const [start, end] of tickets) {
    if (!obj[start]) obj[start] = [];
    obj[start].push({ to: end, used: false });
  }
  // 2) 알파벳 순 정렬
  for (const key in obj) {
    obj[key].sort((a, b) => a.to.localeCompare(b.to));
  }

  function DFS(cur, cnt) {
    if (answer) return;
    if (cnt === N) {
      answer = [...path];
      return;
    }

    // 해당 위치에서 시작하는 경로가 없으면 리턴
    if (!obj[cur]) return;

    for (const next of obj[cur]) {
      if (next.used) continue;
      // 선택
      next.used = true;
      path.push(next.to);

      DFS(next.to, cnt + 1);

      // 되돌리기
      next.used = false;
      path.pop();
    }
  }

  DFS("ICN", 0);
  return answer ?? [];
}

// 방법2. 티켓 자체를 알파벳 순으로 정렬해서
// 첫 번째 결과를 반환
function solution(tickets) {
  const N = tickets.length;
  const used = Array(N).fill(false);
  let answer = null;

  // 1) 사전순 정렬 (from, to 기준)
  tickets.sort((a, b) =>
    a[0] === b[0] ? a[1].localeCompare(b[1]) : a[0].localeCompare(b[0])
  );

  const path = ["ICN"];

  function DFS(cur, cnt) {
    // 2) 이미 답 있으면 더 이상 탐색 X
    if (answer) return;

    // 티켓 모두 사용 → 정답 확정
    if (cnt === N) {
      answer = [...path]; // 최종 결과만 복사
      return;
    }

    for (let i = 0; i < N; i++) {
      // if (answer) return; // 하위에서 찾았으면 바로 중단
      if (used[i]) continue;

      const [from, to] = tickets[i];
      if (from !== cur) continue;

      used[i] = true;
      path.push(to);

      DFS(to, cnt + 1);

      path.pop();
      used[i] = false;
    }
  }

  DFS("ICN", 0);
  return answer ?? []; // (문제상 항상 존재하지만 안전하게)
}
