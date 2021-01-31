// getter & setter 保护私有属性
class Person {
  // 默认不加修饰符为private
  constructor(private _name: string) {}
  get name() {
    return `${this._name} He`
  }
  set name(name) {
    this._name = name.split(' ')[0]
  }
  // readonly
  public readonly age: number = 35
}
// 实例化
const person = new Person('Miracle')
console.log(person.name) // Miracle He
person.name = 'Jack Li'
console.log(person.name) // Jack He
console.log(person.age) // 35
// person.age = 40 // 只读成员不可修改