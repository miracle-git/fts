import $ from 'jquery'
import ReactUnit from '../react/unit'
import createUnit from '../factory/create-unit'

export default class NativeUnit extends ReactUnit {
  getMarkup(reactid) {
    super.getMarkup(reactid)
    const { type, props } = this.element
    let startTag = `<${type} data-reactid=${this.reactid}`
    let childTag = `>`
    let endTag = `</${type}>`
    for (let name in props) {
      if (/^on[A-Z]/.test(name)) {
        const eventName = name.slice(2).toLowerCase()
        $(document).delegate(`[data-reactid='${this.reactid}']`, `${eventName}.${this.reactid}`, props[name])
      } else if ('style' === name) {
        const style = Object.entries(props[name]).map(([key, val]) =>
          `${key.replace(/[A-Z]/g, m => `-${m.toLowerCase()}`)}:${val}`).join(';')
        startTag += ` style=${style}`
      } else if ('className' === name) {
        startTag += ` class=${props[name]}`
      } else if ('children' === name) {
        const children = props[name]
        // eslint-disable-next-line
        children.forEach((child, index) => {
          const unit = createUnit(child)
          const markup = unit.getMarkup(`${this.reactid}.${index}`)
          childTag += markup
        })
      } else {
        startTag += ` ${name}=${props[name]}`
      }
    }
    return `${startTag}${childTag}${endTag}`
  }
}
