/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode} //return another linked list, starting from middle node
 */

let middleNode = (head) => {
  let fastPointer = head;
  let slowPointer = head;

  while (fastPointer && fastPointer.next) {
    fastPointer = fastPointer.next.next;
    slowPointer = slowPointer.next;
  }

  return slowPointer;
};

console.log("odd:");
console.log(middleNode([1, 2, 3, 4, 5]));
console.log("even:");
console.log(middleNode([1, 2, 3, 4, 5, 6]));
