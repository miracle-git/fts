const StateMachine = require('javascript-state-machine')

const machine = new StateMachine({
  init: 'Favorite',
  transitions: [
    {
      name: 'fav',
      from: 'Favorite',
      to: 'Cancel Favorite'
    },
    {
      name: 'cancel',
      from: 'Cancel Favorite',
      to: 'Favorite'
    }
  ],
  methods: {
    onFav() {
      alert('Favorite Successfully!')
      updateText()
    },
    onCancel() {
      alert('Cancel Successfully!')
      updateText()
    }
  }
})

const $btn = $('#btn')
$btn.click(function () {
  if (machine.is('Favorite')) {
    machine.fav()
  } else {
    machine.cancel()
  }
})
function updateText() {
  $btn.text(machine.state)
}
// 初始化
updateText()