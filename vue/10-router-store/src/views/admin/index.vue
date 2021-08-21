<template>
  <div class="admin-page">
    <message-box ref="message" :class="type">
      <p v-if="type==='success'">Add course successfully!</p>
      <p v-else>Please enter course name!</p>
    </message-box>
    <course-add v-model="course" @add="addCourse"></course-add>
    <course-list :courses="courses" :loading="loading"></course-list>
    <!--嵌套路由-->
    <router-view/>
  </div>
</template>

<script>
  import { promise } from '@/mixins'
  import { CourseAdd, CourseList, MessageBox } from '@/components'
  import { getCourseList } from '@/services/course.service'

  export default {
    name: 'admin', // 启用keep-alive必须
    mixins: [promise],
    components: {
      CourseAdd,
      CourseList,
      MessageBox
    },
    data() {
      return {
        loading: false,
        type: 'success',
        course: '',
        courses: []
      }
    },
    methods: {
      addCourse() {
        const { message } = this.$refs
        if (!this.course) {
          this.type = 'warning'
        } else {
          this.courses.push({ name: this.course, price: 300 })
          this.course = ''
          this.type = 'success'
        }
        message.show()
      },
      async load() {
        const { data } = await this.request(getCourseList())
        this.courses = data
      }
    },
    created() {
      console.log('获取数据...')
      this.load()
    },
    async activated() {
      console.log('activated')
    },
    deactivated() {
      console.log('deactivated')
    }
    // 路由钩子
    // beforeRouteEnter(to, from, next) {
    //   // 是否登录
    //   if (window.isLogin) {
    //     next()
    //   } else {
    //     next(`/login?redirect=${to.fullPath}`)
    //   }
    // }
  }
</script>
