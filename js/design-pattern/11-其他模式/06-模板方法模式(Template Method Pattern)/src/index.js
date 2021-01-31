// webpack-dev-server
class Action {
  handle() {
    this.handle1()
    this.handle2()
    this.handle3()
  }
  handle1() {
    console.log('handle1')
  }
  handle2() {
    console.log('handle2')
  }
  handle3() {
    console.log('handle3')
  }
}

const action = new Action()
action.handle()