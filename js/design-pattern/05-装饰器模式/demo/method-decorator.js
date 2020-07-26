function readonly(target, name, descriptor) {
  descriptor.writable = false
  return descriptor
}

function log(target, name, descriptor) {
  const func = descriptor.value
  descriptor.value = function () {
    console.log(`调用：${name}，参数：${[...arguments].slice().join(',')}`)
    return func.apply(this, arguments)
  }
}

export class User {
  constructor(firstName, lastName) {
    this.firstName = firstName
    this.lastName = lastName
  }
  @readonly
  fullName() {
    return `${this.firstName} ${this.lastName}`
  }
}

export class Math {
  @log
  static add(a, b) {
    return a + b
  }
}