// 私有标记Symbol
const _st_i = Symbol('sorter instance member')

export default class Sorter {
  constructor(items) {
    this.items = items
    // 私有实例成员
    this[_st_i] = {
      swap: (a, b) => {
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
  // 插入排序
  insertionSort(direction = 'asc') {
    const len = this.items.length
    for (let i = 1; i < len; i++) {
      let temp = this.items[i], j = i
      while (this[_st_i].compare(this.items[j - 1], temp, { direction, mode: 'value' }) && j > 0) {
        this.items[j] = this.items[j - 1]
        j--
      }
      this.items[j] = temp
    }
    return this.items
  }
}
