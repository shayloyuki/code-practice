/*
 * @Date: 2024-04-25 23:58:00
 * @LastEditors: shayloyuki shayluo123@outlook.com
 * @LastEditTime: 2024-04-26 23:42:14
 * @FilePath: \2.todolist案例\src\components\Footer.js
 */
import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as todoActions from '../store/actions/todo.action'

class Footer extends Component {
	clearTodo = () => {
		if (window.confirm('是否确定清除已完成任务？')) {
			this.props.clear_todo_completed()
		}
	}

  render() {
		// console.log(this.props, 'footer');
		// 此时可以过滤出未选中的任务，然后统计它们的数据，作为具体的值使用
		let taskLen = this.props.todos.filter(todo => !todo.isCompleted).length
    return (
			<footer className="footer">
				<span className="todo-count">
					<strong>{taskLen}</strong> item left
				</span>
				<ul className="filters">
					<li>
						<span onClick={() => {this.props.modify_todo_filter('all')}}>All</span>
					</li>
					<li>
						<span onClick={() => {this.props.modify_todo_filter('active')}}>Active</span>
					</li>
					<li>
						<span onClick={() => {this.props.modify_todo_filter('completed')}}>Completed</span>
					</li>
				</ul>
				<button className="clear-completed" onClick={this.clearTodo}>Clear completed</button>
			</footer>
    );
  }

}

// 1. 获取 store 当中数据
const mapStateToProps = (state) => ({
	todos: state.todoReducer.todos,
	filter: state.todoReducer.filter
})

// 2. 处理 dispatch 函数
const mapDispatchToProps = (dispatch) => ({
	...bindActionCreators(todoActions, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(Footer)