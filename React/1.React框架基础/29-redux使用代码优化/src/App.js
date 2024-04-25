/*
 * @Date: 2024-04-05 13:23:34
 * @LastEditors: shayloyuki shayluo123@outlook.com
 * @LastEditTime: 2024-04-22 22:18:11
 * @FilePath: \29-redux使用代码优化\src\App.js
 */
/* 
 * 1 合并处理数据所有的 reducer 交给 store 统一管理
 * 2 让 react 自动创建 action 执行函数
 * 3 将 action 类型使用的字符串定义为常量后直接使用，有提示
 */

import React, { Component } from "react";
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as ContentActions from './store/Actions/content.action'

class App extends Component {

  constructor() {
    super()
    this.myRef = React.createRef()
  }

  handler = () => {
    const content = this.myRef.current.value
    this.props.addContent(content)
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
  content: state.ContentReducer.content
})

const mapDispatchToProps = (dispatch) => ({
  ...bindActionCreators(ContentActions, dispatch)
})
export default connect(mapStateToProps, mapDispatchToProps)(App);
