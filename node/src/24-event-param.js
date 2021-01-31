const EventEmitter = require('events');

class MyEvent extends EventEmitter {}

const me = new MyEvent();
me.on('error', (err, time) => {
  console.log(err);
  console.log(time);
});

me.emit('error', new Error('oops'), Date.now());