/*
 * @Date: 2024-04-26 00:59:09
 * @LastEditors: shayloyuki shayluo123@outlook.com
 * @LastEditTime: 2024-04-26 08:18:51
 * @FilePath: \2.todolist案例\src\store\reducers\todo.reducer.js
 */
/* 
 * 接收到指令后对数据进行相应处理
 */

import {handleActions as createReducer} from 'redux-actions'
import {load_todo_success, add_todo_success} from '../actions/todo.action'

const initialState = {
  todos: []
}

const todoReducer = createReducer({
  [load_todo_success]: (state, action) => ({
    todos: action.payload
  }),
  [add_todo_success]: (state, action) => ({
    todos: [...state.todos, action.payload]
  })
}, initialState)

export default todoReducer