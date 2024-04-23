/*
 * @Date: 2024-04-05 13:23:34
 * @LastEditors: shayloyuki shayluo123@outlook.com
 * @LastEditTime: 2024-04-23 11:59:40
 * @FilePath: \32-redux-saga拆分与合并\src\index.js
 */

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import totalReducer from './store/Reducers'

const store = createStore(totalReducer)

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}><App /></Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

