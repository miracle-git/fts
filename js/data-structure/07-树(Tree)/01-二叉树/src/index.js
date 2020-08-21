// webpack-dev-server
import BinarySearchTree from "./tree";

const bst = new BinarySearchTree()

const keys = [11, 7, 15, 5, 3, 6, 9, 8, 10, 13, 12, 14, 20, 18, 25]
keys.forEach(item => bst.insert(item))
console.log(`先序遍历：${bst.preOrder()}`)
console.log(`中序遍历：${bst.midOrder()}`)
console.log(`后序遍历：${bst.postOrder()}`)
console.log(`最小值：${bst.min()}`)
console.log(`最大值：${bst.max()}`)
console.log(`查找18：${bst.search(18)}`)
console.log(`查找24：${bst.search(24)}`)