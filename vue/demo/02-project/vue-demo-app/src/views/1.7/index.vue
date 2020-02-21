<template>
  <a-tabs>
    <a-tab-pane key="directive" tab="内置指令">
      <directive/>
    </a-tab-pane>
    <a-tab-pane key="custom-directive" tab="自定义指令">
      <custom-directive/>
    </a-tab-pane>
  </a-tabs>
</template>

<script>
  import Directive from '@/views/1.7/directive'
  import CustomDirective from '@/views/1.7/custom-directive'

  export default {
    components: {
      Directive,
      CustomDirective
    }
  }
</script>
