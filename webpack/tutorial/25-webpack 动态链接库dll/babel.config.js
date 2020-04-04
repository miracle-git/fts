module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        // 按需加载
        useBuiltIns: 'usage',
        // 指定corejs版本
        corejs: {
          version: '3'
        },
        // 指定浏览器版本的兼容性配置
        targets: {
          chrome: '60',
          firefox: '90',
          safari: '10',
          ie: '9',
          edge: '16'
        }
      }
    ]
  ],
  plugins: ['@babel/plugin-syntax-dynamic-import']
}
