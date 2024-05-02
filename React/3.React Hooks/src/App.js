/*
 * @Date: 2024-04-25 23:52:08
 * @LastEditors: shayloyuki shayluo123@outlook.com
 * @LastEditTime: 2024-05-02 15:27:45
 * @FilePath: \3.React Hooks\src\App.js
 */
import React, { Component } from "react";
import { Link, Route, Switch } from "react-router-dom";
// import Home from './components/home'
// import List from './components/list'
// import NotFound from './components/notFound'
// import Detail from './components/detail'
import AuthRouteGuard from "./guard";
import loadComponent from '@loadable/component'

const Home = loadComponent(() => import('./components/home'))
const List = loadComponent(() => import('./components/list'))
const NotFound = loadComponent(() => import('./components/notFound'))
const Detail = loadComponent(() => import('./components/detail'))

class App extends Component {
  render() {
    return (
      <div>
        <div>
          <Link to="/home">首页</Link>---
          <Link to="/list">列表页</Link>
        </div>
        <div>
          <Switch>
            <Route path="/" component={Home} exact/> 
            <Route path="/home" component={Home}/>
            <AuthRouteGuard path="/list" component={List}/>
            <Route path="/detail/:id" component={Detail}/>
            <Route component={NotFound}/>
          </Switch>
        </div>
      </div>
    );
  }

}

export default App
