const { EventEmitter } = require('events')

const emitter = new EventEmitter()
emitter.on('some', function (data) {
  console.log('fn1', data)
})
emitter.on('some', function (data) {
  console.log('fn2', data)
})

// 继承
class Dog extends EventEmitter {
  constructor(name) {
    super()
    this.name = name
    this.on('bark', function () {
      console.log(`${this.name} barked`)
    })
  }
}

export { emitter, Dog }