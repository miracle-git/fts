<template>
  <div>
    name: {{ name }}
    <br />
    type: {{ type }}
    <br />
    list: {{ list }}
    <br />
    visible: {{ visible }}
    <br />
    <button @click="handleClick">Change Type</button>
  </div>
</template>

<script>
  export default {
    methods: {
      handleClick() {
        // 不要这么做、不要这么做、不要这么做
        // this.type = 'warning'
        // 可以，还可以更好
        this.onChange(this.type === 'success' ? 'warning' : 'danger')
      }
    },
    // inheritAttrs: false, // 关闭自动挂载的属性
    // props: ['name', 'type', 'list', 'visible'],
    props: {
      name: String,
      type: {
        validator(val) {
          // 这个值必须匹配下列字符串中的一个
          return ['success', 'warning', 'danger'].includes(val)
        }
      },
      list: {
        type: Array,
        // 对象或数组默认值必须从一个工厂函数获取
        default: () => []
      },
      visible: {
        type: Boolean,
        default: false
      },
      onChange: {
        type: Function,
        default: () => {}
      }
    }
  }
</script>
