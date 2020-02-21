import Vue from 'vue'

const MyComponent = {
  props: ['test'],
  // template: `
  //   <div :style="style">
  //     <slot></slot>
  //   </div>
  // `,
  render() {
    return this.$createElement('div', {
      style: this.style,
      // on: {
      //   click: () => this.$emit('click')
      // }
    }, [
      // this.$slots.default,
      this.$slots.header,
      this.$createElement('p', {}, this.test)
    ])
  },
  data() {
    return {
      style: {
        width: '200px',
        height: '200px',
        border: '1px solid #aaa'
      }
    }
  }
}

new Vue({
  el: '#root',
  // template: `
  //   <my-component ref="comp">
  //     <span ref="span">Hello {{userName}}!</span>
  //   </my-component>
  // `,
  // template 最终会被compile成一个render function,
  // createElement返回v-node, 当数据发生变化时才会将v-node转化为真实的DOM节点
  render(createElement) {
    return createElement('my-component', {
      ref: 'comp',
      props: {
        test: '123'
      },
      // on: {
      //   click: this.handleClick
      // },
      nativeOn: {
        // 自动绑定事件到组件的根节点上，不需要显式指定click事件
        click: this.handleClick
      }
    }, [
      createElement('span', {
        ref: 'span',
        slot: 'header',
        // domProps: {
        //   innerHTML: '<span>Hello Vue!</span>'
        // }
        attrs: {
          id: 'test'
        }
      }, `Hello ${this.userName}!`)
    ])
  },
  data: {
    userName: 'Miracle He'
  },
  methods: {
    handleClick() {
      alert('clicked')
    }
  },
  components: {
    MyComponent
  }
})
