import ReactUnit from '../react/unit'
import createUnit from '../factory/create-unit'
import { isEventType } from '../utils/type'
import diff, { getKey } from '../utils/diff'

export default class ReactNativeUnit extends ReactUnit {
  constructor(element) {
    super(element)
    this.childrenUnits = []
  }
  getMarkup(reactid) {
    super.getMarkup(reactid)
    const { type, props } = this.element
    let startTag = `<${type} data-reactid=${this.reactid}`
    let childTag = `>`
    let endTag = `</${type}>`
    for (let name in props) {
      if (isEventType(name)) {
        this.delegate(name.slice(2).toLowerCase(), props[name])
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
          unit.$index = index
          this.childrenUnits.push(unit)
          childTag += markup
        })
      } else {
        startTag += ` ${name}=${props[name]}`
      }
    }
    return `${startTag}${childTag}${endTag}`
  }
  update(nextElement) {
    const prevProps = this.element.props
    const nextProps = nextElement.props
    this.updateProps(prevProps, nextProps)
  }
  updateProps(prevProps, nextProps) {
    for (let name in prevProps) {
      if (!nextProps.hasOwnProperty(name)) {
        this.$el.removeAttr(name)
      }
      if (isEventType(name)) {
        this.undelegate()
      }
    }
    for (let name in nextProps) {
      if (isEventType(name)) {
        this.delegate(name.slice(2).toLowerCase(), nextProps[name])
      } else if ('style' === name) {
        Object.entries(nextProps[name]).map(([key, val]) => this.$el.css(key, val))
      } else if ('className' === name) {
        this.$el.attr('class', nextProps[name])
      } else if ('children' === name) {
        this.updateChildren(nextProps[name])
      } else {
        this.$el.prop(name, nextProps[name])
      }
    }
  }
  updateChildren(childrenElements) {
    const prevUnitMap = this.getPrevUnitMap()
    const nextUnitMap = this.getNextUnitMap(prevUnitMap, childrenElements)
    diff(prevUnitMap, nextUnitMap, this)
  }
  getPrevUnitMap() {
    return this.childrenUnits.reduce((map, unit, index) => {
      const key = getKey(unit.element, index)
      map[key] = unit
      return map
    }, {})
  }
  getNextUnitMap(childrenMap, childrenElements) {
    return childrenElements.reduce((map, newElement, index) => {
      const key = getKey(newElement, index)
      const prevUnit = childrenMap[key]
      const prevElement = prevUnit && prevUnit.element
      if (this.compare(prevElement, newElement)) {
        prevUnit.update(newElement)
        map[key] = prevUnit
      } else {
        map[key] = createUnit(newElement)
      }
      return map
    }, {})
  }
}
