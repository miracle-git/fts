<template>
  <p class="course-add">
    <label ref="label" for="course">{{ label }}:</label>
    <input ref="input" id="course" type="text" :value="value" @input="handleInput" @keydown.enter="addCourse"/>
    <button @click="addCourse">Add</button>
    <button @click="changeCourse">Change</button>
  </p>
</template>

<script>
  export default {
    name: 'course-add',
    props: ['value'],
    data() {
      return {
        label: 'Course'
      }
    },
    mounted() {
      this.$refs.input.focus()
    },
    methods: {
      addCourse() {
        this.$emit('add')
      },
      changeCourse() {
        this.label = 'Course Name'
        // 此时并未获取到改变之后的label值
        console.log(this.$refs.label.innerHTML)
        // 使用$nextTick可获取最新的label值
        this.$nextTick(() => console.log(this.$refs.label.innerHTML))
      },
      handleInput(e) {
        this.$emit('input', e.target.value)
      }
    }
  }
</script>
