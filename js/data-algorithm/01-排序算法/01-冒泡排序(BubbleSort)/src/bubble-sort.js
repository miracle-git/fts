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
  // 冒泡排序
  bubbleSort(direction = 'asc') {
    const len = this.items.length
    for (let i = len - 1; i >= 0; i--) {
      for (let j = 0; j < i; j++) {
        if (this[_st_i].compare(j, j + 1, { direction })) {
          this[_st_i].swap(j, j + 1)
        }
      }
    }
    return this.items
  }
}
