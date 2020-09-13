/**
 * 给定一个字符串，你需要反转字符串中每个单词的字符顺序，同时仍保留空格和单词的初始顺序。
 *
 * 示例：
 * 输入："Let's take LeetCode contest"
 * 输出："s'teL ekat edoCteeL tsetnoc"
 *
 * 提示：
 * 在字符串中，每个单词由单个空格分隔，并且字符串中不会有任何额外的空格。
 */
export const reverseWordsV1 = (str, sep = ' ') => {
  // 1. 将字符串按sep拆分为数组
  let arr = str.split(sep)
  // 2. 将拆分后数组中的每一项进行反转
  arr = arr.map(item => item.split('').reverse().join(''))
  // 3. 将反转后的数组按sep再次输出
  return arr.join(sep)
}