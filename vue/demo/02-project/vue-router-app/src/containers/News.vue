<template>
 <div>
   <ul>
     <li v-for="(item, index) in items" :key="index">{{item}}</li>
   </ul>
   <input type="text" v-model="name"/>
 </div>
</template>

<script>
  export default {
    data () {
      return {
        name: '',
        items: ['News001', 'News002', 'News003']
      }
    }
  }
</script>
