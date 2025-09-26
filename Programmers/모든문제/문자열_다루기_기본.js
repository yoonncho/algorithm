function solution(s) {
  // 💡 테스트케이스 실패 이유: 숫자에 e가 붙으면 지수로 인식하여 문자를 숫자로 인식하기 때문
  if (s.length !== 4 && s.length !== 6) return false;
  return s.split("").every((c) => !isNaN(c));
}
