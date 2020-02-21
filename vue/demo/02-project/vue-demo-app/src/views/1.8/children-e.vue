<template>
  <div class="border2">
    <h3 :style="{color: theme.color}">E 节点</h3>
    <button @click="handleClick">Change Color to Green</button>
  </div>
</template>

<script>
  export default {
    methods: {
      handleClick() {
        if (this.theme.changeColor) {
          this.theme.changeColor('green')
        }
      }
    },
    inject: {
      theme: {
        default: () => {}
      }
    }
  }
</script>
