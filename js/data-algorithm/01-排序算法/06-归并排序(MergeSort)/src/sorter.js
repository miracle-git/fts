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
      merge: (left, right, direction) => {
        const res = []
        while (left.length && right.length) {
          if (this[_st_i].compare(left[0], right[0], { direction, mode: 'value' })) {
            res.push(right.shift())
          } else {
            res.push(left.shift())
          }
        }
        while (left.length) {
          res.push(left.shift())
        }
        while (right.length) {
          res.push(right.shift())
        }
        return res
      }
    }
  }
  // 归并排序
  mergeSort(direction = 'asc', arr = this.items) {
    const len = arr.length
    if (len < 2) return arr
    const mid = Math.floor(len / 2)
    const left = arr.slice(0, mid)
    const right = arr.slice(mid)
    return this[_st_i].merge(this.mergeSort(direction, left), this.mergeSort(direction, right), direction)
  }
}
