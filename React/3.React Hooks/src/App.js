/*
 * @Date: 2024-04-25 23:52:08
 * @LastEditors: shayloyuki shayluo123@outlook.com
 * @LastEditTime: 2024-05-01 15:44:15
 * @FilePath: \3.React Hooks\src\App.js
 */
/* 
 * react-router-dom@5.3.4
 * 
 * HashRouter: 开启路由
 * Link: to 属性指定跳转的链接
 * Route：path component
*/

import React, { Component } from "react";
import { Link, Route } from "react-router-dom";
import Home from './components/home'
import List from './components/list'

class App extends Component {

  render() {
    return (
      <div>
        <div>
          <Link to="/home">首页</Link>---
          <Link to="/list">列表页</Link>
        </div>
        <div>
          <Route path="/home" component={Home}/>
          <Route path="/list" component={List}/>
        </div>
      </div>
    );
  }

}

export default App
