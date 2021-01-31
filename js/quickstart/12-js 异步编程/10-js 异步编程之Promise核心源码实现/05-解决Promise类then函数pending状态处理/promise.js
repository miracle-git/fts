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
      onResolved = () => {}
    }
    if (typeof onRejected !== 'function') {
      onRejected = () => {}
    }
    if (this.status === MyPromise.PENDING) {
      this.callbacks.push({
        onResolved: value => {
          try {
            onResolved(value)
          } catch (e) {
            onRejected(e)
          }
        },
        onRejected: value => {
          try {
            onResolved(value)
          } catch (e) {
            onRejected(e)
          }
        }
      })
    }
    if (this.status === MyPromise.RESOLVED) {
      setTimeout(() => {
        try {
          onResolved(this.value)
        } catch (e) {
          onRejected(e)
        }
      })
    }
    if (this.status === MyPromise.REJECTED) {
      setTimeout(() => {
        try {
          onRejected(this.value)
        } catch (e) {
          onRejected(e)
        }
      })
    }
  }
}