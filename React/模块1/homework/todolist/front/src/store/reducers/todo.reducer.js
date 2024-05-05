/*
 * @Date: 2024-05-05 09:09:27
 * @LastEditors: shayloyuki shayluo123@outlook.com
 * @LastEditTime: 2024-05-05 20:46:46
 * @FilePath: \todolist\front\src\store\reducers\todo.reducer.js
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
import {fromJS, getIn, setIn, mergeDeep, removeIn, updateIn} from 'immutable'

const initialState = fromJS({
  todos: [],
  filter: 'all'
})

// 加载列表
const load_todo_action = (state, action) => {
  return setIn(state, ['todos'], action.payload)
}

// 添加任务
const add_todo_action = (state, action) => {
  return mergeDeep(state, {todos: [action.payload]})
}

// 删除任务
const rem_todo_action = (state, action) => {
  const index = getIn(state, ['todos']).findIndex(todo => todo.id === action.payload)
  return removeIn(state, ['todos', index])
}

// 修改任务状态：是否完成
const modify_todo_action = (state, action) => {
  const index = getIn(state, ['todos']).findIndex(todo => todo.id === action.payload.id)
  return updateIn(state, ['todos', index], () => action.payload)
}

// 删除已完成任务：没有返回 action.payload，因此需要手动过滤，显示未完成任务列表
const clear_todo_completed_action = (state, action) => {
  return setIn(state, ['todos'], getIn(state, ['todos']).filter(todo => !todo.isCompleted))
}

// 筛选任务：没有经过 axios 发送请求，无需 saga。但也不能直接修改原数据
const filter_todo_action = (state, action) => {
  return setIn(state, ['filter'], action.payload)
}

// 修改编辑状态
const modify_todo_edit_action = (state, action) => {
  const index = getIn(state, ['todos']).findIndex(todo => todo.id === action.payload.id)
  return updateIn(state, ['todos', index], () => action.payload)
}

// 修改任务名称
const modify_todo_name_action = (state, action) => {
  const index = getIn(state, ['todos']).findIndex(todo => todo.id === action.payload.id)
  return updateIn(state, ['todos', index], () => action.payload)
}

const todoReducer = createReducer({
  [load_todo_success]: load_todo_action,
  [add_todo_success]: add_todo_action,
  [rem_todo_success]: rem_todo_action,
  [modify_todo_success]: modify_todo_action,
  [clear_todo_completed_success]: clear_todo_completed_action,
  [filter_todo]: filter_todo_action,
  [modify_todo_edit_success]: modify_todo_edit_action,
  [modify_todo_name_success]: modify_todo_name_action
}, initialState)

export default todoReducer