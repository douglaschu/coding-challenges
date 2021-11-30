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
    let slowPointer = head; //start both pointers at the head

    //traverse the linked list
    while(fastPointer && fastPointer.next) {
        fastPointer = fastPointer.next.next; 
        slowPointer = slowPointer.next;
        //when the fast pointer gets to the tail or null, the slow pointer will be in the middle because it's exactly half as fast. It covers half the distance. speed = distance/time. Same time for both
    }

    return slowPointer;

    //knowing how to use fast and slow pointers are important for anything with linked lists: cycles, cycle length, loops
    //pointer problems have these kinds of setups

};


console.log("odd:");
console.log(middleNode([1, 2, 3, 4, 5]));
console.log("even:");
console.log(middleNode([1, 2, 3, 4, 5, 6]));


// setup some nodes and connect them to each other
// the linked list looks like:
