/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var ans;

var increasingBST = function(root) {
    var res = new TreeNode(0)
    ans = res
    dfs(root)
    return res.right
};

var dfs = function(node) {
    if (node != null) {
        dfs(node.left)
        ans.right = new TreeNode(node.val)
        ans.left = null
        ans = ans.right
        dfs(node.right)
    }
}
