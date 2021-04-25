# CodeUp - 재귀함수

## [1916]: 피보나치 수열 (Large)

### 🌴 문제

( 1915번 문제와 동일 ) <br>
자연수 N을 입력받아 N번째 피보나치 수를 출력하는 프로그램을 작성하시오.<br>
단, N이 커질 수 있으므로 출력값에 10,009를 나눈 나머지를 출력한다.

#### ◻ 입력

자연수 N이 입력된다. (N은 20보다 같거나 작다.)<br>

#### ◻ 출력

N 번째 피보나치 수를 출력하되, 10,009를 나눈 나머지 값을 출력한다.

---

### 🤠 MY code

```c++
#include <stdio.h>

int arr[201];

long long int func(int x) {
	if (x == 1 || x == 2) {
		arr[x] = 1;
		return 1;
	}
	if (arr[x] != 0) { //값이 이미 존재하는 경우 바로 저장된 값을 리턴
		return arr[x];
	}
	else { //값이 없다면 함수 호출하여 저장
		arr[x] = (func(x - 1) + func(x - 2)) % 10009;
		return arr[x];
	}
}

int main() {
	int n;
	scanf("%d", &n);
	printf("%lld", func(n));
}
```
