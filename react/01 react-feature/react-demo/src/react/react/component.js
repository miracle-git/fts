export default class ReactComponent {
  constructor(props) {
    this.props = props
  }
  setState(partialState) {
    this.currentUnit.update(null, partialState)
  }
  componentShouldUpdate(nextState, nextProps) {
    return true
  }
}
