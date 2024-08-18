import $ from 'jquery'
import { includeTypes, isReactElement } from '../utils/type'

export default class ReactUnit {
  constructor(element) {
    this.element = element
  }
  get $el() {
    return $(`[data-reactid='${this.reactid}']`)
  }
  getMarkup(reactid) {
    this.reactid = reactid
    return ''
  }
  getKey(element, index) {
    return element.props && element.props.key ? element.props.key : index
  }
  compare(prevElement, nextElement) {
    if (prevElement != null && nextElement != null) {
      if (includeTypes([prevElement, nextElement], 'string', 'number')) return true
      if (isReactElement(prevElement, nextElement)) return prevElement.type === nextElement.type
    }
    return false
  }
  delegate(name, handler) {
    $(document).delegate(`[data-reactid='${this.reactid}']`, `${name}.${this.reactid}`, handler)
  }
  undelegate() {
    $(document).undelegate(`.${this.reactid}`)
  }
  update(nextElement) {
  }
}
