import React from '../react'

export default class Form extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      list: [],
      text: ''
    }
  }
  keyup = (e) => {
    this.setState({ text: e.target.value })
  }
  add = () => {
    this.setState({ list: [...this.state.list, this.state.text], text: '' })
  }
  remove = (index) => {
    this.setState({ list: [...this.state.list.slice(0, index), ...this.state.list.slice(index + 1)]})
  }
  render() {
    const input = React.createElement('input', { onKeyup: this.keyup, value: this.state.text })
    const button = React.createElement('button', { onClick: this.add }, '+')
    const list = this.state.list.map((item, index) => React.createElement('li', {},
      item, React.createElement('button', { onClick: () => this.remove(index) }, 'x')))
    return React.createElement('div', { id: 'todo-list' }, input, button, React.createElement('ul', {}, ...list))
  }
}
