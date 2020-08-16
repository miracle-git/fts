const ht = Symbol('hashtable')

export default class HashTable {
  constructor(capacity = 7) {
    this.items = []
    this.length = 0
    this.capacity = capacity
  }

  static [ht] = {
    isPrime(num) {
      const res = parseInt(Math.sqrt(num))
      for (let i = 2; i <= res; i++) {
        if (num % i === 0) return false
      }
      return true
    },
    getPrime(num) {
      while(!HashTable[ht].isPrime(num)) {
        num++
      }
      return num
    }
  }

  put(key, val) {
    const res = HashTable[ht].isPrime(35)
    console.log(res)
    console.log(HashTable[ht].getPrime(32))
  }
}
