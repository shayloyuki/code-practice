/*
 * @Date: 2024-04-25 23:57:41
 * @LastEditors: shayloyuki shayluo123@outlook.com
 * @LastEditTime: 2024-04-26 08:30:17
 * @FilePath: \2.todolist案例\src\components\Header.js
 */
import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as todoActions from '../store/actions/todo.action'

class Header extends Component {

  addTodo = (ev) => {
    if (ev.keyCode !== 13) return
    // 回车
    // 01 获取当前输入框的内容
    const taskName = ev.target.value
    if (!taskName.trim().length) {
      alert('请输入任务名称')
    } else {
      // 02 触发新增任务的指令
      this.props.add_todo(taskName)
      // 03 清空输入框
      ev.target.value = ''
    }
    
  }
  render() {
    console.log(this.props, 'header');
    return (
      <header className="header">
				<h1>todos</h1>
				<input onKeyUp={this.addTodo} className="new-todo" placeholder="还有什么任务没有完成?" autoFocus />
			</header>
    );
  }
}

const mapStateToProps = (state) => ({
  todos: state.todoReducer.todos
})

const mapDispatchToProps = (dispatch) => ({
  ...bindActionCreators(todoActions, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(Header)