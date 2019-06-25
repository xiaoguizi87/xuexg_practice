/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    let current = head
    let prev = null
    
    while (current) {
        let nextTmp = current.next
        current.next = prev
        prev = current
        current = nextTmp
    }
    return prev
};
