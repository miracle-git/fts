<template>
  <ul>
    <li>id: {{item.id}}</li>
    <li>title: {{item.title}}</li>
    <li>content: {{item.content}}</li>
  </ul>
</template>

<script>
  const messages = [
    { id: '1', title: 'Message001', content: 'message content00111....' },
    { id: '3', title: 'Message003', content: 'message content00222....' },
    { id: '5', title: 'Message005', content: 'message content00333....' }
  ]

  export default {
    data() {
      return {
        item: {}
      }
    },
    mounted() {
      // 改变当前路由组件参数数据时, 不会重新创建组件对象, mounted不会重新执行
      const { id } = this.$route.params
      this.item = messages.find(item => item.id === id)
    },
    watch: {
      $route: function(val) {
        const { id } = val.params
        if (id) {
          this.item = messages.find(item => item.id === id)
        }
      }
    }
  }
</script>
