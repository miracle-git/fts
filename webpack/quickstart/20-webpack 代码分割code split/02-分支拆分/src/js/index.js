// 引入polyfill(优先其他库引入,全量加载)
// import '@babel/polyfill'
/* 导入iconfont文件 */
import '../css/iconfont.css';
/* 导入less */
import '../css/index.less';
// 引入第三方库jquery
import $ from 'jquery';

console.log($);

// 使用es6规范定义
const add = (x, y) => x + y;

const sum = add(10, 20);
console.log(`sum = ${sum}`);
