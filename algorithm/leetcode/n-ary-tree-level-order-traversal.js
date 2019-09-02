/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */
/**
 * @param {Node} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
    let L = []
    helper(root, 0, L)
    return L
};

var helper = function(root, depth, L) {
    if (root === null) {
        return
    }
    if (L.length === depth) {
        L.push([])
    }
    L[depth].push(root.val)
    for (let ch of root.children) {
        helper(ch, depth + 1, L)
    }
}
