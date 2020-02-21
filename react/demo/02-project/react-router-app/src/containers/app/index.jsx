import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import routes from '../../router';
import './index.css';

export default () => (
  <Router>
    <>
      <header className="title">
        <Link to="/">首页</Link>
        <Link to="/user">个人中心</Link>
        <Link to="/todo">待办任务</Link>
      </header>
      {
        routes.map(item => {
          const config = {
            key: item.path,
            path: item.path,
            render: props => (
              <item.component {...props} children={item.children}/>
            )
          };
          if (item.exact) {
            return <Route exact {...config} />;
          } else {
            return  <Route {...config} />;
          }
        })
      }
    </>
  </Router>
);
