// 工厂装饰器
function userFactory(inject: boolean = true) {
  if (!inject) return function () {}
  return function (constructor: any) {
    constructor.prototype.getName = () => 'Miracle'
  }
}
// 应用装饰器
@userFactory()
// @userFactory(false)
class Student {}
// 实例化
const student = new Student()
if ('getName' in student) {
  console.log((student as any).getName())
}
