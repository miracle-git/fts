import Vue from 'vue'

// const data = {
//   name: 'Miracle'
// }

const component = {
  // props: ['active', 'userId'],
  props: {
    // active: Boolean,
    active: {
      // type: Boolean,
      // required: true,
      default: true,
      validator(val) {
        return typeof val === 'boolean'
      }
    },
    userId: Number,
    userObj: {
      userId: String,
      userName: String,
      default() {
        return {
          userId: '001',
          userName: 'Miracle'
        }
      }
    }
  },
  template: `
    <div>
      Hello {{name}}!
      <input type="text" v-model="name"/>
      <span v-if="userId" @click="$emit('change')">click <span style="color: red;">[{{userId}}]</span> to update props</span>
      <span v-show="active">see me if active</span>
    </div>`,
  // 此处data必须是function, 通过new Vue方式定义组件除外
  data() {
    // return data // 此处也不能定义全局变量, 需要保持独立的副本
    return {
      name: 'Miracle'
    }
  },
  mounted() {
    // 切记在子组件中直接修改props，遵从单向数据流，通过$emit去修改
    // this.props.userId = '002'
  }
};

// 定义全局组件
// Vue.component('MyComponent', component)

new Vue({
  el: '#root',
  template: `
    <div>
      <my-component :user-id="userId" @change="handleChange"/>
      <my-component :active="true" :user-obj="{userId: '002', userName: 'Miracle He'}" ref="comp"/>
    </div>
  `,
  data() {
    return {
      userId: 1
    }
  },
  methods: {
    handleChange() {
      this.userId += 1
    }
  },
  mounted() {
    console.log(this.$refs.comp)
  },
  components: {
    MyComponent: component // 定义局部组件
  }
})
