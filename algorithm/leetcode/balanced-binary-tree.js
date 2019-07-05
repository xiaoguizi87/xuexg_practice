/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isBalanced = function(root) {
    return height(root) >= 0
};

var height = function(root) {
    if (root === null) {
        return 0
    }
    let lh = height(root.left)
    let rh = height(root.right)
    if (lh >= 0 && rh >= 0 && Math.abs(lh - rh) <= 1) {
        return Math.max(lh, rh) + 1
    } else {
        return -1
    }
}
