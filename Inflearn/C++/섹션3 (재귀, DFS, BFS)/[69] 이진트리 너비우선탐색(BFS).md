# 인프런 알고리즘 문제풀이(C/C++)

## [69]: 이진트리 너비우선탐색(BFS)

### 🌴 문제

아래 그림과 같은 이진트리를 넓이우선탐색해 보세요. 간선 정보 6개를 입력받아 처리해보세요.

<img src="https://user-images.githubusercontent.com/49135797/120513201-ff7a8700-c406-11eb-8723-450278cfb169.png" width="320px" height="280px"/>

#### ◻ 입력

입력예시 : <br>
1 2<br>
1 3<br>
2 4<br>
2 5<br>
3 6<br>
3 7

#### ◻ 출력

출력예시 :<br>
1 2 3 4 5 6 7

---

### 💡 구현 IDEA

큐에 어떠한 자료를 넣을 때는 `back`, 빼낼때는 `front` 인덱스를 사용

`front<back`인 경우 큐에서 빼낼 요소가 있는 상황<br>
`front==back` 같아지는 순간 큐는 더 이상 빼낼 요소가 없음

<img src="https://user-images.githubusercontent.com/49135797/120514089-e3c3b080-c407-11eb-9702-4aaac3a86433.png" width="800px"/>
<img src="https://user-images.githubusercontent.com/49135797/120513396-36509d00-c407-11eb-817d-89dca1d1d867.PNG" width="800px"/>
<img src="https://user-images.githubusercontent.com/49135797/120513400-36e93380-c407-11eb-87d1-dbdddc1e6464.PNG" width="800px"/>

### 🤠 code

```c++
#include<stdio.h>
#include <vector>
using namespace std;

int Q[100], front = -1, back = -1, ch[10];
vector<int> map[10];

int main() {
	int i, a, b, x;
	for (i = 1; i <= 6; i++) {
		scanf("%d %d", &a, &b);
		map[a].push_back(b);
		map[b].push_back(a); //무방향 그래프
	}
	Q[++back] = 1;
	ch[1] = 1;
	while (front < back) {
		x = Q[++front]; //큐에서 빼내기
		printf("%d ", x);
		for (i = 0; i < map[x].size(); i++) { //x와 연결된 노드 탐색
			if (ch[map[x][i]] == 0) {
				ch[map[x][i]] = 1; //방문 표시
				Q[++back] = map[x][i];
			}
		}
	}
	return 0;
}
```

### 📙 comment

**깊이우선탐색(DFS: Depth-First Search)** <br>

- 최대한 깊이 내려간 뒤, 더이상 깊이 갈 곳이 없을 경우 옆으로 이동

**너비우선탐색(BFS: Breadth-First Search)** <br>

- 최대한 넓게 이동한 다음, 더 이상 갈 수 없을 때 아래로 이동
- 가장 가까운 곳들 먼저 탐색하고, 그 다음 거리에 있는 것들을 탐색하는 방법 → 깊이 순으로 탐색하는 방법<br>

**DFS 와 BFS의 차이를 보여주는 그림**

<img src="https://user-images.githubusercontent.com/49135797/120491991-a9044d00-c3f4-11eb-8a95-a0b78371d6d3.gif"/>
