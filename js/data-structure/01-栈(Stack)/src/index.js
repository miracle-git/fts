// webpack-dev-server
import Stack from './stack'

const stack = new Stack()
stack.push(1)
stack.push(2)
stack.push(3)
stack.push(4)
console.log(stack.toString()) // 1 2 3 4
stack.pop()
stack.pop()
console.log(stack.toString()) // 1 2
console.log(stack.peek())     // 2
console.log(stack.size())     // 2
console.log(stack.isEmpty())  // false
