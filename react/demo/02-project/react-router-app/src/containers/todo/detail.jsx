import React from 'react';
import { getParam } from 'm2-react';

export default class TodoDetailPage extends React.Component {
  componentDidMount() {
    console.log(`route params, id: ${getParam('id', this.props)}`);
    console.log(`query params, key: ${getParam('key', this.props, true)}`);
  }

  render() {
    return (
      <div>这是待办详情页面</div>
    );
  }
}