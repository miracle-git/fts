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
  // 桶排序
  bucketSort(direction = 'asc', bucketSize = 5) {
    const len = this.items.length
    if (len <= 1) return this.items
    // 寻找最大值和最小值
    let min = this.items[0], max = this.items[0]
    for (let i = 1; i < len; i++) {
      const item = this.items[i]
      if (item < min) {
        min = item
      } else if (item > max) {
        max = item
      }
    }
    // 初始化桶
    const bucketCount = Math.floor((max - min) / bucketSize) + 1
    const buckets = new Array(bucketCount)
    for (let i = 0; i < bucketCount; i++) {
      buckets[i] = []
    }
    // 利用映射函数将数据分配到各个桶中
    for (let i = 0; i < len; i++) {
      const item = this.items[i]
      const delta = direction.toLowerCase() === 'asc' ? item - min : max - item
      const index = Math.floor(delta / bucketSize)
      buckets[index].push(item)
    }
    // 清空数组
    this.items = []
    // 对每个桶进行插入排序
    for (let i = 0; i < bucketCount; i++) {
      const bucket = buckets[i]
      this.insertionSort(direction, bucket)
      for (let j = 0; j < bucket.length; j++) {
        this.items.push(bucket[j])
      }
    }
    return this.items
  }
  // 计数排序
  countingSort(direction = 'asc') {
    const len = this.items.length
    if (len <= 1) return this.items
    const asc = direction.toLowerCase() === 'asc'
    let max = this.items[0], index = asc ? 0 : len - 1
    // 寻找最大值
    for (let i = 0; i < len; i++) {
      const item = this.items[i]
      if (item > max) {
        max = item
      }
    }
    // 初始化桶
    const bucketCount = max + 1
    const buckets = new Array(bucketCount)
    // 开始计数
    for (let i = 0; i < len; i++) {
      const item = this.items[i]
      if (!buckets[item]) {
        buckets[item] = 0
      }
      buckets[item]++
    }
    // 反向填充
    for (let i = 0; i < bucketCount; i++) {
      while (buckets[i] > 0) {
        const current = asc ? index++ : index--
        this.items[current] = i
        buckets[i]--
      }
    }
    return this.items
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
