<template>
  <li :class="{'hover':isHover}"
      @mouseenter="isHover=true"
      @mouseleave="isHover=false">
    <label>
      <input type="checkbox" v-model="item.completed"/>
      <span>{{item.title}}</span>
    </label>
    <button class="btn btn-danger" @click="deleteTodo">删除</button>
  </li>
</template>

<script>
  export default {
    data() {
      return {
        isHover: false
      }
    },
    methods: {
      deleteTodo() {
        if (confirm(`确定要删除【${this.item.title}】?`)) {
          this.$store.dispatch('deleteTodo', this.index)
        }
      }
    },
    props: ['item', 'index']
  }
</script>

<style>
  li {
    list-style: none;
    height: 36px;
    line-height: 36px;
    padding: 0 5px;
    border-bottom: 1px solid #ddd;
  }
  li .btn {
    display: none;
  }
  li.hover {
    cursor: pointer;
    background: #ddd;
  }
  li.hover .btn {
    display: block;
  }
  li label {
    float: left;
    cursor: pointer;
  }
  li label li input {
    vertical-align: middle;
    margin-right: 6px;
    position: relative;
    top: -1px;
  }
  li button {
    float: right;
    display: none;
    margin-top: 3px;
  }
  li:before {
    content: initial;
  }
  li:last-child {
    border-bottom: none;
  }
</style>
