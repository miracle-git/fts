// webpack-dev-server
import RedBlackTree from './rbt'

const rbt = new RedBlackTree()
const keys = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]
keys.forEach(item => rbt.insert(item))
console.log(`先序遍历：${rbt.preorder()}`)
console.log(`中序遍历：${rbt.midorder()}`)
console.log(`后序遍历：${rbt.postorder()}`)
console.log(`最小值：${rbt.min()}`)
console.log(`最大值：${rbt.max()}`)
console.log(`查找8：${rbt.contains(8)}`)
console.log(`查找12：${rbt.contains(12)}`)
rbt.remove(7)
rbt.remove(9)
rbt.remove(15)
console.log(`删除7，9，15之后：${rbt.preorder()}`)
