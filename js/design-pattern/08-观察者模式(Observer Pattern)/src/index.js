// webpack-dev-server
class Observer {
  constructor(name, subject) {
    this.name = name
    this.subject = subject
    this.subject.attach(this)
  }
  update() {
    console.log(`${this.name} update, state: ${this.subject.getState()}`)
  }
}

class Subject {
  constructor() {
    this.observers = []
    this.state = '0'
  }
  getState() {
    return this.state
  }
  setState(state) {
    this.state = state
    this.notifyAll()
  }
  attach(observer) {
    this.observers.push(observer)
  }
  notifyAll() {
    this.observers.forEach(item => item.update())
  }
}

// 测试
const subject = new Subject()
const o1 = new Observer('o1', subject)
const o2 = new Observer('o2', subject)
const o3 = new Observer('o3', subject)
subject.setState('1')
subject.setState('2')
subject.setState('3')