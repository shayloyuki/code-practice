/*
 * @Date: 2024-04-25 23:58:00
 * @LastEditors: shayloyuki shayluo123@outlook.com
 * @LastEditTime: 2024-04-26 22:36:36
 * @FilePath: \2.todolist案例\src\components\Footer.js
 */
import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as todoActions from '../store/actions/todo.action'

class Footer extends Component {

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
						<span>All</span>
					</li>
					<li>
						<span>Active</span>
					</li>
					<li>
						<span>Completed</span>
					</li>
				</ul>
				<button className="clear-completed">Clear completed</button>
			</footer>
    );
  }

}

// 1. 获取 store 当中数据
const mapStateToProps = (state) => ({
	todos: state.todoReducer.todos
})

// 2. 处理 dispatch 函数
const mapDispatchToProps = (dispatch) => ({
	...bindActionCreators(todoActions, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(Footer)