## Linked List 구현하기

배열과 달리 메모리상에 index에 의한 물리적 배치를 하지 않고
node를 생성 후 해당 node의 pointer에 의해 다음 node를 연결한다.
이를 통해 Linked List는 데이터 삽입/삭제 시 데이터의 구조를 재정렬하지 않아도 된다.

```ts
class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  contructor() {
    this.head = null; // 처음에 데이터가 없다면 head는 null
    this.size = 0;
  }

  // 첫 번째 삽입
  insertFirst(data) {
    // head에 새로운 노드가 들어가고 기존의 head는 next로 밀려난다.
    this.head = new Node(data, this.head);
    this.size++;
  }

  // 마지막 삽입
  insertLast(data) {
    let node = new Node(data);
    let current;

    // 비어있는 경우
    if (!this.head) {
      this.head = node;
    } else {
      current = this.head;
      while (current.next) {
        current = current.next;
      }
      // 마지막에 새로운 node 연결
      current.next = node;
    }

    this.size++;
  }

  // 특정 인덱스에 중간 삽입
  insertAt(data, index) {
    // size 범위를 넘어서는 경우
    if (index > 0 && index > this.size) return;

    // 첫 번째 인덱스
    if (index === 0) {
      this.head = new Node(data, this.head);
      this.size++;
      return;
    }

    const node = new Node(data);
    let current, previous;

    current = this.head;
    let count = 0;

    while (count < index) {
      previous = current;
      count++;
      current = current.next;
    }

    node.next = current;
    previous.next = node;

    this.size++;
  }

  // 특정 인덱스의 데이터 가져오기
  getAt(index) {
    let current = this.head;
    let count = 0;

    while (current) {
      if (count === index) return current.data;
      count++;
      current = current.next;
    }

    // 리스트를 끝까지 순회했음에도 인덱스를 찾지 못한 경우
    return null;
  }

  removeAt(index) {
    // 비어있거나 size 범위를 넘어서는 경우
    if (!this.head || (index > 0 && index > this.size)) return;
    let current = this.head;
    let previous;
    let count = 0;

    if (index === 0) {
      this.head = current.next;
    } else {
      while (count < index) {
        count++;
        previous = current;
        current = current.next;
      }
      previous.next = current.next;
    }

    this.size--;
  }

  clearList() {
    this.head = null;
    this.size = 0;
  }
}

const linkedList = new LinkedList();
linkedList.insertFirst(100);
linkedList.insertFirst(200);
linkedList.insertFirst(300);
linkedList.insertLast(400);
linkedList.insertLast(500, 1);
linkedList.removeAt(2);

linkedList.clearList();
```
