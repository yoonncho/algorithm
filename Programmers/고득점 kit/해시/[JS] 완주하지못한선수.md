## Programmers 고득점 Kit - 해시

## 완주하지 못한 선수 (Level 1)

### 🌴 문제

[문제 바로가기](https://programmers.co.kr/learn/courses/30/lessons/42576)

---

### 💡 구현 IDEA

- participant 순회하면서 `{참가자 이름 : 참가자 수}` 의 `{key : value}` 형태의 객체로 저장
- completion 완주한 선수들을 하나씩 순회하면서 value - 1
- 최종적으로 객체에서 value != 0 인 참가자 이름을 출력

### 🤠 code

```js
function solution(participant, completion) {
  let answer = "";
  let obj = {};
  for (let p of participant) {
    obj[p] = obj[p] ? obj[p] + 1 : 1;
  }
  for (let c of completion) {
    obj[c] -= 1;
  }
  for (let key in obj) {
    if (obj[key] != 0) {
      answer += key;
    }
  }
  return answer;
}
```

### 💬 참고 code

- **완주자들을 기준**으로 객체 생성

```js
function solution(participant, completion) {
  let newList = completion.reduce((acc, c) => {
    acc[c] = acc[c] ? acc[c] + 1 : 1;
    return acc;
  }, {});

  return participant.find((c) => {
    if (newList[c]) {
      newList[c] -= 1;
    } else {
      return true;
    }
  });
}
```

### 📙 comment

**reduce() 메소드 사용하기** <br>
`배열.reduce((누적값, 현잿값, 인덱스, 요소) => { return 결과 }, 초깃값);`

=> 사용 예제

```js
//홀수 필터링
const array = [1, 2, 3];
const result = array.reduce((acc, cur) => {
  if (cur % 2 == 1) acc.push(cur);
  return acc;
}, []);

console.log(result); // [1,3]
```
