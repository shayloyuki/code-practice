/*
 * @Date: 2024-04-26 01:05:27
 * @LastEditors: shayloyuki shayluo123@outlook.com
 * @LastEditTime: 2024-04-26 01:42:34
 * @FilePath: \2.todolist案例\src\store\saga\todo.saga.js
 */
/* 
 01 完成异步操作
 02 重新发送新的指令
*/

import { takeEvery, put } from "redux-saga/effects";
import axios from "axios";

// 实现 load_todo_data 获取数据同时传递新指令
function* load_todo_data() {
  const todos = yield axios.get('http://localhost:3005/api/todos').then(res => res.data)
  yield put({type: 'load_todo_success', payload: todos})
}

export default function* todoSaga() {
  yield takeEvery('load_todo', load_todo_data)
}