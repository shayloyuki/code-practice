/*
 * @Date: 2024-05-05 08:45:08
 * @LastEditors: shayloyuki shayluo123@outlook.com
 * @LastEditTime: 2024-05-05 14:16:26
 * @FilePath: \todolist\src\components\Header.js
 */
import React, {Component} from "react";
import {connect} from 'react-redux'
import { bindActionCreators } from "redux";
import * as todoActions from '../store/actions/todo.action'

class Header extends Component {
  addTodo = (ev) => {
    // 回车实现新增任务
    if (ev.keyCode !== 13) return
    const taskName = ev.target.value
    if (!taskName.trim().length) {
      window.alert('请输入任务名称')
    } else {
      this.props.add_todo(taskName)
      // 清空输入框
      ev.target.value = ''
    }
  }

  render() {
    // console.log(this.props, 'Header');
    return (
			<header className="header">
				<h1>todos</h1>
				<input className="new-todo" placeholder="还有什么任务没有完成?" autoFocus onKeyUp={this.addTodo}/>
			</header>
    )
  }
}

const mapStateToProps = (state) => ({
  todos: state.todoReducer.todos
})

const mapDispatchToProps = (dispatch) => ({
  ...bindActionCreators(todoActions, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(Header)