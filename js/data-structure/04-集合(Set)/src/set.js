export default class Set {
  constructor() {
    this.items = {}
  }
  // 向集合中添加一个新的项
  add(item) {
    if (this.has(item)) return false
    this.items[item] = item
    return true
  }
  // 从集合中删除已存在的一项
  remove(item) {
    if (!this.has(item)) return false
    delete this.items[item]
    return true
  }
  // 判断集合中是否包含指定的项
  has(item) {
    return this.items.hasOwnProperty(item)
  }
  // 返回集合中元素的数量
  size() {
    return this.keys().length
  }
  // 返回集合中所有的元素
  keys() {
    return Object.keys(this.items)
  }
  // 返回集合中所有的元素
  values() {
    return Object.values(this.items)
  }
  // 清除集合中所有的项
  clear() {
    this.items = {}
  }
  // 返回集合之间的并集
  union(set) {
    const values = [...this.values(), ...set.values()]
    return values.reduce((res, item) => {
      res.add(item)
      return res
    }, new Set())
  }
  // 返回集合之间的交集
  intersect(set) {
    const values = this.values()
    return values.reduce((res, item) => {
      set.has(item) && res.add(item)
      return res
    }, new Set())
  }
  // 返回集合之间的差集
  diff(set) {
    const values = this.values()
    return values.reduce((res, item) => {
      !set.has(item) && res.add(item)
      return res
    }, new Set())
  }
  // 返回是否为另一个集合的子集
  subset(set) {
    const values = this.values()
    return values.every(item => set.has(item))
  }
}