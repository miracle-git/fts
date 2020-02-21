import Vue from 'vue'

const app = new Vue({
  // el: '#root',
  // template: '<div>Hello, {{name}}!</div>',
  data: {
    name: 'Miracle'
  },
  beforeCreate() {
    // this.$el 此时返回undefined, 只会执行一次(在SSR环境中被调用)
    console.log(this.$el, 'beforeCreate')
  },
  created() {
    // this.$el 此时返回undefined，此时适合执行初始化数据(不会有状态变更), 只会执行一次(在SSR环境中被调用)
    console.log(this.$el, 'created')
  },
  beforeMount() {
    // this.$el 此时返回<div id="root"></div>, 此时适合执行数据类相关操作, 只会执行一次(在SSR环境中不会被调用)
    console.log(this.$el, 'beforeMount')
  },
  mounted() {
    // this.$el 此时返回<div>Hello Miracle He!</div>, 此时适合执行dom相关操作, 只会执行一次(在SSR环境中不会被调用)
    console.log(this.$el, 'mounted')
  },
  beforeUpdate() {
    // mounted之后的节点都是已渲染好的dom节点
    console.log(this, 'beforeUpdate')
  },
  updated() {
    console.log(this, 'updated')
  },
  activated() {
    console.log(this, 'activated')
  },
  deactivated() {
    console.log(this, 'deactivated')
  },
  beforeDestroy() {
    console.log(this, 'beforeDestroy')
  },
  destroyed() {
    console.log(this, 'destroyed')
  },
  // 将template转化为render function
  render(h) {
    // throw new TypeError('render has error!')
    console.log('render function invoked!')
    return h('div', {}, `Hello ${this.name}!`)
  },
  // 只有本组件出错的时候才会被触发
  renderError(h, err) {
    return h('div', {}, err.stack)
  },
  // 所有组件的错误都能被捕获
  errorCaptured(err, vm, info) {
    // 支持向上冒泡，在正式环境中可以使用
  }
})

app.$mount('#root') // 通过el或$mount才会触发beforeMount和mounted
app.name = 'Miracle He'; // 当有数据更新时才会触发beforeUpdate和updated
setTimeout(() => {
  app.$destroy() // 手动销毁组件
}, 3000)
