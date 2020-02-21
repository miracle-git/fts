// const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');

module.exports = {
  module: {
    rules: [
      { test: /\.css$/, use: ['style-loader', {
           loader: 'css-loader',
          options: {
             modules: true
          }
        }] },
      // { test: /\.css$/, use: ExtractTextWebpackPlugin.extract({
      //     fallback: 'style-loader',
      //     use: {
      //       loader: 'css-loader',
      //       options: {
      //         modules: true // 支持css-modules
      //       }
      //     }
      //   })}
    ]
  },
  plugins: [
    // new ExtractTextWebpackPlugin('06-module-main.css')
  ]
};
