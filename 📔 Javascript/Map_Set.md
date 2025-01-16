# Map과 Set

참고: https://ko.javascript.info/map-set#ref-388

## Map

키가 있는 데이터를 저장한다는 점에서 객체와 유사합니다.
다만, 맵은 **키에 다양한 자료형을 허용**한다는 점에서 차이가 있습니다.

### 주요 메서드

- `new Map()` : 맵 생성
- `map.set(key, value)`: key를 이용해 value를 저장
- `map.get(key)`: key에 해당하는 값을 반환. key가 존재하지 않으면 undefined를 반환
- `map.has(key)`: key가 존재하면 true, 그렇지 않으면 false 반환
- `map.delete(key)`: key에 해당하는 값을 삭제
- `map.clear()`: 맵 안의 모든 요소를 제거
- `map.size`: 요소의 개수를 반환

  <br/>

```ts
let map = new Map();

map.set("1", "str1"); // 문자형 키
map.set(1, "num1"); // 숫자형 키
map.set(true, "bool1"); // 불린형 키

// 객체는 키를 문자형으로 변환한다는 걸 기억하고 계신가요?
// 맵은 키의 타입을 변환시키지 않고 그대로 유지합니다. 따라서 아래의 코드는 출력되는 값이 다릅니다.
alert(map.get(1)); // 'num1'
alert(map.get("1")); // 'str1'

alert(map.size); // 3
```

맵은 객체와 달리 키를 문자형으로 변환하지 않습니다. 키엔 자료형 제약이 없습니다.

> ⚠️ `map[key]`는 Map을 쓰는 바른 방법이 아닙니다. <br/> `map[key] = 2`로 값을 설정하는 것 같이 `map[key]`를 사용할 수 있긴 합니다. <br/>하지만 이 방법은 map을 일반 객체처럼 취급하게 됩니다. 따라서 여러 제약이 생기게 되죠.<br/>
> => map을 사용할 땐 map전용 메서드 `set`, `get` 등을 사용해야만 합니다.

### 맵은 키로 객체를 허용합니다

```ts
let john = { name: "John" };

let visitsCountMap = new Map();

visitsCountMap.set(john, 123);

alert(visitsCountMap.get(john)); // 123
```

### 체이닝

`map.set`을 호출할 때마다 맵 자신이 반환됩니다. 이를 이용하면 `map.set`을 '체이닝(chaining)'할 수 있습니다.

```ts
map.set("1", "str1").set(1, "num1").set(true, "bool1");
```

### 맵의 요소에 반복 작업하기

다음 세 가지 메서드를 사용해 맵의 각 요소에 반복 작업을 할 수 있습니다.

- `map.keys()` – 각 요소의 키를 모은 반복 가능한(iterable, 이터러블) 객체를 반환합니다.
- `map.values()` – 각 요소의 값을 모은 이터러블 객체를 반환합니다.
- `map.entries()` – 요소의 [키, 값]을 한 쌍으로 하는 이터러블 객체를 반환합니다. 이 이터러블 객체는 for..of반복문의 기초로 쓰입니다.

<br/>

```ts
let recipeMap = new Map([
  ["cucumber", 500],
  ["tomatoes", 350],
  ["onion", 50],
]);

// 키(vegetable)를 대상으로 순회합니다.
for (let vegetable of recipeMap.keys()) {
  alert(vegetable); // cucumber, tomatoes, onion
}

// 값(amount)을 대상으로 순회합니다.
for (let amount of recipeMap.values()) {
  alert(amount); // 500, 350, 50
}

// [키, 값] 쌍을 대상으로 순회합니다.
for (let entry of recipeMap) {
  // recipeMap.entries()와 동일합니다.
  alert(entry); // cucumber,500 ...
}
```

> **맵은 삽입 순서를 기억합니다.** <br/>
> 맵은 값이 삽입된 순서대로 순회를 실시합니다. <br/>객체가 프로퍼티 순서를 기억하지 못하는 것과는 다릅니다.

여기에 더하여 맵은 배열과 유사하게 내장 메서드 `forEach`도 지원합니다.

