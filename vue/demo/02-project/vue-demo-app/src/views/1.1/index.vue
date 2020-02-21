<template>
  <a-tabs>
    <a-tab-pane key="props" tab="属性">
      <props name="Hello Vue!"
             :type="type"
             :visible="true"
             :on-change="handlePropChange"
             title="Vue属性组件"
             class="test1"
             :class="['test2']"
             :style="{ marginTop: '20px' }"
             style="margin-top: 10px"/>
    </a-tab-pane>
    <a-tab-pane key="event" tab="事件">
      <event :name="name" @change="handleEventChange"/>
    </a-tab-pane>
    <a-tab-pane key="slot" tab="插槽">
      <h2>2.6 新语法</h2>
      <my-slot>
        <p>Default slot</p>
        <template v-slot:title>
          <p>Title slot1</p>
          <p>Title slot2</p>
        </template>
        <template v-slot:item="props">
          <p>Item scope-slot {{props.name}}</p>
        </template>
      </my-slot>
      <h2>老语法</h2>
      <my-slot>
        <p>Default slot</p>
        <p slot="title">Title slot1</p>
        <p slot="title">Title slot2</p>
        <p slot="item" slot-scope="props">Item scope-slot {{props.name}}</p>
      </my-slot>
    </a-tab-pane>
    <a-tab-pane key="big-props" tab="大属性">
      <big-props :name="bigPropsName"
                 :on-change="handleBigPropsChange"
                 :slot-default="getDefaultSlot()"
                 :slot-title="getTitleSlot()"
                 :slot-scope-item="getItemScopeSlot"/>
    </a-tab-pane>
  </a-tabs>
</template>

<script>
  import Props from '@/views/1.1/props'
  import Event from '@/views/1.1/event'
  import Slot from '@/views/1.1/slot'
  import BigProps from '@/views/1.1/big-props'

  export default {
    data() {
      return {
        name: '',
        type: 'success',
        bigPropsName: 'Hello Big Props!'
      }
    },
    methods: {
      handlePropChange(val) {
        this.type = val
      },
      handleEventChange(val) {
        this.name = val
      },
      handleBigPropsChange(val) {
        this.bigPropsName = val
      },
      getDefaultSlot() {
        return [
          this.$createElement('p', 'Default slot')
        ]
      },
      getTitleSlot() {
        return [
          this.$createElement('p', 'Title slot1'),
          this.$createElement('p', 'Title slot2')
        ]
      },
      getItemScopeSlot(props) {
        return [
          this.$createElement('p', `Item scope-slot ${props.name}`)
        ]
      }
    },
    components: {
      Props,
      Event,
      MySlot: Slot,
      BigProps
    }
  }
</script>
