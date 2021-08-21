<template>
  <div class="detail-page">
    <p v-if="loading">正在加载详情中...</p>
    <p v-else-if="!course">当前课程不存在</p>
    <div v-else>
      <h2>Course Detail</h2>
      <h3>当前课程：{{course.name}}, 价格：{{course.price | currency}}</h3>
    </div>
    <button @click="goBack('/admin')">返回</button>
  </div>
</template>

<script>
  import { promise, router } from '@/mixins'
  import { getCourseDetail } from '@/services/course.service'

  export default {
    mixins: [promise, router],
    data() {
      return {
        course: ''
      }
    },
    methods: {
      async load(name) {
        const { data } = await this.request(getCourseDetail(name))
        this.course = data
      }
    },
    // 嵌套路由此时只会执行一次，不会多次发送请求
    // created() {
    //   this.load(this.$route.params.name)
    // },
    watch: {
      $route: {
        handler(val) {
          this.load(val.params.name)
        },
        immediate: true
      }
    }
  }
</script>
