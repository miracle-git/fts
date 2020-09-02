import Dictionary from './dictionary'
import Queue from './queue'

// 私有标记Symbol
const _g_i = Symbol('graphics instance members')
// 顶点颜色
const Colors = {
  white: 'WHITE',
  gray: 'GRAY',
  black: 'BLACK'
}
// 图
export default class Graphics {
  constructor() {
    this.vertexes = [] // 顶点
    this.edges = new Dictionary() // 边
    // 私有实例成员
    this[_g_i] = {
      // 初始化顶点颜色
      initColors: () => {
        const colors = {}
        for (const item of this.vertexes) {
          colors[item] = Colors.white
        }
        return colors
      },
      traverseBFS: (vertex, colors, handler) => {
        // 创建队列
        const queue = new Queue()
        // 将初始顶点入队
        queue.enqueue(vertex)
        // 循环从队列中将顶点出队
        while (!queue.isEmpty()) {
          // 取出当前顶点
          const current = queue.dequeue()
          // 获得邻接顶点列表
          const list = this.edges.get(current)
          // 将顶点颜色设置为已访问过
          colors[current] = Colors.gray
          // 遍历邻接顶点并入队
          for (const item of list) {
            if (colors[item] === Colors.white) {
              colors[item] = Colors.gray
              queue.enqueue(item)
            }
          }
          // 访问顶点
          handler && handler(current)
          // 将顶点颜色设置为已被探索过
          colors[current] = Colors.black
        }
      },
      traverseDFS: (vertex, colors, handler) => {
        // 将顶点颜色设置为已访问过
        colors[vertex] = Colors.gray
        // 访问顶点
        handler && handler(vertex)
        // 获得邻接顶点列表
        const list = this.edges.get(vertex)
        for (const item of list) {
          if (colors[item] === Colors.white) {
            this[_g_i].traverseDFS(item, colors, handler)
          }
        }
        // 将顶点颜色设置为已被探索过
        colors[vertex] = Colors.black
      },
      traverseDirection: (vertex, direction) => {
        let res = ''
        // 初始化节点
        if (!vertex) vertex = this.vertexes[0]
        // 初始化顶点颜色
        const colors = this[_g_i].initColors()
        const handler = key => res += res ? '->' + key : key
        direction === 'bfs' && this[_g_i].traverseBFS(vertex, colors, handler)
        direction === 'dfs' && this[_g_i].traverseDFS(vertex, colors, handler)
        return res
      },
    }
  }
  // 添加顶点
  addVertex(vertex) {
    this.vertexes.push(vertex)
    this.edges.put(vertex, [])
  }
  // 添加边
  addEdge(vertex1, vertex2) {
    this.edges.get(vertex1).push(vertex2)
    this.edges.get(vertex2).push(vertex1)
  }
  // 广度优先遍历
  bfs(vertex = null) {
    return this[_g_i].traverseDirection(vertex, 'bfs')
  }
  // 深度优先遍历
  dfs(vertex = null) {
    return this[_g_i].traverseDirection(vertex, 'dfs')
  }
  // 转化为字符串
  toString() {
    return this.vertexes.reduce((res, item) => res += `${item}->${this.edges.get(item).join(' ')}\n`, '')
  }
}
