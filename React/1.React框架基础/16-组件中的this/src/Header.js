/*
 * @Date: 2024-04-05 21:59:27
 * @LastEditors: shayloyuki shayluo123@outlook.com
 * @LastEditTime: 2024-04-06 14:30:39
 * @FilePath: \16-组件中的this\src\Header.js
 */
/* 
 * 组件中的 this 指向：
 *   01 箭头函数中（推荐）：指向组件
 *   02 function 函数中：指向 undefined
 *      解决办法：
 *      - 绑定事件时使用箭头函数
 *      - 绑定事件时使用 bind 改变 this 指向
 */

import React, {Component} from 'react'

class Header extends Component{
  state = {
    name: 'Alice',
    age: 30,
    count: 0
  }

  // handler = () => {
  //   // this 指向 Header，正确
  //   console.log(this);
  // }

  // handler = function() {
  //   // this 指向 undefined，错误
  //   console.log(this);
  // }

    handler2 = function() {
    // this 指向 Header，正确
    console.log(this);
  }

  render() {
    return (
      <>
        <div>
          <span>{this.state.name}</span>
          <span>{this.state.age}</span>
        </div>
        <hr/>
        <span>{this.state.count}</span>
        {/* <button onClick={this.handler}>点击</button> */}
        {/* <button onClick={() => {this.handler2()}}>点击</button> */}
        <button onClick={this.handler2.bind(this)}>点击</button>
      </>
    )
  }
}

export default Header