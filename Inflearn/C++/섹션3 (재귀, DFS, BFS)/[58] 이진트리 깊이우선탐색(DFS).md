# 인프런 알고리즘 문제풀이(C/C++)

## [58]: 이진트리 깊이우선탐색(DFS)

### 🌴 문제

아래 그림과 같은 이진트리를 전위순회와 후위순회를 연습해보세요.<br><br>
<img src="https://user-images.githubusercontent.com/49135797/115958856-39bd5280-a544-11eb-95d1-819eec390f1d.png" width="250px">

---

### 🤠 MY code

- **전위 순회** (root를 먼저 방문)

```c++
#include <stdio.h>

void D(int v) {
	if (v > 7) return;
	else {
		printf("%d ", v);
		D(v * 2); //왼쪽 자식노드
		D(v * 2 + 1); //오른쪽 자식노드
	}
}

int main() {
	D(1);
	return 0;
}
//출력: 1 2 4 5 3 6 7
```

<br>

- **중위 순회** (왼쪽 하위 트리 방문 후 root를 방문)

```c++
#include <stdio.h>

void D(int v) {
	if (v > 7) return;
	else {
		D(v * 2);
		printf("%d ", v);
		D(v * 2 + 1);
	}
}

int main() {
	D(1);
	return 0;
}
//출력: 4 2 5 1 6 3 7
```

<br>

- **후위 순회** (하위 트리 모두 방문 후 root를 방문)

```c++
#include <stdio.h>

void D(int v) {
	if (v > 7) return;
	else {
		D(v * 2);
		D(v * 2 + 1);
		printf("%d ", v);
	}
}

int main() {
	D(1);
	return 0;
}
//출력: 4 5 2 6 7 3 1
```
