# CodeUp - 재귀함수

## [1930]: SuperSum

### 🌴 문제

SuperSum 함수는 다음과 같이 정의된다.<br>
SuperSum(0,n)=n (n은 모든 양의 정수)<br>
SuperSum(k,n)=SuperSum(k−1,1)+SuperSum(k−1,2)+...+SuperSum(k−1,n)<br>
k와 n이 여러개 주어진다. SuperSum의 값을 각각 출력하시오.

#### ◻ 입력

k(1<=k<=14)와 n(1<=n<=14)이 입력된다. 입력의 끝은 EOF(End Of File)이다.<br>
입력예시 : <br>
1 3<br>
2 3<br>
4 10<br>
10 10<br>

#### ◻ 출력

SuperSum(k,n)의 값을 각 행에 하나씩 출력한다.<br>
출력예시 : <br>
6<br>
10<br>
2002<br>
167960<br>

---

### 🤠 MY code

```c++
#include <stdio.h>

int SuperSum(int x, int y) {
	int i, sum = 0;
	if (x == 0) return y;
	for (i = 1; i <= y; i++) {
		sum += SuperSum(x - 1, i);
	}
	return sum;
}

int main() {
	int k, n;
	while (scanf("%d %d", &k, &n) != EOF) {
		printf("%d\n", SuperSum(k, n));
	}
}
```

### 📙 comment

**EOF란?** <br>

- End-Of-File의 약자로, 파일의 끝을 의미<br>
- 이를 이용하여 파일이 종료될때까지 입력을 받는 코드를 작성할 수 있음<br>
- 간혹 알고리즘 문제에서 입력값의 범위가 주어지지 않는 경우 이를 사용할 수 있음<br>
- cin.eof()는 bool타입을 가지고, 만약 파일의 끝을 의미하는 EOF를 읽게 되면 true값으로 바뀜<br>
- 콘솔창에는 EOF를 수동으로 넣어줘야하는데 Windows는 ctrl+z, Unix에서는 ctrl+d

◻ C++

```c++
#include <iostream>
using namespace std;

int main() {
    int n;
    while (!cin.eof()) {
        cin >> n;
    }
}
```

◻ C언어

```c++
#include<stdio.h>

int main() {
    int n;
    while (scanf("%d", &n) != EOF) {

    }
}
```
