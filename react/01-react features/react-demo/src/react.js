import $ from 'jquery'
import { createUnit } from './unit'
import { createElement } from './element'
import { Component } from './component'

function render(element, container) {
  const unit = createUnit(element)
  const markup = unit.getMarkup(React.reactRootId++)
  $(container).html(markup)
}

const React = {
  render,
  createElement,
  Component,
  reactRootId: 0
}

export default React
