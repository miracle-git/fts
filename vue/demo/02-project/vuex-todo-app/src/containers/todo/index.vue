<template>
  <div class="todo-container">
    <div class="todo-wrap">
      <todo-header/>
      <todo-list/>
      <todo-footer/>
    </div>
  </div>
</template>

<script>
  import { TodoHeader, TodoList, TodoFooter } from '@/components'

  export default {
    mounted() {
      this.$store.dispatch('getAllTodos')
    },
    components: {
      TodoHeader,
      TodoList,
      TodoFooter
    }
  }
</script>

<style>
  .todo-container {
    width: 600px;
    margin: 0 auto;
  }
  .todo-container .todo-wrap {
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
  }
</style>
