<template>
  <ul class="todo-main">
    <todo-item v-for="(item, index) in todos" :key="index" :index="index" :item="item"/>
  </ul>
</template>

<script>
  import { mapState } from 'vuex'
  import { DataStorage } from 'm2-core'
  import { TodoItem } from '@/components'

  export default {
    computed: {
      ...mapState(['todos'])
    },
    watch: {
      todos: {
        deep: true,
        handler: (val) => DataStorage.set('TODO_LIST_DATA', val)
      }
    },
    components: {
      TodoItem
    }
  }
</script>

<style>
  .todo-main {
    margin-left: 0px;
    border: 1px solid #ddd;
    border-radius: 2px;
    padding: 0px;
  }
  .todo-empty {
    height: 40px;
    line-height: 40px;
    border: 1px solid #ddd;
    border-radius: 2px;
    padding-left: 5px;
    margin-top: 10px;
  }
</style>
