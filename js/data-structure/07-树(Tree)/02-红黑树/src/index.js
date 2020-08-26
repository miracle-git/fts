// webpack-dev-server
import RedBlackTree from './rbt'

const rbt = new RedBlackTree()

const keys = [11, 7, 15, 5, 3, 6, 9, 8, 10, 13, 12, 14, 20, 18, 19, 25]
keys.forEach(item => rbt.insert(item))
console.log(`先序遍历：${rbt.preorder()}`)
console.log(`中序遍历：${rbt.midorder()}`)
console.log(`后序遍历：${rbt.postorder()}`)
console.log(`最小值：${rbt.min()}`)
console.log(`最大值：${rbt.max()}`)
console.log(`查找18：${rbt.search(18)}`)
console.log(`查找24：${rbt.search(24)}`)
rbt.remove(7)
rbt.remove(9)
rbt.remove(15)
console.log(`删除7，9，15之后：${rbt.preorder()}`)