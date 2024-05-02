/*
 * @Date: 2024-05-01 15:28:32
 * @LastEditors: shayloyuki shayluo123@outlook.com
 * @LastEditTime: 2024-05-02 15:36:09
 * @FilePath: \3.React Hooks\src\components\detail.js
 */
import React, {Component} from "react";
import {createHashHistory} from 'history'
import Test from './test'

class Detail extends Component {
  render() {
    return (
      <div>
        <p>{this.props.match.params.id}</p>
        <button onClick={() => createHashHistory().push('/home')}>点击跳转首页</button>
        <Test />
      </div>
    )
  }
}

export default Detail