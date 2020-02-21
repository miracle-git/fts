<template>
  <div class="container">
    <search/>
    <user-list/>
  </div>
</template>

<script>
  import Search from './components/Search'
  import UserList from './components/UserList'

  export default {
    components: {
      Search,
      UserList
    }
  }
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
