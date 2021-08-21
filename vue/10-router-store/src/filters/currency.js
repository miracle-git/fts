export default {
  name: 'currency',
  rule: (val, symbol = '¥') => `${symbol}${val}`
}
