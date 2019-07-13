/**
 * @param {string} name
 * @param {string} typed
 * @return {boolean}
 */
var isLongPressedName = function(name, typed) {
    if (name[0] !== typed[0] || name[name.length-1] !== typed[typed.length - 1]) {
        return false
    }
    let [i, j] = [0, 0]
    while (i < name.length && j < typed.length) {
        if (name[i] === typed[j]) {
            i++
            j++
        } else if (name[i-1] === typed[j]) {
            i--
        } else {
            return false
        }
    }
    return true
};
