# 인프런 알고리즘 문제풀이(C/C++)

## [65]: 미로탐색 (DFS)

### 🌴 문제

7\*7 격자판 미로를 탈출하는 경로의 가지수를 출력하는 프로그램을 작성하세요.<br>
출발점은 격자의 (1, 1) 좌표이고, 탈출 도착점은 (7, 7)좌표이다. 격자판의 1은 벽이고, 0은 통로이다.<br>
격자판의 움직임은 상하좌우로만 움직인다. 미로가 다음과 같다면 위의 지도에서 출발점에서 도착점까지 갈 수 있는 방법의 수는 8가지이다. <br>
<img src="https://user-images.githubusercontent.com/49135797/119876395-d0759880-bf62-11eb-9e30-08ef2e75b006.png" width="250px" height="250px"/>

#### ◻ 입력

첫 번째 줄부터 7\*7 격자의 정보가 주어집니다.<br>
입력예시 : <br>
0 0 0 0 0 0 0<br>
0 1 1 1 1 1 0<br>
0 0 0 1 0 0 0<br>
1 1 0 1 0 1 1<br>
1 1 0 0 0 0 1<br>
1 1 0 1 1 0 0<br>
1 0 0 0 0 0 0

#### ◻ 출력

첫 번째 줄에 경로의 가지수를 출력한다.<br>
출력예시 : 8

---

### 💡 구현 IDEA

- 경로탐색(DFS) 문제와 유사 <br>
  [Inflearn-[64]경로탐색(DFS)](<https://github.com/healing99/algorithm/blob/master/Inflearn/%5B64%5D%20%EA%B2%BD%EB%A1%9C%ED%83%90%EC%83%89(DFS).md>)

- 12시방향/ 3시방향/ 6시방향/ 9시방향 -> 4가지 방향을 설정

```
int dx[4] = { -1, 0, 1, 0 };
int dy[4] = { 0, 1, 0, -1 };
```

### 🤠 code

```c++
#include <stdio.h>

int arr[10][10], ch[10][10], cnt = 0;
int dx[4] = { -1, 0, 1, 0 };
int dy[4] = { 0, 1, 0, -1 };

void DFS(int x, int y) {
	int i, xx, yy;
	if (x == 7 && y == 7) {
		cnt++;
	}
	else {
		for (i = 0; i < 4; i++) {
			xx = x + dx[i]; //탐색할 인덱스
			yy = y + dy[i];
			if (xx < 1 || xx>7 || yy < 1 || yy>7) continue;
			if (arr[xx][yy] == 0 && ch[xx][yy] == 0) {
				ch[xx][yy] = 1;
				DFS(xx, yy);
				ch[xx][yy] = 0;
			}
		}
	}

}

int main() {
	int i, j;
	for (i = 1; i <= 7; i++) {
		for (j = 1; j <= 7; j++) {
			scanf("%d", &arr[i][j]);
		}
	}
	ch[1][1] = 1;
	DFS(1,1);
	printf("%d\n", cnt);
	return 0;
}
```
