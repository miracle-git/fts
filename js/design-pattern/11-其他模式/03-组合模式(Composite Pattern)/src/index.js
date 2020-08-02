// webpack-dev-server
// <div id="app" class="container">
//   <p>123</p>
//   <span>456</span>
// </div>
const vnode = {
  tag: 'div',
  attr: {
    id: 'app',
    className: 'container',
    children: [
      {
        tag: 'p',
        attr: {},
        children: ['123']
      },
      {
        tag: 'span',
        attr: {},
        children: ['456']
      }
    ]
  }
}
