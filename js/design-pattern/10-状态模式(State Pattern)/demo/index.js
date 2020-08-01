// webpack-dev-server --config webpack.demo.config.js
require('./state-machine')
const MyPromise = require('./promise').default

const loadImg = (src) => {
  return new MyPromise((resolve, reject) => {
    const img = new Image()
    img.src = src
    img.style.width = '100%'
    img.onload = () => resolve(img)
    img.onerror = reject
  })
}
const promise = loadImg('https://s02.mifile.cn/assets/static/image/mi-logo.png')
promise.then(res => {
  console.log('加载成功！')
  return res
}, err => {
  console.log('加载失败！')
})