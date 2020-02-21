<template>
  <div>
    <p>{{$data}}</p>
    <button @click="() => (a += 1)">a+1</button>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        a: 1,
        b: {c: 2, d: 3},
        e: {
          f: {
            g: 4
          }
        },
        h: []
      }
    },
    watch: {
      // 注意watcher函数不能用=>函数
      a(newVal, oldVal) {
        console.log(this)
        this.b.c += 1
        console.log('new: %s, old: %s', newVal, oldVal)
      },
      ['b.c'](newVal, oldVal) {
        this.b.d += 1
        console.log('new: %s, old: %s', newVal, oldVal)
      },
      ['b.d'](newVal, oldVal) {
        this.e.f.g += 1
        console.log('new: %s, old: %s', newVal, oldVal)
      },
      e: {
        deep: true, // 深度监听
        handler(newVal, oldVal) {
          this.h.push('😄')
          console.log('new: %s, old: %s', newVal, oldVal)
        }
      },
      h(newVal, oldVal) {
        console.log('new: %s, old: %s', newVal, oldVal)
      }
    }
  }
</script>
