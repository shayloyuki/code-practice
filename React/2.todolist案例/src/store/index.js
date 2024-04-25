/*
 * @Date: 2024-04-26 01:13:21
 * @LastEditors: shayloyuki shayluo123@outlook.com
 * @LastEditTime: 2024-04-26 01:39:48
 * @FilePath: \2.todolist案例\src\store\index.js
 */
/* 
 * 当前模块完成 store 的创建 + 中间件注册
*/

import {createStore, applyMiddleware} from 'redux'
import rootReducer from './reducers/root.reducer'
import createSagaMiddleware from 'redux-saga'
import rootSaga from './saga/root.saga'

const sagaMiddleware = createSagaMiddleware()
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware))
sagaMiddleware.run(rootSaga)

export default store