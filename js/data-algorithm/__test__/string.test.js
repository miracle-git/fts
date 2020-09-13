import { reverseWordsV1, reverseWordsV2, reverseWordsV3 } from '../02-字符串算法/01-反转字符串中的单词/src/reverse-words'
import { countBinarySubstrings } from '../02-字符串算法/02-计数二进制子串/src/count-binary-substrings'

test('测试：反转字符串中的单词', () => {
  const str = 'Let\'s take LeetCode contest'
  const res = 's\'teL ekat edoCteeL tsetnoc'

  expect(reverseWordsV1(str)).toBe(res)
  expect(reverseWordsV2(str)).toBe(res)
  expect(reverseWordsV3(str)).toBe(res)
})

test('测试：计数二进制子串', () => {
  expect(countBinarySubstrings('00110011')).toBe(6)
  expect(countBinarySubstrings('10101')).toBe(4)
  expect(countBinarySubstrings('00000')).toBe(0)
})