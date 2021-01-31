// 装饰器
function user(constructor: any) {
  constructor.prototype.getName = () => 'Miracle'
  console.log('user decorator')
}
function detail(constructor: any) {
  constructor.prototype.getInfo = () => 'Miracle is 35 years old'
  console.log('detail decorator')
}
// 多个装饰器
@user
@detail
class Person {}
// 实例化
const p = new Person()
console.log((p as any).getName())
console.log((p as any).getInfo())