var isValid = function (s) {
    let stack = [];
    let m = {
        '}': '{',
        ')': '(',
        ']': '['
    }
    for (ch of s) {
        if ('([{'.includes(ch)) {
            stack.push(ch)
        } else if (stack.length == 0 || m[ch] != stack[stack.length - 1]) {
            // console.log(ch, m[ch])
            return false
        } else {
            stack.pop()
        }
    }
    return stack.length == 0;
};

console.log(isValid('()'))