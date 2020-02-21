<template>
  <div>
    <h1>A 节点</h1>
    <button @click="init=!init">删除CEF,新建GEF</button>
    <div v-if="init">
      <children-b/>
      <children-c>
        <children-e/>
        <children-f/>
      </children-c>
      <children-d/>
    </div>
    <div v-else>
      <children-b/>
      <children-g>
        <children-e/>
        <children-f/>
      </children-g>
      <children-d/>
    </div>
  </div>
</template>

<script>
  import ChildrenB from '@/views/1.3/children-b'
  import ChildrenC from '@/views/1.3/children-c'
  import ChildrenD from '@/views/1.3/children-d'
  import ChildrenE from '@/views/1.3/children-e'
  import ChildrenF from '@/views/1.3/children-f'
  import ChildrenG from '@/views/1.3/children-g'

  export default {
    data() {
      return {
        init: true
      }
    },
    components: {
      ChildrenB,
      ChildrenC,
      ChildrenD,
      ChildrenE,
      ChildrenF,
      ChildrenG
    }
  }
</script>
