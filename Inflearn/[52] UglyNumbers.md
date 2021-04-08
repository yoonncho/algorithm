# 인프런 알고리즘 문제풀이(C/C++)

## [52]: Ugly Numbers

### 🌴 문제

어떤 수를 소인수분해 했을 때 그 소인수가 2 또는 3 또는 5로만 이루어진 수를 Ugly Number라고 부릅니다. <br>
Ugly Number를 차례대로 적어보면 1, 2, 3, 4, 5, 6, 8, 9, 10, 12, 15, ...입니다. <br>
숫자 1은 Ugly Number의 첫 번째 수로 합니다. 자연수 N이 주어지면 Ugly Number를 차례로 적을 때 N번째 Ugly Number를 구하는 프로그램을 작성하세요.<br>

#### ◻ 입력

첫 줄에 자연수 N(3<=N<=1500)이 주어집니다.<br>
입력예시 : 10 <br>
입력예시 : 1500

#### ◻ 출력

첫 줄에 N번째 Ugly Number를 출력하세요.<br>
출력예시 : 12 <br>
출력예시 : 859963392

---

### 💡 구현 IDEA

- 숫자가 커졌을 때는 구할때마다 소인수분해를 해야해서 시간초과 발생할 수 밖에 없음

- 투포인터 알고리즘을 응용하여 쓰리 포인터 구현

- 숫자들을 소인수분해하는 방식이 아니라, 역발상으로 각 포인터가 가리키는 숫자들을 각각 2, 3, 5 곱하면 그 값들은 인수가 2, 3, 5로만 이루어진 숫자들이 됨

  <img src="https://user-images.githubusercontent.com/49135797/114000937-6ca1ee00-9896-11eb-91be-7586e622294b.png" width="260px" height="210px"/>


### 🤠 MY code
(🚫시간초과, 잘못된 코드)
```c++
#include <stdio.h>

int arr[1501];
int main() {
	int num, i, k, j = 1, flag, m, cnt = 2;
	scanf("%d", &m);
	arr[1] = 1;

	for (i = 2; i <= 10000; i++) {
		num = i;
		k = 2;
		flag = 0;
		while (num != 1) { //소인수분해
			if (num % k == 0) {
				if (k != 2 && k != 3 && k != 5) {
					flag = 1;
					break;
				}
				num /= k;
			}
			else k++;
		}
		if (flag == 0) {
			arr[cnt++] = i;
		}
	}
	printf("%d", arr[m]);
}
```

### 💬 참고 code
```c++
#include <stdio.h>

int arr[1501];
int main() {
	int n, i, p2, p3, p5, min=2147000000;
	scanf("%d", &n);
	arr[1]=1;
	p2=p3=p5=1;
	for(i=2; i<=n; i++){
		if(arr[p2]*2<arr[p3]*3) min=arr[p2]*2;
		else min=arr[p3]*3;
		if(arr[p5]*5 < min) min=arr[p5]*5;
		if(arr[p2]*2==min) p2++;
		if(arr[p3]*3==min) p3++;
		if(arr[p5]*5==min) p5++;
		arr[i]=min;
	}
	printf("%d", arr[n]);
}
```