# 인프런 알고리즘 문제풀이(C/C++)

## [78]: 원더랜드 (Kruskal MST 알고리즘 : Union & Find 활용)

### 🌴 문제

원더랜드에 문제가 생겼다. 원더랜드의 각 도로를 유지보수하는 재정이 바닥난 것이다.<br>
원더랜드는 모든 도시를 서로 연결하면서 최소의 유지비용이 들도록 도로를 선택하고 나머지 도로는 폐쇄하려고 한다.<br>
어떤 도로는 도로를 유지보수하면 재정에 도움이 되는 도로도 존재한다. <br>
재정에 도움이 되는 도로는 비용을 음수로 표현했다. 아래의 그림은 그 한 예를 설명하는 그림이다.<br>

<img src="https://user-images.githubusercontent.com/49135797/122643058-85593a80-d148-11eb-96f0-1c084517d586.png" width="400px" height="260px"/>

위의 지도는 각 도시가 1부터 9로 표현되었고, 지도의 오른쪽은 최소비용 196으로 모든 도시를 연결하는 방법을 찾아낸 것이다.

#### ◻ 입력

첫째 줄에 도시의 개수 V(1≤V≤100)와 도로의 개수 E(1≤E≤1,000)가 주어진다. <br>
다음 E개의 줄에는 각 도로에 대한 정보를 나타내는 세 정수 A, B, C가 주어진다. <br>
이는 A번 도시와 B번 도시가 유지비용이 C인 도로로 연결되어 있다는 의미이다. <br>
C는 음수일 수도 있으며, 절댓값이 1,000,000을 넘지 않는다.<br>
입력예시 : <br>
9 12<br>
1 2 12<br>
1 9 25<br>
2 3 10<br>
2 8 17<br>
2 9 8<br>
3 4 18<br>
3 7 55<br>
4 5 44<br>
5 6 60<br>
5 7 38<br>
7 8 35<br>
8 9 15

#### ◻ 출력

모든 도시를 연결하면서 드는 최소비용을 출려한다.<br>
출력예시 :<br>
196

---

### 💡 구현 IDEA

- Union-Find 알고리즘 , Kruskal 알고리즘 활용<br>

- 사이클이 형성되는 경우 연결x<br>

### 🤠 code

```c++
#include <stdio.h>
#include <vector>
#include <algorithm>
using namespace std;

int unf[10001];

struct Edge {
	int v1;
	int v2;
	int val;
	Edge(int a, int b, int c) {
		v1 = a;
		v2 = b;
		val = c;
	}
	bool operator<(Edge& b) { //연산자오버로딩 (오름차순정렬)
		return val < b.val;
	}
};

int Find(int v) {
	if (v == unf[v]) return v;
	else return unf[v] = Find(unf[v]);
}

void Union(int a, int b) {
	a = Find(a);
	b = Find(b);
	if (a != b) unf[a] = b;
}


int main() {
	vector<Edge> Ed; //간선 저장
	int i, n, m, a, b, c, cnt=0, res=0;
	scanf("%d %d", &n, &m);
	for (i = 1; i <= n; i++) {
		unf[i]=i;
	}
	for (int i = 1; i <= m; i++) {
		scanf("%d %d %d", &a, &b, &c);
		Ed.push_back(Edge(a, b, c));
	}
	sort(Ed.begin(), Ed.end()); //(가중치 값 기준으로) 오름차순 정렬
	for (i = 0; i < m; i++) {
		int fa = Find(Ed[i].v1);
		int fb = Find(Ed[i].v2);
		if (fa != fb) { //서로 다른 집합인 경우
			res += Ed[i].val; //가중치 누적
			Union(Ed[i].v1, Ed[i].v2);
		}
	}
	printf("%d\n", res);
	return 0;
}
```

### 📙 comment

**Kruskal Algorithm (크루스칼 알고리즘)?**<br>

- 그래프 내의 모든 정점들을 가장 적은 비용으로 연결하기 위해서 사용<br>
- 최소 비용 신장 트리를 만들기 위한 대표적인 알고리즘
  - 여기서 **신장트리**란?<br>
    (1) 모든 정점을 포함하고, (2) 정점 간 서로 연결이 되며 사이클이 존재하지 않는 그래프<br>
- 그리디 알고리즘의 일종
  - 그래프 간선들을 오름차순으로 정렬해놓은 뒤, 사이클을 형성하지 않는 선에서 정렬된 순서대로 간선을 선택<br><br>
