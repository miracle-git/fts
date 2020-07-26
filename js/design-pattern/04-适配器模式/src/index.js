// webpack-dev-server
class Adaptee {
  specificRequest() {
    return '美式插孔'
  }
}

class Adapter {
  constructor() {
    this.adaptee = new Adaptee()
  }
  request() {
    const result = this.adaptee.specificRequest()
    return `${result} - 转化器 - 国内插孔`
  }
}

const adapter = new Adapter()
const result = adapter.request()
console.log(result)