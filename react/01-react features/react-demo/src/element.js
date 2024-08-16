class ReactElement {
  constructor(type, props) {
    this.type = type
    this.props = props
  }
}

function createElement(type, props = {}, ...children) {
  props.children = children || []
  return new ReactElement(type, props)
}

export {
  ReactElement,
  createElement
}
