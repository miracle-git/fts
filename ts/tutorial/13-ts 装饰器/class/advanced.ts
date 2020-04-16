// 更高级的定义
function userCreator() {
  return function<T extends new (...args: any[]) => any>(constructor: T) {
    return class extends constructor {
      // name: string = 'Miracle'
      getName(): string {
        return this.name
      }
    }
  }
}
// 使用工厂装饰器创建类
const UserInfo = userCreator()(
  class {
    constructor(private name: string) {}
  }
)
// 实例化
const userInfo = new UserInfo('Jack')
console.log(userInfo.getName())