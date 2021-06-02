# 인프런 알고리즘 문제풀이(C/C++)

## [68]: 최소비용 (DFS : 가중치 방향그래프 인접리스트, STL pair 자료구조)

[Inflearn-[67]경로탐색(DFS 인접행렬)](<https://github.com/healing99/algorithm/blob/master/Inflearn/%5B67%5D%20%EC%B5%9C%EC%86%8C%EB%B9%84%EC%9A%A9(DFS%20%EC%9D%B8%EC%A0%91%ED%96%89%EB%A0%AC).md>) 문제와 동일<br>
-&nbsp; 67번은 인접행렬로 해결했었고, 이번에는 인접리스트를 활용

### 🌴 문제

가중치 방향그래프가 주어지면 1번 정점에서 N번 정점으로 가는 최소비용을 출력하는 프로그램을 작성하세요.
<img src="https://user-images.githubusercontent.com/49135797/120228855-ed71da80-c286-11eb-82d6-c781bc365a3e.png" width="400px"/>

#### ◻ 입력

첫째 줄에는 정점의 수 N(1<=N<=20)와 간선의 수 M가 주어진다. 그 다음부터 M줄에 걸쳐 연결정보가 주어진다.<br>
입력예시 : <br>
5 8<br>
1 2 12<br>
1 3 6<br>
1 4 10<br>
2 3 2<br>
2 5 2<br>
3 4 3<br>
4 2 2<br>
4 5 5

#### ◻ 출력

총 가지수를 출력한다.<br>
출력예시 : <br>
13

---

### 💡 구현 IDEA

pair 자료구조를 활용하여 인접리스트를 구현한다<br>
int형과 int형을 하나의 쌍으로 묶은 **pair형**으로 vector를 선언<br>
`vector<pair<int, int> > map[30];`

`map[v][i].first`: 정점 v에서 갈 수 있는 정점 번호<br>
`map[v][i].second`: 해당 가중치 값

<img src="https://user-images.githubusercontent.com/49135797/120459896-94638d00-c3d3-11eb-9139-fef88c91748e.png"/>

### 🤠 code

```c++
#include<stdio.h>
#include <vector>
using namespace std;

int ch[30], n, cost = 2147000000;
vector<pair<int, int> > map[30]; //pair형 vector


void DFS(int v, int sum) {
	int i;
	if (v == n) {
		if (sum < cost) cost = sum;
	}
	else {
		for (i = 0; i < map[v].size(); i++) {
			if (ch[map[v][i].first] == 0) {
				ch[map[v][i].first] = 1;
				DFS(map[v][i].first, sum + map[v][i].second);
				ch[map[v][i].first] = 0;
			}
		}
	}
}

int main() {
	int m, i, a, b, c;
	scanf("%d %d", &n, &m);
	for (i = 1; i <= m; i++) {
		scanf("%d %d %d", &a, &b, &c); //b는 연결된 정점, c는 가중치 값
		map[a].push_back(make_pair(b, c));
	}
	ch[1] = 1;
	DFS(1, 0);
	printf("%d\n", cost);
	return 0;
}
```

### 📙 comment

- pair는 `<utility>` 라는 헤더파일에 정의되었지만<br>
  `<vector>`나 `<algorithm>` 헤더파일에 이미 포함하고 있기에, `vector`를 사용할때는 따로 include할 필요없다.

- `pair`는 STL을 제공하는데, 두 개의 데이터형을 한 쌍으로 묶어서 관리해준다.<br>
  구조체와 비슷하지만, `pair`는 딱 2개만 묶어줌<br>

  **pair 선언하기**
  `pair <int,int> p;`

  **값을 입력하여 pair 생성하기**
  `p = make_pair(10, 'A');`

  **각각 접근하기**
  `p.first` 와 `p.second`

  **전체 코드**

  ```c++
    int main() {
      pair <int, char> p; //하나의 쌍으로 묶어주기
      p = make_pair(10, 'A'); //실제 노드가 생성
      printf("%d %c", p.first, p.second);
    }
  ```

- pair형으로 vector 선언하기

  ```c++
  vector<pair<int, int> >
  ```

  ❗ 주의할 점은 `<pair<int, int>>` 이렇게 마지막에 괄호를 띄우지 않는 경우 `>>`는 shift 연산자로 취급되기 때문에<br>
  반드시 `<pair<int, int> >` 띄워줘야한다!
