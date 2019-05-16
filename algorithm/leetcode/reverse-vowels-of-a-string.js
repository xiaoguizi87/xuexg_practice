/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    let vowel = ['a','e','i','o','u','A','E','I',"O","U"]
    let i = 0;
    let j = s.length - 1;
    // console.log(vowel.includes(s[1]))
    while (i < j) {
        while (vowel.includes(s[i]) == false && i < j) {
            i++
        }
        while (vowel.includes(s[j]) == false && i < j) {
            j--
        }
        if (i == j) {
            break
        }
        // console.log(i, j)
        s = s.substring(0, i) + s[j] + s.substring(i + 1, j) + s[i] + s.substring(j + 1)
        i++
        j--
        // console.log(s[i], s[j])
    }
    return s
};
