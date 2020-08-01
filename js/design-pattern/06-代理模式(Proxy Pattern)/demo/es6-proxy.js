const star = { name: '刘德华', age: 55, phone: '明星: 13866668888' }
export const agent = new Proxy(star, {
  get: (target, key) => {
    if (key === 'phone') {
      return '经纪人: 13612345678'
    }
    if (key === 'price') {
      return 1500000
    }
    return target[key]
  },
  set: (target, key, val) => {
    if (key === 'customPrice') {
      if (val < 1000000) {
        throw new Error('出场费太低，至少一百万！')
      } else {
        target[key] = val
      }
      return true
    }
  }
})