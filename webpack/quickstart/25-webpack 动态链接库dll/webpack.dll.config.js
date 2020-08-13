// 对第三库打包
const { resolve } = require('path')
const webpack = require('webpack')
const TerserWebpackPlugin = require('terser-webpack-plugin')

process.env.NODE_ENV = 'production'

module.exports = {
  mode: 'production',
  entry: {
    vue: ['vue', 'vue-router', 'vuex']
  },
  // 输出配置
  output: {
    // 输出路径
    path: resolve(__dirname, 'dll'),
    // 输出文件名
    filename: '[name].dll.js',
    library: '[name]_[hash:8]' // 打包第三方库向外暴露的名称(全局变量)
  },
  // 插件配置
  plugins: [
    // 打包生成一个manifest.json(提供与第三方的映射关系)
    new webpack.DllPlugin({
      name: '[name]_[hash:8]', // 映射库向外暴露的名称
      path: resolve(__dirname, 'dll/[name].manifest.json') // 输出文件路径
    })
  ],
  // 可将node_modules中的包单独打包输出
  optimization: {
    minimize: true,
    minimizer: [
      // 配置生产环境的压缩方案：js和css
      new TerserWebpackPlugin({
        // 开启缓存
        cache: true,
        // 开启多进程打包
        parallel: true,
        // 启动source-map
        sourceMap: true
      })
    ]
  }
}
