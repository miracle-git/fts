<template>
  <a-tabs>
    <a-tab-pane key="clock" tab="时钟">
      <button @click="destroyClock=!destroyClock">{{destroyClock ? '加载时钟' : '销毁时钟'}}</button>
      <clock v-if="!destroyClock"/>
    </a-tab-pane>
    <a-tab-pane key="functional" tab="函数式组件">
      <functional :name="name"/>
      <temp-var :var1="`Hello ${name}`" :var2="destroyClock ? `Hello ${name}` : 'Hello Clock'">
        <template v-slot="{var1, var2}">
          <p>{{var1}}</p>
          <p>{{var2}}</p>
        </template>
      </temp-var>
    </a-tab-pane>
  </a-tabs>
</template>

<script>
  import Clock from '@/views/1.6/clock'
  import Functional from '@/views/1.6/functional'
  import TempVar from '@/views/1.6/temp-var'

  export default {
    components: {
      Clock,
      Functional,
      TempVar
    },
    data() {
      return {
        destroyClock: false,
        name: 'Miracle'
      }
    }
  }
</script>
