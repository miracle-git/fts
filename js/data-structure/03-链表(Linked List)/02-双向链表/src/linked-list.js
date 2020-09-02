class Node {
  constructor(data) {
    this.data = data
    this.prev = null
    this.next = null
  }
}

export default class LinkedList {
  constructor() {
    this.head = null
    this.tail = null
    this.length = 0
  }
  // 向链表尾部追加一个元素
  append(data) {
    const node = new Node(data)
    // 判断是否为空链表
    if (this.isEmpty()) {
      // 将头尾节点指向当前节点
      this.head = node
      this.tail = node
    } else {
      this.tail.next = node
      node.prev = this.tail
      this.tail = node
    }
    // 将长度加1
    this.length++
  }
  // 向链表的指定位置插入一个元素
  insert(pos, data) {
    // 对pos进行越界判断
    if (pos < 0 || pos > this.length) return false
    const node = new Node(data)
    // 判断是否是第一次插入
    if (this.isEmpty()) {
      this.head = node
      this.tail = node
    } else {
      if (pos === 0) {
        // 判断插入的位置是否为第一个节点
        this.head.prev = node
        node.next = this.head
        this.head = node
      } else if (pos === this.length) {
        // 判断插入的位置是否为最后一个节点
        this.tail.next = node
        node.prev = this.tail
        this.tail = node
      } else {
        // 判断插入的位置是否为中间位置节点
        let index = 0
        let current = this.head
        while (index++ < pos) {
          current = current.next
        }
        // 修改指针
        node.next = current
        node.prev = current.prev
        current.prev.next = node
        current.prev = node
      }
    }
    // 将长度加1
    this.length++
    return true
  }
  // 获取链表指定位置的元素
  get(pos) {
    // 对pos进行越界判断
    if (pos < 0 || pos >= this.length) return null
    const current = this.search(pos)
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
    const current = this.search(pos)
    current.data = data
    return true
  }
  // 删除指定位置的元素
  removeAt(pos) {
    // 对pos进行越界判断
    if (pos < 0 || pos >= this.length) return null
    let res = this.head.data
    // 判断链表只有一个节点
    if (this.length === 1) {
      this.head = null
      this.tail = null
    } else {
      if (pos === 0) {
        // 判断删除的位置是否为第一个节点
        this.head.next.prev = null
        this.head = this.head.next
      } else if (pos === this.length - 1) {
        res = this.tail.data
        // 判断删除的位置是否为最后一个节点
        this.tail.prev.next = null
        this.tail = this.tail.prev
      } else {
        // 判断删除的位置是否为中间位置节点
        let index = 0
        let current = this.head
        while (index++ < pos) {
          current = current.next
        }
        res = current.data
        current.prev.next = current.next
        current.next.prev = current.prev
      }
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
  search(pos) {
    // 获取pos是否在前半部分还是后半部分
    const mid = this.length / 2
    let index, current
    if (pos <= mid) {
      // 从头开始找到指定位置pos的节点
      index = 0
      current = this.head
      while (index++ < pos) {
        current = current.next
      }
    } else {
      // 从尾开始找到指定位置pos的节点
      index = this.length - 1
      current = this.tail
      while (index-- > pos) {
        current = current.prev
      }
    }
    return current
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
  toString(direction = 'backward') {
    return direction === 'backward' ? this.toBackwardString() : this.toForwardString()
  }
  // 将链表结构正向遍历以字符串形式返回
  toForwardString() {
    let res = ''
    let current = this.tail
    while (current) {
      res += res ? '<-' + current.data : current.data
      current = current.prev
    }
    return res
  }
  // 将链表结构反向遍历以字符串形式返回
  toBackwardString() {
    let res = ''
    let current = this.head
    while (current) {
      res += res ? '->' + current.data : current.data
      current = current.next
    }
    return res
  }
}
