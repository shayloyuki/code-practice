/*
 * @Date: 2024-05-05 08:45:28
 * @LastEditors: shayloyuki shayluo123@outlook.com
 * @LastEditTime: 2024-05-05 20:49:28
 * @FilePath: \todolist\front\src\components\Footer.js
 */
import React, {Component} from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as todoActions from '../store/actions/todo.action'
import { getIn } from "immutable";

class Footer extends Component {

	clearCompleted = () => {
		if (window.confirm('是否确定删除已完成任务？')) {
			this.props.clear_todo_completed()
		}
	}
	
  render() {
		const remainTask = this.props.todos.filter(todo => !todo.isCompleted)
    return (
			<footer className="footer">
				<span className="todo-count">
					<strong>{remainTask.length}</strong> item left
				</span>
				<ul className="filters">
					<li>
						<span onClick={() => this.props.filter_todo('all')}>All</span>
					</li>
					<li>
						<span onClick={() => this.props.filter_todo('active')}>Active</span>
					</li>
					<li>
						<span onClick={() => this.props.filter_todo('completed')}>Completed</span>
					</li>
				</ul>
				<button className="clear-completed" onClick={this.clearCompleted}>Clear completed</button>
			</footer>
    )
  }
}

const mapStateToProps = (state) => ({
	todos: getIn(state.todoReducer, ['todos'])
})

const mapDispatchToProps = (dispatch) => ({
	...bindActionCreators(todoActions, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(Footer)