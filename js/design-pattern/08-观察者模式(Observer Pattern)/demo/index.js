// webpack-dev-server --config webpack.demo.config.js
const { emitter, Dog } = require('./nodejs-event')

emitter.emit('some', 'miracle')

const simon = new Dog('simon')
setInterval(() => simon.emit('bark'), 1000)
