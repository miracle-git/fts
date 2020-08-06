import GoodsItem from './goods-item'

// 代理模式
function createDiscountGoods(goods) {
  return new Proxy(goods, {
    get(target, key) {
      if (key === 'name') {
        return `${target[key]} [折扣]`
      }
      if (key === 'price') {
        return `${target[key] * .8}`
      }
      return target[key]
    }
  })
}

// 工厂模式
export default function (list, goods) {
  if (goods.discount) {
    goods = createDiscountGoods(goods)
  }
  return new GoodsItem(list, goods)
}