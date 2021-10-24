# 인프런 알고리즘 문제풀이(C/C++)

## 동적계획법 - [8]: 알리바바와 40인의 도둑(Top-Down)

### 🌴 문제

[7번 문제](<https://github.com/healing99/algorithm/blob/master/Inflearn/C%2B%2B/%EC%84%B9%EC%85%985%20(%EB%8F%99%EC%A0%81%EA%B3%84%ED%9A%8D%EB%B2%95)/%5B7%5D%20%EC%95%8C%EB%A6%AC%EB%B0%94%EB%B0%94%EC%99%80_40%EC%9D%B8%EC%9D%98_%EB%8F%84%EB%91%91(Bottom-Up).md>)와 동일

---

### 💡 구현 IDEA

8번에서 풀었던 Bottom-Up 방식의 역으로 출발하는 아이디어<br>

`DFS(2, 2)`부터 시작하여,<br>
`DFS(2, 2)` = min(`DFS(2,1)` + `DFS(1,2)`) + `arr[2][2]`

[주의] 대부분 두 번씩 호출되므로 **메모이제이션** 사용하자 => `dy`배열 따로 잡기

<img src="https://user-images.githubusercontent.com/49135797/138601328-74fe4431-7dce-4be1-9006-b027df306da4.png" width=680>

### 🤠 code

```c++
#include <iostream>
#include <algorithm>
using namespace std;

int arr[21][21], dy[21][21];

int DFS(int x, int y) {
	if (dy[x][y] > 0) return dy[x][y]; // 이미 구한 경우에는 저장된 dy값 리턴!!
	if (x == 0 && y == 0) return arr[0][0]; // 시작점
	else {
		if (y == 0) return dy[x][y] = DFS(x - 1, y) + arr[x][y]; // 위쪽으로만 이동
		else if (x == 0) return dy[x][y] = DFS(x, y - 1) + arr[x][y]; // 왼쪽으로만 이동
		else return dy[x][y] = min(DFS(x - 1, y), DFS(x, y - 1)) + arr[x][y]; //가장자리 아닌 경우
	}
}

int main() {
	int n;
	cin >> n;
	for (int i = 0; i < n; i++) {
		for (int j = 0; j < n; j++) {
			cin >> arr[i][j];
		}
	}
	cout << DFS(n - 1, n - 1);
	return 0;
}
```

### 📙 comment

**메모이제이션** 사용하지 않으면 시간초과 발생.. <br>

메모이제이션을 통해 값을 이미 구한 경우에는 저장된 값을 바로 리턴하도록 구현해주자

```c++
if (dy[x][y] > 0) return dy[x][y];
```
