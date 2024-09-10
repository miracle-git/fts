import React from '../react'

export default class Counter extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      num: 0
    }
    console.log('Counter constructor')
  }
  componentWillMount() {
    console.log('Counter componentWillMount')
  }
  componentDidMount() {
    console.log('Counter componentDidMount')
  }
  render() {
    console.log('Counter render')
    const p = React.createElement('p', { style: { color: 'red' } }, this.props.name, this.state.num)
    const button = React.createElement('button', { onClick: this.handleIncrement }, 'Start')
    return React.createElement('div', { id: 'counter' }, p, button)
    // return this.state.num
  }
  componentDidUpdate() {
    console.log('Counter componentDidUpdate')
  }
  handleIncrement = () => {
    this.setState({
      num: this.state.num + 1
    })
  }
}
