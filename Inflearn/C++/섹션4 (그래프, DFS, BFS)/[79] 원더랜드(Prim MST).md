# 인프런 알고리즘 문제풀이(C/C++)

## [79]: 원더랜드 (Prim MST 알고리즘)

78번 문제와 동일

---

### 💡 구현 IDEA

- [Inflearn-[78]원더랜드(Kruskal MST)](<https://github.com/healing99/algorithm/blob/master/Inflearn/C%2B%2B/%EC%84%B9%EC%85%984%20(%EA%B7%B8%EB%9E%98%ED%94%84%2C%20DFS%2C%20BFS)/%5B78%5D%20%EC%9B%90%EB%8D%94%EB%9E%9C%EB%93%9C(Kruskal%20MST).md>)
  문제에서 kruskal을 사용했을때는 간선을 중심으로 선택해나갔다면(n-1개), <br>
  이 문제에서는 임의의 시작정점을 하나씩 추가해나가는 방식(n개)
- 최소힙(우선순위 큐) 사용
- 추가된 정점을 체크하는 `ch`배열
- 1번 정점을 출발로 잡고
  1번에서 갈 수 있는 노드를 `(노드번호, 가중치값)` 형태로 큐에 push
- 우선순위큐에서 가중치 값이 가장 작은 노드를 선택하여, 아직 트리에 추가되지 않았다면
  pop하여 추가
- 만약 트리에 추가되었다면 그냥 pop하고 지나가기
- 큐가 빌 때까지 반복

### 🤠 code

```c++
#include <stdio.h>
#include <vector>
#include <queue>
#include <algorithm>
using namespace std;

int ch[30];

struct Edge {
	int e;
	int val;
	Edge(int a, int b) {
		e = a;
		val = b;
	}
	bool operator<(const Edge& b) const { //최소힙
		return val > b.val;
	}
};

int main() {
	priority_queue<Edge> Q;
	vector<pair<int, int> > map[30]; //(무방향 가중치) 인접리스트
	int i, n, m, a, b, c, res = 0;
	scanf("%d %d", &n, &m);
	for (i = 1; i <= m; i++) {
		scanf("%d %d %d", &a, &b, &c);
		map[a].push_back(make_pair(b, c));
		map[b].push_back(make_pair(a, c));
	}
	Q.push(Edge(1, 0)); //출발 지점
	while (!Q.empty()) {
		Edge tmp = Q.top();
		Q.pop();
		int v = tmp.e;
		int cost = tmp.val;
		if (ch[v] == 0) {
			res += cost;
			ch[v] = 1; //방문했음을 표시
			for (i = 0; i < map[v].size(); i++) {
				Q.push(Edge(map[v][i].first, map[v][i].second));
			}
		}
	}
	printf("%d\n", res);
	return 0;
}
```
