function readonly(target: any, key:string, descriptor: PropertyDescriptor) {
  descriptor.writable = true
}
class Person {
  private _name: string
  constructor(name: string) {
    this._name = name
  }
  get name() {
    return this._name
  }
  // @readonly
  set name(name: string) {
    this._name = name
  }
}
// 实例化
const p = new Person('Miracle')
// p.name = 'Miracle He' // 不可修改
console.log(p.name)