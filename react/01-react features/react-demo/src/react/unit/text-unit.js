import ReactUnit from '../react/unit'

export default class ReactTextUnit extends ReactUnit {
  getMarkup(reactid) {
    super.getMarkup(reactid)
    return `<span data-reactid=${this.reactid}>${this.element}</span>`
  }
}
