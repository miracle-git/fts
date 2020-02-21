import Vue from 'vue'

const app = new Vue({
  // el: '#root',
  metaInfo: {
    title: 'Vue Instance'
  },
  template: '<div ref="text">Hello, {{name}}!--{{number}}--{{obj.a}}</div>',
  data: {
    name: 'Miracle',
    number: 0,
    obj: {}
  },
  // watch: {
  //   number(newVal, oldVal) {
  //     console.log(`${newVal}--${oldVal}`)
  //   }
  // }
})

app.$mount('#root')
// 修改data的值
let i = 0
setInterval(() => {
  app.number++
  // app.number++
  // app.number++
  // app.number++
  // app.number++
  // app.$nextTick() // 监听每一次数据的变化
  // app.$options.data.number++ // 不会修改number
  // app.$data.number++ // 会修改number
  i++
  // app.obj.a = i
  app.$set(app.obj, 'a', i)
  // app.$forceUpdate()
}, 1000)

console.log(app.$data)
console.log(app.$props)
console.log(app.$el)
console.log(app.$options)
console.log(app.$root)
console.log(app.$root === app) // true
console.log(app.$children)
console.log(app.$slots)
console.log(app.$scopedSlots)
console.log(app.$refs)
console.log(app.$isServer) // ssr
console.log(app.$options.metaInfo)

// 初次加载不会调用，只有等到data中有数据第发生变化时被调用
// app.$options.render = (h) => {
//   return h('div', {}, 'new render function')
// }
// 需要手动释放$watch
const unWatch = app.$watch('number', (newVal, oldVal) => {
  console.log(`${newVal}--${oldVal}`)
})
setTimeout(() => {
  unWatch()
}, 2000)
// 事件触发, 只能针对同一组件(父子)，事件不会冒泡
app.$on('evt', (a, b) => {
  console.log(`test emit ${a} ${b}`)
})
// $once只会触发一次
app.$once('evt',  (a, b) => {
  console.log(`test once emit ${a} ${b}`)
})
setInterval(() => {
  app.$emit('evt', 1, 2)
}, 1000)
