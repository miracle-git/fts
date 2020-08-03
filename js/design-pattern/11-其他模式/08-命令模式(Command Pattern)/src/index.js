// webpack-dev-server
class Receiver {
  exec() {
    console.log('执行')
  }
}

class Commander {
  constructor(receiver) {
    this.receiver = receiver
  }
  command() {
    console.log('执行命令')
    this.receiver.exec()
  }
}

class Invoker {
  constructor(commander) {
    this.commander = commander
  }
  invoke() {
    console.log('发起')
    this.commander.command()
  }
}

const soldier = new Receiver()
const trumpeter = new Commander(soldier)
const general = new Invoker(trumpeter)
general.invoke()
