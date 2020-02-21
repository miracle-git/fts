<template>
  <div>
    <h2>v-text</h2>
    <div v-text="msg">Hello Vue</div>
    <h2>v-html</h2>
    <div v-html="htmlMsg">Hello Vue</div>
    <h2>v-show</h2>
    <div v-show="show">Hello Vue</div>
    <button @click="show=!show">Change Show</button>
    <h2>v-if v-else-if v-else</h2>
    <div v-if="number % 3==1">Hello Vue {{number}}</div>
    <div v-else-if="number % 3==2">Hello World {{number}}</div>
    <div v-else>Hello Miracle {{number}}</div>
    <h2>v-for v-bind</h2>
    <div v-for="item in [1,2,3]" v-bind:key="item">Hello Vue {{item}}</div>
    <h2>v-on</h2>
    <button v-on:click="number=number+1">number++</button>
    <h2>v-model</h2>
    <input type="text" v-model="msg"/>
    <h2>v-pre</h2>
    <div v-pre>{{this text will not be compiled}}</div>
    <h2>v-once</h2>
    <div v-once>{{number}}</div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        msg: 'Hello Miracle',
        htmlMsg: '<span style="color:red">Hello Miracle</span>',
        show: true,
        number: 1
      }
    }
  }
</script>
