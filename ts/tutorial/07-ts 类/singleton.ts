// 单例模式
class Person {
  private static _instance: Person
  private constructor(private name: string) {} // 私有构造器
  static getInstance(name: string) { // 默认public
    if (this._instance === null) {
      this._instance = new Person(name)
    }
    return this._instance
  }
}
// 实例化
const p1 = Person.getInstance('Miracle')
const p2 = Person.getInstance('Miracle')
const p3 = Person.getInstance('Jack')
console.log(p1 === p2) // true
console.log(p2 === p3) // true