/**
 * @param {string} pattern
 * @param {string} str
 * @return {boolean}
 */
var wordPattern = function(pattern, str) {
    let words = str.split(' ')
    if (words.length !== pattern.length) {
        return false
    }
    let m = new Map()
    let s = new Set()
    for (let i = 0; i < pattern.length; i++) {
        if (m.has(pattern[i])) {
            // console.log(m)
            if (m.get(pattern[i])!== words[i]) {
                return false
            }
        } else {
            m.set(pattern[i], words[i])
        }
        s.add(words[i])
    }
    console.log(s.size, m.size)
    return s.size === m.size
};
