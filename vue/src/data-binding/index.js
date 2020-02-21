import Vue from 'vue'

new Vue({
  el: '#root',
  template: `
    <!--<div :class="{'active': isActive}">-->
    <!--<div :class="[isActive ? 'active' : '']">-->
    <!--<div :class="[{'active': isActive}]">-->
    <div :class="classNames" :style="[styles, newStyles]">
      {{isActive ? 'active' : 'not active'}}
      {{arr.join(' ')}}
      {{Date.now()}}
      <p v-html="html" :id="id" @click="handleClick"></p>
      <!--<p v-html="html" v-bind:id="id" v-on:click="handleClick"></p>-->
    </div>
  `,
  data: {
    isActive: true,
    arr: [1, 2, 3],
    html: '<span style="color: red">点我!</span>',
    id: 'test',
    styles: {
      color: 'red'
    },
    newStyles: {
      color: 'black',
      fontSize: '14px',
      appearance: 'none' // 自动加前缀
    }
  },
  computed: {
    classNames() {
      return this.isActive ? 'active' : ''
    }
  },
  methods: {
    handleClick() {
      alert('clicked!')
    }
  }
})
