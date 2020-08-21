const hts = Symbol('hashtable static members')
const hti = Symbol('hashtable instance members')

export default class HashTable {
  constructor(capacity = 7) {
    // 哈希表数据(哈希桶)的存储集合
    this.items = []
    // 哈希表实际的数据项长度
    this.length = 0
    // 哈希表的总容量
    this.capacity = HashTable[hts].getPrime(capacity)
    // 私有示例成员
    this[hti] = {
      // 获取哈希桶
      getBucket: (key, init = false)  => {
        // 获取下标
        const index = HashTable[hts].getHashCode(key, this.capacity)
        // 获取哈希桶
        let bucket = this.items[index]
        // 如果哈希桶不存在则新创建
        if (init) {
          if (!bucket) {
            bucket = []
            this.items[index] = bucket
          }
        }
        return bucket || null
      }
    }
  }
  // 静态私有成员
  static [hts] = {
    // 判断当前数字是否为质数
    isPrime(num) {
      const res = parseInt(Math.sqrt(num))
      for (let i = 2; i <= res; i++) {
        if (num % i === 0) return false
      }
      return true
    },
    // 获取离当前数字最近的质数
    getPrime(num) {
      while(!HashTable[hts].isPrime(num)) {
        num++
      }
      return num
    },
    // 哈希函数：获取HashCode
    getHashCode(str, len) {
      let hashCode = 0
      // 根据霍纳法则生成
      for (let i = 0; i < str.length; i++) {
        hashCode = 37 * hashCode + str.charCodeAt(i)
      }
      // 取模
      hashCode = hashCode % len
      return hashCode
    }
  }
  // 对哈希表进行扩容(缩容)
  resize(capacity) {
    // 保存哈希表的存储空间
    const items = this.items
    // 重置存储空间
    this.items = []
    this.length = 0
    this.capacity = HashTable[hts].getPrime(capacity)
    // 遍历所有的哈希桶
    for (let i = 0; i < items.length; i++) {
      const bucket = items[i]
      if (bucket) {
        // 取出哈希桶中所有的数据并重新插入到新的存储空间中
        for (let j = 0; j < bucket.length; j++) {
          const tuple = bucket[j]
          this.put(tuple[0], tuple[1])
        }
      }
    }
  }
  // 向哈希表中填充或更新数据
  put(key, val) {
    // 获取哈希桶
    const bucket = this[hti].getBucket(key, true)
    // 判断是否是修改数据
    for (let i = 0; i < bucket.length; i++) {
      const tuple = bucket[i]
      if (tuple[0] === key) {
        tuple[1] = val
        return
      }
    }
    // 新增数据
    bucket.push([key, val])
    // 长度加1
    this.length++
    // 判断是否需要扩容
    if (this.length > this.capacity * .75) {
      this.resize(this.capacity * 2)
    }
  }
  // 根据key删除对应的数据
  remove(key) {
    // 获取哈希桶
    let bucket = this[hti].getBucket(key)
    if (!bucket) return null
    // 如果在哈希桶中存在对应的key则删除
    for (let i = 0; i < bucket.length; i++) {
      const tuple = bucket[i]
      if (tuple[0] === key) {
        bucket.splice(i, 1)
        // 长度减1
        this.length--
        // 判断是否需要缩容
        if (this.capacity > 7 && this.length < this.capacity * .25) {
          this.resize(Math.floor(this.capacity / 2))
        }
        return tuple[1]
      }
    }
    // 未找到则返回null
    return null
  }
  // 根据key获取对应的数据
  get(key) {
    // 获取哈希桶
    let bucket = this[hti].getBucket(key)
    if (!bucket) return null
    // 如果在哈希桶中存在对应的key则返回
    for (let i = 0; i < bucket.length; i++) {
      const tuple = bucket[i]
      if (tuple[0] === key) {
        return tuple[1]
      }
    }
    // 未找到则返回null
    return null
  }
  // 获取哈希表的数据项数量
  size() {
    return this.length
  }
  // 返回哈希表是否为空
  isEmpty() {
    return this.length === 0
  }
}
