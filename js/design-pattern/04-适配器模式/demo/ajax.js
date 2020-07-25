// 自己封装的ajax接口
ajax({
  url: '/data',
  type: 'GET',
  dataType: 'json',
  data: {
    id: 1
  }
})
// 系统中大量遗留使用的接口
$.ajax({ /*...*/ })
// 使用适配器封装(而不用改原有代码)
const $ = {
  ajax(options) {
    return ajax(options)
  }
}