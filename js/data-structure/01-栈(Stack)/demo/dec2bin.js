// 将十进制转换为二进制
import Stack from '@/stack'

export default function dec2bin(num) {
  const stack = new Stack()
  while (num > 0) {
    // 获取余数并添加到栈中
    stack.push(num % 2)
    // 获取整除后结果，作为下一次运算的数字
    num = Math.floor(num / 2)
  }
  // 从栈中依次弹出
  let res = ''
  while (!stack.isEmpty()) {
    res += stack.pop()
  }
  return res
}