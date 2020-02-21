import Vue from 'vue'

new Vue({
  el: '#root',
  template: `
    <div>
      <p v-text="name"></p>
      <p v-html="html"></p>
      <p v-pre>Name(v-pre): {{name}}</p>
      <p v-once>Name(v-once): {{name}}</p>
      <p>
        <input type="text" v-model.trim="name"/>
        <input type="text" v-model.lazy="name"/>
        <input type="text" v-model.number="number"/>
        <input type="checkbox" v-model="active"/>
      </p>
      <p>
         <input type="checkbox" :value="1" v-model="arr"/>
         <input type="checkbox" :value="2" v-model="arr"/>
         <input type="checkbox" :value="3" v-model="arr"/>
      </p>
       <p>
         <input type="radio" :value="1" v-model="picked"/>
         <input type="radio" :value="2" v-model="picked"/>
         <input type="radio" :value="3" v-model="picked"/>
      </p>
      <p v-show="visible">Name(v-show): {{name}}</p>
      <p v-if="active">Name(v-if): {{name}}</p>
      <p v-else-if="number === 0">else if content</p>
      <p v-else>else content</p>
      <ul>
        <!--不建议使用index作为key-->
        <li v-for="(item, index) in arr" :key="item">{{item}}--{{index}}</li>
      </ul>
      <ul>
        <li v-for="(val, key, index) in obj" :key="key">{{key}}--{{val}}--{{index}}</li>
      </ul>
    </div>
  `,
  data: {
    name: 'Miracle',
    html: '<span style="color: red;">123</span>',
    visible: true,
    active: false,
    number: 0,
    picked: 1,
    arr: [1, 2, 3],
    obj: {
      a: 1,
      b: 2,
      c: 3
    }
  }
})
