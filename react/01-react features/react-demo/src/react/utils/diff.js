import ReactAction from '../react/action'

let queue = []
let updateDepth = 0

function getKey(element, index) {
  return element.props && element.props.key ? element.props.key : index
}

function diff(prevUnitMap, nextUnitMap, currentUnit) {
  let lastIndex = 0
  let nextUnits = Object.values(nextUnitMap)
  for (let index in nextUnits) {
    const nextUnit = nextUnits[index]
    const prevUnit = prevUnitMap[getKey(nextUnit.element, index)]
    if (prevUnit === nextUnit) {
      if (prevUnit.$index < lastIndex) {
        queue.push({
          parentId: currentUnit.reactid,
          parentNode: currentUnit.$el,
          type: ReactAction.move,
          fromIndex: prevUnit.$index >> 0,
          toIndex: index >> 0
        })
      }
      lastIndex = Math.max(lastIndex, prevUnit.$index)
    } else {
      queue.push({
        parentId: currentUnit.reactid,
        parentNode: currentUnit.$el,
        type: ReactAction.insert,
        toIndex: index >> 0,
        markup: nextUnit.getMarkup(`${currentUnit.reactid}.${index}`)
      })
    }
    nextUnit.$index = index
  }
  for (let key in prevUnitMap) {
    if (!nextUnitMap.hasOwnProperty(key)) {
      queue.push({
        parentId: currentUnit.reactid,
        parentNode: currentUnit.$el,
        type: ReactAction.remove,
        fromIndex: prevUnitMap[key].$index >> 0
      })
    }
  }
}

function patch() {
}

export { getKey }
// eslint-disable-next-line
export default (prevUnitMap, nextUnitMap, currentUnit) => {
  updateDepth++
  diff(prevUnitMap, nextUnitMap, currentUnit)
  updateDepth--
  if (updateDepth === 0) {
    patch()
    queue = []
  }
}
