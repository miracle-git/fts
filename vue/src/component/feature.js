import Vue from 'vue'

const ChildComponent = {
  template: '<div>child component--{{userName}}--{{data.userName}}</div>',
  inject: ['grandfather', 'userName', 'data'],
  mounted() {
    console.log(this.$parent.$options.name)
    console.log(this.grandfather, this.userName, this.data.userName)
  }
}

const MyComponent = {
  name: 'my-comp',
  template: `
    <div :style="style">
      <slot name="test" :user-name="name" user-id="001"></slot>
      <child-component/>
    </div>
  `,
  // template: `
  //   <div :style="style">
  //     <div class="header">
  //       <slot name="header"></slot>
  //     </div>
  //     <div class="body">
  //       <slot name="body"></slot>
  //     </div>
  //     <!--<slot></slot>-->
  //   </div>
  // `,
  data() {
    return {
      style: {
        width: '200px',
        height: '200px',
        border: '1px solid #aaa'
      },
      name: 'Miracle'
    }
  },
  components: {
    ChildComponent
  }
}

new Vue({
  el: '#root',
  // template: `
  //   <my-component>
  //     <!--<span slot="header">This is header</span>-->
  //     <!--<span slot="body">This is body</span>-->
  //     <template #header="props">
  //     <!--<template v-slot:header>-->
  //       <span>This is header</span>
  //     </template>
  //     <template #body>
  //       <span>This is body</span>
  //     </template>
  //   </my-component>
  // `,
  template: `
    <div>
      <my-component ref="comp">
        <template #test="props">
          <span ref="span">Hello {{props.userName}}--{{props.userId}}--{{userName}}</span>
        </template>
      </my-component>
      <input type="text" v-model="userName"/>
    </div>
  `,
  data: {
    userName: 'Miracle He'
  },
  mounted() {
    console.log(this.$refs.comp, this.$refs.span, this.$refs.comp.name)
  },
  components: {
    MyComponent
  },
  provide() {
    // 不推荐使用
    const data = {}
    Object.defineProperty(data, 'userName', {
      get: () => this.userName,
      enumerable: true
    })

    return {
      grandfather: this,
      userName: this.userName,
      data
    }
  }
})
