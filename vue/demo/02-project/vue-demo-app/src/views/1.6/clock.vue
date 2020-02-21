<template>
  <div>
    {{log('render')}}
    {{now}}
    <button @click="start=!start">{{start ? '停止' : '开始'}}</button>
  </div>
</template>

<script>
  import moment from 'moment'

  export default {
    data() {
      console.log('data')
      this.log = console.log
      return {
        now: moment(new Date()).format('YYYY-MM-DD HH:mm:ss'),
        start: false
      }
    },
    watch: {
      start() {
        this.startClock()
      }
    },
    methods: {
      startClock() {
        this.interval && clearInterval(this.interval)
        if (this.start) {
          this.interval = setInterval(() => {
            this.now = moment(new Date()).format('YYYY-MM-DD HH:mm:ss')
          }, 1000)
        }
      }
    },
    beforeCreate() {
      console.log('beforeCreate')
    },
    created() {
      console.log('created')
    },
    beforeMount() {
      console.log('beforeMount')
    },
    mounted() {
      console.log('mounted')
      this.startClock()
    },
    beforeUpdate() {
      console.log('beforeUpdate')
    },
    updated() {
      console.log('updated')
    },
    beforeDestroy() {
      console.log('beforeDestroy')
      this.interval && clearInterval(this.interval)
    },
    destroyed() {
      console.log('destroyed')
    }
  }
</script>
