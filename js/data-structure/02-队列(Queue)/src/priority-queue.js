// 优先级队列
import Queue from './queue'

class QueueElement {
  constructor(elem, priority) {
    this.elem = elem
    this.priority = priority
  }
}

export default class PriorityQueue extends Queue {
  enqueue(elem, priority) {
    const element = new QueueElement(elem, priority)
    // 如果队列为空，直接入队
    if (this.isEmpty()) {
      super.enqueue(element)
    } else {
      let inserted = false
      // 依次比较队列中其他元素的优先级
      for (let i = 0; i < this.items.length; i++) {
        if (element.priority < this.items[i].priority) {
          this.items.splice(i, 0, element)
          inserted = true
          break
        }
      }
      // 如果优先级比当前元素优先级都大，则直接插入对尾
      if (!inserted) {
        super.enqueue(element)
      }
    }
  }

  toString() {
    const val = item => item.elem + '-' + item.priority
    return this.items.reduce((res, elem) => res += res ? ' ' + val(elem) : val(elem), '')
  }
}