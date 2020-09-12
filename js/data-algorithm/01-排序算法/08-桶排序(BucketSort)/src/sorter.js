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
  // 桶排序
  bucketSort(direction= 'asc', bucketSize= 5) {
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
}
