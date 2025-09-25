function solution(n, words) {
  const seen = new Set([words[0]]);
  for (let i = 1; i < words.length; i++) {
    const prev = words[i - 1];
    const cur = words[i];

    // 끝말잇기 규칙 위반했거나 이미 말했던 단어를 재사용하는 경우
    if (prev[prev.length - 1] !== cur[0] || seen.has(cur)) {
      return [(i % n) + 1, Math.floor(i / n) + 1];
    }
    seen.add(cur);
  }
  return [0, 0];
}
