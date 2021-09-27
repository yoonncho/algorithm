# 인프런 알고리즘 문제풀이(C/C++)

## [67]: 최소비용 (DFS : 가중치 방향그래프 인접행렬)

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

### 🤠 MY code

```c++
#include<stdio.h>
#include <vector>
using namespace std;

int map[30][30], ch[30], n, cost = 2147000000;

void DFS(int v, int sum) {
	int i;
	if (v == n) {
		if (sum < cost) cost = sum;
	}
	else {
		for (i = 1; i <= n; i++) {
			if (map[v][i] > 0 && ch[i] == 0) { //간선으로 연결되어있고, 방문안했는지 확인
				ch[i] = 1;
				DFS(i, sum + map[v][i]);
				ch[i] = 0;
			}
		}
	}
}
int main() {
	int m, i, a, b, c;
	scanf("%d %d", &n, &m);
	for (i = 1; i <= m; i++) {
		scanf("%d %d %d", &a, &b, &c);
		map[a][b] = c;
	}
	ch[1] = 1;
	DFS(1, 0);
	printf("%d\n", cost);
	return 0;
}
```

### 📙 comment

- 최소비용 문제는 **다익스트라 알고리즘** 활용하면 쉽게 해결할 수 있음
