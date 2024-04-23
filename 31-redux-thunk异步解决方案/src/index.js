/*
 * @Date: 2024-04-05 13:23:34
 * @LastEditors: shayloyuki shayluo123@outlook.com
 * @LastEditTime: 2024-04-23 09:53:59
 * @FilePath: \31-redux-thunk异步解决方案\src\index.js
 */

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import totalReducer from './store/Reducers'
// 低版本的 redux-thunk 采取 `export default thunk` 导出
// import thunk from 'redux-thunk' 
// 高版本（当前版本）的 redux-thunk 采取 `export {thunk}` 导出
import {thunk} from 'redux-thunk'
// var {thunk} = require('redux-thunk') // 另一种导出方式，要写在导入后

const store = createStore(totalReducer, applyMiddleware(thunk))
// console.log(store.getState());

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}><App /></Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

