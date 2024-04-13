/*
 * @Date: 2024-04-05 13:23:34
 * @LastEditors: shayloyuki shayluo123@outlook.com
 * @LastEditTime: 2024-04-13 14:49:19
 * @FilePath: \24-组件生命周期\src\App.js
 */
/* 
 * 挂载组件
 *  组件被创建然后插入 DOM 当中
 * 生命周期方法
 *  01 constructor            设置组件的初始配置
 *  02 render                 解析 JSX，在界面上展示
 *  03 componentDidMount      组件挂载完成
 *     发送网络请求
 *     添加定时器
 *     添加事件监听
 *     获取 DOM 元素
 */

import React, { Component } from "react";

class App extends Component {

  constructor() {
    super()
    console.log('constructor 执行了');
    this.state = {
      count: 0
    }
    this.handler = this.handler.bind(this)
  }

  handler() {
    console.log(this);
  }
 
  render() {
    // 挂载、更新时，render 都会执行
    console.log('render 执行了');
    return (
      <div>
        {this.state.count}
        <button onClick={this.handler}>点击</button>
      </div>
    );
  }

  componentDidMount() {
    console.log('挂载完成了');
    setInterval(() => {
      this.setState({
        count: this.state.count + 1
      })
    }, 1000)
  }
}

export default App;
