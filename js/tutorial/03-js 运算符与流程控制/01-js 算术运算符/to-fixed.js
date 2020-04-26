// toFixed 修复
function toFixed(number, precision) {
  const times = Math.pow(10, precision)
  let res = number * times + 0.5
  res = parseInt(res, 10) / times
  return res + ''
}