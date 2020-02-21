<template>
  <div>
    <h2>Home</h2>
    <ul class="nav nav-tabs">
      <li><router-link to="/home/news">News</router-link></li>
      <li><router-link to="/home/message">Message</router-link></li>
    </ul>
    <!--缓存路由组件-->
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
  export default {}
</script>
