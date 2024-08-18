import React from '../react'

export default class List extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      change: true
    }
  }
  componentDidMount() {
    console.log('List componentDidMount')
    setTimeout(() => {
      this.setState({
        change: !this.state.change
      })
    }, 1000)
  }
  componentShouldUpdate(nextState, nextProps) {
    return true
  }
  render() {
    console.log('List render')
    if (this.state.change) {
      return React.createElement('ul', { id: 'old-list' },
             React.createElement('li', { key: 'A' }, 'A'),
             React.createElement('li', { key: 'B' }, 'B'),
             React.createElement('li', { key: 'C' }, 'C'),
             React.createElement('li', { key: 'D' }, 'D'))
    }
    return React.createElement('ul', { id: 'new-list' },
           React.createElement('li', { key: 'A' }, 'A'),
           React.createElement('li', { key: 'C' }, 'C1'),
           React.createElement('li', { key: 'B' }, 'B1'),
           React.createElement('li', { key: 'E' }, 'E'),
           React.createElement('li', { key: 'F' }, 'F'))
  }
  componentDidUpdate() {
    console.log('List componentDidUpdate')
  }
}
