/**
 * @param {string} S
 * @return {string}
 */
var removeDuplicates = function(S) {
    let stack = []
    for (let ch of S) {
        if (stack.length == 0) {
            stack.push(ch)
        } else if (stack[stack.length-1] == ch) {
            stack.pop()
        } else {
            stack.push(ch)
        }
    }
    return stack.join('')
};
