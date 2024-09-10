import $ from 'jquery'

function getKey(element, index) {
  return element.props && element.props.key ? element.props.key : index
}

function insertAt(parentNode, index, newNode) {
  const node = parentNode.children().get(index)
  if (node) {
    newNode.insertBefore(node)
  } else {
    newNode.appendTo(parentNode)
  }
}

function delegate(name, reactid, handler) {
  $(document).delegate(`[data-reactid='${reactid}']`, `${name}.${reactid}`, handler)
}

function undelegate(reactid) {
  $(document).undelegate(`.${reactid}`)
}

export {
  getKey,
  delegate,
  undelegate,
  insertAt
}
