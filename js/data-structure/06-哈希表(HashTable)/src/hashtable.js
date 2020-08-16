const ht = Symbol('hashtable')

export default class HashTable {
  constructor(capacity = 7) {
    this.items = []
    this.length = 0
    this.capacity = capacity
  }
  // 静态私有函数
  static [ht] = {
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
      while(!HashTable[ht].isPrime(num)) {
        num++
      }
      return num
    }
  }
  // 向哈希表中填充数据
  put(key, val) {
  }
}
