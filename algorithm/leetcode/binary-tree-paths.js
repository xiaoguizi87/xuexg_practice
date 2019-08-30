/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {string[]}
 */
var binaryTreePaths = function(root) {
    let res = []
    help(root, res, '')
    return res
};

var help = function(root, res, path) {
    if (root === null) {
        return
    }
    path = (path ?  path + '->' : '') + root.val 
    if (root.left === null && root.right === null) {        
        res.push(path)
        return
    }
    help(root.left, res, path)
    help(root.right, res, path)
}
