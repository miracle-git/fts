// 引入polyfill(优先其他库引入,全量加载)
// import '@babel/polyfill'
// 使用es6规范定义
const add = (x, y) => x + y;

const sum = add(10, 20);
console.log(`sum = ${sum}`);

const promise = new Promise((resolve) => {
  setTimeout(() => {
    console.log('promise completed!');
    resolve();
  }, 1000);
});
console.log(promise);
