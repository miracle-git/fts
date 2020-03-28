/* webpack 入口起点文件 */

/*
* 1. 运行指令：
* 01 - 开发环境：webpack --mode=development ./src/index.js -o ./dist/bundle.js
* 02 - 生产环境：webpack --mode=production ./src/index.js -o ./dist/bundle.js
* 2. 结论：
* 01 - webpack默认只能处理js/json资源，不能处理css/img等其他资源
* 02 - 开发环境和生产环境都能将ES6模块编译成浏览器能识别的模块
* 03 - 生产环境相比开发环境而言，生产环境会压缩代码
* */
// import './index.css'
import data from './data.json'
console.log(data)

function add(x, y) {
  return x + y
}

const sum = add(10, 20)
console.log('sum = ' + sum)
