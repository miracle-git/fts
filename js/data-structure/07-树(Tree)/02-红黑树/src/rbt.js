import BinarySearchTree from './bst'

// 私有标记Symbol
const _rbt_i = Symbol('rbt instance members')
// 节点颜色
const Colors = {
  red: 'RED',
  black: 'BLACK'
}
// 红黑树节点
class TreeNode {
  constructor(key, val) {
    this.key = key
    this.val = val
    this.left = null
    this.right = null
    this.parent = null
    this.color = Colors.red
  }
  isRed() {
    return this.color === Colors.red
  }
  getValue() {
    return {
      key: this.key,
      val: this.val
    }
  }
}
// 红黑树(RBT)
export default class RedBlackTree extends BinarySearchTree {
  constructor() {
    super()
    // 私有实例成员
    this[_rbt_i] = {
      // 是否是空节点
      isNilNode(node) {
        return node == null || (node.key == null && node.val == null && node.left == null && node.right == null && node.color === Colors.black)
      },
      // 创建新节点
      createNode: (key, val) => {
        const node = new TreeNode(key, val)
        // 左叶子
        const leftChild = new TreeNode(null, null)
        leftChild.left = null
        leftChild.right = null
        leftChild.color = Colors.black
        leftChild.parent = node
        // 右叶子
        const rightChild = new TreeNode(null, null)
        rightChild.left = null
        rightChild.right = null
        rightChild.color = Colors.black
        rightChild.parent = node
        // 添加到node中
        node.left = leftChild
        node.right = rightChild
        return node
      },
      // 创建叶子节点
      createLeafNode: (parent) => {
        const node = new TreeNode(null, null)
        node.color = Colors.black
        node.parent = parent
        return node
      },
      // 左旋转
      /*
       * Complexity: O(1).
       *       y                   x
       *      / \                 / \
       *     x  Gamma   ====>   alpha y
       *   /  \                      / \
       * alpha beta               beta Gamma
       */
      rotateLeft: (node) => {
        const current = node.right
        if (this[_rbt_i].isNilNode(current.left)) {
          node.right = this[_rbt_i].createLeafNode(node)
        } else {
          node.right = current.left
        }
        if (!this[_rbt_i].isNilNode(current.left)) {
          current.left.parent = node
        }
        current.parent = node.parent
        if (this[_rbt_i].isNilNode(node.parent)) {
          this.root = current
        } else {
          if (node === node.parent.left) {
            node.parent.left = current
          } else {
            node.parent.right = current
          }
        }
        current.left = node
        node.parent = current
      },
      // 右旋转
      /*
       * Complexity: O(1).
       *       y                   x
       *      / \                 / \
       *     x  Gamma   ====>   alpha y
       *   /  \                      / \
       * alpha beta               beta Gamma
       */
      rotateRight: (node) => {
        const current = node.left
        if (this[_rbt_i].isNilNode(current.right)) {
          node.left = this[_rbt_i].createLeafNode(node)
        } else {
          node.left = current.right
        }
        if (!this[_rbt_i].isNilNode(current.right)) {
          current.right.parent = node
        }
        current.parent = node.parent
        if (this[_rbt_i].isNilNode(node.parent)) {
          this.root = current
        } else {
          if (node === node.parent.right) {
            node.parent.right = current
          } else {
            node.parent.left = current
          }
        }
        current.right = node
        node.parent = current
      },
      // 修正插入再平衡使之为红黑树
      fixInsertBalance: (node) => {
        while (node.parent && node.parent.color === Colors.red) {
          let uncle = null, parent = node.parent, grandpa = parent.parent
          if (parent === grandpa.left) {
            uncle = grandpa.right
            // 父红叔红祖黑->父黑叔黑祖红
            if (uncle && uncle.color === Colors.red) {
              parent.color = Colors.black
              uncle.color = Colors.black
              grandpa.color = Colors.red
              node = grandpa
              continue
            }
            if (node === parent.right) {
              node = node.parent
              this[_rbt_i].rotateLeft(node)
            }
            parent.color = Colors.black
            grandpa.color = Colors.red
            this[_rbt_i].rotateRight(grandpa)
          } else {
            uncle = grandpa.left
            // 父红叔红祖黑->父黑叔黑祖红
            if (uncle && uncle.color === Colors.red) {
              parent.color = Colors.black
              uncle.color = Colors.black
              grandpa.color = Colors.red
              node = grandpa
              continue
            }
            if (node === parent.left) {
              node = node.parent
              this[_rbt_i].rotateRight(node)
            }
            parent.color = Colors.black
            grandpa.color = Colors.red
            this[_rbt_i].rotateLeft(grandpa)
          }
        }
        this.root.color = Colors.black
      },
      // 修正删除再平衡使之为红黑树
      fixRemoveBalance: (node) => {
        while (node !== this.root && node.color === Colors.black) {
          let parent = node.parent
          if (node === parent.left) {
            let temp = parent.right
            if (temp.color === Colors.red) {
              temp.color = Colors.black
              parent.color = Colors.red
              this[_rbt_i].rotateLeft(parent)
              temp = parent.right
            }
            if (temp.left.color === Colors.black && temp.right.color === Colors.black) {
              temp.color = Colors.red
              node = node.parent
              continue
            } else if (temp.right.color === Colors.black) {
              temp.left.color = Colors.black
              temp.color = Colors.red
              temp = parent.right
            }
            if (temp.right.color === Colors.red) {
              temp.color = parent.color
              parent.color = Colors.black
              temp.right.color = Colors.black
              this[_rbt_i].rotateLeft(parent)
              node = this.root
            }
          } else {
            let temp = parent.left
            if (temp.color === Colors.red) {
              temp.color = Colors.black
              parent.color = Colors.red
              this[_rbt_i].rotateRight(parent)
              temp = parent.left
            }
            if (temp.right.color === Colors.black && temp.left.color === Colors.black) {
              temp.color = Colors.red
              node = node.parent
            } else if (temp.left.color === Colors.black) {
              temp.right.color = Colors.black
              temp.color = Colors.red
              this[_rbt_i].rotateLeft(temp)
              temp = node.parent.left
            }
            if (temp.left.color === Colors.red) {
              temp.color = parent.color
              parent.color = Colors.black
              temp.left.color = Colors.black
              this[_rbt_i].rotateRight(parent)
              node = this.root
            }
          }
        }
        node.color = Colors.black
      },
      transplant: (node, current) => {
        if (!node.parent) {
          this.root = current
        } else if (node === node.parent.left) {
          node.parent.left = current
        } else {
          node.parent.right = current
        }
        current.parent = node.parent
      },
      traverseNode: (node, order, handler) => {
        if (!this[_rbt_i].isNilNode(node)) {
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
  // 插入节点
  insert(key, val) {
    const newNode = this[_rbt_i].createNode(key, val)
    if (!this.root) {
      // 如果根节点不存在，则将当前节点设置为根节点
      this.root = newNode
      // 修改节点颜色和父节点
      newNode.color = Colors.black
      newNode.parent = null
    } else {
      let node = this.root
      let current = null
      while (!this[_rbt_i].isNilNode(node)) {
        current = node
        if (newNode.key < node.key) {
          node = node.left
        } else {
          node = node.right
        }
      }
      if (!current) return false
      newNode.parent = current
      // 如果新节点的父节点是根节点
      if (newNode.key < current.key) {
        current.left = newNode
      } else {
        current.right = newNode
      }
      newNode.left = this[_rbt_i].createLeafNode(newNode)
      newNode.right = this[_rbt_i].createLeafNode(newNode)
      newNode.color = Colors.red
      this[_rbt_i].fixInsertBalance(newNode)
    }
  }
  // 删除节点
  remove(key) {
    const node = this.search(key)
    if (!node) return null
    let current, temp = node
    let color = temp.color
    if (this[_rbt_i].isNilNode(node.left)) {
      current = node.right
      this[_rbt_i].transplant(node, node.right)
    } else if (this[_rbt_i].isNilNode(node.right)) {
      current = node.left
      this[_rbt_i].transplant(node, node.left)
    } else {
      temp = this.minNode(node.right)
      color = temp.color
      current = temp.right
      if (temp.parent === node) {
        current.parent = temp
      } else {
        this[_rbt_i].transplant(temp, temp.right)
        temp.right = node.right
        temp.right.parent = temp
      }
      this[_rbt_i].transplant(node, temp)
      temp.left = node.left
      temp.left.parent = temp
      temp.color = node.color
    }
    if (color === Colors.black) {
      this[_rbt_i].fixRemoveBalance(current)
    }
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
  // 最小值
  min() {
    let node = this.root || {}
    while (!this[_rbt_i].isNilNode(node.left)) {
      node = node.left
    }
    return node.key || ''
  }
  // 最小值节点
  minNode(node) {
    if (!node) return null
    while (!this[_rbt_i].isNilNode(node.left)) {
      node = node.left
    }
    return node
  }
  // 最大值
  max() {
    let node = this.root || {}
    while (!this[_rbt_i].isNilNode(node.right)) {
      node = node.right
    }
    return node.key || ''
  }
  // 最大值节点
  maxNode(node) {
    if (!node) return null
    while (!this[_rbt_i].isNilNode(node.right)) {
      node = node.right
    }
    return node
  }
}