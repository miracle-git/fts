<template>
  <div class="border1">
    <h2>C 节点</h2>
    <children-e/>
    <children-f/>
  </div>
</template>

<script>
  import ChildrenE from '@/views/1.8/children-e'
  import ChildrenF from '@/views/1.8/children-f'

  export default {
    provide() {
      return {
        theme: {
          color: 'green'
        }
      }
    },
    components: {
      ChildrenE,
      ChildrenF
    }
  }
</script>
