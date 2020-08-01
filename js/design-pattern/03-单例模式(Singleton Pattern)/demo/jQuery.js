// jQuery中只有一个$
const jQuery = (function () {
  if (window.jQuery != null) {
    return window.jQuery
  } else {
    // 初始化创建
  }
})()

window.$ = function (selector) {
  return new jQuery(selector)
}