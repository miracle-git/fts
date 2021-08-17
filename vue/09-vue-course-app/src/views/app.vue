<template>
  <div id="app">
    <course-list :courses="courses"/>
  </div>
</template>

<script>
  import CourseList from '@/components/course-list'
  import { getCourseList } from '@/services/course.service'

  export default {
    components: {
      CourseList
    },
    data() {
      return {
        courses: []
      }
    },
    async created() {
      const { data } = await getCourseList()
      this.courses = data
    }
  }
</script>

<!--<style scoped>-->
<!--  .course-list {-->
<!--    width: 400px;-->
<!--    border: 2px solid cyan;-->
<!--  }-->
<!--  .course-list >>> p {-->
<!--    color: #d63200;-->
<!--  }-->
<!--</style>-->

<style lang="less" scoped>
  .course-list {
    width: 400px;
    border: 2px solid cyan;
    // /deep/ p {
    ::v-deep p {
      color: #d63200;
    }
  }
</style>
