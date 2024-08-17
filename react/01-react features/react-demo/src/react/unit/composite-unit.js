import $ from 'jquery'
import ReactUnit from '../react/unit'
import createUnit from '../factory/create-unit'

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
}
