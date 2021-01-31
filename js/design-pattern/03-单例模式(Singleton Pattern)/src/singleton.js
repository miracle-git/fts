class SingletonObject {
  constructor(name) {
    this.name = name
  }
  fn1() {
    console.log('run fn1')
  }
  fn2() {
    console.log('run fn2')
  }
}

const Singleton = {
  getInstance: (function () {
    let instance
    return function (name) {
      if (!instance) {
        instance = new SingletonObject(name)
      }
      return instance
    }
  })()
}

export default Singleton