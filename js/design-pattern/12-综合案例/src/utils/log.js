// 装饰器模式
export function log(type) {
  return function (target, name, descriptor) {
    const fn = descriptor.value
    descriptor.value = function () {
      console.log(`操作类型: ${type}`)
      return fn.apply(this, arguments)
    }
    return descriptor
  }
}