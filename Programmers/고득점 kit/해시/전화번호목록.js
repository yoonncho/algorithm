function solution(phone_book) {
  // 접두어 관계인지 확인해야하므로 사전 순서(유니코드) 정렬
  phone_book.sort();

  for (let i = 0; i < phone_book.length - 1; i++) {
    if (phone_book[i + 1].startsWith(phone_book[i])) return false;
  }

  return true;
}
