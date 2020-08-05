> [前端设计模式集锦](https://github.com/miracle-git/fts/tree/master/js/design-pattern)。

## 运行步骤
- 打开design-pattern项目安装依赖包
```bash
npm install
```
- 打开每一个设计模式示例
```bash
webpack              // 打包示例
webpack-dev-server   // 本地运行
```
- 如果有些示例包含webpack.demo.config.js
```bash
webpack-dev-server --config webpack.demo.config.js
```
- 如果有些示例包含node脚本, 进入脚本当前目录
```bash
node xxx.js
```
- 如果运行综合案例, 进入案例目录并启动服务器和客户端
```bash
http-server -p 9000 (启动服务器，需全局安装http-server: npm install http-server -g)
webpack-dev-server (启动客户端，运行案例)
```
- 接下来，就开始学习前端设计模式把!
