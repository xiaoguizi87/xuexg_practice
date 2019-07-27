/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
    let dummy = new ListNode()
    let s = new Set()
    let cur = head
    let t = dummy
    while (cur) {
        if (cur.val !== val) {
            t.next = new ListNode(cur.val)
            t = t.next
        }
        s.add(cur.val)
        cur = cur.next
    }
    return dummy.next
};
