// webpack-dev-server
function bindEvent(el, type, selector, fn) {
  if (fn == null) {
   fn = selector
   selector = null
  }
  // ...
}

bindEvent('.list', 'click', '.item', () => { console.log('item click') })
bindEvent('.list', 'click', () => { console.log('item click') })