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
var postorder = function(root) {
    var helper = function(root, res) {
        if (!root) {
            return
        }
        for (let ch of root.children) {
            helper(ch, res)
        }
        res.push(root.val)
    }
    var result = []
    helper(root, result)
    return result
};
