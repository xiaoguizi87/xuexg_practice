/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var res = 0
var findTilt = function(root) {
    sum(root)
    return res
};

var sum = function(root) {
    if (root === null) {
        return 0
    }
    let l = sum(root.left)
    let r = sum(root.right)
    res += Math.abs(l - r)
    return l + r + root.val
}
