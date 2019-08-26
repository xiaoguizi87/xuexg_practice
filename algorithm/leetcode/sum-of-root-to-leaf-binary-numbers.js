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
var sumRootToLeaf = function(root) {
    return helper(root, 0)
};

var helper = function(root, num) {
    if (!root) {
        return 0
    }
    num = num * 2 + root.val
    if (root.left === null && root.right === null) {
        return num
    }
    let sum = 0
    if (root.left) {
        sum += helper(root.left, num)
    }
    if (root.right) {
        sum += helper(root.right, num)
    }
    return sum
}
