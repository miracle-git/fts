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
  // 选择排序
  selectionSort(direction = 'asc') {
    const len = this.items.length
    for (let i = 0; i < len - 1; i++) {
      let index = i
      for (let j = index + 1; j < len; j++) {
        if (this[_st_i].compare(index, j, { direction })) {
          index = j
        }
      }
      this[_st_i].swap(i, index)
    }
    return this.items
  }
}
