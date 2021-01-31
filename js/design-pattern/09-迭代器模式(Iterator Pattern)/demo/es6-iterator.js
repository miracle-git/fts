const arr = [1, 2, 3, 4, 5]
const lis = document.querySelectorAll('li')
const $li = $('li')

{
  console.log('******************使用Iterator遍历******************')
  function each(data) {
    const iterator = data[Symbol.iterator]()
    let item = { done: false }
    while (!item.done) {
      item = iterator.next()
      if (!item.done) {
        console.log(item.value)
      }
    }
  }
  each(arr)
  each(lis)
  each($li)
}
{
  console.log('******************使用for...of遍历******************')
  function each(data) {
    for (let item of data) {
      console.log(item)
    }
  }
  each(arr)
  each(lis)
  each($li)
}