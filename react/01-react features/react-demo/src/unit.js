import $ from 'jquery'
import { ReactElement } from './element'

class ReactUnit {
  constructor(element) {
    this.element = element
  }
  getMarkup(reactid) {
    this.reactid = reactid
    return ''
  }
}

class ReactTextUnit extends ReactUnit {
  getMarkup(reactid) {
    super.getMarkup(reactid)
    return `<span data-reactid=${this.reactid}>${this.element}</span>`
  }
}

class ReactNativeUnit extends ReactUnit {
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

class ReactCompositeUnit extends ReactUnit {
  getMarkup(reactid) {
    super.getMarkup(reactid)
    const { type: Component, props } = this.element
    const instance = new Component(props)
    const element = instance.render()
    const unit = createUnit(element)
    return unit.getMarkup(reactid)
  }
}

function createUnit(element) {
  if (['string', 'number'].includes(typeof element)) {
    return new ReactTextUnit(element)
  }
  if (element instanceof ReactElement && typeof element.type === 'string') {
    return new ReactNativeUnit(element)
  }
  if (element instanceof ReactElement && typeof element.type === 'function') {
    return new ReactCompositeUnit(element)
  }
}

export {
  createUnit
}
