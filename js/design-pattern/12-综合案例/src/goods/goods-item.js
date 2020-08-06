import createStateMachine, { actions } from './state-machine'
import CartItem from '../cart/cart-item'
import { log } from '../utils/log'

export default class GoodsItem {
  constructor(list, data) {
    this.list = list
    this.data = data
    this.$el = $('<div>')
    this.cart = CartItem.getInstance()
  }

  // 模板方法模式
  init() {
    this.initContent()
    this.initAction()
    this.render()
  }

  initContent() {
    const $el = this.$el
    const data = this.data
    $el.append(`<p>名称：${data.name}</p>`)
    $el.append(`<p>价格：${data.price}</p>`)
  }

  initAction() {
    const $el = this.$el
    this.machine = createStateMachine(this)
    this.$btn = $('<button>').css('cursor', 'pointer')
    this.updateText()
    // 观察者模式
    this.$btn.click(() => {
      if (this.machine.is(actions.add.state)) {
        this.machine.addToCart()
      } else {
        this.machine.deleteFromCart()
      }
    })
    $el.append(this.$btn)
  }

  @log('add')
  addToCart() {
    this.cart.add(this.data)
  }

  @log('del')
  deleteFromCart() {
    this.cart.delete(this.data.id)
  }

  render() {
    this.list.$el.append(this.$el)
  }

  updateText() {
    this.$btn.text(this.machine.state)
  }
}
