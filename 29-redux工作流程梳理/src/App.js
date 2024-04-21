/*
 * @Date: 2024-04-05 13:23:34
 * @LastEditors: shayloyuki shayluo123@outlook.com
 * @LastEditTime: 2024-04-22 03:09:02
 * @FilePath: \29-redux工作流程梳理\src\App.js
 */
/* 
 * 1 创建 store 保存数据，关联 reducer
 * 2 利用 Provider 将 store 向后传递
 * 3 在具体的组件中使用 connect 方法获取 store 里保存的数据，通过组件的 props 访问
 * 4 拿到数据后就可在界面上渲染
 */

import React, { Component } from "react";
import {connect} from 'react-redux'

class App extends Component {

  constructor() {
    super()
    this.myRef = React.createRef()
  }

  handler = () => {
    // 获取 input 输入框内容
    const content = this.myRef.current.value
    // 调用 dispatch 方法将输入框中的内容传给 action，在 reducer 中处理
    this.props.dispatch({type: 'addContent', content})
    // 重置输入框内容
    this.myRef.current.value = ''
  }

  render() {
    // console.log(this.props);
    return (
      <div>
        <input type="text" placeholder="请输入标题" ref={this.myRef}/>
        <button onClick={this.handler}>新增</button>
        <ul>
          {this.props.content.map((item, index) => <li key={index}>{item}</li>)}
        </ul>
      </div>
    );
  }

}

// 从 store 中获取当前组件需要使用的数据
const mapStateToProps = (state) => ({
  content: state.content
})

export default connect(mapStateToProps)(App);
