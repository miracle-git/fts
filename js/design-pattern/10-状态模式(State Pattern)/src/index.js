// webpack-dev-server
class Context {
  constructor() {
    this.state = ''
  }
  getState() {
    return this.state
  }
  setState(state) {
    this.state = state
  }
}

class State {
  constructor(color) {
    this.color = color
  }
  handle(context) {
    console.log(`信号灯变为：${this.color}灯`)
    context.setState(this)
  }
}

const context = new Context()

const green = new State('绿')
green.handle(context)
console.log(context.getState())

const yellow = new State('黄')
yellow.handle(context)
console.log(context.getState())

const red = new State('红')
red.handle(context)
console.log(context.getState())
