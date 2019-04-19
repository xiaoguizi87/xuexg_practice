/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let head = new ListNode(0)
    let carry = 0
    let curNode = head
    while (l1 || l2) {
        let v1 = l1 ? l1.val : 0;
        let v2 = l2 ? l2.val : 0;
        let tmp = v1 + v2 + carry
        carry = parseInt(tmp / 10)
        curNode.next = new ListNode(tmp % 10)
        curNode = curNode.next
        if (l1) {
            l1 = l1.next
        }
        if (l2) {
            l2 = l2.next
        }
    }
    if (carry > 0) {
        curNode.next = new ListNode(carry)
    }
    return head.next
};
