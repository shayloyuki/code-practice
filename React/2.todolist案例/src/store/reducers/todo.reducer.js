/*
 * @Date: 2024-04-26 00:59:09
 * @LastEditors: shayloyuki shayluo123@outlook.com
 * @LastEditTime: 2024-05-01 13:00:07
 * @FilePath: \2.todolist案例\src\store\reducers\todo.reducer.js
 */
/* 
 * 接收到指令后对数据进行相应处理
 */
import {handleActions as createReducer} from 'redux-actions'
import {
  load_todo_success,
  add_todo_success,
  remove_todo_success,
  modify_todo_success,
  modify_todo_filter,
  clear_todo_completed_success,
  modify_todo_edit_success,
  modify_todo_name_success
} from '../actions/todo.action'
import {fromJS, getIn, setIn, mergeDeep, removeIn, updateIn} from 'immutable'

// const initialState = {
//   todos: [],
//   filter: 'all'
// }

// fromJS() 内部包裹不可变数据对象
const initialState = fromJS({
  todos: [],
  filter: 'all'
})

// 01 展示任务列表
// const load_todo_action = (state, action) => ({
//   ...state,
//   todos: action.payload
// })

const load_todo_action = (state, action) => {
  // setIn() 的三个参数：
  //  1 第一个参数：表示当前想要操作的数据
  //  2 第二个参数：表示当前想要操作的是这个数据中的哪一个属性
  //  3 第三个参数：表示将这个属性的值设置为什么
  return setIn(state, ['todos'], action.payload)
}

// 02 新增任务
// const add_todo_action = (state, action) => ({
//   ...state,
//   todos: [...state.todos, action.payload]
// })

const add_todo_action = (state, action) => {
  // mergeDeep 合并数据
  // 第二个参数：要合并的属性及被合并的值，此处 action.payload 为对象
  return mergeDeep(state, {todos: [action.payload]})
}

// 03 删除任务
// const remove_todo_action = (state, action) => {
//   // 需要获取被删除项的 id
//   const id = action.payload
//   let todos = JSON.parse(JSON.stringify(state.todos))
//   const index = todos.findIndex(todo => todo.id === id)
//   todos.splice(index, 1)
//   return {...state, todos}
// }

const remove_todo_action = (state, action) => {
  const index = getIn(state, ['todos']).findIndex(todo => todo.id === action.payload)
  return removeIn(state, ['todos', index])
}

// 04 切换任务状态
// const modify_todo_action = (state, action) => {
//   const {id, isCompleted} = action.payload
//   let todos = JSON.parse(JSON.stringify(state.todos))
//   const index = todos.findIndex(todo => todo.id === id)
//   todos[index].isCompleted = isCompleted
//   return {...state, todos}
// }

const modify_todo_action = (state, action) => {
  const index = getIn(state, ['todos']).findIndex(todo => todo.id === action.payload.id)
  // updateIn 更新属性中某个序列的值
  // 第二个参数：要更新的属性
  // 第三个参数：要更新成的目标值
  return updateIn(state, ['todos', index], () => action.payload)
}

// 05 筛选不同状态任务
// const modify_todo_filter_action =  (state, action) => ({
//   ...state,
//   filter: action.payload
// })

const modify_todo_filter_action =  (state, action) => {
  return setIn(state, ['filter'], action.payload)
}

// 06 清除已完成任务
// const clear_todo_completed_action = (state, action) => {
//   let todos = JSON.parse(JSON.stringify(state.todos))
//   todos = todos.filter(todo => !todo.isCompleted)
//   return {
//     ...state,
//     todos
//   }
// }

const clear_todo_completed_action = (state, action) => {
  return setIn(state, ['todos'], getIn(state, ['todos']).filter(todo => !todo.isCompleted))
}

// 07 切换任务编辑状态
// const modify_todo_edit_action = (state, action) => {
//   const {id, isEditing} = action.payload
//   let todos = JSON.parse(JSON.stringify(state.todos))
//   const index = todos.findIndex(todo => todo.id === id)
//   todos[index].isEditing = isEditing
//   return {
//     ...state,
//     todos
//   }
// }

const modify_todo_edit_action = (state, action) => {
  const index = getIn(state, ['todos']).findIndex(todo => todo.id === action.payload.id)
  return updateIn(state, ['todos', index], () => action.payload)
}

// 08 修改任务名称
// const modify_todo_name_action = (state, action) => {
//   const {id, taskName} = action.payload
//   let todos = JSON.parse(JSON.stringify(state.todos))
//   const index = todos.findIndex(todo => todo.id === id)
//   todos[index].taskName = taskName
//   return {
//     ...state,
//     todos
//   }
// }

const modify_todo_name_action = (state, action) => {
  const index = getIn(state, ['todos']).findIndex(todo => todo.id === action.payload.id)
  return updateIn(state, ['todos', index], () => action.payload)
}

export default createReducer({
  // 展示任务列表
  [load_todo_success]: load_todo_action,
  // 新增任务
  [add_todo_success]: add_todo_action,
  // 删除任务
  [remove_todo_success]: remove_todo_action,
  // 切换任务完成状态
  [modify_todo_success]: modify_todo_action,
  // 筛选不同状态任务
  [modify_todo_filter]: modify_todo_filter_action,
  // 清除已完成任务
  [clear_todo_completed_success]: clear_todo_completed_action,
  // 切换任务编辑状态
  [modify_todo_edit_success]: modify_todo_edit_action,
  // 修改任务名称
  [modify_todo_name_success]: modify_todo_name_action
}, initialState)