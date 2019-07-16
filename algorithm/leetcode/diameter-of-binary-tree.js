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

var max = 0
var diameterOfBinaryTree = function(root) {
    if (root !== null) {
        max = 0
        setDepth(root)   
        return max
    }
    return 0
};

var setDepth = function(root) {
    if (root === null) {
        return 0
    }
    let right = setDepth(root.right)
    let left = setDepth(root.left)
    if (right + left > max) {
        max = right + left
    }
    return Math.max(right, left) + 1
}
