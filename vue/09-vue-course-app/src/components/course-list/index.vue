<template>
  <div class="course-list">
    <p v-if="!courses.length">没有任何课程信息</p>
    <ul v-else>
      <li v-for="item in courses" :class="{[$style.active]:selected===item}" :key="item.name" @click="selected=item">{{item.name}}</li>
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
      }
    },
    data() {
      return {
        selected: ''
      }
    }
  }
</script>

<!--<style scoped lang="less">-->
<!--  @import "./index.less";-->
<!--</style>-->

<style module lang="less">
  @import "./index.less";
</style>
