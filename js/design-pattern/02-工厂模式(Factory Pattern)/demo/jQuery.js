class jQuery {
  constructor(selector) {
    const dom = Array.prototype.splice.call(document.querySelectorAll(selector))
    const len = dom ? dom.length : 0
    for (let i = 0; i < len; i++) {
      this[i] = dom[i]
    }
    this.length = len
    this.selector = selector || ''
  }
  append(node) {}
  addClass(name) {}
  html(data) {}
  // ...
}
window.$ = function (selector) {
  return new jQuery(selector)
}
