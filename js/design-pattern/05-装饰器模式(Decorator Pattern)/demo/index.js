// webpack-dev-server --config webpack.demo.config.js
import * as ClassDecorator from './class-decorator'
import * as MethodDecorator from './method-decorator'
import * as CoreDecorator from './core-decorator'

console.log('******************类装饰器******************')
const user1 = new ClassDecorator.User()
user1.learn()

console.log('****************方法装饰器*******************')
const user2 = new MethodDecorator.User('Miracle', 'He')
console.log(user2.fullName())
// user2.fullName = 'Miracle He' // 报错
const result = MethodDecorator.Math.add(2, 3)
console.log(`result=${result}`)

console.log('**********使用core-decorator装饰器***********')
const user3 = new CoreDecorator.User('Miracle', 'He')
console.log(user3.fullName())
// user3.fullName = 'Miracle He' // 报错
console.log(user3.name)