<template>
  <div>
    <p>
      <button @click="handleNameChange">Change this.name</button>
      <button @click="handleInfoChange">Change this.info</button>
      <button @click="handleListChange">Change this.list</button>
    </p>
    <update :name="name" :info="info" :list="list"/>
  </div>
</template>

<script>
  import Update from '@/views/1.4/update'

  let name = 'Miracle'
  export default {
    data() {
      this.name = name
      return {
        info: {},
        list: []
      }
    },
    methods: {
      handleNameChange() {
        this.name = 'Miracle ' + Date.now()
        console.log(`this.name发生变化，但是并未触发子组件更新，name = ${this.name}`)
      },
      handleInfoChange() {
        this.info.number = 1
        console.log(`this.info发生变化，但是并未触发子组件更新，info = ${this.info}`)
      },
      handleListChange() {
        this.list.push(1, 2, 3)
        console.log(`this.list发生变化，但是触发了子组件更新，list = ${this.list}`)
      }
    },
    components: {
      Update
    }
  }
</script>

<style lang="less">
  p {
    padding-top: 10px;
    button {
      margin-right: 10px;
    }
  }
</style>
