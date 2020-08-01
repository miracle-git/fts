// webpack-dev-server --config webpack.demo.config.js
import { agent } from './es6-proxy'

console.log(agent.name)
console.log(agent.age)
console.log(agent.phone)
console.log(`明星出场费: ${agent.price}`)

agent.customPrice = 1200000
console.log(`最新出场费: ${agent.customPrice}`)
agent.customPrice = 900000
console.log(`最新出场费: ${agent.customPrice}`)