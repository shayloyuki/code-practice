/*
 * @Date: 2024-05-01 15:28:32
 * @LastEditors: shayloyuki shayluo123@outlook.com
 * @LastEditTime: 2024-05-02 00:26:00
 * @FilePath: \3.React Hooks\src\components\list.js
 */
import React, {Component} from "react";
import { Link, Route } from "react-router-dom";
import Inner from '../components/inner'
import Outer from '../components/outer'
import {createHashHistory} from 'history'
import auth from '../auth'

class List extends Component {
  logout = () => {
    // 执行退出
    auth.logout()
    // 跳转到home
    createHashHistory().push('/home')
  }

  render() {
    return (
      <div>
        <div>
          <p><Link to="/detail/1">列表文章1</Link></p>
          <p><Link to="/detail/2">列表文章2</Link></p>
          <p><Link to="/home?title=来自于list">返回首页</Link></p>
        </div>
        <div>
          <Link to={`${this.props.match.url}/inner`}>国内新闻</Link>---
          <Link to={`${this.props.match.url}/outer`}>国际新闻</Link>
        </div>
        <div>
          <button onClick={this.logout}>退出登录</button>
        </div>
        <Route path={`${this.props.match.path}/inner`} component={Inner}/>
        <Route path={`${this.props.match.path}/outer`} component={Outer}/>
      </div>
    )
  }
}

export default List