/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */
var leafSimilar = function(root1, root2) {
    let str1 = myfun(root1, '')
    let str2 = myfun(root2, '')
    return str1 === str2
};

var myfun = (root, str) => {
    if (root === null) {
        return str
    }
    if (root.right === null && root.left === null) {
        str = str + root.val
        return str
    }
    return myfun(root.left, str) + myfun(root.right, str)
}
