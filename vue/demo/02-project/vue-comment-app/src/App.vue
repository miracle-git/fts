<template>
  <div class="app-container">
    <header class="site-header jumbotron">
      <div class="container">
        <div class="row">
          <div class="col-xs-12">
            <h1>请发表对Vue的评论</h1>
          </div>
        </div>
      </div>
    </header>
    <div class="container">
      <add :addComment="addComment"/>
      <list :items="comments" :deleteComment="deleteComment"/>
    </div>
  </div>
</template>

<script>
  import Add from './components/Add'
  import List from './components/List'

  export default {
    data() {
      return {
        // 数据在哪个组件，操作(更新数据)就应该放在哪个组件
        comments: [
          { name: 'Miracle', content: 'Vue不错！' },
          { name: 'Jack', content: 'Vue很简单！' },
          { name: 'Rock', content: 'Vue很牛X！' }
        ]
      }
    },
    methods: {
      addComment(comment) {
        this.comments.unshift(comment)
      },
      deleteComment(index) {
        this.comments.splice(index, 1)
      }
    },
    components: {
      Add,
      List
    }
  }
</script>
