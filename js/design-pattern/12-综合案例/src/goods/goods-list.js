export default class GoodsList {
  constructor(app) {
    this.app = app
    this.$el = $('div')
  }

  init() {
    this.loadData().then(res => this.initItemList(res)).then(() => this.render())
  }

  loadData() {
    return fetch('/api/goods.json').then(res => res.json())
  }

  initItemList(items) {
    items.map(item => {})
  }

  render() {
    this.app.$el.append(this.$el)
  }
}