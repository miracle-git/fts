<template>
  <div>
    <slot/>
    <slot name="title"/>
    <slot name="item" v-bind="{name: 'Miracle'}"/>
  </div>
</template>

<script>
  export default {
  }
</script>
