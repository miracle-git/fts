import Sorter from './insertion-sort'

const sorter = new Sorter([20, 16, 8, 32, 45, 18, 72, 64])
console.log(`插入排序前：${sorter.items}`)
console.log(`升序：${sorter.insertionSort()}`)
console.log(`降序：${sorter.insertionSort('desc')}`)