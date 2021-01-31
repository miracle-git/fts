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
  // 插入排序
  insertionSort(direction = 'asc', arr = this.items) {
    const len = arr.length
    for (let i = 1; i < len; i++) {
      let temp = arr[i], j = i
      while (this[_st_i].compare(arr[j - 1], temp, { direction, mode: 'value' }) && j > 0) {
        arr[j] = arr[j - 1]
        j--
      }
      arr[j] = temp
    }
    return arr
  }
}
