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
  // 基数排序
  radixSort(direction = 'asc') {
    const len = this.items.length
    if (len <= 1) return this.items
    let max = this.items[0], digit = 0
    // 寻找最大值
    for (let i = 0; i < len; i++) {
      const item = this.items[i]
      if (item > max) {
        max = item
      }
    }
    // 获取最大值的位数
    digit = max.toString().length
    let buckets = [], div = 1, mod = 10
    for (let i = 0; i < digit; i++, div *= 10, mod *= 10) {
      // 初始化桶
      for (let j = 0; j < len; j++) {
        const item = this.items[j]
        const index = parseInt((item % mod) / div)
        if(buckets[index] == null) {
          buckets[index] = []
        }
        buckets[index].push(item)
      }
      if (direction.toLowerCase() === 'asc') {
        for (let j = 0, pos = 0; j < buckets.length; j++) {
          const item = buckets[j]
          if (item == null) continue
          let val
          while (!!(val = item.shift())) {
            this.items[pos++] = val
          }
        }
      } else {
        for (let j = 0, pos = len - 1; j < buckets.length; j++) {
          const item = buckets[j]
          if (item == null) continue
          let val
          while (!!(val = item.pop())) {
            this.items[pos--] = val
          }
        }
      }
    }
    return this.items
  }
}
