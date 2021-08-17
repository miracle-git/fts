const path = require('path')

function addStyleResource(rule) {
  rule.use('style-resource')
    .loader('style-resources-loader')
    .options({
      patterns: [
        path.resolve(__dirname, './src/styles/vars.less')
      ]
    })
}

module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/cart/' : '',
  chainWebpack: config => {
    const types = ['vue-modules', 'vue', 'normal-modules', 'normal']
    types.forEach(item => addStyleResource(config.module.rule('less').oneOf(item)))
  },
  devServer: {
    // before(app) {
    //   app.get('/api/courses', (req, res) => {
    //     setTimeout(() => {
    //       res.json([
    //         { name: 'vue', price: 800 },
    //         { name: 'react', price: 600 },
    //         { name: 'node', price: 500 }
    //       ])
    //     }, 1000)
    //   })
    // },
    proxy: 'http://localhost:3000'
  }
}
