<template>
  <a-tabs>
    <a-tab-pane key="children-a1" tab="1-移动">
      <children-a1/>
    </a-tab-pane>
    <a-tab-pane key="children-a2" tab="2-删除新建">
      <children-a2/>
    </a-tab-pane>
    <a-tab-pane key="children-a3" tab="3-删除新建">
      <children-a3/>
    </a-tab-pane>
    <a-tab-pane key="children-a4" tab="4-更新新建(无key)">
      <children-a4/>
    </a-tab-pane>
    <a-tab-pane key="children-a5" tab="5-移动(有key)">
      <children-a5/>
    </a-tab-pane>
    <a-tab-pane key="children-a6" tab="6-更新插入(无key)">
      <children-a6/>
    </a-tab-pane>
    <a-tab-pane key="children-a7" tab="7-插入(有key)">
      <children-a7/>
    </a-tab-pane>
  </a-tabs>
</template>

<script>
  import ChildrenA1 from '@/views/1.3/children-a1'
  import ChildrenA2 from '@/views/1.3/children-a2'
  import ChildrenA3 from '@/views/1.3/children-a3'
  import ChildrenA4 from '@/views/1.3/children-a4'
  import ChildrenA5 from '@/views/1.3/children-a5'
  import ChildrenA6 from '@/views/1.3/children-a6'
  import ChildrenA7 from '@/views/1.3/children-a7'

  export default {
    components: {
      ChildrenA1,
      ChildrenA2,
      ChildrenA3,
      ChildrenA4,
      ChildrenA5,
      ChildrenA6,
      ChildrenA7
    }
  }
</script>

<style>
  .border,
  .border1,
  .border2 {
    border: 1px solid #000;
    padding: 10px 0;
    margin: 10px 10px 0;
  }
  .border1 {
    border-color: #ccc;
  }
  .border2 {
    border-color: #eee;
  }
</style>
