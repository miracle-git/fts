<template>
  <div id="app">
    <nav>
      <router-link to="/">首页</router-link> |
      <router-link to="/admin">管理</router-link>
    </nav>
    <nav v-if="isLogin">
      <span>{{welcome}}</span>
      <button @click="logout">注销</button>
    </nav>
    <router-view/>
  </div>
</template>

<script>
  import { auth } from '@/mixins'

  export default {
    mixins: [auth]
  }
</script>
