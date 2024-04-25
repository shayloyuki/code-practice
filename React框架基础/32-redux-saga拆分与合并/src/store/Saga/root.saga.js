/*
 * @Date: 2024-04-23 11:23:01
 * @LastEditors: shayloyuki shayluo123@outlook.com
 * @LastEditTime: 2024-04-23 11:24:16
 * @FilePath: \32-redux-saga拆分与合并\src\store\Saga\root.saga.js
 */
import {all} from 'redux-saga/effects'
import personSaga from './person.saga'

export default function* rootSaga() {
  yield all([
    personSaga()
  ])
}