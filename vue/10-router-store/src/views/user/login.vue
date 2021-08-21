<template>
  <div class="login-page">
    <button @click="login" v-if="!isLogin">登录</button>
  </div>
</template>

<script>
  import { auth } from '@/mixins'

  export default {
    mixins: [auth]
  }
</script>