```ts
// 각 (키, 값) 쌍을 대상으로 함수를 실행
recipeMap.forEach((value, key, map) => {
  alert(`${key}: ${value}`); // cucumber: 500 ...
});
```

### `Object.entries`: 객체를 맵으로 바꾸기

각 요소가 `키-값` 쌍인 배열이나 이터러블 객체를 초기화 용도로 맵에 전달해 새로운 맵을 만들 수 있습니다.

```ts
// 각 요소가 [키, 값] 쌍인 배열
let map = new Map([
  ["1", "str1"],
  [1, "num1"],
  [true, "bool1"],
]);

alert(map.get("1")); // str1
```

평범한 객체를 가지고 맵을 만들고 싶다면 내장 메서드 `Object.entries(obj)`를 활용해야 합니다. 이 메서드는 객체의 키-값 쌍을 요소([key, value])로 가지는 배열을 반환합니다.

```ts
let obj = {
  name: "John",
  age: 30,
};

let map = new Map(Object.entries(obj));
// Object.entries(obj) => [ ["name","John"], ["age", 30] ]

alert(map.get("name")); // John
```

### `Object.fromEntries`: 맵을 객체로 바꾸기

```ts
let prices = Object.fromEntries([
  ["banana", 1],
  ["orange", 2],
  ["meat", 4],
]);

// now prices = { banana: 1, orange: 2, meat: 4 }

alert(prices.orange); // 2
```

## Set

셋(Set)은 **중복을 허용하지 않는** 값을 모아놓은 특별한 컬렉션입니다. 셋에 키가 없는 값이 저장됩니다.

### 주요 메서드

- `new Set(iterable)` – 셋을 생성합니다. 이터러블 객체를 전달받으면(대개 배열을 전달받음) 그 안의 값을 복사해 셋에 넣어줍니다.
- `set.add(value)` – 값을 추가하고 셋 자신을 반환합니다.
- `set.delete(value)` – 값을 제거합니다. 호출 시점에 셋 내에 값이 있어서 제거에 성공하면 true, 아니면 false를 반환합니다.
- `set.has(value)` – 셋 내에 값이 존재하면 true, 아니면 false를 반환합니다.
- `set.clear()` – 셋을 비웁니다.
- `set.size` – 셋에 몇 개의 값이 있는지 세줍니다.

셋 내에 동일한 값(value)이 있다면 `set.add(value)`을 아무리 많이 호출하더라도 아무런 반응이 없을 겁니다. 셋 내의 값에 중복이 없는 이유가 바로 이 때문이죠.

방문자 방명록을 만든다고 가정해 봅시다. 한 방문자가 여러 번 방문해도 방문자를 중복해서 기록하지 않겠다고 결정 내린 상황입니다. 즉, 한 방문자는 '단 한 번만 기록’되어야 합니다.

이때 적합한 자료구조가 바로 셋입니다.

<br/>

```ts
let set = new Set();

let john = { name: "John" };
let pete = { name: "Pete" };
let mary = { name: "Mary" };

// 어떤 고객(john, mary)은 여러 번 방문할 수 있습니다.
set.add(john);
set.add(pete);
set.add(mary);
set.add(john);
set.add(mary);

// 셋에는 유일무이한 값만 저장됩니다.
alert(set.size); // 3

for (let user of set) {
  alert(user.name); // // John, Pete, Mary 순으로 출력됩니다.
}
```

### 셋의 값에 반복 작업하기

`for..of`나 `forEach`를 사용하면 셋의 값을 대상으로 반복 작업을 수행할 수 있습니다.

```ts
let set = new Set(["oranges", "apples", "bananas"]);

for (let value of set) alert(value);

// forEach를 사용해도 동일하게 동작합니다.
set.forEach((value, valueAgain, set) => {
  alert(value);
});
```

**반복 작업을 위한 메서드**

- `set.keys()` – 셋 내의 모든 값을 포함하는 이터러블 객체를 반환합니다.
- `set.values()` – set.keys와 동일한 작업을 합니다. 맵과의 호환성을 위해 만들어진 메서드입니다.
- `set.entries()` – 셋 내의 각 값을 이용해 만든 [value, value] 배열을 포함하는 이터러블 객체를 반환합니다. 맵과의 호환성을 위해 만들어졌습니다.
