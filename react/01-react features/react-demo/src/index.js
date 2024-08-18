import React from './react'
import Counter from './components/counter'
import List from './components/list'
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
const counter = React.createElement(Counter, { name: '计数器' }) // <Counter name="计数器">
const list = React.createElement(List, { name: '列表' }) // <List name="列表">
const element = React.createElement('div', {}, counter, list)
React.render(element, document.getElementById('root'))
