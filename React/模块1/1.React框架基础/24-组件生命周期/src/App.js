/*
 * @Date: 2024-04-05 13:23:34
 * @LastEditors: shayloyuki shayluo123@outlook.com
 * @LastEditTime: 2024-04-13 16:10:38
 * @FilePath: \24-组件生命周期\src\App.js
 */
/* 
 *  卸载组件
 *   将组件从 DOM 上删除
 * 
 *  常用方法
 *   componentWillUnmount
 */

import React, { Component } from "react";
import About from "./About";

class App extends Component {

  constructor() {
    super()
    // console.log('constructor 执行了');
    this.state = {
      count: 0,
      isShow: true
    }
    this.handler = this.handler.bind(this)
  }

  handler() {
    this.setState({
      count: this.state.count + 1
    })
  }
 
  render() {
    // 挂载、更新时，render 都会执行
    // console.log('render 执行了');
    return (
      <div>
        {this.state.count}
        <button onClick={this.handler}>点击</button>
        <button onClick={() => {this.setState({isShow: !this.state.isShow})}}>切换</button>
        {this.state.isShow && <About/>}
      </div>
    );
  }

  componentDidMount() {
    // console.log('挂载完成了');
    // setInterval(() => {
    //   this.setState({
    //     count: this.state.count + 1
    //   })
    // }, 1000)
  }

  shouldComponentUpdate(nextProps, nextState) {
    // console.log('shouldComponentUpdate 执行了');
    return true
  }
}

export default App;
