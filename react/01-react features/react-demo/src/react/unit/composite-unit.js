import $ from 'jquery'
import ReactUnit from '../react/unit'
import createUnit from '../factory/create-unit'
import { includeTypes, isReactElement } from '../utils/type'

export default class ReactCompositeUnit extends ReactUnit {
  getMarkup(reactid) {
    super.getMarkup(reactid)
    const { type: ReactComponent, props } = this.element
    this.component = new ReactComponent(props)
    this.component.currentUnit = this
    this.component.componentWillMount && this.component.componentWillMount()
    const element = this.component.render()
    this.componentUnit = createUnit(element)
    $(document).on('mounted', () => this.component.componentDidMount && this.component.componentDidMount())
    return this.componentUnit.getMarkup(reactid)
  }
  update(nextElement, partialState) {
    this.element = nextElement || this.element
    const nextState = this.component.state = Object.assign(this.component.state, partialState)
    const nextProps = this.element.props
    if (this.component.componentShouldUpdate && this.component.componentShouldUpdate(nextState, nextProps)) {
      const prevRenderElement = this.componentUnit.element
      const nextRenderElement = this.component.render()
      if (this.compare(prevRenderElement, nextRenderElement)) {
        this.componentUnit.update(nextRenderElement)
        this.component.componentDidUpdate && this.component.componentDidUpdate()
      } else {
        this.componentUnit = createUnit(nextRenderElement)
        const markup = this.componentUnit.getMarkup(this.reactid)
        $(`[data-reactid=${this.reactid}]`).replaceWith(markup)
      }
    }
  }
  compare(previousElement, nextElement) {
    if (previousElement != null && nextElement != null) {
      if (includeTypes([previousElement, nextElement], 'string', 'number')) return true
      if (isReactElement(previousElement, nextElement)) return previousElement.type === nextElement.type
    }
    return false
  }
}
