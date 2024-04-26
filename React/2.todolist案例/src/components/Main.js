/*
 * @Date: 2024-04-25 23:57:54
 * @LastEditors: shayloyuki shayluo123@outlook.com
 * @LastEditTime: 2024-04-26 23:04:24
 * @FilePath: \2.todolist案例\src\components\Main.js
 */
import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as todoActions from '../store/actions/todo.action'

class Main extends Component {

	componentDidMount() {
		// 调用具体的指令函数，触发数据获取操作
		this.props.load_todo()
	}

	removeTodo = (id) => {
		if (window.confirm('确定删除当前任务？')) {
			// 触发删除操作的指令（异步 + 新指令）
			this.props.remove_todo(id)
		}
	}

  render() {
		// console.log(this.props, 'main');
    return (
			<section className="main">
				<input className="toggle-all" type="checkbox"/>
				<ul className="todo-list">
					{this.props.todos.map(item => (
						<li key={item.id} className={item.isCompleted ? "completed" : ''}>
							<div className="view">
								<input className="toggle" type="checkbox" defaultChecked={item.isCompleted} onChange={(e) => {this.props.modify_todo({id: item.id, isCompleted: e.target.checked})}} />
								<label>{item.taskName}</label>
								<button className="destroy" onClick={this.removeTodo.bind(null, item.id)}></button>
							</div>
							<input className="edit" defaultValue="Create a TodoMVC template"/>
						</li>
					))}
				</ul>
			</section>
    );
  }

}

// 1. 获取 store 当中数据
const mapStateToProps = (state) => ({
	todos: filterTodos(state.todoReducer.todos, state.todoReducer.filter)
})

// 2. 处理 dispatch 函数
const mapDispatchToProps = (dispatch) => ({
	...bindActionCreators(todoActions, dispatch)
})

// 3. 定义方法依据 filter 筛选出需要展示的数据
const filterTodos = (todos, filter) => {
	switch (filter) {
		case 'active':
			return todos.filter(todo => !todo.isCompleted);
		case 'completed':
			return todos.filter(todo => todo.isCompleted);
		default:
			return todos;
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Main)