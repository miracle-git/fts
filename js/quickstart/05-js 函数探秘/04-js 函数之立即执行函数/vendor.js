// 第三方库
;(function (window) {
  'use strict'
  const getName = function() {
    console.log('vendor: Miracle')
  }
  window.vendor = { getName }
})(window)