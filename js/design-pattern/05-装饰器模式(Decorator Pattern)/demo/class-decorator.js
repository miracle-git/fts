// 装饰类
function mixins(...args) {
  return function (target) {
    Object.assign(target.prototype, ...args)
  }
}

const service = {
  learn() {
    console.log('learning more skills...')
  }
}

@mixins(service)
export class User {}
