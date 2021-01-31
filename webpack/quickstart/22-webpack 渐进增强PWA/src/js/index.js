// 引入polyfill(优先其他库引入,全量加载)
// import '@babel/polyfill'
/* 导入iconfont文件 */
import '../css/iconfont.css';
/* 导入less */
import '../css/index.less';

// 注册ServiceWorker
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/service-worker.js')
      .then(() => console.log('ServiceWorker注册成功！'))
      .catch(() => console.log('ServiceWorker注册失败！'));
  });
}
