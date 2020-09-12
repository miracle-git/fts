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
      heapify: (i, len, direction) => {
        const left = 2 * i + 1, right = 2 * i + 2
        let temp = i
        if (left < len && this[_st_i].compare(left, temp, { direction })) {
          temp = left
        }
        if (right < len && this[_st_i].compare(right, temp, { direction })) {
          temp = right
        }
        if (temp !== i) {
          this[_st_i].swap(temp, i)
          this[_st_i].heapify(temp, len, direction)
        }
      }
    }
  }
  // 堆排序
  heapSort(direction = 'asc') {
    let len = this.items.length
    let mid = Math.floor(len / 2)
    // 建立大顶堆
    for (let i = mid; i >= 0; i--) {
      this[_st_i].heapify(i, len, direction)
    }
    for (let i = len - 1; i > 0; i--) {
      this[_st_i].swap(0, i)
      len--
      this[_st_i].heapify(0, len, direction)
    }
    return this.items
  }
}
