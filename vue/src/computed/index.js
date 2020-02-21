import Vue from 'vue'

new Vue({
  el: '#root',
  template: `
    <div>
      <!--{{firstName}} {{lastName}}-->
      <p>Name by computed: {{fullName}}</p>
      <p>Name by methods: {{getFullName()}}</p>
      <p>Number: {{number}}</p>
      <p>Nick Name: {{nickName}}</p>
      <p><input type="text" v-model="number"/></p>
      <p>First Name: <input type="text" v-model="firstName"/></p>
      <p>Last Name: <input type="text" v-model="lastName"/></p>
      <!--<p>FullName: <input type="text" v-model="fullName"/></p>-->
      <p>Obj.a: <input type="text" v-model="obj.a"/></p>
    </div>
  `,
  data: {
    firstName: 'Miracle',
    lastName: 'He',
    nickName: '',
    number: 0,
    obj: {
      a: 0
    }
  },
  computed: {
    fullName() {
      // 本质：通过Object.defineProperty方法实现的get部分, 适用于显示数据(而非改变数据)的数据拼装
      // 当数据发生变化(除开firstName和lastName本身)时，不会被调用
      console.log('get new name by computed')
      return `${this.firstName} ${this.lastName}`
    }
    // fullName: {
    //   // 不推荐对computed元素执行set操作
    //   get() {
    //     console.log('get new name by computed')
    //     return `${this.firstName} ${this.lastName}`
    //   },
    //   set(val) {
    //     const names = val.split(' ')
    //     this.firstName = names[0]
    //     this.lastName = names[1]
    //   }
    // }
  },
  methods: {
    getFullName() {
      // 当数据发生变化(除开firstName和lastName本身)时，会被调用
      console.log('get new name by methods')
      return `${this.firstName} ${this.lastName}`
    }
  },
  watch: {
    // firstName(newVal, oldVal) {
    //   // 当数据发生变化时，需要执行某种操作(如发送ajax请求)
    //   console.log('get new name by watch')
    //   this.nickName = `${newVal} ${this.lastName}`;
    // }
    firstName: {
      handler(newVal, oldVal) {
        console.log('get new name by watch')
        this.nickName = `${newVal} ${this.lastName}`
      },
      immediate: true // 默认handler是需要等到watch对象有变化时才执行，此参数可让handler立即执行
    },
    /*
    // 直接监听父级别对象而开启deep有性能损耗, 可修改为监听子属性(以字符串形式)
    obj: {
      handler() {
        console.log('obj.a changed')
      },
      immediate: true,
      deep: true // 默认handler只会监听当前watch对象，而不会监听对象的子属性，此参数可递归监听所有子属性的变化
    }
    */
    'obj.a': {
      // 此时关闭deep属性
      handler() {
        console.log('obj.a changed')
        // this.obj.a++ // 切记不可在computed或watch内部修改被监听的对象，容易造成死循环
      },
      immediate: true
    }
  }
})
