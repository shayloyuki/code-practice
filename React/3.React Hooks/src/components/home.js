/*
 * @Date: 2024-05-01 15:28:32
 * @LastEditors: shayloyuki shayluo123@outlook.com
 * @LastEditTime: 2024-05-01 22:35:11
 * @FilePath: \3.React Hooks\src\components\home.js
 */
import React, {Component} from "react";
import qs from 'qs'

class Home extends Component {
  render() {
    return (
      <div>Home 首页内容 {qs.parse(this.props.location.search, {ignoreQueryPrefix: true}).title}</div>
    )
  }
}

export default Home