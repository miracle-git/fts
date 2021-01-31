// 对于实例方法，装饰器的target为类的prototype, 对于静态方法，装饰器的target为类的构造器
function change(target: any, key: string, descriptor: PropertyDescriptor) {
  // console.log(target)
  descriptor.value = () => 'Jack'
  descriptor.writable = false
}
class Person {
  constructor(private name: string) {}
  @change
  getName() {
    return this.name
  }
}
// 实例化
const p = new Person('Miracle')
// p.getName = () => 'Jack'
console.log(p.getName())