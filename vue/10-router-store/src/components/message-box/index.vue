<template>
  <transition name="fade">
    <div class="message-box" v-show="visible">
      <slot/>
      <button class="close-btn" @click="close">&times;</button>
    </div>
  </transition>
</template>

<script>
  export default {
    name: 'message-box',
    data() {
      return {
        visible: false
      }
    },
    methods: {
      show() {
        this.visible = true
      },
      close() {
        this.visible = false
      }
    }
  }
</script>

<style lang="less">
  @import "./index.less";
</style>
