/*
 * @Date: 2024-04-26 00:59:09
 * @LastEditors: shayloyuki shayluo123@outlook.com
 * @LastEditTime: 2024-04-26 22:06:18
 * @FilePath: \2.todolist案例\src\store\reducers\todo.reducer.js
 */
/* 
 * 接收到指令后对数据进行相应处理
 */

import {handleActions as createReducer} from 'redux-actions'
import {load_todo_success, add_todo_success, remove_todo_success, modify_todo_success} from '../actions/todo.action'

const initialState = {
  todos: []
}

const todoReducer = createReducer({
  [load_todo_success]: (state, action) => ({
    todos: action.payload
  }),
  [add_todo_success]: (state, action) => ({
    todos: [...state.todos, action.payload]
  }),
  [remove_todo_success]: (state, action) => {
    // 需要获取被删除项的 id
    const id = action.payload
    let todos = JSON.parse(JSON.stringify(state.todos))
    const index = todos.findIndex(todo => todo.id === id)
    todos.splice(index, 1)
    return {todos}
  },
  [modify_todo_success]: (state, action) => {
    const {id, isCompleted} = action.payload
    let todos = JSON.parse(JSON.stringify(state.todos))
    const index = todos.findIndex(todo => todo.id === id)
    todos[index].isCompleted = isCompleted
    return {todos}
  }
}, initialState)

export default todoReducer