<template>
  <div>
    <h2>Vue Counter</h2>
    <p>Click {{count}} times, count is {{evenOrOdd}}</p>
    <button @click="increment">Increment</button>
    <button @click="decrement">Decrement</button>
    <button @click="incrementIfOdd">Increment If Odd</button>
    <button @click="incrementAsync">Increment Aysnc</button>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        count: 0
      }
    },
    computed: {
      evenOrOdd() {
        return this.count % 2 === 1 ? '奇数' : '偶数'
      }
    },
    methods: {
      increment() {
        ++this.count
      },
      decrement() {
        --this.count
      },
      incrementIfOdd() {
        if (this.count % 2 === 1) {
          ++this.count
        }
      },
      incrementAsync() {
        setTimeout(() => {
          ++this.count
        }, 1000)
      }
    }
  }
</script>
