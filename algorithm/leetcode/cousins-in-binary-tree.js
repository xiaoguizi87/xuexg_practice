/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} x
 * @param {number} y
 * @return {boolean}
 */
var isCousins = function(root, x, y) {
    if (root === null) {
        return false
    }
    if ((root.val === x) || (root.val === y)) {
        return false
    }
    let queue = [root]
    while (queue.length > 0) {
        let temp = []
        let [xp, yp] = [null, null]
        for (let node of queue) {
            if (node.left) {
            if (node.left.val === x) {
                xp = node
            } else if (node.left.val === y) {
                yp = node
            }
            temp.push(node.left)
                }
            if (node.right) {
            if (node.right.val === x) {
                xp = node
            } else if (node.right.val === y) {
                yp = node
            }
             temp.push(node.right)
            }
        }
        queue = temp
        if (xp && yp && xp !== yp) {
            return true
        }
    }
    return false
};
