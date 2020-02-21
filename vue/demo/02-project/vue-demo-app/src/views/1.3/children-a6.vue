<template>
  <div>
    <h1>A 节点</h1>
    <button @click="init=!init">插入</button>
    <div v-if="init">
      <children-b :number="1"/>
      <children-b :number="2"/>
      <children-b :number="3"/>
    </div>
    <div v-else>
      <children-b :number="1"/>
      <children-b :number="4"/>
      <children-b :number="2"/>
      <children-b :number="3"/>
    </div>
  </div>
</template>

<script>
  import ChildrenB from '@/views/1.3/children-b'

  export default {
    data() {
      return {
        init: true
      }
    },
    components: {
      ChildrenB
    }
  }
</script>
