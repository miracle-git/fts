<template>
  <div class="course-list">
    <p v-if="loading">正在加载中...</p>
    <p v-else-if="!courses.length">没有任何课程信息</p>
    <ul v-else>
      <li v-for="item in courses" :class="{active:selected===item}" :key="item.name" @click="selected=item">
        <!--嵌套路由跳转-->
        <router-link :to="`/admin/course/${item.name}`" v-if="item.type==='nested'">嵌套路由:{{item.name}}</router-link>
        <!--动态路由跳转-->
        <router-link :to="`/course/${item.name}`" v-else-if="item.type==='dynamic'">动态路由:{{item.name}}</router-link>
        <!--编程路由跳转-->
        <a @click="$router.push({ name: 'Detail', params: { name: item.name }})" v-else>编程路由:{{item.name}}</a>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'course-list',
    props: {
      courses: {
        type: Array,
        default: () => []
      },
      loading: {
        type: Boolean,
        default: false
      }
    },
    data() {
      return {
        selected: ''
      }
    }
  }
</script>

<style scoped lang="less">
  @import "./index.less";
</style>
