import CartItem from './cart-item'

export default class ShoppingCart {
  constructor(app) {
    this.app = app
    this.$el = $('<div>').css({
      'padding-bottom': '10px',
      'border-bottom': '1px solid #ccc'
    })
    this.cart = CartItem.getInstance()
  }

  init() {
    this.initAction()
    this.render()
  }

  initAction() {
    const $btn = $('<button>购物车</button>').css('cursor', 'pointer')
    $btn.click(() => this.showCart())
    this.$el.append($btn)
  }

  showCart() {
    alert(this.cart.getList())
  }

  render() {
    this.app.$el.append(this.$el)
  }
}