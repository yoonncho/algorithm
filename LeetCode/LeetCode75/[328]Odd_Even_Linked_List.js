// Linked List - 328. Odd Even Linked List
// https://leetcode.com/problems/odd-even-linked-list/description/?envType=study-plan-v2&envId=leetcode-75

// 💡 짝수와 홀수형 리스트를 각각 두어서, 두 리스트를 합친다.
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var oddEvenList = function (head) {
  if (head === null || head.next === null) return head;

  // 짝수와 홀수 인덱스 노드들을 담는 리스트
  let odd = new ListNode(0);
  let odd_ptr = odd;
  let even = new ListNode(0);
  let even_ptr = even;
  let index = 1;

  while (head !== null) {
    // 짝수인 경우
    if (index % 2 === 0) {
      even_ptr.next = head;
      even_ptr = even_ptr.next;
    } else {
      odd_ptr.next = head;
      odd_ptr = odd_ptr.next;
    }
    head = head.next;
    index++;
  }

  even_ptr.next = null;
  odd_ptr.next = even.next; // 짝수 리스트의 첫 번째 노드

  // 재구성된 리스트의 시작
  return odd.next;
};

/*****************************************************/
// (첫 시도) : 노드를 제거하고, 따로 또 배열에 저장햐고, 마지막에 노드를 추가하는 복잡한 방식
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var oddEvenList2 = function (head) {
  let count = 0;
  let previous = new ListNode(0);
  let current = head;
  let evenNums = [];

  let length = 0;

  // 전체 길이 구하기
  while (current) {
    length++;
    current = current.next;
  }

  current = head;

  while (count < length) {
    // 짝수 인덱스인 경우
    if (count % 2 === 0) {
      previous = current;
    } else {
      evenNums.push(current.val);
      previous.next = current.next;
    }
    current = current.next;
    count++;
  }

  for (let val of evenNums) {
    current = head;
    while (current.next) {
      current = current.next;
    }
    current.next = new ListNode(val, null);
  }

  return head;
};
