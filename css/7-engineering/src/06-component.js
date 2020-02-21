// require('./06-component-css.css')
//
// module.exports = {
//   init: function ($dom) {
//     $dom.innerHTML = `
//       <p class="p">这是一个自定义组件</p>
//       <p class="p red">这是一段红色的文本</p>
//       <p class="p green">这是一段绿色的文本</p>
//     `
//   }
// };

const styles = require('./06-component-css.css');

module.exports = {
  init: function ($dom) {
    $dom.innerHTML = `
      <p class="${styles.p}">这是一个自定义组件</p>
      <p class="${styles.p} ${styles.red}">这是一段红色的文本</p>
      <p class="${styles.p} ${styles.green}">这是一段绿色的文本</p>
    `
  }
};
