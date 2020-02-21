<template>
  <div class="border">
    <h1>A 节点</h1>
    <button @click="init=!init">移动</button>
    <div v-if="init">
      <children-b/>
      <children-c/>
      <children-d/>
    </div>
    <div v-else>
      <children-c/>
      <children-d/>
      <children-b/>
    </div>
  </div>
</template>

<script>
  import ChildrenB from '@/views/1.3/children-b'
  import ChildrenC from '@/views/1.3/children-c'
  import ChildrenD from '@/views/1.3/children-d'

  export default {
    data() {
      return {
        init: true
      }
    },
    components: {
      ChildrenB,
      ChildrenC,
      ChildrenD
    }
  }
</script>
