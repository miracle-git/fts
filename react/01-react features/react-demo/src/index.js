import React from './react'

// 渲染普通文本
// React.render('hello', document.getElementById('root'))

// 渲染原生元素
// React.render((
//   <button id="say-hello" style={{color:'red', backgroundColor:'green'}} className="btn-hello" onClick={()=>alert('hello')}>
//     Say <b>Hello</b>
//   </button>
// ), document.getElementById('root'))
// const element = React.createElement(
//   'button',
//   { id: 'say-hello', style: { color: '#fff', backgroundColor: '#1890ff' }, className: 'btn-hello', onClick: () => alert('hello') },
//   'Say ', React.createElement('b', {}, 'Hello')
// )
// React.render(element, document.getElementById('root'))

// 渲染自定义组件
class Counter extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      num: 0
    }
  }
  componentWillMount() {
  }
  componentDidMount() {
    setInterval(() => {
      this.setState({
        num: this.state.num + 1
      })
    }, 1000)
  }
  componentShouldUpdate(nextState, nextProps) {
    return true
  }
  render() {
    // console.log('Counter render', this)
    // const p = React.createElement('p', { style: { color: 'red' } }, this.props.name, this.state.num)
    // const button = React.createElement('button', { onClick: this.handleIncrement }, '+')
    // return React.createElement('div', { id: 'counter' }, p, button)
    return this.state.num
  }
  componentDidUpdate() {
  }
  handleIncrement() {
    this.setState({
      num: this.state.num + 1
    })
  }
}
const element = React.createElement(Counter, { name: '计数器' }) // <Counter name="计数器">
React.render(element, document.getElementById('root'))
