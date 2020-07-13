class MyPromise {
  constructor(executor) {
    this.status = MyPromise.PENDING
    this.value = null
    this.callbacks = []
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
      this.status = MyPromise.RESOLVED
      this.value = data
      setTimeout(() => this.callbacks.map(item => item.onResolved(data)))
    }
  }
  reject(error) {
    if (this.status === MyPromise.PENDING) {
      this.status = MyPromise.REJECTED
      this.value = error
      setTimeout(() => this.callbacks.map(item => item.onRejected(error)))
    }
  }
  then(onResolved, onRejected) {
    if (typeof onResolved !== 'function') {
      onResolved = () => this.value
    }
    if (typeof onRejected !== 'function') {
      onRejected = () => this.value
    }
    return new MyPromise((resolve, reject) => {
      if (this.status === MyPromise.PENDING) {
        this.callbacks.push({
          onResolved: value => MyPromise.parse(onResolved(value), resolve, reject),
          onRejected: value => MyPromise.parse(onRejected(value), resolve, reject)
        })
      }
      if (this.status === MyPromise.RESOLVED) {
        setTimeout(() => MyPromise.parse(onResolved(this.value), resolve, reject))
      }
      if (this.status === MyPromise.REJECTED) {
        setTimeout(() => MyPromise.parse(onRejected(this.value), resolve, reject))
      }
    })
  }
  static parse(result, resolve, reject) {
    try {
      if (result instanceof MyPromise) {
        result.then(resolve, reject)
      } else {
        resolve(result)
      }
    } catch (e) {
      reject(e)
    }
  }
  static resolve(value) {
    return new MyPromise((resolve, reject) => MyPromise.parse(value, resolve, reject))
  }
  static reject(value) {
    return new MyPromise((resolve, reject) => reject(value))
  }
  static all(promises) {
    return new MyPromise((resolve, reject) => {
      const values = []
      promises.forEach(item => {
        item.then(res => {
          values.push(res)
          if (values.length === promises.length) {
            resolve(values)
          }
        }, err => reject(err))
      })
    })
  }
  static race(promises) {
    return new MyPromise((resolve, reject) => {
      promises.forEach(item => {
        item.then(res => resolve(res), err => reject(err))
      })
    })
  }
}