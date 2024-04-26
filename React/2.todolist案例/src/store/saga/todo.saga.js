/*
 * @Date: 2024-04-26 01:05:27
 * @LastEditors: shayloyuki shayluo123@outlook.com
 * @LastEditTime: 2024-04-26 08:32:11
 * @FilePath: \2.todolist案例\src\store\saga\todo.saga.js
 */
/* 
 01 完成异步操作
 02 重新发送新的指令
*/

import { takeEvery, put } from "redux-saga/effects";
import {load_todo, load_todo_success, add_todo, add_todo_success} from '../actions/todo.action'
import axios from "axios";

// 实现 load_todo_data 获取数据同时传递新指令
function* load_todo_data() {
  const todoData = yield axios.get('http://localhost:3005/api/todos').then(res => res.data)
  yield put(load_todo_success(todoData))
}

// 实现 add_todo_data 方法
function* add_todo_data(action) {
  // 1 完成异步操作
  const taskInfo = yield axios.post('http://localhost:3005/api/todos', {taskName: action.payload}).then(res => res.data)
  // console.log({taskInfo});
  // 2 重新发送指令
  yield put(add_todo_success(taskInfo.task))
}

export default function* todoSaga() {
  yield takeEvery(load_todo, load_todo_data)
  yield takeEvery(add_todo, add_todo_data)
}