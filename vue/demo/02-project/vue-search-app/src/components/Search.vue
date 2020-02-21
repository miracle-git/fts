<template>
  <section class="jumbotron">
    <h3 class="jumbotron-heading">Search Github Users</h3>
    <div>
      <input type="text" placeholder="输入搜索用户名" v-model="searchName"/>
      <button @click="search">Search</button>
    </div>
  </section>
</template>

<script>
  import PubSub from 'pubsub-js'

  export default {
    data() {
      return {
        searchName: ''
      }
    },
    methods: {
      search() {
        const searchName = this.searchName.trim()
        if (searchName) {
          PubSub.publish('search', searchName)
        }
      }
    }
  }
</script>
