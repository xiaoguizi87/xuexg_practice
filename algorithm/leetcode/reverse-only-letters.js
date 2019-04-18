/**
 * @param {string} S
 * @return {string}
 */
var isLetters = function(a) {
    if (a >= 'a'.charCodeAt(0) && a <= 'z'.charCodeAt(0)) {
        return true;
    }
    if (a >= 'A'.charCodeAt(0) && a <= 'Z'.charCodeAt(0)) {
        return true;
    }
    return false;
}

var reverseOnlyLetters = function(S) {
    let letters = ''
    let notLettersIndex = new Set()
    for (var i = 0; i < S.length; i++) {
        if (isLetters(S.charCodeAt(i))) {
            letters += S[i]
        } else {
            notLettersIndex.add(i)           
        }
    }
    let rindex = letters.length - 1
    let result = ''
    for (var i = 0; i < S.length; i++) {
        if (notLettersIndex.has(i)) {
            result += S[i]
        } else {
            result += letters[rindex]
            rindex--
        }
    }
    return result
};
