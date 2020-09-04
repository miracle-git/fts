import Sorter from './selection-sort'

const sorter = new Sorter([20, 16, 8, 32, 45, 18, 72, 64])
console.log(`选择排序前：${sorter.items}`)
console.log(`升序：${sorter.selectionSort()}`)
console.log(`降序：${sorter.selectionSort('desc')}`)