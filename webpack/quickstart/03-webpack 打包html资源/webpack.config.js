const { resolve } = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  // 模式
  mode: 'development', // development | production
  // 入口配置
  entry: './src/index.js',
  // 输出配置
  output: {
    // 输出路径
    path: resolve(__dirname, 'dist'),
    // 输出文件名
    filename: 'bundle.js'
  },
  // loader配置
  module: {
    // 处理规则
    rules: [
      {
        // 处理css资源
        test: /\.css$/,
        // 执行顺序：从后向前依次执行（也可说从右往左，从下往上）
        use: [
          'style-loader', // 创建style标签，将js中的样式资源插入到style标签并添加到head标签
          'css-loader' // 将css资源编译成commonjs模块加载到js中，但仍然保持样式字符串的形式
        ]
      },
      {
        // 处理less资源
        test: /\.less$/,
        // 执行顺序：从后向前依次执行（也可说从右往左，从下往上）
        use: [
          'style-loader', // 创建style标签，将js中的样式资源插入到style标签并添加到head标签
          'css-loader', // 将css资源编译成commonjs模块加载到js中，但仍然保持样式字符串的形式
          'less-loader' // 将less资源编译成css资源
        ]
      }
    ]
  },
  // 插件配置
  plugins: [
    // new HtmlWebpackPlugin() // 在输出目录默认创建一个index.html文件，引入打包的所有资源(js/css)
    new HtmlWebpackPlugin({
      template: './index.html' // 复制指定template对应的index.html并自动引入所有打包后的资源(js/css)
    })
  ]
}
