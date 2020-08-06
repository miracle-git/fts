import ShoppingCart from './cart/shopping-cart'
import GoodsList from './goods/goods-list'

export default class App {
  constructor(selector) {
    this.$el = $(selector)
  }

  // 模板方法模式
  init() {
    this.initShoppingCart()
    this.initGoodsList()
  }

  initShoppingCart() {
    const cart = new ShoppingCart(this)
    cart.init()
  }

  initGoodsList() {
    const list = new GoodsList(this)
    list.init()
  }
}
