import Sorter from './sorter'

const sorter = new Sorter([3, 44, 38, 5, 47, 15, 36, 26, 27, 2, 46, 4, 19, 50, 48])
console.log(`希尔排序前：${sorter.items}`)
console.log(`升序：${sorter.quickSort()}`)
console.log(`降序：${sorter.quickSort('desc')}`)