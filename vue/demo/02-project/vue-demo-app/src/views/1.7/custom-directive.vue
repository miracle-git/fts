<template>
  <div>
    <button @click="show=!show" style="margin-right: 10px">{{show ? '销毁' : '挂载'}}</button>
    <button v-if="show" v-append-text="`Hello ${number}`" @click="number++">按钮</button>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        show: true,
        number: 1
      }
    },
    directives: {
      appendText: {
        bind() {
          console.log('bind')
        },
        inserted(el, binding) {
          el.appendChild(document.createTextNode(binding.value))
          console.log('inserted', el, binding)
        },
        update() {
          console.log('update')
        },
        componentUpdated(el, binding) {
          el.removeChild(el.childNodes[el.childNodes.length - 1])
          el.appendChild(document.createTextNode(binding.value))
          console.log('componentUpdated')
        },
        unbind() {
          console.log('unbind')
        }
      }
    }
  }
</script>
