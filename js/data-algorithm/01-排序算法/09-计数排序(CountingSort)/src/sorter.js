// 私有标记Symbol
const _st_i = Symbol('sorter instance member')

export default class Sorter {
  constructor(items) {
    this.items = items
    // 私有实例成员
    this[_st_i] = {
      swap: (a, b) => {
        if (a === b) return
        const temp = this.items[a]
        this.items[a] = this.items[b]
        this.items[b] = temp
      },
      compare: (a, b, { direction = 'asc', mode = 'index' } = {}) => {
        if (mode.toLowerCase() === 'index') {
          return direction.toLowerCase() === 'asc' ? this.items[a] > this.items[b] : this.items[a] < this.items[b]
        } else {
          return direction.toLowerCase() === 'asc' ? a > b : a < b
        }
      }
    }
  }
  // 计数排序
  countingSort(direction = 'asc') {
    const len = this.items.length
    if (len <= 1) return this.items
    const asc = direction.toLowerCase() === 'asc'
    let max = this.items[0], index = asc ? 0 : len - 1
    // 寻找最大值
    for (let i = 0; i < len; i++) {
      const item = this.items[i]
      if (item > max) {
        max = item
      }
    }
    // 初始化桶
    const bucketCount = max + 1
    const buckets = new Array(bucketCount)
    // 开始计数
    for (let i = 0; i < len; i++) {
      const item = this.items[i]
      if (!buckets[item]) {
        buckets[item] = 0
      }
      buckets[item]++
    }
    // 反向填充
    for (let i = 0; i < bucketCount; i++) {
      while (buckets[i] > 0) {
        const current = asc ? index++ : index--
        this.items[current] = i
        buckets[i]--
      }
    }
    return this.items
  }
}
