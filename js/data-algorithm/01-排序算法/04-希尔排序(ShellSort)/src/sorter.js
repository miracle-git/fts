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
  // 希尔排序
  shellSort(direction = 'asc') {
    const len = this.items.length
    let delta = Math.floor(len / 2)
    while (delta >= 1) {
      for (let i = delta; i < len; i++) {
        let temp = this.items[i], j = i
        while (this[_st_i].compare(this.items[j - delta], temp, { direction, mode: 'value' }) && j > delta - 1) {
          this.items[j] = this.items[j - delta]
          j -= delta
        }
        this.items[j] = temp
      }
      delta = Math.floor(delta / 2)
    }
    return this.items
  }
}
