<template>
  <div class="todo-footer">
    <label>
      <input type="checkbox" v-model="checkAll"/>
      <span>已完成{{completedCount}} / 全部{{totalCount}}</span>
    </label>
    <button class="btn btn-danger" v-show="completedCount" @click="clearCompletedTodos">清除已完成任务</button>
  </div>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex'

  export default {
    computed: {
      ...mapGetters(['totalCount', 'completedCount']),
      checkAll: {
        get() {
          return this.$store.getters.checkAll
        },
        set(val) {
          this.$store.dispatch('checkedAllTodos', val)
        }
      }
    },
    methods: {
      ...mapActions(['clearCompletedTodos'])
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
