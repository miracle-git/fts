<template>
  <div>
    <ul>
      <li v-for="item in items" :key="item.id">
        <router-link :to="`/home/message/detail/${item.id}`">{{item.title}}</router-link>
        <button @click="pushRoute(item.id)">push跳转</button>
        <button @click="replaceRoute(item.id)">replace跳转</button>
      </li>
    </ul>
    <button @click="$router.back()">返回</button>
    <hr>
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        items: [
          // { id: '1', title: 'Message001' },
          // { id: '3', title: 'Message003' },
          // { id: '5', title: 'Message005' }
        ]
      }
    },
    methods: {
      // 保留当前路由到history中
      pushRoute(id) {
        this.$router.push(`/home/message/detail/${id}`)
      },
      // 不会保留当前路由到history中
      replaceRoute(id) {
        this.$router.replace(`/home/message/detail/${id}`)
      }
    },
    mounted() {
      // 模拟从ajax中获取数据
      this.timer = setTimeout(() => {
        this.items = [
          { id: '1', title: 'Message001' },
          { id: '3', title: 'Message003' },
          { id: '5', title: 'Message005' }
        ]
      }, 1000)
    },
    beforeDestroy() {
      this.timer && clearTimeout(this.timer)
    }
  }
</script>
