function catchError(message: string) {
  return function (target: any, key: string, descriptor: PropertyDescriptor) {
    const fn = descriptor.value
    try {
      fn()
    } catch (e) {
      console.error(message)
    }
  }
}
class Person {
  private _user: any = {}
  @catchError('用户名不存在！')
  getName() {
    return this._user.name
  }
  @catchError('用户年龄不存在！')
  getAge() {
    return this._user.age
  }
}
// 实例化
const p = new Person()
p.getName()
p.getAge()