// 引入polyfill(优先其他库引入,全量加载)
// import '@babel/polyfill'
/* 导入iconfont文件 */
import '../css/iconfont.css';
/* 导入less */
import '../css/index.less';

console.log('index.js模块被加载了');

// 懒加载&预加载
document.getElementById('btnLazy').onclick = () => {
  import(/* webpackChunkName:'calc', webpackPrefetch: true */'./calc').then(({ add }) => {
    const sum = add(10, 20);
    console.log(`sum = ${sum}`);
  });
};
