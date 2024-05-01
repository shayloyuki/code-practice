/*
 * @Date: 2024-05-01 15:28:32
 * @LastEditors: shayloyuki shayluo123@outlook.com
 * @LastEditTime: 2024-05-01 23:44:35
 * @FilePath: \3.React Hooks\src\components\home.js
 */
import React, {Component} from "react";
import qs from 'qs'
import { Redirect } from "react-router-dom";

class Home extends Component {
  render() {
    let isLogin = false

    if (!isLogin) {
      return <Redirect to="/list"/>
    }

    return (
      <div>Home 首页内容 {qs.parse(this.props.location.search, {ignoreQueryPrefix: true}).title}</div>
    )
  }
}

export default Home