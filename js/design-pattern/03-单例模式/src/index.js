import Singleton from './singleton'

const user1 = Singleton.getInstance('miracle')
const user2 = Singleton.getInstance('jack')
console.log(user1 === user2)
console.log(user1.name, user2.name)
user1.fn1()
user2.fn2()