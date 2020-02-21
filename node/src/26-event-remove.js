const EventEmitter = require('events');

class MyEvent extends EventEmitter {}

function fn1() {
  console.log('fn1');
}
function fn2() {
  console.log('fn2');
}

const me = new MyEvent();
me.on('test', fn1);
me.on('test', fn2);

setInterval(() => {
  me.emit('test');
}, 1000);

setTimeout(() => {
  // me.removeListener('test', fn2);
  me.removeAllListeners();
}, 3000);