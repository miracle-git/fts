// webpack-dev-server
class Product {
  constructor(name) {
    this.name = name
  }
  init() {
    console.log('product init')
  }
  fn1() {
    console.log('run fn1')
  }
  fn2() {
    console.log('run fn2')
  }
}

class ProductFactory {
  static create(name) {
    return new Product(name)
  }
}

const product = ProductFactory.create('p1')
product.init()
product.fn1()
product.fn2()