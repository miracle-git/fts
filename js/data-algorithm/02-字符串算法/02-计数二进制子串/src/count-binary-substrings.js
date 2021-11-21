/**
 * 给定一个字符串 s，计算具有相同数量0和1的非空(连续)子字符串的数量，并且这些子字符串中的所有0和所有1都是组合在一起的。
 * 重复出现的子串要计算它们出现的次数。

 * 示例 1 :
 * 输入: "00110011"
 * 输出: 6
 * 解释: 有6个子串具有相同数量的连续1和0：“0011”，“01”，“1100”，“10”，“0011” 和 “01”。

 * 请注意，一些重复出现的子串要计算它们出现的次数。

 * 另外，“00110011”不是有效的子串，因为所有的0（和1）没有组合在一起。
 * 示例 2 :

 * 输入: "10101"
 * 输出: 4
 * 解释: 有4个子串：“10”，“01”，“10”，“01”，它们具有相同数量的连续1和0。
 * 注意：

 * s.length 在1到50,000之间。
 * s 只包含“0”或“1”字符。
 */
const match = (str) => {
  const res = []
  // 2.1 如何检查匹配：将当前的字符串拆分转化为数组，并给0和1分别生成计数器(默认为0)
  const arr = str.split('')
  const counter = { '0': 0, '1': 0 }
  for (let i = 0, len = arr.length; i < len;i++) {
    const item = arr[i]
    // 2.2 循环数组中的每一项，首先加入到匹配结果数组再将对应的计数器加1
    res.push(item)
    counter[item]++
    // 2.3 如果结果数组长度超过2且已包含0和1, 则检查第1位和最后1位是否相等，相等则直接返回空字符串
    const { length } = res
    if (length > 2) {
      if (counter['0'] && counter['1']) {
        if (res[length - 1] === res[0]) return ''
      }
    }
    // 2.4 如果发现0和1和计数器已相等，提前结束循环并返回结果
    if (counter['0'] === counter['1']) return res.join('')
  }
  // 2.5 如果到循环结束，则直接返回空字符串
  return ''
}
/**
 * @params str {string} 检测指定的字符串是否合法
 * @params maxLength {number} 最大长度(默认：50000)
 * @returns 如果是二进制字符串则返回true,否则返回false
 */
const check = (str, maxLength) => {
  // 如果输入的字符串包含0或1之外的字符则直接返回false
  if (!(/^[0-1]+$/g.test(str))) return false
  // 如果输入的字符串全为0或全为1则直接返回false
  if (!/[^0]/.test(str) || !/[^1]/.test(str)) return false
  // 如果输入的字符串超出最大长度则直接返回false
  if (str.length > maxLength) return false
  return true
}
/**
 * @params str {string} 指定需要计数的二进制字符串
 * @params maxLength {number} 最大长度(默认：50000)
 * @returns 返回具有相同数量0和1的非空(连续)子字符串的数量
 */
export const countBinarySubstrings = (str, maxLength = 50000) => {
  // 1. 容错检查：如果输入的字符串不满足条件则直接返回0
  if (!check(str, maxLength)) return 0
  const res = []
  // 2. 每次将字符串向后移动1位作为输入
  for (let i = 0, len = str.length; i < len - 1; i++) {
    // 3. 检查当前子字符串是否存在满足条件的匹配
    const item = match(str.slice(i))
    // 4. 如果存在匹配，则将匹配加入到结果数组
    if (item) {
      res.push(item)
    }
  }
  return res.length
}
