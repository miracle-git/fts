const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const resolve = (dir) => path.resolve(__dirname, dir)

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    path: resolve('./dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /(node_modules)/
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html'
    })
  ],
  devServer: {
    contentBase: resolve('./dist'),
    open: true,
    port: 8080
  }
}