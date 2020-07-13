class MyPromise {
  constructor(executor) {
    this.status = MyPromise.PENDING
    this.value = null
    executor(this.resolve.bind(this), this.reject.bind(this))
  }

  static PENDING = 'pending'
  static RESOLVED = 'resolved'
  static REJECTED = 'rejected'

  resolve(data) {
    console.log(data)
    this.status = MyPromise.RESOLVED
    this.value = data
  }
  reject(error) {
    console.log(error)
    this.status = MyPromise.REJECTED
    this.value = error
  }
}