<template>
  <div>
    {{name}}<br>
    <button @click="handleChange">Change Name</button><br>
    <v-node :data="slotDefault"/>
    <v-node :data="slotTitle"/>
    <v-node :data="slotScopeItem({name: 'Miracle'})"/>
  </div>
</template>

<script>
  export default {
    methods: {
      handleChange() {
        this.onChange('Hello Miracle!')
      }
    },
    props: {
      name: String,
      onChange: {
        type: Function,
        default: () => {}
      },
      slotDefault: Array,
      slotTitle: Array,
      slotScopeItem: {
        type: Function,
        default: () => {}
      }
    },
    components: {
      VNode: {
        functional: true,
        render: (h, ctx) => ctx.props.data
      }
    }
  }
</script>
