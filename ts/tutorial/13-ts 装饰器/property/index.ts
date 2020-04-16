function readonly(target: any, key:string): any {
  console.log('readonly', target)
  // 自定义descriptor替代装饰器的descriptor
  const descriptor: PropertyDescriptor = {
    writable: false
  }
  return descriptor
}
function change(target: any, key:string) {
  console.log('change', target)
  // 修改target的值(实际上修改的类的prototype的属性)
  target[key] = 'Miracle He'
}
class Person {
  @change
  name: string = 'Miracle'
  @readonly
  static age: number = 35
}
// 实例化
const p = new Person()
console.log(p.name)
console.log((p as any).__proto__.name)
// p.age = 30 // 不可修改