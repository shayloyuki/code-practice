/*
 * @Date: 2024-04-25 23:57:54
 * @LastEditors: shayloyuki shayluo123@outlook.com
 * @LastEditTime: 2024-04-26 01:43:37
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

  render() {
		console.log(this.props);
    return (
			<section className="main">
				<input className="toggle-all" type="checkbox"/>
				<ul className="todo-list">
					{this.props.todos.map(item => (
						<li key={item.id}>
							<div className="view">
								<input className="toggle" type="checkbox" defaultChecked />
								<label>{item.taskName}</label>
								<button className="destroy"></button>
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
	todos: state.todoReducer.todos
})

// 2. 处理 dispatch 函数
const mapDispatchToProps = (dispatch) => ({
	...bindActionCreators(todoActions, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(Main)