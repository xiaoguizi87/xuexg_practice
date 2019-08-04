/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */
/**
 * @param {Node} root
 * @return {number[]}
 */
var preorder = function(root) {
    var preorderHelper = function(root, result) {
        if (root === null) {
            return result
        }
        result.push(root.val)
        for (let ch of root.children) {
            preorderHelper(ch, result)
        }
        return
    }
    var res = []
    preorderHelper(root, res)
    return res
};
