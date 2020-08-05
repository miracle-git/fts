import ShoppingCart from './cart/shopping-cart'
import GoodsList from './goods/goods-list'

export default class App {
  constructor(selector) {
    this.$el = $(selector)
  }

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
