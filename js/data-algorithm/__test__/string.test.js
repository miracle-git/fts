import { reverseWordsV1 } from '../02-字符串算法/01-反转字符串中的单词/src/reverse-words'

test(`测试：反转字符串中的单词`, () => {
  const str = 'Let\'s take LeetCode contest'
  const res = 's\'teL ekat edoCteeL tsetnoc'

  expect(reverseWordsV1(str)).toBe(res)
})
