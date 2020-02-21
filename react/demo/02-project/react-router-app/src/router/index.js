import HomePage from '../containers/home';
import UserPage from '../containers/user';
import UserInfoPage from '../containers/user/info';
import UserAddPage from '../containers/user/add';
import TodoPage from '../containers/todo';
import TodoListPage from '../containers/todo/list';
import TodoDetailPage from '../containers/todo/detail';

export default [
  { path: '/', component: HomePage, exact: true },
  { path: '/user', component: UserPage, children: [
    { path: '/user', component: UserInfoPage },
    { path: '/user/add', component: UserAddPage }
  ]}, 
  { path: '/todo', component: TodoPage, children: [
    { path: '/todo', component: TodoListPage },
    { path: '/todo/:id', component: TodoDetailPage }
  ]}
];