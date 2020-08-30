// 私有标记Symbol
const _bst_i = Symbol('bst instance members')
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
      },
      // 获取节点的前驱
      predecessor: (node) => {
        let predecessor = node
        let parent = node
        // 在左子树中找到最大的节点(前驱)
        let current = predecessor.left
        while (current) {
          parent = predecessor
          predecessor = current
          current = current.right
        }
        // 判断前驱节点不是当前删除节点的直接左子树的节点
        if (predecessor !== node.left) {
          parent.right = predecessor.left
          predecessor.left = node.left
        }
        return predecessor
      },
      // 获取节点的后继
      successor: (node) => {
        let successor = node
        let parent = node
        // 在右子树中找到最小的节点(后继)
        let current = successor.right
        while (current) {
          parent = successor
          successor = current
          current = current.left
        }
        // 判断后继节点不是当前删除节点的直接右子树的节点
        if (successor !== node.right) {
          parent.left = successor.right
          successor.right = node.right
        }
        return successor
      }
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
      this[_bst_i].insertNode(this.root, newNode)
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
      const successor = this[_bst_i].successor(current)
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
  // 先序遍历
  preorder() {
    return this[_bst_i].traverseOrder('pre')
  }
  // 中序遍历
  midorder() {
    return this[_bst_i].traverseOrder('mid')
  }
  // 后序遍历
  postorder() {
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
  // 搜索节点
  search(key) {
    return this[_bst_i].searchNode(this.root, key)
  }
}
