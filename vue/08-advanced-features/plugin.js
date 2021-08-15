// 定义plugin(一般在外部定义)
const Heading = {
  install(Vue, options) {
    // 定义heading
    Vue.component('heading', {
      props: {
        level: {
          type: [Number, String],
          required: true
        },
        title: String,
        icon: String
      },
      render(h) {
        let children = []
        if (this.icon) {
          children.push(
            h('svg',
              { class: 'icon' },
              [h('use', { attrs: { 'xlink:href': `#icon-${this.icon}` }})]
            )
          )
        }
        children = children.concat(this.$slots.default)
        const vnode = h(`h${this.level}`, { attrs: { title: this.title } }, children)
        return vnode
      }
    })
  }
}
// 注册插件
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(Heading)
}
