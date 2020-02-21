const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin');
const UglifyJsWebpackPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
  // mode: 'production', // development | production(默认)
  entry: './src/index.js',
  output: {
    filename: 'bundle.[hash:8].js', // bundle.js生成文件名hash(可指定位数)
    path: path.resolve(__dirname, 'dist'),
    publicPath: ''
    // publicPath: 'http://static.cdn.com'
  },
  devtool: 'cheap-module-source-map',
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
        use: ['babel-loader'],
        exclude: /node_modules/,
        include: path.resolve(__dirname, 'src')
      },
      {
        test: /\.(gif|jpg|jpeg|png|svg|ico)$/,
        // use: 'file-loader', // 将图片以url方式输出
        use: {
          loader: 'url-loader',
          options: {
            limit: 8096, // 当图片小于8K时以base64形式输出，大于8K以url形式输出
            outputPath: '/img/', // 将图片打包输出到/img/目录下
            // publicPath: 'http://static.cdn.com'
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
      },
      {
        test: require.resolve('jquery'),
        use: 'expose-loader?$'
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html',
      favicon: './favicon.ico',
      filename: 'index.html',
      minify: {
        removeAttributeQuotes: true, // 删除index.html文件中的双引号
        removeComments: true, // 删除index.html文件中的注释
        collapseWhitespace: true, // 将文件压缩到一行
      },
      hash: true // bundle.js文件生成hash串后缀防止缓存
    }),
    new MiniCssExtractPlugin({
      filename: 'css/main.css'
    })
  ],
  externals: {
    'jquery': '$'
  },
  optimization: {
    minimizer: [
      new UglifyJsWebpackPlugin({
        cache: true,
        parallel: true,
        sourceMap: true
      }),
      new OptimizeCssAssetsWebpackPlugin()
    ]
  }
};