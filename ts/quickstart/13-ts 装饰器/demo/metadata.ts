import 'reflect-metadata'
// 获取元数据详情装饰器
function showDetail(target: typeof Person) {
  const $proto = target.prototype
  for (let key in $proto) {
    const meta = Reflect.getMetadata('desc', $proto, key)
    console.log(meta)
  }
}
// 设置元数据装饰器
function setMetaData(metaKey: string, metaVal: string) {
  return function(target: Person, key: string) {
    Reflect.defineMetadata(metaKey, metaVal, target, key)
  }
}
// 类的成员的装饰器优先于类的装饰器优先执行
@Reflect.metadata('author', 'Miracle\'s Design')
@showDetail
class Person {
  @Reflect.metadata('fullName', 'Miracle He')
  @Reflect.metadata('skills', 'Vue|React|TS')
  protected name: string = 'Miracle'
  @Reflect.metadata('desc', 'method: Person.getName')
  getName() {}
  @setMetaData('desc', 'method: Person.getAge')
  getAge() {}
}
class User extends Person {}
// 测试元数据
console.log('******getMetadata******')
console.log(Reflect.getMetadata('author', Person))
console.log(Reflect.getMetadata('author', User))

console.log('******getOwnMetadata******')
console.log(Reflect.getOwnMetadata('author', Person))
console.log(Reflect.getOwnMetadata('author', User))

console.log('******hasMetadata******')
console.log(Reflect.hasMetadata('fullName', Person.prototype, 'name'))
console.log(Reflect.hasOwnMetadata('fullName', User.prototype, 'name'))

console.log('******getMetadataKeys******')
console.log(Reflect.getMetadataKeys(Person.prototype, 'name'))
console.log(Reflect.getOwnMetadataKeys(Person.prototype, 'name'))