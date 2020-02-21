<template>
  <div class="border">
    <h1>A 节点</h1>
    <button @click="changeColor(color)">Change Color</button>
    <children-b/>
    <children-c/>
    <children-d/>
  </div>
</template>

<script>
  import ChildrenB from '@/views/1.8/children-b'
  import ChildrenC from '@/views/1.8/children-c'
  import ChildrenD from '@/views/1.8/children-d'

  export default {
    data() {
      return {
        color: 'blue'
      }
    },
    methods: {
      changeColor(color) {
        if (color) {
          this.color = color;
        } else {
          this.color = this.color === 'blue' ? 'red' : 'blue'
        }
      }
    },
    provide() {
      // return {
      //   theme: {
      //     color: this.color
      //   }
      // }
      return {
        theme: this
      }
    },
    components: {
      ChildrenB,
      ChildrenC,
      ChildrenD
    }
  }
</script>
