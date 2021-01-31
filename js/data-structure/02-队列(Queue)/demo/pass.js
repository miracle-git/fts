// 击鼓传花
import Queue from '@/queue'

export default function pass(names, num) {
  const queue = new Queue()
  // 将所有人依次加入到队列中
  names.forEach(item => queue.enqueue(item))
  // 重复数数
  while (queue.size() > 1) {
    // 开始数数，不是num时加入队列末尾
    for (let i = 1; i < num; i++) {
      queue.enqueue(queue.dequeue())
    }
    // 反之将其从队列中删除
    queue.dequeue()
  }
  // 获取剩下的这个人
  return queue.front()
}