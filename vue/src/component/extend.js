import Vue from 'vue'

const component = {
  props: {
    active: {
      type: Boolean,
      required: true
    },
    userId: Number
  },
  template: `
    <div>
      Hello {{name}}!
      <input type="text" v-model="name"/>
      <span v-if="userId" @click="$emit('change')">click <span style="color: red;">[{{userId}}]</span> to update props</span>
      <span v-show="active">see me if active</span>
    </div>`,
  data() {
    return {
      name: 'Miracle'
    }
  },
  mounted() {
    // 切记在子组件中直接修改props，遵从单向数据流，通过$emit去修改
    // this.props.userId = '002'
    console.log('comp mounted')
  }
};

// const ExtendVue = Vue.extend(component)
// new ExtendVue({
//   el: '#root',
//   propsData: {
//     // 此处不能使用props
//     active: true
//   },
//   data: {
//     name: 'Miracle He'
//   },
//   mounted() {
//     console.log('instance mounted')
//   }
// })

const ParentComponent = new Vue({
  name: 'parent'
})

const MyComponent = {
  extends: component,
  data() {
    return {
      name: 'Miracle He'
    }
  },
  mounted() {
    console.log('my component mounted')
    console.log(this.$parent.$options.name)
    this.$parent.name = 'Miracle He' // 强烈不建议通过$parent去修改父组件的数据
  }
}

new Vue({
  name: 'root',
  el: '#root',
  parent: ParentComponent, // 只能应用于new Vue定义组件的方式
  template: `
    <div>
      <span>{{name}}</span>
      <my-component :active="true"/>
    </div>
  `,
  data: {
    name: 'Miracle'
  },
  mounted() {
    console.log(this.$parent.$options.name)
  },
  components: {
    MyComponent
  }
})
