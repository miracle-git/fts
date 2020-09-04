import Sorter from './bubble-sort'

const sorter = new Sorter([20, 16, 8, 32, 45, 18, 72, 64])
console.log(`冒泡排序前：${sorter.items}`)
console.log(`升序：${sorter.bubbleSort()}`)
console.log(`降序：${sorter.bubbleSort('desc')}`)