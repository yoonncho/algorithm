## 🌴 Vector 벡터

### 🔸 vector 선언, 초기화

- 벡터 선언하기

```cpp
#include <vector>                    // vector가 들어있는 헤더파일
vector<int> v;                       // int타입 벡터 생성
vector<int> v = { 1, 2, 3};          // int형 백터 생성 후 1, 2, 3 으로 초기화
vector<int> v[10];                   // int타입 벡터 배열(크기 : 10) 생성
vector<int> v[] = {{ 1, 2}, {3, 4}}; // int형 백터 배열 생성(행은 가변이지만 열은 고정)
vector<vector<int>> v;               // 2차원 백터 생성(행과 열 모두 가변)
vector<int> v(5);                    // 5개의 원소를 0으로 초기화
vector<int> v(5, 3);                 // 5개의 원소를 3으로 초기화
vector<int> v2(v);                   // 벡터 v를 복사하여 벡터v2 생성
```

- 이차원벡터

```cpp
vector<int> c[3]; //c라는 이름을 가진 빈 벡터 객체가 3개 생기는 것
c[0].push_back(1);
c[0].push_back(3);
c[0].push_back(5);
c[1].push_back(2);
c[1].push_back(4);
c[1].push_back(6);
c[2].push_back(7);
printf("%d\n", c[1][1]);
printf("%d\n", c[2][0]);
```

- 크기 선언하지 않고 push_back 함수로 요소를 동적으로 추가

```cpp
push_back(10); //맨 뒤에 10추가
pop_back(); //맨 뒤의 요소 제거

vector size() 함수 : 요소의 개수 반환
```

- 예제코드

```cpp
vector<int> a;
a.push_back(6);
a.push_back(8);
a.push_back(11);
printf("%d\n", a.size()); //벡터의 원소의 개수 : 3
printf("%d\n", a[1]); //8
//벡터는 길이가 가변적
```

- 🚫 주의
  빈벡터에 (없는 인덱스 공간에) 원소 넣으려고 시도하면 오류

```cpp
vector<int> a;
a[1] = 5; //빈벡터에 이렇게 값 할당 불가능
printf("%d", a[1]);
```

### 🔸 vector와 pair

```cpp
vector<pair<int, int>> graph[3]; //graph라는 이름을 가진 빈 벡터가 3개 생성
graph[1].push_back({ 3,5 });
graph[1].push_back({ 4,7 });
graph[1].push_back({ 5,9 });
graph[2].push_back(make_pair(7,7));
printf("%d %d", graph[2][0].first, graph[2][0].second); // 7 7
```

### 🔸 vector에서 sort 함수로 정렬

헤더파일 : `<algorithm>`

- 오름차순 정렬

```cpp
sort(v.begin(), v.end());
```

- 내림차순 정렬

```cpp
bool comp(int a, int b) {
  return a > b;
}

vector<int> v;
sort(v.begin(), v.end(), comp);
```

### 🔸 구조체를 이용한 STL vector 정렬

```cpp
#include<iostream>
#include <vector>
#include <algorithm> //sort 함수 사용하기 위해서
using namespace std;

struct Loc {
	int x, y, z;
	Loc(int a, int b, int c) { //생성자 필수
		x = a;
		y = b;
		z = c;
	}
	bool operator<(const Loc &b)const { //연산자 오버로딩
		if (x != b.x) return x < b.x;
		if (y != b.y) return y < b.y; //x==b.x인 경우가 넘어옴
		if (z != b.z) return z < b.z; //x==b.x && y==b.y인 경우가 넘어옴
	}
};

int main() {
	vector<Loc> XY;
	XY.push_back(Loc(2, 3, 5));
	XY.push_back(Loc(3, 6, 7));
	XY.push_back(Loc(2, 3, 1));
	XY.push_back(Loc(5, 2, 3));
	XY.push_back(Loc(3, 1, 6));
	sort(XY.begin(), XY.end());
	for (auto pos : XY) cout << pos.x << " " << pos.y << " " << pos.z << endl;
	return 0;
}

/*
결과:
2 3 1
2 3 5
3 1 6
3 6 7
5 2 3
*/
```

### 🔸 `vector<int> v1[3]` 과 `vector<int> v2(3)`의 차이점?

