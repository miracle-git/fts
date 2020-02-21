<template>
  <div class="row">
    <h2 v-if="firstView">输入用户名进行搜索</h2>
    <h2 v-if="loading">LOADING...</h2>
    <h2 v-if="error">{{error}}</h2>
    <div v-for="(item, index) in users" :key="index" class="card">
      <a :href="item.url" target="_blank">
        <img :src="item.avatar_url" style="width: 100px"/>
      </a>
      <p class="card-text">{{item.name}}</p>
    </div>
  </div>
</template>

<script>
  import PubSub from 'pubsub-js'
  import axios from 'axios'

  export default {
    data() {
      return {
        firstView: true,
        loading: false,
        users: [],
        error: ''
      }
    },
    mounted() {
      this.searchUser()
    },
    methods: {
      searchUser() {
        PubSub.subscribe('search', (msg, searchName) => {
          this.firstView = false
          this.loading = true
          this.users = []
          this.error = ''

          const url = `https://api.github.com/search/users?q=${searchName}`
          axios.get(url).then(res => {
            this.users = (res.data.items || []).map(item => ({
              url: item.html_url,
              avatar_url: item.avatar_url,
              name: item.login
            }))
            this.loading = false
          }).catch(() => {
            this.error = '加载失败'
            this.loading = false
            this.users = []
          })
        })
      }
    }
  }
</script>

<style>
  .card {
    float: left;
    width: 33.333%;
    padding: .75rem;
    margin-bottom: 2rem;
    border: 1px solid #efefef;
    text-align: center;
  }
  .card > img {
    margin-bottom: .75rem;
    border-radius: 100px;
  }
  .card-text {
    font-size: 85%;
  }
</style>
