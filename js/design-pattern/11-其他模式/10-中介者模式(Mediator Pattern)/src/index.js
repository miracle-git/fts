// webpack-dev-server
class A {
  constructor() {
    this.number = 0
  }
  setNumber(number, mediator) {
    this.number = number
    if (mediator) {
      mediator.setB()
    }
  }
}

class B {
  constructor() {
    this.number = 0
  }
  setNumber(number, mediator) {
    this.number = number
    if (mediator) {
      mediator.setA()
    }
  }
}

class Mediator {
  constructor(a, b) {
    this.a = a
    this.b = b
  }
  setA() {
    const number = this.b.number
    this.a.setNumber(number / 100)
  }
  setB() {
    const number = this.a.number
    this.b.setNumber(number * 100)
  }
}

const a = new A()
const b = new B()
const mediator = new Mediator(a, b)
a.setNumber(100, mediator)
console.log(a.number, b.number)
b.setNumber(100, mediator)
console.log(a.number, b.number)
