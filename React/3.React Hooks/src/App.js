/*
 * @Date: 2024-04-25 23:52:08
 * @LastEditors: shayloyuki shayluo123@outlook.com
 * @LastEditTime: 2024-05-01 16:14:25
 * @FilePath: \3.React Hooks\src\App.js
 */
import React, { Component } from "react";
import { Link, Route, Switch } from "react-router-dom";
import Home from './components/home'
import List from './components/list'
import NotFound from './components/notFound'

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
            <Route path="/list" component={List} exact/>
            {/* <Route path="/list" component={List}/> */}
            <Route component={NotFound}/>
          </Switch>
        </div>
      </div>
    );
  }

}

export default App
