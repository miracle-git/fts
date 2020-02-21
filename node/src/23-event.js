const EventEmitter = require('events');

class MyEvent extends EventEmitter {}

const me = new MyEvent();
me.on('test', () => {
  console.log('This is an event test!');
});

setInterval(() => {
  me.emit('test');
}, 1000);