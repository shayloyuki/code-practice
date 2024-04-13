/*
 * @Date: 2024-04-05 13:23:34
 * @LastEditors: shayloyuki shayluo123@outlook.com
 * @LastEditTime: 2024-04-13 15:37:58
 * @FilePath: \24-组件生命周期\src\App.js
 */
/* 
 * 更新组件
 *  01 当组件更新之后，组件就需要被重新渲染
 *  02 外部传入的 props 以及自身管理的状态
 * 
 *  常用的方法
 *   shouldComponentUpdate(nextProps, nextState)          组件是否更新
 *      默认返回 true
 *      如果此方法返回 false，那么后续的方法就不会再执行
 *   render                                               解析 JSX，渲染 DOM 呈现页面
 *   componentDidUpdate                                   组件更新完成之后执行
 */

import React, { Component } from "react";
import About from "./About";

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
    this.setState({
      count: this.state.count + 1
    })
  }
 
  render() {
    // 挂载、更新时，render 都会执行
    console.log('render 执行了');
    return (
      <div>
        {this.state.count}
        <button onClick={this.handler}>点击</button>
        <About/>
      </div>
    );
  }

  componentDidMount() {
    console.log('挂载完成了');
    // setInterval(() => {
    //   this.setState({
    //     count: this.state.count + 1
    //   })
    // }, 1000)
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('shouldComponentUpdate 执行了');
    return true
  }
}

export default App;
