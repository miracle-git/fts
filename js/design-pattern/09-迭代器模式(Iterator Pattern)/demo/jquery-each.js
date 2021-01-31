const arr = [1, 2, 3, 4, 5]
const lis = document.querySelectorAll('li')
const $li = $('li')

{
  console.log('******************使用各自的方法遍历******************')
  arr.forEach((item, index) => {
    console.log(`${index}: ${item}`)
  })
  for (let i = 0, len = lis.length; i < len; i++) {
    console.log(`${i}: `, lis[i])
  }
  $li.each(function (index, item) {
    console.log(`${index}: `, item)
  })
}
{
  console.log('******************封装统一的方法遍历******************')
  function each(data) {
    const $data = $(data)
    $data.each(function (index, item) {
      console.log(`${index}: `, item)
    })
  }
  each(arr)
  each(lis)
  each($li)
}