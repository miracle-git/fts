<template>
  <div>
    <h1>A 节点</h1>
    <button @click="init=!init">插入</button>
    <div v-if="init">
      <children-b :key="1" :number="1"/>
      <children-b :key="2" :number="2"/>
      <children-b :key="3" :number="3"/>
    </div>
    <div v-else>
      <children-b :key="1" :number="1"/>
      <children-b :key="4" :number="4"/>
      <children-b :key="2" :number="2"/>
      <children-b :key="3" :number="3"/>
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
