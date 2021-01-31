import StateMachine from 'javascript-state-machine'

export const actions = {
  add: { state: '加入购物车', name: 'addToCart', handler: 'onAddToCart' },
  del: { state: '从购物车中移除', name: 'deleteFromCart', handler: 'onDeleteFromCart' }
}

// 状态模式
export default function(goodsItem) {
  return new StateMachine({
    init: actions.add.state,
    transitions: [
      {
        name: actions.add.name,
        from: actions.add.state,
        to: actions.del.state
      },
      {
        name: actions.del.name,
        from: actions.del.state,
        to: actions.add.state
      }
    ],
    methods: {
      [actions.add.handler]() {
        goodsItem.addToCart()
        goodsItem.updateText()
      },
      [actions.del.handler]() {
        goodsItem.deleteFromCart()
        goodsItem.updateText()
      }
    }
  })
}