# 🌴 Map 맵

### 🔸 Map이란?

- key와 value가 쌍으로 이루어지면, pair 객체 형태로 저장됨
- 노드 기반으로 이루어진, 균형 이진 트리 구조
- key는 고유한 값이므로 중복이 불가능
- 삽입 되면서 자동으로 정렬
- key를 기준으로 정렬된 상태

### 🔸 Map의 초기화

- 헤더파일
  `#include <map>`

- 초기화

  `map<자료형, 자료형> 변수;` <br>

  `map<int> m(정렬기준);` <br>

  `map<int> m2(m1);` : m1을 복사한 m2를 생성<br>

- map에 삽입할때는 **pair 객체**를 인자로 받아야한다!

```c++
map<int, int> m;
m.insert(pair<int, int>(10, 20));
```

### 🔸 Map의 멤버함수

set의 함수들과 거의 유사

- `m.begin();`

- `m.end();`

- `m.rbegin();`

- `m.rend();`

- `m.clear();`

- `m[k] = v;` : key가 k, value가 v인 노드 추가 (방법1)

- `m.insert(make_pair(k, v));` : key가 k, value가 v인 노드 추가 (방법2)

- `m.insert(iter, k);`

- `m.erase(start, end);`

- `m.find(k);` : key가 k인 노드를 찾아, 해당 노드 가리키는 iterator 리턴 (존재하지 않는 경우 m의 마지막 원소 가리키는 iterator 리턴)

- `m.count(k);` : key가 k인 노드의 개수 리턴

- `m2.swap(m1);`

- `m.value_comp();`

- `m.key_comp();`

- `m.empty();`

- `m.size();` : m의 노드의 개수 리턴

- `m.max_size();`

### 🔸 Map 접근

```c++
int main() {
  map<int, string> m;

  m.insert(pair<int, string>(40, "banana")); //make_pair(40, "banana") 로도 가능
  m.insert(pair<int, string>(200, "apple"));
  m.insert(pair<int, string>(100, "kiwi"));
  // 이 방법도 가능
  // m[40] = "banana";
  // m[200] = "apple";
  // m[100] = "kiwi";

  //접근 1
  for (map<int, string>::iterator iter = m.begin(); iter != m.end(); iter++) {
      cout << "[" << iter->first << ", " << iter->second << "]" << " ";
  }
  cout << endl;

  //접근 2
  for (map<int, string>::iterator iter = m.begin(); iter != m.end(); iter++) {
      cout << "[" << (*iter).first << ", " << (*iter).second << "]" << " ";
  }
}
```

### 🔸 언제 사용할까?

- 연관 있는 두 값을 함께 묶어서 관리하되, 검색을 빠르게 하고 싶은 경우
