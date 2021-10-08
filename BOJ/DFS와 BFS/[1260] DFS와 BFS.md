# Baekjoon 백준 - DFS와 BFS

## [1260]: DFS와 BFS

### 🌴 문제

[문제 바로가기](https://www.acmicpc.net/problem/1260) <br>
그래프를 DFS로 탐색한 결과와 BFS로 탐색한 결과를 출력하는 프로그램을 작성하시오. 단, 방문할 수 있는 정점이 여러 개인 경우에는 정점 번호가 작은 것을 먼저 방문하고, 더 이상 방문할 수 있는 점이 없는 경우 종료한다. 정점 번호는 1번부터 N번까지이다.

#### ◻ 입력

첫째 줄에 정점의 개수 N(1 ≤ N ≤ 1,000), 간선의 개수 M(1 ≤ M ≤ 10,000), 탐색을 시작할 정점의 번호 V가 주어진다. 다음 M개의 줄에는 간선이 연결하는 두 정점의 번호가 주어진다. 어떤 두 정점 사이에 여러 개의 간선이 있을 수 있다. 입력으로 주어지는 간선은 양방향이다.

#### ◻ 출력

첫째 줄에 DFS를 수행한 결과를, 그 다음 줄에는 BFS를 수행한 결과를 출력한다. V부터 방문된 점을 순서대로 출력하면 된다.

---

### 💡 구현 IDEA

이 문제에서 DFS와 BFS 연속으로 구현해야하므로, 같은 `visited` 배열을 사용하기 위해 <br>
`reset()` 함수 구현하여 배열 초기화하기

### 🤠 code

```c++
#include <stdio.h>
#include <vector>
#include <queue>
#include <algorithm>
using namespace std;

#define MAX 1001

int n, m, v;
int map[MAX][MAX];
bool visited[MAX];

void reset() {
	for (int i = 1; i <= n; i++) {
		visited[i] = false;
	}
}

void DFS(int v) {
	visited[v] = 1;
	printf("%d ", v);

	for (int i = 1; i <= n; i++) {
		if (map[v][i] == 1 && visited[i] == false) {
			DFS(i);
		}
	}
}

void BFS(int v) {
	queue<int> q;
	q.push(v);
	visited[v] = true;
	printf("%d ", v);

	while (!q.empty()) {
		v = q.front();
		q.pop();

		for (int i = 1; i <= n; i++) {
			if (map[v][i] == 1 && visited[i] == false) { // 정점 v와 연결되어있고, 방문 안했으면
				q.push(i);
				visited[i] = true;
				printf("%d ", i);
			}
		}
	}
}

int main() {
	int a, b;
	scanf("%d %d %d", & n, & m, &v);
	for (int i = 0; i < m; i++) {
		scanf("%d %d", &a, &b);
		map[a][b] = 1;
		map[b][a] = 1; // 무방향 그래프
	}
	reset();
	DFS(v);
	printf("\n");
	reset();
	BFS(v);
	return 0;
}
```

### 📙 comment

- 처음에 그래프를 연결리스트 형식으로 저장했었다.
  그러다보니까 문제에서 요구하는 "방문할 수 있는 정점이 여러 개인 경우에는 정점 번호가 작은 것을 먼저 방문하라"는 조건을 처리하기 까다로웠다. (사용자가 입력하는 간선 순으로 연결리스트가 구현되므로)

- 그래서 이차원 배열로 그래프를 구현하여, 탐색할때 정점 1~N까지 (크기에 따라 순차적으로 접근할 수 있도록) 탐색하는 것이 더 깔끔하다.
