<template>
  <div class="login-page">
    <button @click="login" v-if="!isLogin">登录</button>
    <button @click="logout" v-else>注销</button>
  </div>
</template>

<script>
  import { dynamicRoutes } from '@/router/dynamic'

  export default {
    computed: {
      isLogin() {
        return window.isLogin
      }
    },
    methods: {
      login() {
        window.isLogin = true
        // 添加动态路由
        this.$router.addRoutes(dynamicRoutes)
        this.$router.push(this.$route.query.redirect)
      },
      logout() {
        window.isLogin = false
        this.$router.push('/')
      }
    }
  }
</script>
