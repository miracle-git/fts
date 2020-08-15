export default class Stack {
  constructor() {
    this.items = []
  }
  // 添加一个元素到栈顶位置(入栈)
  push(elem) {
    this.items.push(elem)
  }
  // 移除并返回栈顶元素(出栈)
  pop() {
    return this.items.pop()
  }
  // 返回栈顶元素，但不对栈做任何操作(查看栈顶)
  peek() {
    return this.items[this.items.length - 1]
  }
  // 返回栈中包含的元素个数
  size() {
    return this.items.length
  }
  // 返回栈中是否包含元素(空栈)
  isEmpty() {
    return this.items.length === 0
  }
  // 将栈结构以字符串形式返回
  toString() {
    return this.items.reduce((res, elem) => res += res ? ' ' + elem : elem, '')
  }
}