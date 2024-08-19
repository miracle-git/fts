import $ from 'jquery'
import ReactAction from '../react/action'
import { getKey, insertAt, undelegate } from './node'

let updateQueue = []
let updateDepth = 0

function diff(prevUnitMap, nextUnitMap, currentUnit) {
  let lastIndex = 0
  let nextUnits = Object.values(nextUnitMap)
  for (let index in nextUnits) {
    const nextUnit = nextUnits[index]
    const prevUnit = prevUnitMap[getKey(nextUnit.element, index)]
    if (prevUnit === nextUnit) {
      if (prevUnit.$index < lastIndex) {
        updateQueue.push({
          parentId: currentUnit.reactid,
          parentNode: currentUnit.$el,
          type: ReactAction.move,
          fromIndex: prevUnit.$index >> 0,
          toIndex: index >> 0
        })
      }
      lastIndex = Math.max(lastIndex, prevUnit.$index)
    } else {
      if (prevUnit) {
        updateQueue.push({
          parentId: currentUnit.reactid,
          parentNode: currentUnit.$el,
          type: ReactAction.remove,
          fromIndex: prevUnit.$index
        })
        currentUnit.childrenUnits = currentUnit.childrenUnits.filter(item => item !== prevUnit)
        undelegate(prevUnit.reactid)
      }
      updateQueue.push({
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
      const prevUnit = prevUnitMap[key]
      updateQueue.push({
        parentId: currentUnit.reactid,
        parentNode: currentUnit.$el,
        type: ReactAction.remove,
        fromIndex: prevUnit.$index >> 0
      })
      currentUnit.childrenUnits = currentUnit.childrenUnits.filter(item => item !== prevUnit)
      undelegate(prevUnit.reactid)
    }
  }
}

function patch() {
  const patchMap = updateQueue.reduce((map, item) => {
    if ([ReactAction.move, ReactAction.remove].includes(item.type)) {
      const { parentId, parentNode, fromIndex } = item
      map[`${parentId}.${fromIndex}`] = $(parentNode.children().get(fromIndex))
    }
    return map
  }, {})
  $.each(Object.values(patchMap), (_, item) => $(item).remove())
  updateQueue.filter(item => item.type !== ReactAction.remove).forEach(item => {
    const { parentId, parentNode, type, fromIndex, toIndex, markup } = item
    insertAt(parentNode, toIndex, type === ReactAction.insert ? $(markup) : patchMap[`${parentId}.${fromIndex}`])
  })
}

// eslint-disable-next-line
export default (prevUnitMap, nextUnitMap, currentUnit) => {
  updateDepth++
  diff(prevUnitMap, nextUnitMap, currentUnit)
  updateDepth--
  if (updateDepth === 0) {
    patch()
    updateQueue = []
  }
}
