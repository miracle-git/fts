<template>
  <div class="border1">
    <h2>B{{this.number || ''}} 节点</h2>
    <slot></slot>
  </div>
</template>

<script>
export default {
  mounted() {
    console.log(this.number ? `B${this.number} mounted` : 'B mounted')
  },
  updated() {
    console.log(this.number ? `B${this.number} updated` : 'B updated')
  },
  destroyed() {
    console.log(this.number ? `B${this.number} destroyed` : 'B destroyed')
  },
  props: {
    number: Number
  }
}
</script>
