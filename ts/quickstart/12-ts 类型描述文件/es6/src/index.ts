import $ from 'jquery'

$(function () {
  console.log('使用jQuery')
  $('body').html('es6:使用类型定义文件')
  new $.fn.init()
})