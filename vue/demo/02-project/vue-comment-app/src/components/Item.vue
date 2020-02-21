<template>
  <li class="list-group-item">
    <div class="handle">
      <a href="javascript:;" @click="deleteItem">删除</a>
    </div>
    <p class="user">
      <span>{{item.name}}</span>说：
    </p>
    <p class="sentence">{{item.content}}</p>
  </li>
</template>

<script>
  export default {
    methods: {
      deleteItem() {
        const { item, deleteComment } = this
        if (confirm(`确定删除${item.name}的评论吗？`)) {
          deleteComment()
        }
      }
    },
    props: {
      item: Object,
      deleteComment: {
        type: Function,
        required: true
      }
    }
  }
</script>

<style>
  li {
    overflow: hidden;
    transition: .5s;
  }
  .handle {
    width: 40px;
    border: 1px solid #ccc;
    background: #fff;
    position: absolute;
    right: 10px;
    top: 1px;
    text-align: center;
  }
  .handle a {
    display: block;
    text-decoration: none;
  }
  .list-group-item .sentence {
    padding: 0 50px;
  }
  .user {
    font-size: 20px;
  }
</style>
