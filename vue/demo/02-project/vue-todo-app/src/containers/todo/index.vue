<template>
  <div class="todo-container">
    <div class="todo-wrap">
      <todo-header @addTodo="addTodo"/>
      <todo-list :todos="todos"/>
      <todo-footer :todos="todos" @checkedTodos="checkedTodos" @clearTodos="clearTodos"/>
    </div>
  </div>
</template>

<script>
  import PubSub from 'pubsub-js'
  import { TodoHeader, TodoList, TodoFooter } from '@/components'

  export default {
    data() {
      return {
        todos: [
          { title: '学习1小时React', completed: false },
          { title: '学习2小时Vue', completed: false },
          { title: '学习3小时Angular', completed: false }
        ]
      }
    },
    methods: {
      addTodo(todo) {
        this.todos.unshift(todo)
      },
      deleteTodo(index) {
        this.todos.splice(index, 1)
      },
      checkedTodos(checked) {
        this.todos = this.todos.map(item => ({ ...item, completed: checked }))
      },
      clearTodos() {
        this.todos = this.todos.filter(item => !item.completed)
      }
    },
    mounted() {
      PubSub.subscribe('deleteTodo', (msg, data) => this.deleteTodo(data))
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
