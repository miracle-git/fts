<template>
  <div class="border2">
    <h2>E 节点</h2>
    <slot></slot>
  </div>
</template>

<script>
  export default {
    mounted() {
      console.log('E mounted')
    },
    updated() {
      console.log('E updated')
    },
    destroyed() {
      console.log('E destroyed')
    }
  }
</script>
