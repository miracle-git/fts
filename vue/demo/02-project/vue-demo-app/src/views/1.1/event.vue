<template>
  <div>
    name: {{name || '--'}}<br>
    <input type="text" :value="name" @change="handleChange"><br>
    <div @click="handleClick">
      <button @click="handleReset" style="margin: 10px 10px 0 0">重置成功</button>
      <button @click.stop="handleReset">重置失败</button>
    </div>
  </div>
</template>

<script>
  export default {
    methods: {
      handleChange(e) {
        this.$emit('change', e.target.value)
      },
      handleClick() {
        this.$emit('change', '')
      },
      handleReset(e) {
        //e.stopPropagation()
      }
    },
    props: {
      name: String
    }
  }
</script>
