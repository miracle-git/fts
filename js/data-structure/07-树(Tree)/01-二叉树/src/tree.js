// 私有标记Symbol
const _bst_s = Symbol('bst static methods')
const _bst_i = Symbol('bst instance methods')
// 二叉搜索树节点
class TreeNode {
  constructor(key) {
    this.key = key
    this.left = null
    this.right = null
  }
}
// 二叉搜索树(BST)
export default class BinarySearchTree {
  constructor() {
    this.root = null // 根节点
    // 私有实例成员
    this[_bst_i] = {
      insertNode: (node, newNode) => {
        // 判断新节点应该插入node的左子树还是右子树
        if (newNode.key < node.key) {
          // 判断左子树是否存在
          if (!node.left) {
            node.left = newNode
          } else {
            this[_bst_i].insertNode(node.left, newNode)
          }
        } else {
          // 判断右子树是否存在
          if (!node.right) {
            node.right = newNode
          } else {
            this[_bst_i].insertNode(node.right, newNode)
          }
        }
      },
      traverseNode: (node, order, handler) => {
        if (node) {
          order === 'pre' && handler(node.key)
          this[_bst_i].traverseNode(node.left, order, handler)
          order === 'mid' && handler(node.key)
          this[_bst_i].traverseNode(node.right, order, handler)
          order === 'post' && handler(node.key)
        }
      },
      traverseOrder: (order) => {
        let res = ''
        this[_bst_i].traverseNode(this.root, order, key => res += res ? '->' + key : key)
        return res
      },
      searchNode: (node, key) => {
        if (!node) return false
        if (key < node.key) {
          // 如果传入的key比当前节点的key小，从左子树找
          return this[_bst_i].searchNode(node.left, key)
        } else if (key > node.key) {
          // 如果传入的key比当前节点的key大，从右子树找
          return this[_bst_i].searchNode(node.right, key)
        } else {
          // 在此已经找到key了
          return true
        }
      }
    }
  }
  // 私有静态成员
  static [_bst_s] = {
  }
  // 插入节点
  insert(key) {
    // 初始化新节点
    const newNode = new TreeNode(key)
    // 判断根节点是否存在
    if (!this.root) {
      this.root = newNode
    } else {
      this[_bst_i].insertNode(this.root, newNode)
    }
  }
  // 先序遍历
  preOrder() {
    return this[_bst_i].traverseOrder('pre')
  }
  // 中序遍历
  midOrder() {
    return this[_bst_i].traverseOrder('mid')
  }
  // 后序遍历
  postOrder() {
    return this[_bst_i].traverseOrder('post')
  }
  // 最小值
  min() {
    let node = this.root || {}
    while (node.left) {
      node = node.left
    }
    return node.key || ''
  }
  // 最大值
  max() {
    let node = this.root || {}
    while (node.right) {
      node = node.right
    }
    return node.key || ''
  }
  // 搜索特定的key
  search(key) {
    return this[_bst_i].searchNode(this.root, key)
  }
}