export default class Dictionary {
  constructor() {
    this.items = {}
  }
  // 在字典中添加键值对
  set(key, val) {
    if (this.has(key)) return false
    this.items[key] = val
    return true
  }
  // 删除字典中指定键的元素
  remove(key) {
    if (!this.has(key)) return false
    delete this.items[key]
    return true
  }
  // 返回字典指定键对应的元素
  get(key) {
    return this.has(key) ? this.items[key] : null
  }
  // 返回字典中是否包含指定的键
  has(key) {
    return this.items.hasOwnProperty(key)
  }
  // 返回字典中元素的数量
  size() {
    return this.keys().length
  }
  // 返回字典所有的键
  keys() {
    return Object.keys(this.items)
  }
  // 返回字典所有的值
  values() {
    return Object.values(this.items)
  }
  // 清除字典中所有的项
  clear() {
    this.items = {}
  }
}