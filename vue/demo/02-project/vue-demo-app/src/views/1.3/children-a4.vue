<template>
  <div>
    <h1>A 节点</h1>
    <button @click="init=!init">更新新建</button>
    <div v-if="init">
      <children-b :number="1"/>
      <children-b :number="2">
        <children-e/>
        <children-f/>
      </children-b>
      <children-b :number="3"/>
    </div>
    <div v-else>
      <children-b :number="2">
        <children-e/>
        <children-f/>
      </children-b>
      <children-b :number="1"/>
      <children-b :number="3"/>
    </div>
  </div>
</template>

<script>
  import ChildrenB from '@/views/1.3/children-b'
  import ChildrenE from '@/views/1.3/children-e'
  import ChildrenF from '@/views/1.3/children-f'

  export default {
    data() {
      return {
        init: true
      }
    },
    components: {
      ChildrenB,
      ChildrenE,
      ChildrenF
    }
  }
</script>
