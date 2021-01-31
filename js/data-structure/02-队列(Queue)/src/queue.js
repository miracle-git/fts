export default class Queue {
  constructor() {
    this.items = []
  }
  // 添加一个元素到队尾位置(入队)
  enqueue(elem) {
    this.items.push(elem)
  }
  // 移除并返回队头元素(出队)
  dequeue() {
    return this.items.shift()
  }
  // 返回队头元素，但不做任何操作(查看队头)
  front() {
    return this.items[0]
  }
  // 返回队列中包含的元素个数
  size() {
    return this.items.length
  }
  // 返回队列中是否包含元素(空队列)
  isEmpty() {
    return this.items.length === 0
  }
  // 将队列结构以字符串形式返回
  toString() {
    return this.items.reduce((res, elem) => res += res ? ' ' + elem : elem, '')
  }
}