- `vector<int> v1(3)` 은 0으로 초기화된 사이즈 3의 v1이라는 벡터를 만드는 것
  ```cpp
  vector<int> v1(3); // 0, 0, 0
  v1.push_back(1); // 0, 0, 0, 1
  v1.push_back(2); // 0, 0, 0, 1, 2
  v1.pop_back(); // 0, 0, 0, 1
  cout << v1[0]; // 출력값: 0
  ```
  | v1[0] | v1[1] | v1[2] |
  | ----- | ----- | ----- |
  | 0     | 0     | 0     |
- `vector<int> v2[3]`은 int형 벡터를 3개만큼 선언하는 것과 같다<br>
  `vector<int> v[n]`으로 선언하면 vector의 레퍼런스(참조값)을 담고있다

  | v2[0]         | v2[1]         | v2[2]         |
  | ------------- | ------------- | ------------- |
  | `vector<int>` | `vector<int>` | `vector<int>` |

  - 언제 사용할까? <br>
    그래프를 만들때 인접 리스트 또는 연결 리스트를 사용하여 구현을 하게된다.<br>
    인접 리스트의 경우 보통 2차원 배열을 선언하여 간선을 입력한다.<br>
    이때 `vector<int> a[3]`과 같이 선언하면 3개의 a라는 벡터 각각이 정점이 되는 것이다.

  ```cpp
  vector<int> a[3];
  for(int element : a[1]) {
  	cout << element; // 출력결과 :
  }
  a[1].push_back(1);
  a[1].push_back(2);

  for(int element : a[1]) {
  	cout << element << " ";
  } // 출력결과 : 1 2
  ```

### 🔸 vector 사용 주의점

(앞에서 다 다룬 내용이지만 실전에서 계속 실수해서.. 적는 것 😅)

- vector를 초기화 시 크기를 따로 지정해주지 않고 push하는 방법

```cpp
vector<int> vec;
for(int i = 0; i < n; i++) {
	scanf("%d", &tmp);
	vec.push_back(tmp);
	// vec[i] = tmp; (x) => vec 객체의 메모리를 할당하지 않았기 때문에 실행 에러
}
```

🚫 이때 주의할 점은 vector의 **인덱스는 항상 0부터** 시작한다는 것이다. <br>
어떤 문제를 풀다가 인덱스 1부터 사용하는 습관에 i = 1 부터 n 까지 적용했더니`vector subscript out of range` 에러를 마주했다... <br>
어쩌면 당연하고 기본적인 것인데 순간 인지하지 못해서 몇 분간 삽질을 했다. 주의하자<br>

vector의 크기를 따로 지정해준 경우에는 크기에 맞게만 사용한다면, 당연히 인덱스 1부터 사용할 수 있다. <br>
다만 0이 아닌 1부터 사용하므로 원래 사용하려는 크기보다 +1 크기만큼 할당해야 한다!

```cpp
scanf("%d", &n); // 벡터의 크기를 입력받아
vector<int> vec(n + 1); // 하나 더 크게 할당
for(int i = 1; i <= n; i++) {
	scanf("%d", &tmp);
	vec[i] = tmp;
	//vec.push_back(tmp); (x)
}
```

여기서 또 주의점 <br>

- vector vec에 입력받은 tmp 값을 저장하는 과정에서, 주석처리된 것처럼 vector의 `push_back`을 사용했었다. <br>
  그리고 벡터에 들어있는 값들을 순차적으로 출력해봤는데 아래와 같이 0만 들어있고, 제대로 들어가지 않은 것을 확인할 수 있다.<br>
  <img src="https://user-images.githubusercontent.com/49135797/138987512-a025543d-da55-4405-a8a3-764c144c7723.png" height="170"/>

`push_back()`은 뒤에 원소가 추가되는 함수이다. 즉 벡터의 크기가 늘어나면서 원소가 추가되는 형태이다.<br>
벡터의 크기를 정해서 선언하면 초기값이 0으로 채워진 벡터가 생성되고, 이들에게 값을 저장하는 `vec[i] = 2` 식으로 해야지,<br>
`vec.push_back(2);` 이렇게 push_back()을 사용하면 의도대로 동작하지 않는다는 것.. 명심하자!
