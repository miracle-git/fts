// webpack-dev-server
import BinarySearchTree from "./tree";

const bst = new BinarySearchTree()

const keys = [11, 7, 15, 5, 3, 6, 9, 8, 10, 13, 12, 14, 20, 18, 19, 25]
keys.forEach(item => bst.insert(item))
console.log(`先序遍历：${bst.preorder()}`)
console.log(`中序遍历：${bst.midorder()}`)
console.log(`后序遍历：${bst.postorder()}`)
console.log(`最小值：${bst.min()}`)
console.log(`最大值：${bst.max()}`)
console.log(`查找18：${bst.search(18)}`)
console.log(`查找24：${bst.search(24)}`)
bst.remove(7)
bst.remove(9)
bst.remove(15)
console.log(`删除7，9，15之后：${bst.preorder()}`)