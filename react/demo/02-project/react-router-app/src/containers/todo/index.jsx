import React from 'react';
import { Link, Route } from 'react-router-dom';

export default class TodoPage extends React.Component {
  render() {
    const { children } = this.props;

    return (
      <div className="todo">
        <div className="content">
          <div className="left">
            <Link to="/todo/">待办列表</Link>
            <Link to="/todo/001?key=Miracle">待办详情</Link>
          </div>
          <div className="right">
          {
            children.map((route, key)=>{
              return <Route key={key} exact path={route.path} component={route.component} />
            })
          }
          </div>
        </div>
      </div>
    )
  }
}
