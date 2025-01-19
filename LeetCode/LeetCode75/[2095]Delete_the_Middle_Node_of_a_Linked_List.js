// Linked List - 2095. Delete the Middle Node of a Linked List
// https://leetcode.com/problems/delete-the-middle-node-of-a-linked-list/description/?envType=study-plan-v2&envId=leetcode-75

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
var deleteMiddle = function (head) {
  let length = 0;
  let current = head;

  // 전체 길이 구하기
  while (current) {
    length++;
    current = current.next;
  }

  // 제거할 가운데 index 값 구하기
  const midIndex = Math.floor(length / 2);
  let count = 0;
  let previous = new ListNode(0);
  current = head;

  if (!head || head.next === null) return null;

  while (count < midIndex) {
    count++;
    previous = current;
    current = current.next;
  }
  previous.next = current.next;

  return head;
};
