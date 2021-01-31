import Sorter from '../01-排序算法/sorter'

const sorter = new Sorter([3, 44, 38, 5, 47, 15, 36, 26, 27, 2, 46, 4, 19, 50, 48])
const result = {
  asc: [2,3,4,5,15,19,26,27,36,38,44,46,47,48,50],
  desc: [50,48,47,46,44,38,36,27,26,19,15,5,4,3,2]
}

test('测试：冒泡排序', () => {
  expect(sorter.bubbleSort()).toEqual(result.asc)
  expect(sorter.bucketSort('desc')).toEqual(result.desc)
})

test('测试：选择排序', () => {
  expect(sorter.selectionSort()).toEqual(result.asc)
  expect(sorter.selectionSort('desc')).toEqual(result.desc)
})

test('测试：插入排序', () => {
  expect(sorter.insertionSort()).toEqual(result.asc)
  expect(sorter.insertionSort('desc')).toEqual(result.desc)
})

test('测试：希尔排序', () => {
  expect(sorter.shellSort()).toEqual(result.asc)
  expect(sorter.shellSort('desc')).toEqual(result.desc)
})

test('测试：快速排序', () => {
  expect(sorter.quickSort()).toEqual(result.asc)
  expect(sorter.quickSort('desc')).toEqual(result.desc)
})

test('测试：归并排序', () => {
  expect(sorter.mergeSort()).toEqual(result.asc)
  expect(sorter.mergeSort('desc')).toEqual(result.desc)
})

test('测试：堆排序', () => {
  expect(sorter.heapSort()).toEqual(result.asc)
  expect(sorter.heapSort('desc')).toEqual(result.desc)
})

test('测试：桶排序', () => {
  expect(sorter.bucketSort()).toEqual(result.asc)
  expect(sorter.bucketSort('desc')).toEqual(result.desc)
})

test('测试：计数排序', () => {
  expect(sorter.countingSort()).toEqual(result.asc)
  expect(sorter.countingSort('desc')).toEqual(result.desc)
})

test('测试：基数排序', () => {
  expect(sorter.radixSort()).toEqual(result.asc)
  expect(sorter.radixSort('desc')).toEqual(result.desc)
})
