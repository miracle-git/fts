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
      },
      partition: (left, right, direction) => {
        let pivot = left, index = pivot + 1
        for (let i = index; i <= right; i++) {
          if (this[_st_i].compare(pivot, i, { direction })) {
            this[_st_i].swap(i, index)
            index++
          }
        }
        this[_st_i].swap(pivot, index - 1)
        return index - 1
      }
    }
  }
  // 快速排序
  quickSort(direction = 'asc', left, right) {
    const len = this.items.length
    left = typeof left !== 'number' ? 0 : left
    right = typeof right !== 'number' ? len - 1 : right
    if (left < right) {
      const index = this[_st_i].partition(left, right, direction)
      this.quickSort(direction, left, index - 1)
      this.quickSort(direction, index + 1, right)
    }
    return this.items
  }
}
