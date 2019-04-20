var compress = function(chars) {
  if (chars.length == 0) {
    return 0
  }
  let cur = 0
  let target = chars[0]
  let times = 1
  for (let j = 1; j < chars.length; j++) {
    if (chars[j] == target) {
      times += 1
    } else {
      chars[cur] = target
      cur += 1
      if (times > 1) {
        let s = '' + times
        for (let ch of s) {
          chars[cur] = ch
          cur += 1
        }
      }
      target = chars[j]
      times = 1
    }
  }
  chars[cur] = target
  cur += 1
  if (times > 1) {
    let s = '' + times
    for (let ch of s) {
      chars[cur] = ch
      cur += 1
    }
  }
  return cur
}

console.log(compress(["a", "a", "b", "b", "c", "c", "c"]))
