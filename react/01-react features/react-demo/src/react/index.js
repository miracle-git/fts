import $ from 'jquery'
import createUnit from './factory/create-unit'
import createElement from './factory/create-element'
import Component from './react/component'

function render(element, container) {
  const unit = createUnit(element)
  const markup = unit.getMarkup(React.reactRootId++)
  $(container).html(markup)
  $(document).trigger('mounted')
}

const React = {
  render,
  createElement,
  Component,
  reactRootId: 0
}

export default React
