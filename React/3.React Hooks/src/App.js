/*
 * @Date: 2024-04-25 23:52:08
 * @LastEditors: shayloyuki shayluo123@outlook.com
 * @LastEditTime: 2024-05-02 15:11:39
 * @FilePath: \3.React Hooks\src\App.js
 */
import React, { Component } from "react";
import { Link, Route, Switch, Redirect } from "react-router-dom";
import Home from './components/home'
import List from './components/list'
import NotFound from './components/notFound'
import Detail from './components/detail'
import auth from './auth'
import AuthRouteGuard from "./guard";

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
            {/* 守卫 list 路由 */}
            {/* <Route path="/list" component={List}/> */}
            {/* <Route path="/list" render={(props) => {
              if (auth.isAuthorized()) {
                // 进入路由
                console.log('进入list路由');
                return <List {...props}/>
              } else {
                // 重定向
                console.log('重定向到home');
                return <Redirect to="/home."/>
              }
            }}/> */}
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
