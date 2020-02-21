<template>
  <div>
    <p>Reverse Message1: {{reverseMsg1}}</p>
    <p>Reverse Message2: {{reverseMsg2()}}</p>
    <button @click="() => $forceUpdate()">Force Update</button>
    <br>
    <input type="text" v-model="msg" style="margin-top: 10px"/>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        msg: 'Hello Miracle'
      }
    },
    computed: {
      reverseMsg1() {
        console.log('执行计算属性reverseMsg')
        return this.msg.split('').reverse().join('')
      }
    },
    methods: {
      reverseMsg2() {
        console.log('执行方法reverseMsg2')
        return this.msg.split('').reverse().join('')
      }
    }
  }
</script>
