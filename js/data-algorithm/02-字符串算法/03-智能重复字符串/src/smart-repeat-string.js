/**
 * 试编写“智能重复”smartRepeatString函数，实现:
 * 将3[abc]变为abcabcabc
 * 将3[2[a]2[b]]变为aabbaabbaabb
 * 将2[1[a]3[b]2[3[c]4[d]]]变为abbbcccddddcccddddabbbcccddddcccdddd
 不用考虑输入字符串是非法的情况，比如:
 * 2[a3[b]]是错误的，应该补一个1，即2[1[a]3[b]]
 * [abc]是错误的，应该补一个1，即1[abc]
 */
export const smartRepeatStringV1 = (str) => {
  let res = ''
  return (function replace(str) {
    if (!str.includes('[') && !str.includes(']')) {
      return res
    }
    res = str.replace(/(\d+)\[(\w+)]/g, (_, $1, $2) => $2.repeat($1))
    return replace(res)
  })(str)
}
export const smartRepeatStringV2 = (str) => {
  // 定义指针index, 当前匹配项，返回结果
  let index = 0, current = '', res = ''
  // 定义两个空栈(分别存放数字和字符)
  const numberStack = [], charStack = []
  // 定义匹配正则表达式
  const regExp = { number: /^(\d+)\[/, char: /^(\w+)]/ }
  while (index < str.length) {
    // 获取字符串的剩余部分
    current = str.substring(index)
    if (regExp.number.test(current)) {
      // 如果匹配的字符是以数字开头和[结尾
      const match = current.match(regExp.number)[1]
      // 将获取的数字部分压到数字栈numberStack, 同时将空串压到字符栈charStack
      numberStack.push(match >> 0)
      charStack.push('')
      // 同时指针向前移动指定数字的步进
      index += match.length + 1
    } else if (regExp.char.test(current)) {
      // 如果匹配的字符是以字符开头和]结尾
      const match = current.match(regExp.char)[1]
      // 将获取的字符部分更新到字符栈的栈顶元素
      charStack[charStack.length - 1] = match
      // 同时指针向前移动指定数字的步进
      index += match.length
    } else if (current[0] === ']') {
      // 如果匹配的字符是], 将数字栈和字符串分别弹栈
      const num = numberStack.pop()
      const char = charStack.pop()
      const repeat = char.repeat(num)
      // 当数字栈和字符栈都变成空栈时，此时可保存结果
      if (!numberStack.length && !charStack.length) {
        res = repeat
      } else {
        // 并将当前字符char重复num次追加更新到字符串的新栈顶元素
        charStack[charStack.length - 1] += repeat
      }
      // 同时指针向前移动
      index++
    }
  }
  return res
}