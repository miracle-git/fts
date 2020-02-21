<template>
  <div>
    <p>props.name: {{name}}</p>
    <p>props.info: {{info}}</p>
    <p>props.list: {{list}}</p>
    <p>data.a: {{a}}</p>
    <p><button @click="handleDataChange">Change data.b</button></p>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        a: 'Hello',
        b: 'Miracle'
      }
    },
    methods: {
      handleDataChange() {
        this.b = 'Miracle ' + Date.now()
        console.log(`data.b发生变化，但是并未触发组件更新，b = ${this.b}`)
      }
    },
    updated() {
      console.log('触发Update子组件更新')
    },
    props: {
      name: String,
      info: Object,
      list: Array
    }
  }
</script>
