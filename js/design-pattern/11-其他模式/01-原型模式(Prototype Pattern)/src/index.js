// webpack-dev-server
const prototype = {
  getName() {
    return `${this.firstName} ${this.lastName}`
  },
  show() {
    console.log(`hello, ${this.getName()}`)
  }
}

const user1 = Object.create(prototype)
user1.firstName = 'Miracle'
user1.lastName = 'He'
console.log(user1.getName())
user1.show()

const user2 = Object.create(prototype)
user2.firstName = 'Jack'
user2.lastName = 'Li'
console.log(user2.getName())
user2.show()
