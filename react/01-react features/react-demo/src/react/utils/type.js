function includeTypes(element, ...types) {
  const elements = Array.isArray(element) ? element : [element]
  return elements.every(item => types.includes(typeof item))
}

export {
  includeTypes
}
