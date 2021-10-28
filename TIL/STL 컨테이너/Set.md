# 🌴 Set 셋

### 🔸 Set이란?

- 중복없이 저장하는 자료구조 (=> 집합이라고 생각)
- 삽입하는 순서에 상관없이 정렬되어서 입력된다

### 🔸 Set의 초기화

- 헤더파일
  `#include <set>`

- 초기화

  `set<자료형> 변수;` <br>

  `set<자료형>변수(복사할 변수);`<br>

  `set <자료형> 변수 = 복사할 변수;`<br>

  ```cpp
  set<int> s;

  s.insert(1);
  s.insert(2);
  s.insert(-1);
  s.insert(3);

  int arr[] = { 1, 2, 3, 4, 5, 6 };
  set<int> s1(s.begin(), s.end());    // s1 = -1, 1, 2, 3
  set<int> s2(arr, arr + 6);        // s2 = 1, 2, 3, 4, 5, 6
  set<int> s3(s1);        // s3 = -1, 1, 2, 3
  set<int> s4 = s2;        // s4 = 1, 2, 3, 4, 5, 6
  ```

- set 정렬

  ```c++
  set<string> s; // 기본: 오름차순
  set<string, greater<> > s; // 내림차순
  ```

### 🔸 Set의 (주요) 반복자

- `s.begin()` : set의 시작이 되는 주소 값 반환
- `s.end()` : set의 마지막 부분에 대한 주소 값 반환(정확히는 마지막 뒤 공백구간)
- `s.rbegin()` : set의 마지막 부분을 시작점으로 지정
- `s.rend()` : set의 첫번 째 부분을 마지막점으로 지정

```cpp
set<int> s;

s.insert(1);
s.insert(2);
s.insert(-1);
s.insert(3);

for_each(s.begin(), s.end(), [](int n) {
    cout << n << endl;        //output : -1, 1, 2, 3
});

for_each(s.rbegin(), s.rend(), [](int n) {
    cout << n << endl;        //output : 3, 2, 1, -1
});
```

### 🔸 Set의 용량 (capacity)

- `s.empty()` : s가 비어있다면 true, 비어있지 않으면 false
- `s.size()` : s에 저장되어 있는 크기
- `s.max_size()` : s가 가질 수 있는 최대 크기

### 🔸 Set의 삽입, 삭제 / 요소 출력

- `s.insert()` : s에 값 삽입
- `s.erase()` : s에 저장된 요소 삭제
- `s.swap()` : s1과 s2를 서로 교환
- `s.clear()` : s의 요소들 전부 삭제
- `s.emplace()` : move()를 사용해 객체를 저장
- `s.emplace_hint()` : 삽입될 위치에 대한 힌트를 토대로 삽입

### 🔸 Set 접근

```c++
int main() {
  set<int> s;
  s.insert(1);
  s.insert(5);
  s.insert(2);
  s.erase(1);
  for (set<int>::iterator iter = s.begin(); iter != s.end(); iter++) {
    cout << *iter << " "; // 2 5
  }
}
```

### 🔸 Set의 (주요) 기능

- `s.find()`: 찾는 값이 있으면 해당 위치의 iterator 반환, 아니면 s.end()반환
- `s.count()` : set에 저장된 요소들의 갯수 반환

### 🔸 언제 사용할까?

- 삽입과 동시에 정렬이 필요할 때
- 중복을 제거한 원소의 집합이 필요할 때
- 현재 원소가 중복된 값인지 확인이 필요할 때

### 🔸 unordered_set

- 동일한 set이지만, 정렬 되지 않음
- insert, erase, find 모두 `O(1)`으로 수행됨<br>
  (일반 set과 map 같은 경우 `O(log(n))`)

> unordered_set, unordered_map과 vector에 관한 글<br> > [difference between unordered-set and vector](https://www.quora.com/What-is-the-difference-between-unordered_set-and-vector-in-C++)
