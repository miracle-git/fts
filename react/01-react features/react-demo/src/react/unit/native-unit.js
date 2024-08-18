import ReactAction from '../react/action'
import ReactUnit from '../react/unit'
import createUnit from '../factory/create-unit'
import { isEventType } from '../utils/type'

export default class ReactNativeUnit extends ReactUnit {
  constructor(element) {
    super(element)
    this.childrenUnits = []
  }
  static diffQueue = []
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
    const prevChildrenUnitMap = this.getPrevChildrenUnit()
    const { nextChildrenUnitMap, nextChildrenUnit } = this.getNextChildrenUnit(prevChildrenUnitMap, childrenElements)
    let lastIndex = 0
    for (let index in nextChildrenUnit) {
      const nextUnit = nextChildrenUnit[index]
      const prevUnit = prevChildrenUnitMap[this.getKey(nextUnit.element, index)]
      if (prevUnit === nextUnit) {
        if (prevUnit.$index < lastIndex) {
          ReactNativeUnit.diffQueue.push({
            parentId: this.reactid,
            parentNode: this.$el,
            type: ReactAction.move,
            fromIndex: prevUnit.$index >> 0,
            toIndex: index >> 0
          })
        }
        lastIndex = Math.max(lastIndex, prevUnit.$index)
      } else {
        ReactNativeUnit.diffQueue.push({
          parentId: this.reactid,
          parentNode: this.$el,
          type: ReactAction.insert,
          toIndex: index >> 0,
          markup: nextUnit.getMarkup(`${this.reactid}.${index}`)
        })
      }
      nextUnit.$index = index
    }
    for (let key in prevChildrenUnitMap) {
      if (!nextChildrenUnitMap.hasOwnProperty(key)) {
        ReactNativeUnit.diffQueue.push({
          parentId: this.reactid,
          parentNode: this.$el,
          type: ReactAction.remove,
          fromIndex: prevChildrenUnitMap[key].$index >> 0
        })
      }
    }
  }
  getPrevChildrenUnit() {
    return this.childrenUnits.reduce((r, s, i) => (r = { ...r, [this.getKey(s.element, i)]: s }), {})
  }
  getNextChildrenUnit(childrenMap, childrenElements) {
    const nextChildrenUnitMap = {}
    const nextChildrenUnit = []
    childrenElements.forEach((newElement, index) => {
      const key = this.getKey(newElement, index)
      const prevUnit = childrenMap[key]
      const prevElement = prevUnit && prevUnit.element
      if (this.compare(prevElement, newElement)) {
        prevUnit.update(newElement)
        nextChildrenUnit.push(prevUnit)
        nextChildrenUnitMap[key] = prevUnit
      } else {
        const nextUnit = createUnit(newElement)
        nextChildrenUnit.push(nextUnit)
        nextChildrenUnitMap[key] = nextUnit
      }
    })
    return { nextChildrenUnitMap, nextChildrenUnit }
  }
}
