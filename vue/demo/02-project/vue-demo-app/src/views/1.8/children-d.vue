<template>
  <div class="border1">
    <h2>D 节点</h2>
    <children-g/>
    <children-h/>
    <children-i/>
  </div>
</template>

<script>
  import ChildrenG from '@/views/1.8/children-g'
  import ChildrenH from '@/views/1.8/children-h'
  import ChildrenI from '@/views/1.8/children-i'

  export default {
    components: {
      ChildrenG,
      ChildrenH,
      ChildrenI
    }
  }
</script>
