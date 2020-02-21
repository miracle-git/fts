import Vue from 'vue'

const MyComponent = {
  model: {
    prop: 'value1',
    event: 'change'
  },
  props: ['value1'],
  template: `
    <input type="text" @input="handleInput" :value="value1"/>
  `,
  methods: {
    handleInput(e) {
      // this.$emit('input', demo.target.value)
      this.$emit('change', e.target.value)
    }
  }
}

new Vue({
  el: '#root',
  template: `
    <!--<my-component :value="value" @input="value=arguments[0]"/>-->
    <my-component v-model="value"/>
  `,
  data: {
    value: 'Miracle'
  },
  components: {
    MyComponent
  }
})
