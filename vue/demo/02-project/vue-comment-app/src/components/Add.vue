<template>
  <div class="col-md-4">
    <form class="form-horizontal">
      <div class="form-group">
        <label>用户名：</label>
        <input type="text" class="form-control" placeholder="请输入用户名" v-model="name"/>
      </div>
      <div class="form-group">
        <label>评论：</label>
        <textarea rows="5" class="form-control" placeholder="请输入评论" v-model="content"></textarea>
      </div>
      <div class="form-group">
        <div class="col-sm-10 col-sm-offset-2">
          <button type="button" class="btn btn-default pull-right" @click="add">提交</button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        name: '',
        content: ''
      }
    },
    methods: {
      add() {
        const name = this.name.trim()
        const content = this.content.trim()
        if (!name || !content) {
          alert('姓名或内容不能为空！')
          return
        }

        const comment = { name, content }
        this.addComment(comment)
        this.name = this.content = ''
      }
    },
    props: {
      addComment: {
        type: Function,
        required: true
      }
    }
  }
</script>
