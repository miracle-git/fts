// keyof使用
interface User {
  name: string
  age: number
}

class Person {
  constructor(private user: User) {}
  getUserInfo<T extends keyof User>(key: T): User[T] {
    return this.user[key]
  }
}
// 实例化
const p = new Person({ name: 'Miracle', age: 35 })
console.log(p.getUserInfo('name'))
console.log(p.getUserInfo('age'))