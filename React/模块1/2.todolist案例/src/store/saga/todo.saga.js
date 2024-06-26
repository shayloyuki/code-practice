/*
 * @Date: 2024-04-26 01:05:27
 * @LastEditors: shayloyuki shayluo123@outlook.com
 * @LastEditTime: 2024-04-27 02:53:56
 * @FilePath: \2.todolist案例\src\store\saga\todo.saga.js
 */
/* 
 01 完成异步操作
 02 重新发送新的指令
*/

import { takeEvery, put } from "redux-saga/effects";
import {
  load_todo,
  load_todo_success,
  add_todo,
  add_todo_success,
  remove_todo,
  remove_todo_success,
  modify_todo,
  modify_todo_success,
  clear_todo_completed,
  clear_todo_completed_success,
  modify_todo_edit,
  modify_todo_edit_success,
  modify_todo_name,
  modify_todo_name_success
} from '../actions/todo.action'
import axios from "axios";

// 实现 load_todo_data 获取数据同时传递新指令
function* load_todo_data() {
  const todoData = yield axios.get('/api/todos')
  yield put(load_todo_success(todoData))
}

// 实现 add_todo_data 方法
function* add_todo_data(action) {
  // 1 完成异步操作
  const taskInfo = yield axios.post('/api/todos', {taskName: action.payload})
  // console.log({taskInfo});
  // 2 重新发送指令
  yield put(add_todo_success(taskInfo.task))
}

// 实现 remove_todo_data 方法
function* remove_todo_data(action) {
  // 此时将 id 利用相应接口传递给后端执行具体的删除操作
  const removeData = yield axios.delete('/api/todos', {
    params: {
      id: action.payload
    }
  })
  // 重新发送指令
  yield put(remove_todo_success(removeData.tasks.id))
}

// 实现 modify_todo_data 方法
function* modify_todo_data(action) {
  const params = action.payload
  const modifyData = yield axios.put('/api/todos/isCompleted', params)
  // 重新发送指令
  yield put(modify_todo_success(modifyData.task))
}

// 实现 clear_todo_data 方法
function* clear_todo_data() {
  yield axios.delete('/api/todos/clearCompleted')
  // 重新发送指令
  yield put(clear_todo_completed_success())
}

// 实现 modify_todo_edit_data 方法
function* modify_todo_edit_data(action) {
  const ret = yield axios.put('/api/todos/isEditing', action.payload)
  // 重新发送指令
  yield put(modify_todo_edit_success(ret.task))
}

// 实现 modify_todo_name_data 方法
function* modify_todo_name_data(action) {
  const ret = yield axios.put('/api/todos', action.payload)
    // 重新发送指令
    yield put(modify_todo_name_success(ret.task))
}

export default function* todoSaga() {
  yield takeEvery(load_todo, load_todo_data)
  yield takeEvery(add_todo, add_todo_data)
  yield takeEvery(remove_todo, remove_todo_data)
  yield takeEvery(modify_todo, modify_todo_data)
  yield takeEvery(clear_todo_completed, clear_todo_data)
  yield takeEvery(modify_todo_edit, modify_todo_edit_data)
  yield takeEvery(modify_todo_name, modify_todo_name_data)
}