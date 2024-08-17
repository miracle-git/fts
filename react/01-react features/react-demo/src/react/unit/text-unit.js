import $ from 'jquery'
import ReactUnit from '../react/unit'

export default class ReactTextUnit extends ReactUnit {
  getMarkup(reactid) {
    super.getMarkup(reactid)
    return `<span data-reactid=${this.reactid}>${this.element}</span>`
  }
  update(nextElement) {
    if (this.currentElement !== nextElement) {
      this.currentElement = nextElement
      $(`[data-reactid=${this.reactid}]`).html(nextElement)
    }
  }
}
