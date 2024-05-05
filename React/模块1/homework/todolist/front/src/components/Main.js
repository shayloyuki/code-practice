/*
 * @Date: 2024-05-05 08:45:14
 * @LastEditors: shayloyuki shayluo123@outlook.com
 * @LastEditTime: 2024-05-05 20:44:09
 * @FilePath: \todolist\front\src\components\Main.js
 */
import React, {Component} from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as todoActions from '../store/actions/todo.action'
import { getIn } from "immutable";

class Main extends Component {
	componentDidMount() {
		this.props.load_todo()
	}

	remTodo = (id) => {
		if (window.confirm('是否确定删除该条任务？')) {
			this.props.rem_todo(id)
		}
	}

	modifyTodoName = (e, id) => {
		const taskName = e.target.value
		// 修改编辑状态
		this.props.modify_todo_edit({
			id,
			isEditing: false
		})
		// 修改任务名称
		this.props.modify_todo_name({
			id,
			taskName
		})
	}

  render() {
    return (
			<section className="main">
				<input className="toggle-all" type="checkbox" />
				<ul className="todo-list">
					{
						this.props.todos.map(todo => {
							let classArr = []
							if (todo.isCompleted) classArr.push('completed')
							if (todo.isEditing) classArr.push('editing')
							return (
								<li key={todo.id} className={classArr.join(',')}>
									<div className="view">
										<input className="toggle" type="checkbox" checked={todo.isCompleted} onChange={(e) => this.props.modify_todo({
											id: todo.id,
											isCompleted: e.target.checked
										})}/>
										<label onDoubleClick={() => this.props.modify_todo_edit({
											id: todo.id,
											isEditing: true
										})}>{todo.taskName}</label>
										<button className="destroy" onClick={() => this.remTodo(todo.id)}></button>
									</div>
									<input className="edit" defaultValue={todo.taskName} onBlur={(e) => this.modifyTodoName(e, todo.id)}/>
								</li>
							)
						})
					}
				</ul>
			</section>
    )
  }
}

// 根据不同的 filter 返回 todos
const filterTodos = (todos, filter) => {
	switch (filter) {
		case 'active':
			return todos.filter(todo => !todo.isCompleted);
		case 'completed':
			return todos.filter(todo => todo.isCompleted);
		default:
			return todos
	}
}

const mapStateToProps = (state) => ({
	todos: filterTodos(getIn(state.todoReducer, ['todos']), getIn(state.todoReducer, ['filter']))
})

const mapDispatchToProps = (dispatch) => ({
	...bindActionCreators(todoActions, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(Main)