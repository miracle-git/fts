import ReactElement from '../react/element'

function includeTypes(element, ...types) {
  const elements = Array.isArray(element) ? element : [element]
  return elements.every(item => types.includes(typeof item))
}

function isReactElement(...elements) {
  return elements.every(item => item instanceof ReactElement)
}

function isEventType(name) {
  return /^on[A-Z]/.test(name)
}

export {
  includeTypes,
  isReactElement,
  isEventType
}
