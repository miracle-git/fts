import BinarySearchTree from './bst'

// 私有标记Symbol
const _rbt_i = Symbol('rbt instance methods')
// 红黑树节点
class TreeNode {
  constructor(key) {
    this.key = key
    this.left = null
    this.right = null
    this.color = 'red'
  }
}
// 二叉搜索树(BST)
export default class RedBlackTree extends BinarySearchTree {
  constructor() {
    super()
    this.root = null // 根节点
    // 私有实例成员
    this[_rbt_i] = {
    }
  }
  // 插入节点
  insert(key) {
    // 初始化新节点
    const newNode = new TreeNode(key)
    // 判断根节点是否存在
    if (!this.root) {
      this.root = newNode
    } else {
      this[_rbt_i].insertNode(this.root, newNode)
    }
  }
  // 删除节点
  remove(key) {
    let current = this.root
    let parent = null // 当前节点的父节点
    let isLeft = true // 是否向左查找
    // 寻找删除的节点
    while (current && current.key !== key) {
      parent = current
      if (key < current.key) {
        // 向左子树查找
        isLeft = true
        current = current.left
      } else {
        // 向右子树查找
        isLeft = false
        current = current.right
      }
    }
    // 如果未查找到节点直接返回false
    if (!current) return false
    // 如果当前删除的节点为叶子节点
    if (!current.left && !current.right) {
      // 如果当前删除节点是根节点
      if (current === this.root) {
        this.root = null
      } else {
        isLeft ? parent.left = null : parent.right = null
      }
    } else if (!current.left) {
      // 如果当前删除的节点只有一右子节点
      if (current === this.root) {
        this.root = current.right
      } else {
        isLeft ? parent.left = current.right : parent.right = current.right
      }
    } else if (!current.right) {
      // 如果当前删除的节点只有一左子节点
      if (current === this.root) {
        this.root = current.left
      } else {
        isLeft ? parent.left = current.left : parent.right = current.left
      }
    } else {
      // 如果当前删除的节点有两个子节点
      const successor = this.successor(current)
      // 如果当前删除节点是根节点
      if (current === this.root) {
        this.root = successor
      } else {
        isLeft ? parent.left = successor : parent.right = successor
      }
      // 将后继节点的左子树指向原来删除节点的左子树
      successor.left = current.left
    }
  }
}