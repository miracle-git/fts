import ReactElement from '../react/element'

export default function createElement(type, props = {}, ...children) {
  props.children = children || []
  return new ReactElement(type, props)
}
