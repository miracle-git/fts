// webpack-dev-server
class Context {
  constructor(name) {
    this.name = name
    this.nextAction = null
  }
  setNextAction(action) {
    this.nextAction = action
  }
  handle() {
    console.log(`${this.name} 审批`)
    if (this.nextAction != null) {
      this.nextAction.handle()
    }
  }
}

const leader = new Context('leader')
const manager = new Context('manager')
const director = new Context('director')
leader.setNextAction(manager)
manager.setNextAction(director)
leader.handle()