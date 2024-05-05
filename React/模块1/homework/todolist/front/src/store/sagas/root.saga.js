/*
 * @Date: 2024-05-05 09:26:42
 * @LastEditors: shayloyuki shayluo123@outlook.com
 * @LastEditTime: 2024-05-05 09:31:38
 * @FilePath: \todolist\src\store\sagas\root.saga.js
 */
import {all} from 'redux-saga/effects'
import todoSaga from './todo.saga'

export default function* rootSaga() {
  yield all([
    todoSaga()
  ])
}