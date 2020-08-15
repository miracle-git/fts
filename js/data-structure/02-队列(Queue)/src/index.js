// webpack-dev-server
import Queue from './queue'
import PriorityQueue from './priority-queue'

const queue = new Queue()
queue.enqueue(1)
queue.enqueue(2)
queue.enqueue(3)
queue.enqueue(4)
console.log(queue.toString()) // 1 2 3 4
queue.dequeue()
queue.dequeue()
console.log(queue.toString()) // 3 4
console.log(queue.front())    // 3
console.log(queue.size())     // 2
console.log(queue.isEmpty())  // false

const priorityQueue = new PriorityQueue()
priorityQueue.enqueue(1, 10)
priorityQueue.enqueue(2, 40)
priorityQueue.enqueue(3, 50)
priorityQueue.enqueue(4, 20)
console.log(priorityQueue.toString()) // 1-10 4-20 2-40 3-50
