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
var deleteDuplicates = function(head) {
    if (head === null) {
        return null
    }
    let s = new Set()
    let dummy = new ListNode(-1)
    s.add(head.val)
    dummy.next = head
    let cur = head
    
    while (cur.next !== null) {
        if (!s.has(cur.next.val)) {
            s.add(cur.next.val)
            head.next = cur.next
            head = head.next
        }
        cur = cur.next
    }
    head.next = null
    return dummy.next
};
