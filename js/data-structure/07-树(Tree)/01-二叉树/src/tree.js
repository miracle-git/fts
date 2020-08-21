// 二叉搜索树(BST)
class Node {
  constructor(key) {
    this.key = key
    this.left = null
    this.right = null
  }
}

const bst = Symbol('BST')

export default class BinarySearchTree {
  constructor() {
    this.root = null // 根节点
  }
  // 私有示例函数
  [bst] = {
    insertNode: (node, newNode) => {
      // 判断新节点应该插入node的左子树还是右子树
      if (newNode.key < node.key) {
        // 判断左子树是否存在
        if (!node.left) {
          node.left = newNode
        } else {
          this[bst].insertNode(node.left, newNode)
        }
      } else {
        // 判断右子树是否存在
        if (!node.right) {
          node.right = newNode
        } else {
          this[bst].insertNode(node.right, newNode)
        }
      }
    }
  }
  // 插入节点
  insert(key) {
    // 初始化新节点
    const newNode = new Node(key)
    // 判断根节点是否存在
    if (!this.root) {
      this.root = newNode
    } else {
      this[bst].insertNode(this.root, newNode)
    }
  }
}