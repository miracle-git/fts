class Node {
  constructor(data) {
    this.data = data
    this.next = null
  }
}

export default class LinkedList {
  constructor() {
    this.head = null
    this.length = 0
  }
  // 向链表尾部追加一个元素
  append(data) {
    const node = new Node(data)
    // 判断是否为空链表
    if (this.isEmpty()) {
      // 将头节点指向当前节点
      this.head = node
    } else {
      // 寻找尾节点(从头开始)
      let current = this.head
      while (current.next) {
        current = current.next
      }
      // 将尾节点指向当前节点
      current.next = node
    }
    // 将长度加1
    this.length++
  }
  // 向链表的指定位置插入一个元素
  insert(pos, data) {
    // 对pos进行越界判断
    if (pos < 0 || pos > this.length) return false
    const node = new Node(data)
    // 判断插入的位置是否为第一个节点
    if (pos === 0) {
      node.next = this.head
      this.head = node
    } else {
      // 从头开始找到指定位置pos的节点
      let index = 0
      let prev = null
      let current = this.head
      while (index++ < pos) {
        prev = current
        current = current.next
      }
      node.next = current
      prev.next = node
    }
    // 将长度加1
    this.length++
    return true
  }
  // 获取链表指定位置的元素
  get(pos) {
    // 对pos进行越界判断
    if (pos < 0 || pos >= this.length) return null
    // 从头开始找到指定位置pos的节点
    let index = 0
    let current = this.head
    while (index++ < pos) {
      current = current.next
    }
    return current.data
  }
  // 返回指定元素在链表中的索引
  indexOf(data) {
    // 从头开始找到指定位置pos的节点
    let index = 0
    let current = this.head
    while (current) {
      if (current.data === data) return index
      current = current.next
      index++
    }
    // 找到最后都未找到返回-1
    return -1
  }
  // 更新指定位置的元素
  update(pos, data) {
    // 对pos进行越界判断
    if (pos < 0 || pos >= this.length) return false
    // 从头开始找到指定位置pos的节点
    let index = 0
    let current = this.head
    while (index++ < pos) {
      current = current.next
    }
    current.data = data
    return true
  }
  // 删除指定位置的元素
  removeAt(pos) {
    // 对pos进行越界判断
    if (pos < 0 || pos >= this.length) return null
    // 判断删除的位置是否为第一个节点
    let res = null
    if (pos === 0) {
      this.head = this.head.next
    } else {
      // 从头开始找到指定位置pos的节点
      let index = 0
      let prev = null
      let current = this.head
      while (index++ < pos) {
        prev = current
        current = current.next
      }
      // 将当前节点的上一个节点指向下一个节点
      prev.next = current.next
      res = current.data
    }
    // 将长度减1
    this.length--
    return res
  }
  // 删除指定元素
  remove(data) {
    // 获取data在链表中的索引
    const pos = this.indexOf(data)
    return this.removeAt(pos)
  }
  // 返回链表中包含的元素个数
  size() {
    return this.length
  }
  // 返回链表中是否包含元素(空链表)
  isEmpty() {
    return this.length === 0
  }
  // 将链表结构以字符串形式返回
  toString() {
    let res = ''
    let current = this.head
    while (current) {
      res += res ? '->' + current.data : current.data
      current = current.next
    }
    return res
  }
}