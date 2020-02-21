<template>
  <div>
    <h2>Vuex Counter</h2>
    <!--<p>Click {{$store.state.count}} times, count is {{$store.getters.evenOrOdd}}</p>-->
    <p>Click {{count}} times, count is {{evenOrOdd}}</p>
    <button @click="increment">Increment</button>
    <button @click="decrement">Decrement</button>
    <button @click="incrementIfOdd">Increment If Odd</button>
    <button @click="incrementAsync">Increment Aysnc</button>
  </div>
</template>

<script>
  import { mapState, mapGetters, mapActions } from 'vuex'
  export default {
    computed: {
      ...mapState(['count']),
      ...mapGetters(['evenOrOdd'])
    },
    methods: {
      ...mapActions(['increment', 'decrement', 'incrementIfOdd', 'incrementAsync'])
      // increment() {
      //   this.$store.dispatch('increment')
      // },
      // decrement() {
      //   this.$store.dispatch('decrement')
      // },
      // incrementIfOdd() {
      //   this.$store.dispatch('incrementIfOdd')
      // },
      // incrementAsync() {
      //   this.$store.dispatch('incrementAsync')
      // }
    }
  }
</script>
