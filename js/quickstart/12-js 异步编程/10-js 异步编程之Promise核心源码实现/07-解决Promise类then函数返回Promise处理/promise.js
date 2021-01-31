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
          onResolved: value => {
            try {
              const result = onResolved(value)
              if (result instanceof MyPromise) {
                result.then(resolve, reject)
              } else {
                resolve(result)
              }
            } catch (e) {
              reject(e)
            }
          },
          onRejected: value => {
            try {
              const result = onRejected(value)
              if (result instanceof MyPromise) {
                result.then(resolve, reject)
              } else {
                resolve(result)
              }
            } catch (e) {
              reject(e)
            }
          }
        })
      }
      if (this.status === MyPromise.RESOLVED) {
        setTimeout(() => {
          try {
            const result = onResolved(this.value)
            if (result instanceof MyPromise) {
              result.then(resolve, reject)
            } else {
              resolve(result)
            }
          } catch (e) {
            reject(e)
          }
        })
      }
      if (this.status === MyPromise.REJECTED) {
        setTimeout(() => {
          try {
            const result = onRejected(this.value)
            if (result instanceof MyPromise) {
              result.then(resolve, reject)
            } else {
              resolve(result)
            }
          } catch (e) {
            reject(e)
          }
        })
      }
    })
  }
}