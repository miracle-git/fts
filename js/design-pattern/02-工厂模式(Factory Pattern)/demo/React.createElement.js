class VNode {
  constructor(tag, attrs, ...children) {
    // ...
  }
}

React.createElement = function (tag, attrs, ...children) {
  return new VNode(tag, attrs, ...children)
}

class Profile extends React.Component {
  render() {
    /* jsx
    return (
      <div>
        <img src="avatar.jpg" className="avatar"/>
        <h3>{[user.firstName, user.lastName].join(' ')}</h3>
      </div>
    )*/
    return React.createElement('div', null,
      React.createElement('img', { src: 'avatar.jpg', className: 'avatar' }),
      React.createElement('h3', null, [user.firstName, user.lastName].join(' '))
    )
  }
}