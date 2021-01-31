class Cart {
  constructor() {
    this.items = []
  }

  add(item) {
    this.items.push(item)
  }

  delete(id) {
    this.items = this.items.filter(item => item.id !== id)
  }

  getList() {
    return this.items.map(item => item.name).join('\n')
  }
}
// 单例模式
const CartItem = {
  getInstance: (function () {
    let instance
    return function () {
      if (!instance) {
        instance = new Cart()
      }
      return instance
    }
  })()
}

export default CartItem