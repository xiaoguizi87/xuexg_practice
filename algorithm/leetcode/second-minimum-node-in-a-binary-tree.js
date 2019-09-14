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
var findSecondMinimumValue = function(root) {
    return helper(root, root.val)
};

var helper = function(root, val) {
    if (root === null) {
        return -1
    }
    if (root.val > val) {
        return root.val
    }
    let l = helper(root.left, val)
    let r = helper(root.right, val)
    if (l > val && r > val) {
        return Math.min(l, r)
    }
    return Math.max(l, r)
}

