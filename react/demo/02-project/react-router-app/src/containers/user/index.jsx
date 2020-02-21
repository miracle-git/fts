import React from 'react';
import { Link, Route } from 'react-router-dom';

export default class UserPage extends React.Component {
  render() {
    const { children } = this.props;

    return (
      <div className="user">
        <div className="content">
          <div className="left">
            <Link to="/user/">用户信息</Link>
            <Link to="/user/add">新增用户</Link>
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
