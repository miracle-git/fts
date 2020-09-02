// webpack-dev-server
import Graphics from './graphics'

const graghics = new Graphics()
// 添加顶点
const vertexes = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I']
vertexes.forEach(item => graghics.addVertex(item))
// 添加边
graghics.addEdge('A', 'B')
graghics.addEdge('A', 'C')
graghics.addEdge('A', 'D')
graghics.addEdge('B', 'E')
graghics.addEdge('B', 'F')
graghics.addEdge('C', 'D')
graghics.addEdge('C', 'G')
graghics.addEdge('D', 'G')
graghics.addEdge('D', 'H')
graghics.addEdge('E', 'I')
console.log(graghics.toString())
console.log(`广度优先遍历：${graghics.bfs()}`)
console.log(`深度优先遍历：${graghics.dfs()}`)