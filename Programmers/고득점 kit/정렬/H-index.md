# Programmers 고득점 Kit - 정렬

## H-index (Level 2)

### 🌴 문제

H-Index는 과학자의 생산성과 영향력을 나타내는 지표입니다. 어느 과학자의 H-Index를 나타내는 값인 h를 구하려고 합니다.<br>
위키백과1에 따르면, H-Index는 다음과 같이 구합니다.<br>
어떤 과학자가 발표한 논문 n편 중, h번 이상 인용된 논문이 h편 이상이고 나머지 논문이 h번 이하 인용되었다면 h의 최댓값이 이 과학자의 H-Index입니다.<br>
어떤 과학자가 발표한 논문의 인용 횟수를 담은 배열 citations가 매개변수로 주어질 때, 이 과학자의 H-Index를 return 하도록 solution 함수를 작성해주세요.

### ◻ 제한사항

과학자가 발표한 논문의 수는 1편 이상 1,000편 이하입니다.<br>
논문별 인용 횟수는 0회 이상 10,000회 이하입니다.

#### ◻ 입출력 예

| citations       | return |
| --------------- | ------ |
| [3, 0, 6, 1, 5] | 3      |

#### ◻ 입출력 예 설명

이 과학자가 발표한 논문의 수는 5편이고, 그중 3편의 논문은 3회 이상 인용되었습니다.<br>
그리고 나머지 2편의 논문은 3회 이하 인용되었기 때문에 이 과학자의 H-Index는 3입니다.

---

### 💡 구현 IDEA

(🤠 MY code)<br>

- 인용횟수를 오름차순으로 정렬 -> 0, 1, 3, 5, 6<br>
- 뒤에서부터 루프문 돌기<br>
  i=4 일때 citations=6 > answer=0 이므로 answer++;<br>
  i=3 일때 citations=5 > answer=1 이므로 answer++;<br>
  i=2 일때 citations=3 > answer=2 이므로 answer++;<br>
  i=1 일때 citations=1 <= answer=3 이 되는 순간에 answer값 return

(💬 참고 code)<br>

- 인용횟수를 내림차순으로 정렬 -> 6, 5, 3, 1, 0<br>
- 맨 앞에서부터 루프문 돌기<br>
  i=0 일때 citation=6 이상의 논문은 1편 이상<br>
  i=1 일때 citation=5 이상의 논문은 2편 이상<br>
  i=2 일때 citation=3 이상의 논문은 3편 이상<br>
  i=3 일때 citation=1 이상의 논문은 4편 이상<br>
  i=4 일때 citation=0 이상의 논문은 5편 이상<br>
- 처음으로 `citation <= (i+1)` 되는 시점이 h의 최댓값 answer 임

### 🤠 MY code

```c++
#include <string>
#include <vector>
#include <stdio.h>
#include <algorithm>

using namespace std;

int solution(vector<int> citations) {
    int answer = 0;
    sort(citations.begin(), citations.end());
    for(int i = citations.size()-1; i >= 0; i--) {
        if (citations[i] <= answer) {
            break;
        }
        else answer++;
    }
    return answer;
}
```

### 💬 참고 code

```c++
int solution(vector<int> citations) {
    int answer = 0;
    sort(citations.begin(), citations.end(), greater<int>()); //내림차순 정렬
    for(int i = 0; i < citations.size(); i++)
    {
        if(citations[i] >= (i+1))
            answer++;
    }
    return answer;
}
```

### 📙 comment

sort 함수로 **오름차순** 정렬하기

```c++
sort(v.begin(), v.end());
//또는
sort(v.begin(), v.end(), less<int>());

```

sort 함수로 **내림차순** 정렬하기

```c++
sort(v.begin(), v.end(), greater<int>());
```
