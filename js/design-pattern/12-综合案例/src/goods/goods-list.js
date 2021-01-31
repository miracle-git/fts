import createGoodsItem from './goods-factory'

export default class GoodsList {
  constructor(app) {
    this.app = app
    this.$el = $('<div>')
  }

  // 模板方法模式
  init() {
    this.loadData().then(res => this.initItemList(res)).then(() => this.render())
  }

  // 观察者模式
  loadData() {
    return fetch('/api/goods.json').then(res => res.json())
  }

  initItemList(items) {
    items.forEach(item => {
      const goodsItem = createGoodsItem(this, item)
      goodsItem.init()
    })
  }

  render() {
    this.app.$el.append(this.$el)
  }
}