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
  // 归并排序
  mergeSort(direction = 'asc', arr = this.items) {
    const len = arr.length
    if (len < 2) return arr
    const mid = Math.floor(len / 2)
    const left = arr.slice(0, mid)
    const right = arr.slice(mid)
    return this[_st_i].merge(this.mergeSort(direction, left), this.mergeSort(direction, right), direction)
  }
  // 堆排序
  heapSort(direction = 'asc') {
    const len = this.items.length
    return this.items
  }
  // 桶排序
  bucketSort(direction = 'asc') {
    const len = this.items.length
    return this.items
  }
  // 计数排序
  countingSort(direction = 'asc') {
    const len = this.items.length
    return this.items
  }
  // 基数排序
  radixSort(direction = 'asc') {
    const len = this.items.length
    return this.items
  }
}
