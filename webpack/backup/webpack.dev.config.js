const path = require('path');
// const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  // mode: 'development', // development | production(默认)
  entry: './src/index.js',
  output: {
    filename: 'bundle.[hash:8].js', // bundle.js生成文件名hash(可指定位数)
    path: path.resolve(__dirname, 'dist')
  },
  // devtool: 'source-map', // 额外产生一个.js.map文件，可以定位错误代码的行和列
  // devtool: 'eval-source-map', // 不会额外产生一个.js.map文件，可以定位错误代码的行和列
  // devtool: 'cheap-module-source-map', // 额外产生一个.js.map文件，不包含错误的列信息
  devtool: 'cheap-module-eval-source-map', // 不会额外产生一个.js.map文件，不包含错误的列信息
  module: {
    // less-loader 负责解析less转化为css
    // css-loader 负责解析@import
    // style-loader 负责css插入到head标签中
    // loader处理顺序：从右向左执行，从下往上执行
    // loader还可以对象形式(传入options参数)
    rules: [
      {
        test: /\.css$/,
        use: [
          /*{
            loader: 'style-loader',
            options: {
              insertAt: 'top' // 将打包样式插入到用户内样样式的上面
            }
          },*/
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader'
        ]
      },
      {
        test: /\.less$/,
        use: [
          /*{
            loader: 'style-loader',
            options: {
              insertAt: 'top' // 将打包样式插入到用户内样样式的上面
            }
          },*/
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
          'less-loader'
        ]
      },
      {
        test: /\.js$/,
        use: 'babel-loader',
        exclude: /node_modules/,
        include: path.resolve(__dirname, 'src')
      },
      {
        test: /\.(gif|jpg|jpeg|png|svg|ico)$/,
        // use: 'file-loader', // 将图片以url方式输出
        use: {
          loader: 'url-loader',
          options: {
            limit: 8096 // 当图片小于8K时以base64形式输出，大于8K以url形式输出
          }
        }
      },
      {
        test: /\.(htm|html)$/,
        use: [
          'html-withimg-loader',
          {
            loader: 'html-loader',
            options: {
              attrs: ['img:src', 'link:href']
            }
          }
        ]
      }
      /*
      {
        test: /\.js$/,
        use: {
          loader: 'eslint-loader',
          options: {
            enforce: 'pre' // 强制eslint在其他loader之前执行(pre,post)
          }
        },
        exclude: /node_modules/,
        include: path.resolve(__dirname, 'src')
      }*/
      // {
      //   test: require.resolve('jquery'),
      //   use: 'expose-loader?$'
      // }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html',
      favicon: './favicon.ico',
      filename: 'index.html'
    }),
    new MiniCssExtractPlugin({
      filename: 'main.css'
    }),
    // new webpack.ProvidePlugin({
    //   $: 'jquery'
    // })
  ],
  externals: {
    'jquery': '$'
  },
  devServer: {
    contentBase: './dist',
    compress: true,
    // open: true, // 默认自动打开浏览器
    port: 3000, // 默认8080
    progress: true
  }
};