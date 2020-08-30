import BinarySearchTree from './bst'

// 私有标记Symbol
const _rbt_s = Symbol('rbt static members')
const _rbt_i = Symbol('rbt instance members')
// 红黑树节点
class TreeNode {
  constructor(key, val) {
    this.key = key
    this.val = val
    this.left = null
    this.right = null
    this.color = RedBlackTree[_rbt_s].colors.red
  }
}
// 红黑树(RBT)
export default class RedBlackTree extends BinarySearchTree {
  constructor() {
    super()
    this.size = 0
    // 私有实例成员
    this[_rbt_i] = {
      insertNode: (node, key, val) => {
        if (!node) {
          this.size++
          return new TreeNode(key, val)
        }
        if (key < node.key) {
          node.left = this[_rbt_i].insertNode(node.left, key, val)
        } else if (key > node.key) {
          node.right = this[_rbt_i].insertNode(node.right, key, val)
        } else {
          node.val = val
        }
        if (this[_rbt_i].isRed(node.right) && !this[_rbt_i].isRed((node.left))) {
          node = this[_rbt_i].rotateLeft(node)
        }
        if (this[_rbt_i].isRed(node.left) && this[_rbt_i].isRed((node.left.left))) {
          node = this[_rbt_i].rotateRight(node)
        }
        if (this[_rbt_i].isRed(node.left) && this[_rbt_i].isRed(node.right)) {
          this[_rbt_i].flipColor(node)
        }
        return node
      },
      isRed: (node) => {
        return !node ? false : node.color === RedBlackTree[_rbt_s].colors.red
      },
      // 颜色翻转
      flipColor: (node) => {
        node.color = RedBlackTree[_rbt_s].colors.red
        node.left && (node.left.color = RedBlackTree[_rbt_s].colors.black)
        node.right && (node.right.color = RedBlackTree[_rbt_s].colors.black)
      },
      // 左旋转，右红左黑
      rotateLeft: (node) => {
        const current = node.right
        node.right = current.left
        current.left = node
        current.color = node.color
        node.color = RedBlackTree[_rbt_s].colors.red
        return current
      },
      // 右旋转，左红左子红
      rotateRight: (node) => {
        const current = node.left
        node.left = current.right
        current.right = node
        current.color = node.color
        node.color = RedBlackTree[_rbt_s].colors.red
        return current
      },
      traverseNode: (node, order, handler) => {
        if (node) {
          order === 'pre' && handler(node)
          this[_rbt_i].traverseNode(node.left, order, handler)
          order === 'mid' && handler(node)
          this[_rbt_i].traverseNode(node.right, order, handler)
          order === 'post' && handler(node)
        }
      },
      traverseOrder: (order) => {
        let res = ''
        this[_rbt_i].traverseNode(this.root, order, node => res += res ? `->(${node.key},${node.color})`: `(${node.key},${node.color})`)
        return res
      }
    }
  }
  // 私有静态成员
  static [_rbt_s] = {
    colors: {
      red: 'red',
      black: 'black'
    }
  }
  // 插入节点
  insert(key, val) {
    this.root = this[_rbt_i].insertNode(this.root, key, val)
    // 根节点永远都是黑色
    this.root.color = RedBlackTree[_rbt_s].colors.black
  }
  // 删除节点
  remove(key) {
  }
  // 先序遍历
  preorder() {
    return this[_rbt_i].traverseOrder('pre')
  }
  // 中序遍历
  midorder() {
    return this[_rbt_i].traverseOrder('mid')
  }
  // 后序遍历
  postorder() {
    return this[_rbt_i].traverseOrder('post')
  }
}