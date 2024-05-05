/*
 * @Date: 2024-05-05 09:09:27
 * @LastEditors: shayloyuki shayluo123@outlook.com
 * @LastEditTime: 2024-05-05 17:42:55
 * @FilePath: \todolist\src\store\reducers\todo.reducer.js
 */
import { handleActions as createReducer } from 'redux-actions'
import {
  load_todo_success,
  add_todo_success,
  rem_todo_success,
  modify_todo_success,
  clear_todo_completed_success,
  filter_todo,
  modify_todo_edit_success,
  modify_todo_name_success
} from '../actions/todo.action'

const initialState = {
  todos: [],
  filter: 'all'
}

const todoReducer = createReducer({
  [load_todo_success]: (state, action) => ({
    ...state,
    todos: action.payload
  }),
  [add_todo_success]: (state, action) => ({
    ...state,
    todos: [...state.todos, action.payload]
  }),
  [rem_todo_success]: (state, action) => {
    const id = action.payload
    let todos = JSON.parse(JSON.stringify(state.todos))
    const index = state.todos.findIndex(todo => todo.id === id)
    todos.splice(index, 1)
    return {
      ...state,
      todos
    }
  },
  [modify_todo_success]: (state, action) => {
    const id = action.payload.id
    let todos = JSON.parse(JSON.stringify(state.todos))
    const index = state.todos.findIndex(todo => todo.id === id)
    todos.splice(index, 1, action.payload)
    return {
      ...state,
      todos
    }
  },
  [clear_todo_completed_success]: (state, action) => {
    // 没有返回 action.payload，因此需要手动过滤，显示未完成任务列表
    let todos = JSON.parse(JSON.stringify(state.todos))
    todos = todos.filter(todo => !todo.isCompleted)
    return {
      ...state,
      todos
    }
  },
  [filter_todo]: (state, action) => {
    // 没有经过 axios 发送请求，无需 saga。但也不能直接修改原数据
    return {
      ...state,
      filter: action.payload
    }
  },
  [modify_todo_edit_success]: (state, action) => {
    const {id, isEditing} = action.payload
    let todos = JSON.parse(JSON.stringify(state.todos))
    const index = state.todos.findIndex(todo => todo.id === id)
    todos[index].isEditing = isEditing
    return {
      ...state,
      todos
    }
  },
  [modify_todo_name_success]: (state, action) => {
    const {id, taskName} = action.payload
    let todos = JSON.parse(JSON.stringify(state.todos))
    const index = state.todos.findIndex(todo => todo.id === id)
    todos[index].taskName = taskName
    return {
      ...state,
      todos
    }
  }
}, initialState)

export default todoReducer