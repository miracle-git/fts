<template>
  <div class="todo-footer">
    <label>
      <input type="checkbox" v-model="checkAll"/>
      <span>已完成{{completedCount}} / 全部{{todos.length}}</span>
    </label>
    <button class="btn btn-danger" v-show="completedCount" @click="$emit('clearTodos')">清除已完成任务</button>
  </div>
</template>

<script>
  export default {
    computed: {
      completedCount() {
        return this.todos.filter(item => item.completed).length
      },
      checkAll: {
        get() {
          return this.todos.length > 0 && this.completedCount === this.todos.length
        },
        set(val) {
          this.$emit('checkedTodos', val)
        }
      }
    },
    props: {
      todos: Array
    }
  }
</script>

<style>
  .todo-footer {
    height: 40px;
    line-height: 40px;
    padding-left: 6px;
    margin-top: 5px;
  }
  .todo-footer label {
    display: inline-block;
    margin-right: 20px;
    cursor: pointer;
  }
  .todo-footer label input {
    position: relative;
    top: -1px;
    vertical-align: middle;
    margin-right: 5px;
  }
  .todo-footer button {
    float: right;
    margin-top: 5px;
  }
</style>
