import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import { BrowserRouter, Route, Link, Switch, Redirect} from 'react-router-dom';

import reducers from './reducer'
import Auth from './Auth';
import Dashboard from './Dashboard';


const reduxDev = window.devToolsExtension ? window.devToolsExtension() : f => f;
const store = createStore(reducers, compose (
  applyMiddleware(thunk),
  reduxDev,
));

console.log(store.getState());
// 登录 没有登录信息 同意跳转login
// 页面 一营 二营 骑兵连
ReactDOM.render(
  (<Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route path='/login' component={Auth}/>
        <Route path='/dashboard' component={Dashboard}/>
        <Redirect to='/dashboard'></Redirect>
      </Switch>
    </BrowserRouter>
  </Provider>),
  document.getElementById('root')
)


