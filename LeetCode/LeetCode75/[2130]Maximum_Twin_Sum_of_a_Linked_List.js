// Linked List - 2130. Maximum Twin Sum of a Linked List
// https://leetcode.com/problems/maximum-twin-sum-of-a-linked-list/description/?envType=study-plan-v2&envId=leetcode-75

/**
 * 💡 리스트의 양쪽 끝에서부터 대칭적으로 더한 값이다.
 * 리스트를 반으로 나누고, 첫 번째 반을 역순으로 만든 후 대칭 노드의 값을 합산한다.
 * 
 * 
 *[Fast and Slow Pointer]
- 리스트를 순회할 때 사용하는 2개의 포인터 (빠른 러너, 느린 러너)
- 빠른 러너는 두 칸씩 건너뛰고, 느린 러너는 한 칸씩 이동한다.
- 빠른 러너가 연결 리스트의 끝에 도달하면, 느린 러너는 정확히 연결 리스트의 중간 지점을 가리키게 된다.
- 이렇게 중간 위치를 찾아내면, 여기서부터 값을 비교하거나 뒤집기를 시도하는 등 여러모로 활용할 수 있다.
참고: https://velog.io/@changhee09/%EC%95%8C%EA%B3%A0%EB%A6%AC%EC%A6%98-%EB%9F%B0%EB%84%88-%EA%B8%B0%EB%B2%95
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number}
 */
var pairSum = function (head) {
  let answer = 0;
  // 첫 번째 반 리스트를 역순으로 저장하기 위한 포인터
  let newList = null;
  // 리스트를 탐색하는 포인터
  let current = head;
  // 리스트를 두 개의 반으로 나누기 위한 포인터
  let currHalf = head;

  while (currHalf && currHalf.next) {
    currHalf = currHalf.next.next;
    let temp = current.next;
    current.next = newList;
    newList = current;
    current = temp;
  }

  while (current) {
    answer = Math.max(answer, current.val + newList.val);
    current = current.next;
    newList = newList.next;
  }

  return answer;
};
