class MyPromise {
  constructor(executor) {
    this.status = MyPromise.PENDING
    this.value = null
    try {
      executor(this.resolve.bind(this), this.reject.bind(this))
    } catch (e) {
      this.reject(e)
    }
  }

  static PENDING = 'pending'
  static RESOLVED = 'resolved'
  static REJECTED = 'rejected'

  resolve(data) {
    if (this.status === MyPromise.PENDING) {
      console.log(data)
      this.status = MyPromise.RESOLVED
      this.value = data
    }
  }
  reject(error) {
    if (this.status === MyPromise.PENDING) {
      console.log(error)
      this.status = MyPromise.REJECTED
      this.value = error
    }
  }
}