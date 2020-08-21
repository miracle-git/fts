// 二叉搜索树(BST)
class Node {
  constructor(key) {
    this.key = key
    this.left = null
    this.right = null
  }
}

const bsts = Symbol('bst static methods')
const bsti = Symbol('bst instance methods')

export default class BinarySearchTree {
  constructor() {
    this.root = null // 根节点
    this[bsti] = {
      insertNode: (node, newNode) => {
        // 判断新节点应该插入node的左子树还是右子树
        if (newNode.key < node.key) {
          // 判断左子树是否存在
          if (!node.left) {
            node.left = newNode
          } else {
            this[bsti].insertNode(node.left, newNode)
          }
        } else {
          // 判断右子树是否存在
          if (!node.right) {
            node.right = newNode
          } else {
            this[bsti].insertNode(node.right, newNode)
          }ß
        }
      }
    }
  }
  // 私有静态成员
  static [bsts] = {
  }
  // 插入节点
  insert(key) {
    // 初始化新节点
    const newNode = new Node(key)
    // 判断根节点是否存在
    if (!this.root) {
      this.root = newNode
    } else {
      this[bsti].insertNode(this.root, newNode)
    }
  }
}